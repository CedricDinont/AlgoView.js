var WhileNode = function(tokenType, token) {	
	Node.call(this, tokenType, token); 
}

// Prototype based inheritance
WhileNode.prototype = new Node();

WhileNode.prototype.getCondition = function() {
		return this.children[0];
}

WhileNode.prototype.getInstructions = function() {
		return this.children[1];
}

WhileNode.prototype.execute = function(memory, nodeStack, programRunner) {
	if ((this.currentChild == 0) || (this.currentChild == 2)) {
		nodeStack.push(this.getCondition());
		
		if (this.currentChild == 0) {
			this.currentChild++;
			return false;
        } else {
			this.currentChild--;
			return true;
		}
	} else if (this.currentChild == 1) {
		this.currentChild++;
	
		var testMemoryValue = this.getCondition().getValue();
		var testMemoryValueAsBoolean = testValue.convertTo("Boolean");
		
		if (testMemoryValueAsBoolean == undefined) {
			throw new CannotConvertTo("boolean");
		}
		
		var testValueAsBoolean = testMemoryValueAsBoolean.getPrimitiveValue();
		if (testValueAsBoolean) {
			nodeStack.push(this.getInstructions());
		} else {
			nodeStack.pop();
		}
	}
	
	return false;
}
