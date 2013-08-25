define("RedefinedFunctionError",
["CompilationError"],
function(CompilationError) {
	
	function RedefinedFunctionError(redefinitionSignature, previousDefinitionSignature) {
		CompilationError.call(this, source);
		
		this.redefinitionSignature = redefinitionSignature;
		this.previousDefinitionSignature = previousDefinitionSignature;
	}
	
	// Prototype based inheritance
	RedefinedFunctionError.prototype = new CompilationError();
	RedefinedFunctionError.prototype.constructor = RedefinedFunctionError;

	RedefinedFunctionError.prototype.toString = function() {
		return "Redefined sub-program '" + redefinitionSignature.name + "' with " + redefinitionSignature.numberOfParmeters + " parameter(s).";
	}

	return RedefinedFunctionError;
});
