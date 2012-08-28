var DereferenceNode = function(tokenType, token) {	
	ExpressionNode.call(this, tokenType, token);
}

// Prototype based inheritance
DereferenceNode.prototype = new ExpressionNode();

DereferenceNode.prototype.execute = function(memory, nodeStack, programRunner) {
	nodeStack.pop();
	return false;
}
