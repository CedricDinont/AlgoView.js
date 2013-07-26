define("ExpressionListNodeContext",
["NodeContext"],
function(NodeContext) {

	function ExpressionListNodeContext() {	

	}
	
	// prototype based inheritance
	ExpressionListNodeContext.prototype = new NodeContext();
	ExpressionListNodeContext.prototype.constructor = ExpressionListNodeContext;
	
	return ExpressionListNodeContext;
	
});
