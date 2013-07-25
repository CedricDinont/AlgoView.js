define("SimpleLanguageProgramRunner",
["TreeProgramRunner"],
function(TreeProgramRunner) {
	function SimpleLanguageProgramRunner() {
		TreeProgramRunner.call(this);
	}
	
	// Prototype based inheritance
	SimpleLanguageProgramRunner.prototype = new TreeProgramRunner();
	SimpleLanguageProgramRunner.prototype.constructor = SimpleLanguageProgramRunner;
	
	return SimpleLanguageProgramRunner;
});
