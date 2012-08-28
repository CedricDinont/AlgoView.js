var NumberNode = function(tokenType, token, value) {	
	ExpressionNode.call(this, tokenType, token);

	this.setValue(value);
}

// Prototype based inheritance
NumberNode.prototype = new ExpressionNode();

NumberNode.prototype.execute = function(memory, nodeStack, programRunner) {
	nodeStack.pop();
	return false;
}

