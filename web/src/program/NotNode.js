var NotNode = function(tokenType, token) {	
	ExpressionNode.call(this, tokenType, token);
}

// Prototype based inheritance
NotNode.prototype = new ExpressionNode();

NotNode.prototype.getOperand = function() {
	return this.children[0];
}

NotNode.prototype.execute = function(memory, nodeStack, programRunner) {
	if (this.currentChild == 0) {
		nodeStack.push(this.getOperand());
		this.currentChild++;
	} else {
		this.currentChild = 0;
		nodeStack.pop();
		
		var operandMemoryValue = this.getOperand().getValue();
		var operandMemoryValueAsBoolean = operandMemoryValue.convertTo("Boolean");
		
		if (operandMemoryValueAsBoolean == undefined) {
			throw new CannotConvertTo("boolean");
		}
		
		this.setValue(new BooleanMemoryValue(! operandMemoryValueAsBoolean.getPrimitiveValue()));
	}
	
	return false;
}
