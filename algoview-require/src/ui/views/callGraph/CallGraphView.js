/**
 * class CallGraphView extends DebugLogger implements ProgramRunnerListener
 * A graphical view on a call graph
 * @author michael
 */

define("CallGraphView",
[ "DebugLogger", "ProgramRunnerListener", "SimpleGraph", "GraphCreator", "ViewHandler" ],
function(DebugLogger, ProgramRunnerListener, SimpleGraph, GraphCreator, ViewHandler) {

	var CallGraphView = function(algoViewApp, containerId) {		
		this.app = algoViewApp;
		this.containerId = containerId;
		this.programRunner = algoViewApp.programRunner;
				
		var debugMode = true;
		
		if (DEBUG) {
			console.log("Init call graph view.");
		}
		
		DebugLogger.call(this, debugMode);  					// DebugLogger inheritance

		this.app.compiler.addListener(this);
	}
	
	CallGraphView.prototype = new ProgramRunnerListener();
	
	CallGraphView.prototype.destroy = function() {
		this.app.compiler.removeListener(this);
	}
	
	// @Override
	CallGraphView.prototype.onCompilerEvent = function(event) {
		if (event.type == "COMPILED_PROGRAM") {				
			this.tree = this.app.program.programTree;
			this.g = this.newGraphFromTree(this.tree);
			
			if (DEBUG) {
				console.log("Graph", this.g);
			}
			
			this.viewHandler = new ViewHandler(this.g);
			
			this.viewHandler.addView("graphical", this.containerId);
			this.viewHandler.refreshViews();    			
		}
	}
	
	CallGraphView.prototype.updateDimension = function() {
		if(this.viewHandler != undefined){
			this.viewHandler.refreshViews();  
		}
	}
	

	CallGraphView.prototype.newGraphFromTree = function(tree) {
		var g = new SimpleGraph(true);
		var gc = new GraphCreator(g, tree);
		gc.programTreeToFunctionCallSimpleGraph();
             	
		return g;
	};
	
	return CallGraphView;
});
