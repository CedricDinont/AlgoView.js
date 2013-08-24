define("FunctionNode",
["ExpressionNode", "ProgramRunnerEvent", "AssignNode", "VariableNameNode", 
"MemoryValue", "FunctionRequiresReturnValue", "MemoryState", "FunctionNodeContext",
"FunctionParameterValueNode"],
function(ExpressionNode, ProgramRunnerEvent, AssignNode, VariableNameNode, 
MemoryValue, FunctionRequiresReturnValue, MemoryState, FunctionNodeContext,
FunctionParameterValueNode) {

	function FunctionNode(tokenType, token) {	
		ExpressionNode.call(this, tokenType, token);
	}

	// Prototype based inheritance
	FunctionNode.prototype = new ExpressionNode();
	FunctionNode.prototype.constructor = FunctionNode;

	FunctionNode.prototype.getName = function() {
		return this.children[0].getName();
	}

	FunctionNode.prototype.getParameters = function() {
		return this.children[1];
	}

	FunctionNode.prototype.getNumberOfParameters = function() {
		return this.getParameters().children.length;
	}

	FunctionNode.prototype.getLocalVariableDeclarations = function() {
		return this.children[2];
	}

	FunctionNode.prototype.setLocalVariableDeclarations = function(node) {
		this.children[2] = node;
	}

	FunctionNode.prototype.getInstructions = function() {
		return this.children[3];
	}

	FunctionNode.prototype.getEnd = function() {
		return this.children[4];
	}

	FunctionNode.prototype.getBegin = function() {
		return this.children[5];
	}

	FunctionNode.prototype.getReturnType = function() {
		return this.children[6];
	}

	FunctionNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {		
		if (nodeContext.currentChild == 0) {
			nodeContext.currentChild++;

			var event = new ProgramRunnerEvent(programRunner, "ENTERING_FUNCTION");
			programRunner.notifyListeners(event);

			this.createVariables(memory.getStack());
			this.createParametersAssignInstructions(nodeContext, nodeStack);
			
			return false;
		} else if (nodeContext.currentChild == 1) {
			nodeContext.currentChild++;
			nodeStack.push(this.getBegin());
			
			if (programRunner.stopAtBegin) {
				return true;
			} else {
				return false;
			}
		} else if (nodeContext.currentChild == 2) {
			nodeContext.currentChild++;
			nodeStack.push(this.getInstructions());
			
			return false;
		} else if (nodeContext.currentChild == 3) {
			nodeContext.currentChild++;
				
			nodeStack.push(this.getEnd());
				
			if (nodeContext.returnExecuted === true) {
				return false;
			} else {
				return true;
			}
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
			
			var event = new ProgramRunnerEvent(programRunner, "EXITING_FUNCTION");
			programRunner.notifyListeners(event);
			
			if (programRunner.stopAtEnd) {
				return true;
			} else {
				return false;
			}
		}

		return false;
	}

	FunctionNode.prototype.createVariables = function(stack) {
		stack.enterNewFunction();
		
		var parameterList = this.getParameters();
		if (parameterList.children != undefined) {
			for (var currentParameter = 0; currentParameter < parameterList.children.length; currentParameter++) {
				stack.push(parameterList.children[currentParameter]);
			}
		}
		var localVariablesList = this.getLocalVariableDeclarations();
		for (var currentVariable = 0; currentVariable < localVariablesList.children.length; currentVariable++) {
			stack.push(localVariablesList.children[currentVariable]);
		}
	}

	FunctionNode.prototype.createParametersAssignInstructions = function(nodeContext, nodeStack) {
		if (nodeContext.parametersValues != undefined) {	
			for (var i = 0; i < nodeContext.parametersValues.children.length; i++) {
				var assignNode = new AssignNode(undefined, undefined);
				var variable = this.getParameters().children[i];
				var valueContext = nodeContext.parametersValuesContexts[i];// nodeContext.parametersValues.children[i];
				var valueNode = new FunctionParameterValueNode(undefined, undefined, valueContext);
				assignNode.addChild(new VariableNameNode(undefined, undefined, variable.getVariableName()));
				assignNode.addChild(valueNode);
				nodeStack.push(assignNode);
			}
		}
	}

	FunctionNode.prototype.destroyVariables = function(stack) {
		var localVariablesList = this.getLocalVariableDeclarations();
		for (var currentVariable = 0; currentVariable < localVariablesList.children.length; currentVariable++) {
			stack.pop();
		}

		var parameterList = this.getParameters();
		if (parameterList.children != undefined) {
			for (var currentParameter = 0; currentParameter < parameterList.children.length; currentParameter++) {
				stack.pop();
			}
		}
		
		stack.popFunctionCall();
	}
	
	// @Override
	ExpressionNode.prototype.createContext = function() {
		return new FunctionNodeContext();
	}

	return FunctionNode;
});
