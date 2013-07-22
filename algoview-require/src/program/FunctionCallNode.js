define("FunctionCallNode",
["ExpressionNode", "FunctionNotImplemented"],
function(ExpressionNode, FunctionNotImplemented) {
	//ExpressionNode FunctionNotImplemented
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

	FunctionCallNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
	//	console.log("Executing function call");

		if (nodeContext.currentChild == 0) {
			nodeContext.currentChild++;
			nodeStack.push(this.getParameters());
		} else if (nodeContext.currentChild == 1) {
			nodeContext.currentChild++;

			var functionNode = programRunner.getProgramTree().getFunction(this.getFunctionName(), this.getNumberOfParameters());
			if (functionNode === undefined) {
				throw new FunctionNotImplemented(getFunctionName(), this.getNumberOfParameters());
	        }
			//this.functionNode = functionNode.clone();
			
		//	console.log("Model", functionNode.currentChild, functionNode.getInstructions().currentChild);
		//	console.log("Clone", this.functionNode.currentChild, this.functionNode.getInstructions().currentChild);
			
			nodeContext.setParametersValues(this.getParameters());
			nodeStack.push(this.functionNode);
		} else {
			this.currentChild = 0;
			nodeContext.setValue(nodeContext.getValue());
			nodeStack.pop();
		}
		
	//	nodeStack.print();
		return false;
	}
	
	return FunctionCallNode;
});
