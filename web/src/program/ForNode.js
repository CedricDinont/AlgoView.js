var ForNode = function(tokenType, token) {	
	Node.call(this, tokenType, token);
}

// Prototype based inheritance
ForNode.prototype = new Node();

ForNode.prototype.getVariable = function() {
	return this.children[0];
}

ForNode.prototype.getBeginExpression = function() {
	return this.children[1];
}

ForNode.prototype.getEndExpression = function() {
	return this.children[2];
}

ForNode.prototype.getStepExpression = function() {
	return this.children[3];
}

ForNode.prototype.getInstructions = function() {
	return this.children[4];
}

ForNode.prototype.execute = function(memory, nodeStack, programRunner) {
	if (this.currentChild == 0) {
		this.currentChild++;
		
		var assignInitValueNode = new AssignNode(undefined, undefined);
		
		nodeStack.push(assignInitValueNode);
	} else if (this.currentChild == 1) {
		
	} else if (this.currentChild == 2) {
		
	} else if (this.currentChild == 3) {
		
	} else if (this.currentChild == 4) {
		
	} else if (this.currentChild == 5) {
		
	} else if (this.currentChild == 6) {
		
	}
	
	
	nodeStack.pop();
	return false;
}
