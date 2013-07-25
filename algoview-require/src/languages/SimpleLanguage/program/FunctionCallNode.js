define("FunctionCallNode",
["ExpressionNode"],
function(ExpressionNode) {
	function FunctionCallNode(tokenType, token) {	
		ExpressionNode.call(this, tokenType, token);
		
		this.functionNode;
	}

	// Prototype based inheritance
	FunctionCallNode.prototype = new ExpressionNode();
	FunctionCallNode.prototype.constructor = FunctionCallNode;

	FunctionCallNode.prototype.getFunctionName = function() {
		return this.children[0].getName();
	}

	FunctionCallNode.prototype.getParameters = function() {
		return this.children[1];
	}

	FunctionCallNode.prototype.getNumberOfParameters = function() {
		return this.children[1].children.length;
	}

	FunctionCallNode.prototype.containsFunctionCall = function() {
		return true;
	}
	
	FunctionCallNode.prototype.getFunctionNode = function() {
		return this.functionNode;
	}
	
	FunctionCallNode.prototype.setFunctionNode = function(functionNode) {
		this.functionNode = functionNode;
	}

	FunctionCallNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.currentChild++;
			nodeStack.push(this.getParameters());
		} else if (nodeContext.currentChild == 1) {
			nodeContext.currentChild++;
			nodeContext.setParametersValues(this.getParameters());
			nodeStack.push(this.functionNode);
		} else {
			this.currentChild = 0;
			nodeContext.setValue(nodeContext.getValue());
			nodeStack.pop();
		}
		
		return false;
	}
	
	return FunctionCallNode;
});
