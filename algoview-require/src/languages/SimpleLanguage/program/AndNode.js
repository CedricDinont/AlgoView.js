define("AndNode",
["ExpressionNode", "BooleanMemoryValue", "MemoryValue"],
function(ExpressionNode, BooleanMemoryValue, MemoryValue) {
	
	function AndNode(tokenType, token) {	
		ExpressionNode.call(this, tokenType, token);
	}

	// Prototype based inheritance
	AndNode.prototype = new ExpressionNode();
	AndNode.prototype.constructor = AndNode;

	AndNode.prototype.getLeftOperand = function() {
		return this.children[0];
	}

	AndNode.prototype.getRightOperand = function() {
		return this.children[1];
	}

	AndNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.leftOperandContext = nodeStack.push(this.getLeftOperand());
			nodeContext.currentChild++;
		} else if (nodeContext.currentChild == 1) {
			var leftOperandMemoryValue = nodeContext.leftOperandContext.getValue();
			var leftOperandMemoryValueAsBoolean = leftOperandMemoryValue.convertTo(MemoryValue.BOOLEAN);
			
			if (leftOperandMemoryValueAsBoolean.getPrimitiveValue() == false) {
	                // No need to continue with the right operand
				nodeContext.currentChild = 0;			
				nodeStack.pop();
				nodeContext.setValue(new BooleanMemoryValue(false));
			} else {
				nodeContext.rightOperandContext = nodeStack.push(this.getRightOperand());
				nodeContext.currentChild++;
			}
		} else {
			nodeContext.currentChild = 0;
			nodeStack.pop();
			
			var rightOperandMemoryValue = nodeContext.rightOperandContext.getValue();
			var rightOperandMemoryValueAsBoolean = rightOperandMemoryValue.convertTo(MemoryValue.BOOLEAN);

			var finalValue = rightOperandMemoryValueAsBoolean.getPrimitiveValue();
			nodeContext.setValue(new BooleanMemoryValue(finalValue));
		}
		
		return false;
	}
	
	return AndNode;
});
