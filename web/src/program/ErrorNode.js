var ErrorNode = function(tokenType, token) {	
	Node.call(this, tokenType, token);
}

// Prototype based inheritance
ErrorNode.prototype = new Node();

ErrorNode.prototype.execute = function(memory, nodeStack, programRunner) {
	
	nodeStack.pop();
	memory.endTransaction();
	throw new Test();
	
	return false;
}
