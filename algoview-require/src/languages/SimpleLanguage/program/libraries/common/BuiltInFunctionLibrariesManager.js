define("BuiltInFunctionLibrariesManager",
["BuiltInFunctionLibrary"],
function(BuiltInFunctionLibrary) {
	
	function BuiltInFunctionLibrariesManager() {
		this.libraries = new Array();
	}
	
	BuiltInFunctionLibrariesManager.prototype.addLibrary = function(library) {
		this.libraries.push(library);
	}
	
	BuiltInFunctionLibrariesManager.prototype.getFunctionNode = function(functionName, numberOfParameters) {
		for (var i = 0; i < this.libraries.length; ++i) {
			var libraryFunctionNode = this.libraries[i].getFunctionNode(functionName, numberOfParameters);
			if (libraryFunctionNode != undefined) {
				return libraryFunctionNode;
			}
		}
	}
	
	return BuiltInFunctionLibrariesManager;
	
});

