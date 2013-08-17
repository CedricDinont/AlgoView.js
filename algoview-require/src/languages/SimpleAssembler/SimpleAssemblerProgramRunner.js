define("SimpleAssemblerProgramRunner",
["ProgramRunner"],
function(ProgramRunner) {
	
	function SimpleAssemblerProgramRunner() {
		ProgramRunner.call(this);
	}
	
	// Prototype based inheritance
	SimpleAssemblerProgramRunner.prototype = new ProgramRunner();
	SimpleAssemblerProgramRunner.prototype.constructor = SimpleAssemblerProgramRunner;
	
	return SimpleAssemblerProgramRunner;
});
