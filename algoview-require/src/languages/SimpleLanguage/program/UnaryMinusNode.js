//ExpressionNode
define("UnaryMinusNode",
["ExpressionNode"],
function(ExpressionNode) { 

	function UnaryMinusNode(tokenType, token) {	
		ExpressionNode.call(this, tokenType, token);
	}
	
	// Prototype based inheritance
	UnaryMinusNode.prototype = new ExpressionNode();
	UnaryMinusNode.prototype.constructor = UnaryMinusNode;
	
	UnaryMinusNode.prototype.getExpression = function() {
		return this.children[0];
	}
	
	UnaryMinusNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.ExpressionContext = nodeStack.push(this.getExpression());
			nodeContext.currentChild++;
		} else {
			nodeContext.currentChild = 0;
			nodeStack.pop();
			
			// TODO: Check expression type
			
			nodeContext.setValue(nodeContext.ExpressionContext.getValue().opposite());
		}
		
		return false;
	}
	
	return UnaryMinusNode;
});
