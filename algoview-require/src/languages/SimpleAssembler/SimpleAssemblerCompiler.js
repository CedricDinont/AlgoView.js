define("SimpleAssemblerCompiler",
["Compiler"],
function(Compiler) {
	
	function SimpleAssemblerCompiler() {
		Compiler.call(this);
	}
	
	// Prototype based inheritance
	SimpleAssemblerCompiler.prototype = new Compiler();
	SimpleAssemblerCompiler.prototype.constructor = SimpleAssemblerCompiler;
	
	// @Override
	SimpleAssemblerCompiler.prototype.compile = function(program) {
		if (DEBUG) {
			console.log("SimpleAssemblerCompiler.compile() needs to be written.");
		}
	}
	
	return SimpleAssemblerCompiler;
});
