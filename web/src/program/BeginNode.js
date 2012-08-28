var BeginNode = function(tokenType, token) {	
	Node.call(this, tokenType, token); 
	
	this.type = "BEGIN";
}

// prototype based inheritance
BeginNode.prototype = new Node();

BeginNode.prototype.execute = function(memory, nodeStack, programRunner) {
	nodeStack.pop();
	return false;
}
