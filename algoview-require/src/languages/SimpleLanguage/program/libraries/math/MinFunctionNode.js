define("MinFunctionNode",
["BuiltInFunctionNode", "FunctionNameNode", "FunctionParametersListNode",
"VariablesDeclarationListNode", "VariableDeclarationNode",
"VariableNameNode", "VariableTypeNode", "FloatDataType", "FloatMemoryValue"],
function(BuiltInFunctionNode, FunctionNameNode, FunctionParametersListNode,
VariablesDeclarationListNode, VariableDeclarationNode,
VariableNameNode, VariableTypeNode, FloatDataType, FloatMemoryValue) {
	
	function MinFunctionNode() {
		BuiltInFunctionNode.call(this);
		
		// Name
		this.children.push(new FunctionNameNode(undefined, undefined, "min"));
		
		// Parameters
		var functionParametersListNode = new FunctionParametersListNode();
		var parameterDeclarationNode1 = new VariableDeclarationNode();
		var parameterNameNode1 = new VariableNameNode(undefined, undefined, "a");
		parameterDeclarationNode1.children.push(parameterNameNode1);
		var parameterTypeNode1 = new VariableTypeNode(undefined, undefined, new FloatDataType());
		parameterDeclarationNode1.children.push(parameterTypeNode1);
		functionParametersListNode.children.push(parameterDeclarationNode1);
		
		var parameterDeclarationNode2 = new VariableDeclarationNode();
		var parameterNameNode2 = new VariableNameNode(undefined, undefined, "b");
		parameterDeclarationNode2.children.push(parameterNameNode2);
		var parameterTypeNode2 = new VariableTypeNode(undefined, undefined, new FloatDataType());
		parameterDeclarationNode2.children.push(parameterTypeNode2);
		functionParametersListNode.children.push(parameterDeclarationNode2);
		
		this.children.push(functionParametersListNode);
		
		// Local variable declarations
		this.children.push(new VariablesDeclarationListNode());
		
		// Instructions
		this.children.push(undefined);

		// End
		this.children.push(undefined);
		
		// Begin
		this.children.push(undefined);
		
		// Return type
		var returnTypeNode = new VariableTypeNode(undefined, undefined, new FloatDataType());
		this.children.push(returnTypeNode);
	}
	
	// Prototype based inheritance
	MinFunctionNode.prototype = new BuiltInFunctionNode();
	MinFunctionNode.prototype.constructor = MinFunctionNode;

	MinFunctionNode.prototype.executeBuiltInFunction = function(nodeContext, memory, nodeStack, programRunner) {
		nodeContext.setValue(new FloatMemoryValue(Math.min(
				nodeContext.parametersValues.children[0].value.value,
				nodeContext.parametersValues.children[1].value.value
		)));
	}

	return MinFunctionNode;
	
});
