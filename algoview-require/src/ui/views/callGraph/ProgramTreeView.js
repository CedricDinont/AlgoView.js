/**
 * class ProgramTreeView extends DebugLogger implements ProgramRunnerListener
 * A graphical view on a program tree
 * @author michael
 */

  define("ProgramTreeView",
[ "DebugLogger", "ProgramRunnerListener" ],
function(DebugLogger, ProgramRunnerListener) {

	var ProgramTreeView = function(containerId, programRunner) {
		
		ProgramRunnerListener.call(this); 			// ProgramRunnerListener implementation
		DebugLogger.call(this);  					// DebugLogger inheritance
		
		console.log(programRunner);
		
		programRunner.addListener(this);
	}
	
	ProgramTreeView.prototype = new ProgramRunnerListener();
	
	// @Override
	ProgramTreeView.prototype.programChanged = function(programRunnerEvent){
		
		if(programRunnerEvent.type == "COMPILED_PROGRAM"){

		}
	}
	
	
	
	return ProgramTreeView;

});
