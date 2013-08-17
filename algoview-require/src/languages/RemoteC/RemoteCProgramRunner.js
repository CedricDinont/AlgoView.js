define("RemoteCProgramRunner",
["ProgramRunner"],
function(ProgramRunner) {
	
	function RemoteCProgramRunner() {
		ProgramRunner.call(this);
	}
	
	// Prototype based inheritance
	RemoteCProgramRunner.prototype = new ProgramRunner();
	RemoteCProgramRunner.prototype.constructor = RemoteCProgramRunner;
	
	return RemoteCProgramRunner;
});
