define("NullPointerNode",
["PointerMemoryValue", "ExpressionNode"],
function(PointerMemoryValue, ExpressionNode) {

	function NullPointerNode(tokenType, token) {	
		ExpressionNode.call(this, tokenType, token);	
	}

	// prototype based inheritance
	NullPointerNode.prototype = new ExpressionNode();
	NullPointerNode.prototype.constructor = NullPointerNode;

	NullPointerNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		nodeContext.setValue(PointerMemoryValue.NIL);
		nodeStack.pop();
		return false;
	}
	
	return NullPointerNode;
});
