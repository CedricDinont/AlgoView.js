define("SimpleLanguageProgramRunner",
["TreeProgramRunner"],
function(TreeProgramRunner) {
	function SimpleLanguageProgramRunner(memory) {
		TreeProgramRunner.call(this, memory);
	}
	
	// Prototype based inheritance
	SimpleLanguageProgramRunner.prototype = new TreeProgramRunner();
	SimpleLanguageProgramRunner.prototype.constructor = SimpleLanguageProgramRunner;
	
	return SimpleLanguageProgramRunner;
});
