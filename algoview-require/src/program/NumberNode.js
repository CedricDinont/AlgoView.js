define("NumberNode",
["ExpressionNode"],
function(ExpressionNode) {

	function NumberNode(tokenType, token, value) {	
		ExpressionNode.call(this, tokenType, token);

		this.value = value;
	}

	// Prototype based inheritance
	NumberNode.prototype = new ExpressionNode();
	NumberNode.prototype.constructor = NumberNode;

	NumberNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		nodeContext.setValue(this.value);
		
		nodeStack.pop();
		return false;
	}
	
	return NumberNode;
});
