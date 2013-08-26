/**
 * class ProgramTreeView extends DebugLogger implements ProgramRunnerListener
 * A graphical view on a program tree
 * @author michael
 */

define("ProgramTreeView",
[ "DebugLogger", "ProgramRunnerListener", "SimpleGraph", "GraphCreator", "ViewHandler" ],
function(DebugLogger, ProgramRunnerListener, SimpleGraph, GraphCreator, ViewHandler) {

	var ProgramTreeView = function(algoViewApp, containerId) {		
		this.app = algoViewApp;
		this.containerId = containerId;
		this.programRunner = algoViewApp.programRunner;
				
		var debugMode = true;
		
		if (DEBUG) {
			console.log("Init program tree view.");
		}
		
		DebugLogger.call(this, debugMode);  					// DebugLogger inheritance

		this.app.compiler.addListener(this);
	}
	
	ProgramTreeView.prototype = new ProgramRunnerListener();
	
	ProgramTreeView.prototype.destroy = function() {
		this.app.compiler.removeListener(this);
	}
	
	// @Override
	ProgramTreeView.prototype.onCompilerEvent = function(event) {
		if (event.type == "COMPILED_PROGRAM") {				
			var tree = this.app.program.programTree;
			var g = this.newGraphFromTree(tree);
			
			if (DEBUG) {
				console.log("Graph", g);
			}
			
			var viewHandler = new ViewHandler(g);
			
			viewHandler.addView("graphical", this.containerId);
			viewHandler.refreshViews();    			
		}
	}
	
	ProgramTreeView.prototype.updateDimension = function() {
		console.log("TODO: Implement update dimension in ProgramTreeView");
	}
	
	ProgramTreeView.prototype.newGraphFromTree = function(tree) {
		var g = new SimpleGraph(true);
		var gc = new GraphCreator(g, tree);
		gc.programTreeToSimpleGraph();
             	
		return g;
	};
	
	return ProgramTreeView;
});
