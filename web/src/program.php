<?php

	include("jquery.php");
	include("memory_model.php");
	
	addJsLibrary("lib/deepCopy/deepCopy.js");

	addJsLibrary("program/Program.js");
	addJsLibrary("program/FileLocation.js");
	addJsLibrary("program/Node.js");
	addJsLibrary("program/ProgramNode.js");
	addJsLibrary("program/PrintNode.js");
	addJsLibrary("program/IfNode.js");
	addJsLibrary("program/WhileNode.js");
	addJsLibrary("program/ForNode.js");
	addJsLibrary("program/DoWhileNode.js");

	addJsLibrary("program/StringNode.js");
	addJsLibrary("program/ExpressionNode.js");
	addJsLibrary("program/ConditionNode.js");
	addJsLibrary("program/ArithmeticExpressionNode.js");
	addJsLibrary("program/TestNode.js");
	addJsLibrary("program/AndNode.js");
	addJsLibrary("program/OrNode.js");
	addJsLibrary("program/NotNode.js");
	addJsLibrary("program/UnaryMinusNode.js");
	addJsLibrary("program/AssignableNode.js");
	addJsLibrary("program/NumberNode.js");
	addJsLibrary("program/StructureElementNameNode.js");
	addJsLibrary("program/StructureElementNode.js");
	addJsLibrary("program/ArrayElementNode.js");
	addJsLibrary("program/PointerDereferenceNode.js");
	addJsLibrary("program/NullPointerNode.js");
	addJsLibrary("program/AllocateNode.js");
	addJsLibrary("program/FreeNode.js");
	addJsLibrary("program/AssignStringNode.js");
	addJsLibrary("program/AssignNode.js");
	addJsLibrary("program/AssignExpressionNode.js");
	addJsLibrary("program/IdentifierListNode.js");
	addJsLibrary("program/InstructionListNode.js");
	addJsLibrary("program/ExpressionListNode.js");
	addJsLibrary("program/FunctionNode.js");
	addJsLibrary("program/FunctionListNode.js");
	addJsLibrary("program/FunctionCallNode.js");
	addJsLibrary("program/FunctionNameNode.js");
	addJsLibrary("program/FunctionParametersListNode.js");
	addJsLibrary("program/FunctionParameterDeclarationNode.js");
	addJsLibrary("program/ReturnNode.js");
	addJsLibrary("program/StructureDeclarationListNode.js");
	addJsLibrary("program/RandomNode.js");
	addJsLibrary("program/ErrorNode.js");
	addJsLibrary("program/AddressNode.js");
	addJsLibrary("program/DereferenceNode.js");
	addJsLibrary("program/BeginNode.js");
	addJsLibrary("program/EndNode.js");
	
	addJsLibrary("program/VariableTypeNode.js");
	addJsLibrary("program/VariableNameNode.js");
	addJsLibrary("program/VariableDeclarationNode.js");
	addJsLibrary("program/StructureDeclarationNode.js");	
	addJsLibrary("program/StructureNameNode.js");
		
	addJsLibrary("program/VariablesDeclarationListNode.js");
	addJsLibrary("program/VariablesDeclarationNode.js");
	addJsLibrary("execution/NodeStack.js");
	addJsLibrary("execution/Breakpoint.js");
	addJsLibrary("execution/BreakpointList.js");
	addJsLibrary("execution/ProgramRunner.js");
	addJsLibrary("execution/ProgramRunnerEvent.js");

?>
