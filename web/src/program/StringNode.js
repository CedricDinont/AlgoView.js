var StringNode = function(tokenType, token) {	
	Node.call(this, tokenType, token);
	
	this.type = "STRING";
}

// Prototype based inheritance
StringNode.prototype = new Node();

Node.prototype.execute = function(memory, nodeStack, programRunner) {
	nodeStack.pop();
	return false;
}
