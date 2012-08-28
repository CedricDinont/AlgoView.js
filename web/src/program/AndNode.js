var AndNode = function(tokenType, token) {	
	ExpressionNode.call(this, tokenType, token);
}

// Prototype based inheritance
AndNode.prototype = new ExpressionNode();

AndNode.prototype.execute = function(memory, nodeStack, programRunner) {
	if (this.currentChild == 0) {
		nodeStack.push(this.children[0]);
		this.currentChild++;
	} else if (this.currentChild == 1) {
		nodeStack.push(this.children[1]);
		this.currentChild++;
	} else {
		this.currentChild = 0;
		nodeStack.pop();
	}
	
	return false;
}
