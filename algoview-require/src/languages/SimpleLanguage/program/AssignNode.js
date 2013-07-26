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
	
	AssignNode.prototype.getVariableContext = function(nodeContext) {
		return nodeContext.children[1];
	}

	AssignNode.prototype.getExpression = function() {
		return this.children[1];
	}
	
	AssignNode.prototype.getExpressionContext = function(nodeContext) {
		return nodeContext.children[0];
	}

	AssignNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.currentChild++;
			var expressionNode = this.getExpression();
			var expressionNodeContext  = expressionNode.createContext();
			nodeContext.addChild(expressionNodeContext);
			nodeStack.push(expressionNode, expressionNodeContext);
		} else if (nodeContext.currentChild == 1) {
			nodeContext.currentChild++;
			var variableNode = this.getVariable();
			var variableNodeContext = variableNode.createContext();
			nodeContext.addChild(variableNodeContext);
			nodeStack.push(variableNode, variableNodeContext);
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
			
			var expressionMemoryValue = this.getExpressionContext(nodeContext).getValue();
			
			var expressionDataType = this.getExpressionContext(nodeContext).dataType;
			 console.log(expressionDataType, expressionMemoryValue);
			if (expressionDataType instanceof ArrayDataType) {
				expressionMemoryValue = new PointerMemoryValue(this.getExpressionContext(nodeContext).getAddress());
			}
			
			var resultType = this.getVariableContext(nodeContext).memoryValue.type;
			
			var expressionMemoryValueAsResultType = expressionMemoryValue.convertTo(resultType);
			if (expressionMemoryValueAsResultType == undefined) {
				throw new CannotConvertTo(resultType);
			}

			memory.setValue(this.getVariableContext(nodeContext).getAddress(), expressionMemoryValueAsResultType);
			nodeContext.setValue(expressionMemoryValueAsResultType);
			nodeStack.pop();
		}
		return false;
	}
	
	return AssignNode;
});
