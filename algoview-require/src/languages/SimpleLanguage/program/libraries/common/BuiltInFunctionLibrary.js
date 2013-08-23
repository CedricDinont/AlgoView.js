define("BuiltInFunctionLibrary",
[],
function() {
	
	function BuiltInFunctionLibrary() {
		this.functions = new Array();
	}
	
	BuiltInFunctionLibrary.prototype.getFunctionNode = function(functionName, numberOfParameters) {
		for (var i = 0; i < this.functions.length; ++i) {
			var functionNode = this.functions[i];
			if ((functionNode.getName() === functionName) 
				&& (functionNode.getNumberOfParameters() == numberOfParameters)) {
				return functionNode;	
			}
		}
		return undefined;
	}
	
	return BuiltInFunctionLibrary;
	
});
