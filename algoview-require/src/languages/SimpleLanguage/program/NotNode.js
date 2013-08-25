define("NotNode",
["ExpressionNode", "BooleanMemoryValue"],
function(ExpressionNode, BooleanMemoryValue) {

	function NotNode(tokenType, token) {	
		ExpressionNode.call(this, tokenType, token);
	}

	// Prototype based inheritance
	NotNode.prototype = new ExpressionNode();
	NotNode.prototype.constructor = NotNode;

	NotNode.prototype.getOperand = function() {
		return this.children[0];
	}

	NotNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.operandContext = this.getOperand().createContext(); 
			nodeStack.push(this.getOperand(), nodeContext.operandContext);
			nodeContext.currentChild++;
		} else {
			nodeContext.currentChild = 0;
			nodeStack.pop();
			
			var operandMemoryValue = nodeContext.operandContext.getValue();
			var operandMemoryValueAsBoolean = operandMemoryValue.convertTo(MemoryValue.BOOLEAN);
			
			nodeContext.setValue(new BooleanMemoryValue(! operandMemoryValueAsBoolean.getPrimitiveValue()));
		}
		
		return false;
	}
	
	return NotNode;
});
