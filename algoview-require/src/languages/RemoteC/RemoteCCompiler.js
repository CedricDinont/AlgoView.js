define("RemoteCCompiler",
["Compiler"],
function(Compiler) {
	
	function RemoteCCompiler() {
		Compiler.call(this);
	}
	
	// Prototype based inheritance
	RemoteCCompiler.prototype = new Compiler();
	RemoteCCompiler.prototype.constructor = RemoteCCompiler;
	
	// @Override
	RemoteCCompiler.prototype.compile = function(program) {
		if (DEBUG) {
			console.log("RemoteCCompiler.compile() needs to be written.");
		}
	}
	
	return RemoteCCompiler;
});
