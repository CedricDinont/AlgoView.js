define("DereferenceNode",
["ExpressionNode"],
function(ExpressionNode) {
	
	function DereferenceNode(tokenType, token) {	
		ExpressionNode.call(this, tokenType, token);
	}

	// Prototype based inheritance
	DereferenceNode.prototype = new ExpressionNode();
	DereferenceNode.prototype.constructor = DereferenceNode;

	DereferenceNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		nodeStack.pop();
		return false;
	}
	
	return DereferenceNode;
});
