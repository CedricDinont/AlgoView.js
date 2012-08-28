var RandomNode = function(tokenType, token) {	
	ExpressionNode.call(this, tokenType, token);
}

// Prototype based inheritance
RandomNode.prototype = new ExpressionNode();

RandomNode.prototype.execute = function(memory, nodeStack, programRunner) {
	nodeStack.pop();
	return false;
}
