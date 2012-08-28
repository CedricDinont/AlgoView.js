var ForNode = function(tokenType, token) {	
	Node.call(this, tokenType, token);
}

// Prototype based inheritance
ForNode.prototype = new Node();

ForNode.prototype.execute = function(memory, nodeStack, programRunner) {
	nodeStack.pop();
	return false;
}
