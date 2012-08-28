var NotNode = function(tokenType, token) {	
	ExpressionNode.call(this, tokenType, token);
}

// Prototype based inheritance
NotNode.prototype = new ExpressionNode();

NotNode.prototype.execute = function(memory, nodeStack, programRunner) {
	if (this.currentChild == 0) {
		nodeStack.push(this.children[0]);
		this.currentChild++;
	} else {
		this.currentChild = 0;
		nodeStack.pop();
	}
	
	return false;
}
