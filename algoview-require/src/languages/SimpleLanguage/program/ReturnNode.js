define("ReturnNode",
["ExpressionNode"],
function(ExpressionNode) {

	function ReturnNode(tokenType, token) {	
		ExpressionNode.call(this, tokenType, token);
	}

	// Prototype based inheritance
	ReturnNode.prototype = new ExpressionNode();
	ReturnNode.prototype.constructor = ReturnNode;

	ReturnNode.prototype.getReturnExpression = function() {
		return this.children[0];
	}

	ReturnNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.currentChild++;
			if (this.getReturnExpression() != undefined) {
				nodeStack.push(this.getReturnExpression());
			}
		} else {
			nodeContext.currentChild = 0;
			var currentStackNode;
			while (!((currentStackNode = nodeStack.peek()).programNode instanceof FunctionNode)) {
				currentStackNode.contextNode.currentChild = 0;
				nodeStack.pop();
			}
			var functionNodeStackElement = nodeStack.peek();
			functionNodeStackElement.contextNode.returnExecuted = true;
			if (this.getReturnExpression() != undefined) {
				functionNodeStackElement.contextNode.setValue(nodeContext.getReturnExpressionValue());
			}
		}
		return false;
	}
	
	return ReturnNode;
});
