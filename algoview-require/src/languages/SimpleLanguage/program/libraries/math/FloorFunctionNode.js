define("FloorFunctionNode",
["BuiltInFunctionNode", "FunctionNameNode", "FunctionParametersListNode",
"VariablesDeclarationListNode", "VariableDeclarationNode",
"VariableNameNode", "VariableTypeNode", "IntegerDataType", "IntegerMemoryValue"],
function(BuiltInFunctionNode, FunctionNameNode, FunctionParametersListNode,
VariablesDeclarationListNode, VariableDeclarationNode,
VariableNameNode, VariableTypeNode, IntegerDataType, IntegerMemoryValue) {
	
	function FloorFunctionNode() {
		BuiltInFunctionNode.call(this);
		
		// Name
		this.children.push(new FunctionNameNode(undefined, undefined, "floor"));
		
		// Parameters
		var functionParametersListNode = new FunctionParametersListNode();
		var parameterDeclarationNode = new VariableDeclarationNode();
		var parameterNameNode = new VariableNameNode(undefined, undefined, "number");
		parameterDeclarationNode.children.push(parameterNameNode);
		var parameterTypeNode = new VariableTypeNode(undefined, undefined, new FloatDataType());
		parameterDeclarationNode.children.push(parameterTypeNode);
		functionParametersListNode.children.push(parameterDeclarationNode);
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
		var returnTypeNode = new VariableTypeNode(undefined, undefined, new IntegerDataType());
		this.children.push(returnTypeNode);
	}
	
	// Prototype based inheritance
	FloorFunctionNode.prototype = new BuiltInFunctionNode();
	FloorFunctionNode.prototype.constructor = FloorFunctionNode;

	FloorFunctionNode.prototype.executeBuiltInFunction = function(nodeContext, memory, nodeStack, programRunner) {
		// TODO: Convert parameter in Float
		nodeContext.setValue(new IntegerMemoryValue(Math.floor(nodeContext.parametersValues.children[0].value.value)));
	}

	return FloorFunctionNode;
	
});
