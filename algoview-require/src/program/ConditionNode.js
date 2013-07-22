define("ConditionNode",
["ExpressionNode"],
function(ExpressionNode) {
	function ConditionNode(tokenType, token) {	
		ExpressionNode.call(this, tokenType, token);
	}

	// Prototype based inheritance
	ConditionNode.prototype = new ExpressionNode();
	ConditionNode.prototype.constructor = ConditionNode;

	ConditionNode.prototype.getExpression = function() {
		return this.children[0];
	}

	ConditionNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.currentChild++;
			nodeContext.expressionContext = this.getExpression().createContext();
			nodeStack.push(this.getExpression(), nodeContext.expressionContext);
		} else {
			nodeContext.currentChild = 0;
			nodeStack.pop();
			
			nodeContext.setValue(nodeContext.expressionContext.getValue());
		}

		return false;
	}
	
	return ConditionNode;
});
