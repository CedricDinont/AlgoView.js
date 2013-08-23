define("CompilationError",
["ProgramLocation"],
function(ProgramLocation) {
	
	function CompilationError(location) {
		this.location = location;
	}

	return CompilationError;
});
