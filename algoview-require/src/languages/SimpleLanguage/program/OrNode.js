define("OrNode",
["MemoryValue", "ExpressionNode", "CannotConvertTo", "BooleanMemoryValue"],
function(MemoryValue, ExpressionNode, CannotConvertTo, BooleanMemoryValue) {

	function OrNode(tokenType, token) {
		ExpressionNode.call(this, tokenType, token);
	}

	// Prototype based inheritance
	OrNode.prototype = new ExpressionNode();
	OrNode.prototype.constructor = OrNode;

	OrNode.prototype.getLeftOperand = function() {
		return this.children[0];
	}

	OrNode.prototype.getRightOperand = function() {
		return this.children[1];
	}

	OrNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.leftOperandContext = this.getLeftOperand().createContext();
			nodeStack.push(this.getLeftOperand(), nodeContext.leftOperandContext);
			nodeContext.currentChild++;
		} else if (nodeContext.currentChild == 1) {
			var leftOperandMemoryValue = nodeContext.leftOperandContext.getValue();
			var leftOperandMemoryValueAsBoolean = leftOperandMemoryValue.convertTo(MemoryValue.BOOLEAN);
						
			if (leftOperandMemoryValueAsBoolean.getPrimitiveValue() == true) {
	                // No need to continue with the right operand
				nodeContext.currentChild = 0;			
				nodeStack.pop();
				nodeContext.setValue(new BooleanMemoryValue(true));
			} else {
				nodeContext.rightOperandContext = this.getRightOperand().createContext();
				nodeStack.push(this.getRightOperand(), nodeContext.rightOperandContext);
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

	return OrNode;
});
