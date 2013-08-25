define("RandomNode",
["ExpressionNode",  "IntegerMemoryValue"],
function(ExpressionNode, IntegerMemoryValue) {

	function RandomNode(tokenType, token, produceIntegers) {	
		ExpressionNode.call(this, tokenType, token);
		
		this.produceIntegers = produceIntegers;
	}

	// Prototype based inheritance
	RandomNode.prototype = new ExpressionNode();
	RandomNode.prototype.constructor = RandomNode;

	RandomNode.prototype.getLimitExpression = function() {
		return this.children[0];
	}

	RandomNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.currentChild++;
			nodeContext.LimitExpressionContext = this.getLimitExpression().createContext();
			nodeStack.push(this.getLimitExpression(), nodeContext.LimitExpressionContext);
		} else {
			var limitExpressionMemoryValue = nodeContext.LimitExpressionContext.getValue();
			var limitExpressionMemoryValueAsInteger = limitExpressionMemoryValue.convertTo(MemoryValue.INTEGER);
			
			nodeContext.setValue(new IntegerMemoryValue(Math.floor(Math.random() * limitExpressionMemoryValueAsInteger)));
			nodeStack.pop();
		}

		return false;
	}
	
	return RandomNode;
});
