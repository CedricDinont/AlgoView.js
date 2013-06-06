define("AlgoViewApp",
["Program", "ProgramRunner", "JSUtils", "ExternalController", "MainFrame"],
function(Program, ProgramRunner, JSUtils, ExternalController, MainFrame) {


var AlgoViewApp = function() {
	this.program = new Program();
	
	this.programRunner = new ProgramRunner(this.program, JSUtils.getUrlVar("memorySize"));
	
	this.mainFrame = new MainFrame(this); 
	this.externalController = new ExternalController(this);
	this.remoteWindows = new Array();

	window.addEventListener('message', AlgoViewApp.prototype.onMessage.bind(this), false);

	try {
		parent.focus();
		window.parent.onAlgoViewInit();
	} catch (e) {
		// On ne doit pas avoir de parent
	}
}

AlgoViewApp.prototype.loadText = function(text) {
	this.mainFrame.editors[0].clearBreakpoints();
	this.mainFrame.editors[0].getSession().getDocument().setValue(text);
	this.mainFrame.setProgramTextChanged(false);
	
	//this.programRunner.program.text = text;
}

AlgoViewApp.prototype.loadProgramTemplate = function() {
	var template = "/**\n\
 * Structures\n\
 **/\n\
\n\
\n\
/**\n\
 * Subprograms\n\
 **/\n\
\n\
\n\
/**\n\
 * Entry point\n\
 **/\n\
PROCEDURE main()\n\
VAR\n\
\n\
BEGIN\n\
	PRINTLN(\"Hello, world!\")\n\
END\n\
";

	this.loadText(template);
	this.setBreakpoint(17);
}

AlgoViewApp.prototype.compileProgram = function() {
	this.programRunner.program.text = this.mainFrame.editors[0].editor.getSession().getDocument().getValue();
	this.programRunner.compile();
}

AlgoViewApp.prototype.startProgram = function() {
	this.programRunner.start();
}

AlgoViewApp.prototype.stopProgram = function(doReset) {
	this.programRunner.stopProgram(doReset);
}

AlgoViewApp.prototype.continueProgram = function() {
	this.programRunner.continueToNextBreakpoint();
}

AlgoViewApp.prototype.stepOverProgram = function() {
	this.programRunner.stepOverFunctions();
}

AlgoViewApp.prototype.stepInProgram = function() {
	this.programRunner.stepInFunctions();
}

AlgoViewApp.prototype.stepOutProgram = function() {
	this.programRunner.stepOutCurrentFunction();
}

AlgoViewApp.prototype.setBreakpoint = function(line) {
	this.mainFrame.editors[0].setBreakpoint(line);
}

AlgoViewApp.prototype.setStopAfterInstructionExecution = function(value) {
	this.programRunner.setStopAfterInstructionExecution(value);
}

AlgoViewApp.prototype.setStartPaused = function(value) {
	this.programRunner.setStartPaused(value);
}

AlgoViewApp.prototype.setInfiniteLoopDetectionThreshold = function(value) {
	this.programRunner.setInfiniteLoopDetectionThreshold(value);
}

AlgoViewApp.prototype.setLayout = function(layoutName) {
	this.mainFrame.setLayout(layoutName);
}

AlgoViewApp.prototype.setShowQuickReference = function(value) {
	this.mainFrame.setShowQuickReference(value);
}

AlgoViewApp.prototype.setSouthPanelHeight = function(height) {
	this.mainFrame.setSouthPanelHeight(height);
}

AlgoViewApp.prototype.setMemoryUnitPosition = function(memoryAddress, x, y) {
	var memoryGraphicalView = this.mainFrame.memoryGraphicalView;
	if (memoryGraphicalView == undefined) {
		console.log("Cannot set memory unit position because the memory graphical view has not been instanciated.");
	}
	memoryGraphicalView.setPosition(this.programRunner.memory, memoryAddress, x, y);
}

AlgoViewApp.prototype.executeCommand = function(message, remoteWindow) {
	switch (message.command) {
		case "algoview-register":
			this.remoteWindows.push(remoteWindow);
			this.postMessage(remoteWindow, {command: "algoview-registered"});
			break;
		case "algoview-hide-toolbar":
			this.hideToolBar();
		    break;
		case "algoview-hide-heap-view":
			this.hideHeapView();
			break;
		case "algoview-hide-graphical-view":
			this.hideGraphicalView();
			break;
		case "algoview-load-program-text":
			if (this.programRunner.state == "RUNNING") {
				this.programRunner.stopProgram();
			}
			this.loadText(message.programText);
			if (message.programName != undefined) {
				Ext.getCmp('editor-1').setTitle(message.programName);
			} else {
				Ext.getCmp('editor-1').setTitle("Program.sl");
			}
			$j('#outputPanel-body').html("<div>File successfully loaded.</div><hr />");
			break;
		case "algoview-compile-program":
			this.compileProgram();
			break;
		case "algoview-start-program":
			this.startProgram();
			break;
		case "algoview-set-breakpoint":
			console.log("breakpoint " + message.line);
			this.setBreakpoint(message.line - 1);
			break;
		case "algoview-step-over":
			this.stepOverProgram();
			break;
		case "algoview-step-in":
			this.stepInProgram();
			break;
		case "algoview-step-out":
			this.stepOutProgram();
			break;
		case "algoview-continue":
			this.continueProgram();
			break;
		case "algoview-set-memory-send-events":
			this.setMemorySendEvents(message.value);
			break;
		case "algoview-set-stop-after-instruction-execution":
			this.setStopAfterInstructionExecution(message.value);
			break;
		case "algoview-disable-editor-workers":
			this.setUseEditorWorkers(false);
			break;
		case "algoview-stop-at-begin":
			this.programRunner.stopAtBegin = true;
			break;
		case "algoview-reset-interface":
			this.resetInterface();
			break;
		case "algoview-set-start-paused":
			this.setStartPaused(message.value);
			break;
		case "algoview-set-layout":
			this.setLayout(message.name);
			break;
		case "algoview-set-show-quick-reference":
			this.setShowQuickReference(message.value);
			break
		case "algoview-set-memory-unit-position":
			this.setMemoryUnitPosition(message.address, message.x, message.y);
			break;
		case "algoview-set-south-panel-height":
			this.setSouthPanelHeight(message.height);
			break;
		case "algoview-give-focus-to-parent":
			parent.focus();
			break;
		case "algoview-set-infinite-loop-detection-threshold":
			this.setInfiniteLoopDetectionThreshold(message.value);
			break;
		default:
			console.log("Unknown command", message);
			break;
	}
}

AlgoViewApp.prototype.onMessage = function(event) {
	var remoteWindow = event.source;
	var message;
	
	try {
		message = JSON.parse(event.data);
	} catch (exception) {
		// Received message is not JSON. Should be ignored?
		return;
	}
	
	this.executeCommand(message, remoteWindow);
}

AlgoViewApp.prototype.setUseEditorWorkers = function(value) {
	Ext.getCmp('editor-1').setUseWorker(value);
}

AlgoViewApp.prototype.setMemorySendEvents = function(value) {
	this.programRunner.memory.setSendEvents(value);
}

AlgoViewApp.prototype.resetInterface = function() {
	if (this.toolBar) {
		console.log("Adding toolbar");
		this.mainFrame.viewport.add(this.toolBar);
	}
	this.mainFrame.viewport.doLayout();
}

AlgoViewApp.prototype.hideToolBar = function() {
	this.toolBar = this.mainFrame.viewport.remove('north', false);
	this.mainFrame.viewport.doLayout();
	//this.mainFrame.viewport.getComponent('north').preventHeader = true;
	//this.mainFrame.viewport.getComponent('north').collapse();
}

AlgoViewApp.prototype.hideHeapView = function() {
	this.mainFrame.viewport.getComponent('east').remove('heapTableViewContainer', false);
}

AlgoViewApp.prototype.hideGraphicalView = function() {
	var tableViewsContainer = this.mainFrame.viewport.getComponent('east').remove('tableViewsContainer', false);
	var graphicalView = this.mainFrame.viewport.getComponent('center').remove('graphicalMemoryViewContainer', false);
	this.mainFrame.viewport.getComponent('center').add(tableViewsContainer);
	this.mainFrame.viewport.remove('east');
	this.mainFrame.viewport.doLayout();
}

AlgoViewApp.prototype.postMessage = function(window, message) {
	var messageString = JSON.stringify(message);
	window.postMessage(messageString, "*");
}

/*
function loadScript(relativePath) {
   var script = document.createElement('script');
   script.type= "text/javascript";
   script.src= scriptsLocation + relativePath;
   body.appendChild(script);
}*/

	return AlgoViewApp;
});


