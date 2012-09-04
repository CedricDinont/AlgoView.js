var ReturnNode = function(tokenType, token) {	
	ExpressionNode.call(this, tokenType, token);
}

// Prototype based inheritance
ReturnNode.prototype = new ExpressionNode();

ReturnNode.prototype.getReturnExpression = function() {
	return this.children[0];
}

ReturnNode.prototype.execute = function(memory, nodeStack, programRunner) {
	if (this.currentChild == 0) {
		this.currentChild++;
		if (this.getReturnExpression() != undefined) {
			nodeStack.push(this.getReturnExpression());
		}
	} else {
		this.currentChild = 0;
		var currentStackNode;
		while ((currentStackNode = nodeStack.peek()).type != "FUNCTION_NODE") {
			// console.log("Popping", currentStackNode);
			currentStackNode.currentChild = 0;
			nodeStack.pop();
		}
		var functionNode = nodeStack.peek();
		// console.log("Next node after return", functionNode);
		functionNode.returnExecuted = true;
		functionNode.setValue(this.getReturnExpression().getValue());
	}
	return false;
}
