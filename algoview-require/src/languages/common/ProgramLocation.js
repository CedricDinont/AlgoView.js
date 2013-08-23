define("ProgramLocation",
[],
function() {
	
	function ProgramLocation(program, source, line, column) {
		this.program = program;
		this.source = source;
		this.line = line;
		this.column = column;
	}
	
	ProgramLocation.prototype.toString = function() {
		var result = "";
		if (this.source !== undefined) {
			result += "File: " + this.source.name;
		}
		if (this.line !== undefined) {
			result += " - Line: " + this.line;
		}
		if (this.column !== undefined) {
			result += " - Column: " + this.column;
		}
		return result;
	}

	return ProgramLocation;
});
