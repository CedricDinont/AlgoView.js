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
	
	ProgramTreeView.prototype.updateDimension = function() {
		
		if(this.viewHandler != undefined){
			this.viewHandler.refreshViews();  
		}
	}
	

	
	ProgramTreeView.prototype.newGraphFromTree = function(tree) {
		var g = new SimpleGraph(true);
		var gc = new GraphCreator(g, tree);
		gc.programTreeToSimpleGraph();
             	
		return g;
	};
	
	return ProgramTreeView;
});
