var EndNode = function(tokenType, token) {	
	Node.call(this, tokenType, token); 
}

// prototype based inheritance
EndNode.prototype = new Node();

EndNode.prototype.execute = function(memory, nodeStack, programRunner) {
	nodeStack.pop();
	return false;
}
