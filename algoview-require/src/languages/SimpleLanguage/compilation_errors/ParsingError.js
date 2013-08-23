define("ParsingError",
["CompilationError"],
function(CompilationError) {
	
	function ParsingError(location, text, antlrError) {
		CompilationError.call(this, location);
		
		this.text = text;
		this.antlrError = antlrError;
	}
	
	// Prototype based inheritance
	ParsingError.prototype = new CompilationError();
	ParsingError.prototype.constructor = ParsingError;

	ParsingError.prototype.toString = function() {
		return "Parsing error: " + this.text;
	}

	return ParsingError;
});
