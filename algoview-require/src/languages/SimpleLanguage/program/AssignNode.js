define("AssignNode",
["ExpressionNode", "PointerMemoryValue", "CannotConvertTo", "ArrayDataType", "ExpressionNodeContext"],
function(ExpressionNode, PointerMemoryValue, CannotConvertTo, ArrayDataType, ExpressionNodeContext) {

	function AssignNode(tokenType, token) {	
		ExpressionNode.call(this, tokenType, token);
	}

	// Prototype based inheritance
	AssignNode.prototype = new ExpressionNode();
	AssignNode.prototype.constructor = AssignNode;

	AssignNode.prototype.getVariable = function() {
		return this.children[0];
	}
	
	AssignNode.prototype.getExpression = function() {
		return this.children[1];
	}

	AssignNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.currentChild++;
			nodeContext.expressionContext = nodeStack.push(this.getExpression());
		} else if (nodeContext.currentChild == 1) {
			nodeContext.currentChild++;
			nodeContext.VariableContext = nodeStack.push(this.getVariable());
		} else if (nodeContext.currentChild == 2) {
			nodeContext.currentChild++;
			if (this.getExpression().containsFunctionCall()) {
				// console.log("AssignNode contains function call.");
				return true;
			} else {
				// console.log("AssignNode does not contain function call.");
				return false;
			}
		} else {
			nodeContext.currentChild = 0;
			
			var expressionMemoryValue = nodeContext.expressionContext.getValue();
			expressionMemoryValue.checkState();
			
			var expressionDataType = nodeContext.expressionContext.dataType;
			// console.log(expressionDataType, expressionMemoryValue);
			if (expressionDataType instanceof ArrayDataType) {
				expressionMemoryValue = new PointerMemoryValue(nodeContext.expressionContext.getAddress());
			}
			
			var resultType = nodeContext.VariableContext.getValue().type;
			var expressionMemoryValueAsResultType = expressionMemoryValue.convertTo(resultType);

			memory.setValue(nodeContext.VariableContext.getAddress(), expressionMemoryValueAsResultType);
			nodeContext.setValue(expressionMemoryValueAsResultType);
			nodeStack.pop();
		}
		return false;
	}
	
	return AssignNode;
});
