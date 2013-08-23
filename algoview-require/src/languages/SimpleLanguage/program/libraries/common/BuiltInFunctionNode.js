define("BuiltInFunctionNode",
["FunctionNode"],
function(FunctionNode) {
	
	function BuiltInFunctionNode() {
		FunctionNode.call(this);
	}
	
	// Prototype based inheritance
	BuiltInFunctionNode.prototype = new FunctionNode();
	BuiltInFunctionNode.prototype.constructor = BuiltInFunctionNode;
	
	BuiltInFunctionNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.currentChild++;

			this.createVariables(memory.getStack());
			this.createParametersAssignInstructions(nodeContext, nodeStack);
			
			return false;
		} else if (nodeContext.currentChild == 1) {
			nodeContext.currentChild++;
			
			return false;
		} else if (nodeContext.currentChild == 2) {
			nodeContext.currentChild++;
			
			this.executeBuiltInFunction(nodeContext, memory, nodeStack, programRunner);
			
			return false;
		} else if (nodeContext.currentChild == 3) {
			nodeContext.currentChild++;
			
			return false;
		} else {
			nodeContext.currentChild = 0;
			nodeStack.pop();
			
			var returnType = this.getReturnType();
			if (returnType == undefined) {
				// We are a procedure: no return value
				nodeContext.setValue(new MemoryValue(undefined, MemoryState.UNDEFINED));
			} else {
				// We are a function: check if a return node has set our value
				if (nodeContext.getValue() == undefined) {
					throw new FunctionRequiresReturnValue(this.getName());
				}
			}

			this.destroyVariables(memory.getStack());
			return false;
		}

		return false;
	}
	
	BuiltInFunctionNode.prototype.executeBuiltInFunction = function(nodeContext, memory, nodeStack, programRunner) {
		
	}
	
	return BuiltInFunctionNode;
});
