define("FunctionCallNode",
["ExpressionNode", "FunctionNodeContext", "ExpressionListNodeContext",
"BuiltInFunctionNode"],
function(ExpressionNode, FunctionNodeContext, ExpressionListNodeContext,
BuiltInFunctionNode) {
	
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
		if (this.getFunctionNode() instanceof BuiltInFunctionNode) {
			return false;
		} else {
			return true;
		}
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
			nodeContext.functionNodeContext = this.getFunctionNode().createContext();
			
			// TODO: Evaluer les paramètres
			nodeContext.functionNodeContext.parametersValuesContexts = new Array();
			for (var i = 0; i < this.getParameters().children.length; i++) {
				nodeContext.functionNodeContext.parametersValuesContexts[i] = this.getParameters().children[i].createContext();
				nodeStack.push(this.getParameters().children[i], nodeContext.functionNodeContext.parametersValuesContexts[i]);
			}
		} else if (nodeContext.currentChild == 1) {
			nodeContext.currentChild++;
			nodeContext.functionNodeContext.setParametersValues(this.getParameters());
			nodeStack.push(this.getFunctionNode(), nodeContext.functionNodeContext);
		} else {
			nodeContext.currentChild = 0;
			nodeContext.setValue(nodeContext.functionNodeContext.getValue());
			nodeStack.pop();
		}
		
		return false;
	}
	
	return FunctionCallNode;
});
