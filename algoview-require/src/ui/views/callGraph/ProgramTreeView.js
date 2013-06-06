/**
 * class ProgramTreeView extends DebugLogger implements ProgramRunnerListener
 * A graphical view on a program tree
 * @author michael
 */

  define("ProgramTreeView",
[ "DebugLogger", "ProgramRunnerListener", "SimpleGraph", "GraphCreator", "ViewHandler" ],
function(DebugLogger, ProgramRunnerListener, SimpleGraph, GraphCreator, ViewHandler) {

	var ProgramTreeView = function(containerId, programRunner) {
		
		var debugMode = true;
		
		ProgramRunnerListener.call(this); 			// ProgramRunnerListener implementation
		DebugLogger.call(this, debugMode);  					// DebugLogger inheritance
		
		this.programRunner = programRunner;
		this.containerId = containerId;
		
		programRunner.addListener(this);
	}
	
	ProgramTreeView.prototype = new ProgramRunnerListener();
	
	// @Override
	ProgramTreeView.prototype.programChanged = function(programRunnerEvent){
		
		if(programRunnerEvent.type == "COMPILED_PROGRAM"){
			
			this.log("Program recompiled");
			
			var tree = this.programRunner.getProgramTree();
			
			var g = this.newGraphFromTree(tree);
			var vh = new ViewHandler(g);
			vh.addView("graphical", this.containerId)
			vh.refreshViews();
                			
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
