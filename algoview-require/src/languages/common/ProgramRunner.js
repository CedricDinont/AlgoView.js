define("ProgramRunner",
["BreakpointList", "Memory"],
function(BreakpointList, Memory) {
	function ProgramRunner() {
		this.memory;
		
		this.program;
		
		this.listeners = new Array();
		this.breakpoints = new BreakpointList();
		
		this.startPaused = false;
		this.stopAtBegin = false;
		this.stopAfterInstructionExecution = false;

		this.state = "STOPPED";
	}
	
	ProgramRunner.prototype.addListener = function(listener) {
		this.listeners.push(listener);
	}

	ProgramRunner.prototype.notifyListeners = function(event) {
		for (var i = 0; i < this.listeners.length; ++i) {
			this.listeners[i].programChanged(event);
		}
	}
	
	ProgramRunner.prototype.setStopAfterInstructionExecution = function(value) {
		this.stopAfterInstructionExecution = value;
	}

	ProgramRunner.prototype.setStartPaused = function(value) {
		this.startPaused = value;
	}
	
	ProgramRunner.prototype.setProgram = function(program) {
		this.program = program;
	}
	
	ProgramRunner.prototype.setMemory = function(memory) {
		this.memory = memory;
	}
	
	/**
	 * Abstract functions
	 */
	
	ProgramRunner.prototype.start = function() {
		// Needs to be overridden
	}
	
	ProgramRunner.prototype.stopProgram = function(doReset) {
		// Needs to be overridden
	}
	
	ProgramRunner.prototype.stepOverFunctions = function() {
		// Needs to be overridden
	}
	
	ProgramRunner.prototype.stepInFunctions = function() {
		// Needs to be overridden
	}
	
	ProgramRunner.prototype.stepOutCurrentFunction = function() {
		// Needs to be overridden
	}
	
	ProgramRunner.prototype.continueToNextBreakpoint = function() {
		// Needs to be overridden
	}

	return ProgramRunner;
});
