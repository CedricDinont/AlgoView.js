var DoWhileNode = function(tokenType, token) {	
	Node.call(this, tokenType, token);
}

// Prototype based inheritance
DoWhileNode.prototype = new Node();

DoWhileNode.prototype.execute = function(memory, nodeStack, programRunner) {
	nodeStack.pop();
	return false;
}
