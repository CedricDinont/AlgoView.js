var ExpressionListNode = function(tokenType, token, name) {	
	Node.call(this, tokenType, token);
}

// Prototype based inheritance
ExpressionListNode.prototype = new Node();

ExpressionListNode.prototype.execute = function(memory, nodeStack, programRunner) {
	if (this.currentChild < this.children.length) {
		nodeStack.push(this.children[this.currentChild]);
		this.currentChild++;
	} else {
		this.currentChild = 0;
		nodeStack.pop();
	}
	return false;
}
