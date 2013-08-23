define("NoMainFunctionError",
["CompilationError"],
function(CompilationError) {
	
	function NoMainFunctionError(source) {
		CompilationError.call(this, source);
	}
	
	// Prototype based inheritance
	NoMainFunctionError.prototype = new CompilationError();
	NoMainFunctionError.prototype.constructor = NoMainFunctionError;

	NoMainFunctionError.prototype.toString = function() {
		return "No main function defined.";
	}

	return NoMainFunctionError;
});
