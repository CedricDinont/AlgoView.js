define("UndefinedFunctionError",
["CompilationError"],
function(CompilationError) {
	
	function UndefinedFunctionError(location, functionName, numberOfParameters) {
		CompilationError.call(this, location);
		
		this.functionName = functionName;
		this.numberOfParameters = numberOfParameters;
	}
	
	// Prototype based inheritance
	UndefinedFunctionError.prototype = new CompilationError();
	UndefinedFunctionError.prototype.constructor = UndefinedFunctionError;

	UndefinedFunctionError.prototype.toString = function() {
		return "Function not implemented: " + this.functionName
			+ " with " +  this.numberOfParameters + " parameter(s).";
	}

	return UndefinedFunctionError;
});
