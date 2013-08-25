define("RedefinedStructureError",
["CompilationError"],
function(CompilationError) {
	
	function RedefinedStructureError(redefinitionSignature, previousDefinitionSignature) {
		CompilationError.call(this, source);
		
		this.redefinitionSignature = redefinitionSignature;
		this.previousDefinitionSignature = previousDefinitionSignature;
	}
	
	// Prototype based inheritance
	RedefinedStructureError.prototype = new CompilationError();
	RedefinedStructureError.prototype.constructor = RedefinedStructureError;

	RedefinedStructureError.prototype.toString = function() {
		return "Redefined structure '" + redefinitionSignature.name + ".";
	}

	return RedefinedStructureError;
});
