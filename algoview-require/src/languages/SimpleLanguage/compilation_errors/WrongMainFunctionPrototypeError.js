define("WrongMainFunctionPrototypeError",
["CompilationError"],
function(CompilationError) {
	
	function WrongMainFunctionPrototypeError(source) {
		CompilationError.call(this, source);
	}
	
	// Prototype based inheritance
	WrongMainFunctionPrototypeError.prototype = new CompilationError();
	WrongMainFunctionPrototypeError.prototype.constructor = WrongMainFunctionPrototypeError;

	WrongMainFunctionPrototypeError.prototype.toString = function() {
		return "Program entry point prototype should be 'PROCEDURE main()'. This is not a FUNCTION and it does not take parameters.";
	}

	return WrongMainFunctionPrototypeError;
});
