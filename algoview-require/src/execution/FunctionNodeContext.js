define("FunctionNodeContext",
["ExpressionNodeContext"],
function(ExpressionNodeContext) {
	
	function FunctionNodeContext() {	
		this.parametersValues;
		this.returnExecuted = false;
	}
	
	// prototype based inheritance
	FunctionNodeContext.prototype = new ExpressionNodeContext();
	FunctionNodeContext.prototype.constructor = FunctionNodeContext;

	return FunctionNodeContext;
});

