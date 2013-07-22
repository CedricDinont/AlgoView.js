define("ExpressionNodeContext",
["NodeContext"],
function(NodeContext) {
	
	function ExpressionNodeContext() {	
		this.memoryValue;
	}
	
	// prototype based inheritance
	ExpressionNodeContext.prototype = new NodeContext();
	ExpressionNodeContext.prototype.constructor = ExpressionNodeContext;

	ExpressionNodeContext.prototype.getValue = function() {
		return this.memoryValue;
	}

	ExpressionNodeContext.prototype.setValue = function(memoryValue) {
		this.memoryValue = memoryValue;
	}

	return ExpressionNodeContext;
});

