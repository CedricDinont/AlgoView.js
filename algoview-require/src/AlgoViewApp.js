define("AlgoViewApp",
["Program", "JSUtils", "ExternalController",
"Memory", "ProgramRunner", "Compiler", "LanguageModule"],
function(Program, JSUtils, ExternalController,   
Memory, ProgramRunner, Compiler, LanguageModule) {

	var AlgoViewApp = function(languageModule) {
		this.languageModule = languageModule;
		
		this.program = languageModule.programTemplate;
		
		this.compiler = languageModule.compiler;
		
		var memorySize = JSUtils.getUrlVar("memorySize");
		if ((memorySize == undefined) || (memorySize <= 0)) {
			memorySize = 255;
		}
		if (memorySize > 10000) {
			memorySize = 10000;
		}
		
		this.memory = new Memory(memorySize);
		
		this.programRunner = languageModule.programRunner;
		this.programRunner.setMemory(this.memory);
						
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

	AlgoViewApp.prototype.setEditorsPanel = function(editorsPanel) {
		this.editorsPanel = editorsPanel;
	}
	
	AlgoViewApp.prototype.getProgramRunner = function() {
		return this.programRunner;
	}

	AlgoViewApp.prototype.loadText = function(text) {
		var editor = this.editorsPanel.getCurrentEditor();
		editor.clearBreakpoints();
		editor.getSession().getDocument().setValue(text);
		this.editorsPanel.setProgramTextChanged(false);
	}

	AlgoViewApp.prototype.compileProgram = function() {
		this.program.currentSource.text = this.editorsPanel.getCurrentEditor().getSession().getDocument().getValue();
		return this.compiler.compile(this.program);
	}

	AlgoViewApp.prototype.startProgram = function() {
		this.programRunner.setProgram(this.program);
		this.programRunner.start();
	}

	AlgoViewApp.prototype.stopProgram = function(doReset) {
		this.programRunner.stop(doReset);
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
		this.editorsPanel.getCurrentEditor().setBreakpoint(line);
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
			case "algoview-load-program-text":
				if (this.programRunner.state == "RUNNING") {
					this.programRunner.stop();
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

	AlgoViewApp.prototype.postMessage = function(window, message) {
		var messageString = JSON.stringify(message);
		window.postMessage(messageString, "*");
	}

	return AlgoViewApp;
});
