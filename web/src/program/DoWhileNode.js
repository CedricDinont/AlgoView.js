var DoWhileNode = function(tokenType, token) {	
	Node.call(this, tokenType, token);
}

// Prototype based inheritance
DoWhileNode.prototype = new Node();

DoWhileNode.prototype.getCondition = function() {
		return this.children[0];
}

DoWhileNode.prototype.getInstructions = function() {
		return this.children[1];
}

DoWhileNode.prototype.execute = function(memory, nodeStack, programRunner) {
	if (this.currentChild == 0) {
		this.currentChild++;
		nodeStack.push(this.getInstructions());
	} else if (this.currentChild == 1) {
		this.currentChild++;
		nodeStack.push(this.getCondition());
		return true;
	} else if (this.currentChild == 2) {
		this.currentChild = 0;
			
		var testMemoryValue = this.getCondition().getValue();
		var testMemoryValueAsBoolean = testMemoryValue.convertTo("Boolean");
		
		if (testMemoryValueAsBoolean == undefined) {
			throw new CannotConvertTo("boolean");
		}
		
		var testValueAsBoolean = testMemoryValueAsBoolean.getPrimitiveValue();
		if (! testValueAsBoolean) {
			nodeStack.pop();
		}
	}
	return false;
}
