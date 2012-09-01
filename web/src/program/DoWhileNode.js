var DoWhileNode = function(tokenType, token) {	
	Node.call(this, tokenType, token);
	
	this.clonedCondition;
	this.clonedInstructions;
}

// Prototype based inheritance
DoWhileNode.prototype = new Node();

DoWhileNode.prototype.getCondition = function() {
	return this.children[0];
}

DoWhileNode.prototype.cloneCondition = function() {
	this.clonedCondition = this.getCondition().clone();
}

DoWhileNode.prototype.getInstructions = function() {
	return this.children[1];
}

DoWhileNode.prototype.cloneInstructions = function() {
	this.clonedInstructions = this.getInstructions().clone();
}

DoWhileNode.prototype.execute = function(memory, nodeStack, programRunner) {
	if (this.currentChild == 0) {
		this.currentChild++;
		this.cloneInstructions();
		nodeStack.push(this.clonedInstructions);
	} else if (this.currentChild == 1) {
		this.currentChild++;
		this.cloneCondition();
		nodeStack.push(this.clonedCondition);
		return true;
	} else if (this.currentChild == 2) {
		this.currentChild = 0;
			
		var testMemoryValue = this.clonedCondition.getValue();
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
