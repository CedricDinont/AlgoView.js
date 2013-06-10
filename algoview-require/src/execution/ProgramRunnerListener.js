/**
 * interface ProgramRunnerListener
 * Allows listening to a program runner state changes
 * @author michael
 */

define("ProgramRunnerListener",
[],
function() {
	
	ProgramRunnerListener = function() {

	}

	ProgramRunnerListener.prototype.programChanged = function(programRunnerEvent){
		// should be overridden
	}

	return ProgramRunnerListener;
});
