define("UndefinedStructureError",
["CompilationError"],
function(CompilationError) {
	
	function UndefinedStructureError(source, structureName) {
		CompilationError.call(this, source);
		
		this.structureName = structureName;
	}
	
	// Prototype based inheritance
	UndefinedStructureError.prototype = new CompilationError();
	UndefinedStructureError.prototype.constructor = UndefinedStructureError;

	UndefinedStructureError.prototype.toString = function() {
		return "Structure not defined: " + this.structureName + ".";
	}

	return UndefinedStructureError;
});
