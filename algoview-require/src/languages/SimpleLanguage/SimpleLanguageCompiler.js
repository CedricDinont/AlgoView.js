define("SimpleLanguageCompiler",
["Compiler", "FunctionNotImplemented", "SimpleLanguageLexer", 
"SimpleLanguageParser", "CompilationError",  "VariablesDeclarationListNode", 
"VariableDeclarationNode", "VariableNameNode", "StructureDataType",
"CompilerEvent"],
function(Compiler, FunctionNotImplemented, SimpleLanguageLexer,
SimpleLanguageParser, CompilationError, VariablesDeclarationListNode, 
VariableDeclarationNode, VariableNameNode, StructureDataType,
CompilerEvent) {

	function SimpleLanguageCompiler () {
		
		Compiler.call(this);
		
		var self = this;
		org.antlr.runtime.BaseRecognizer.prototype.emitErrorMessage = function (msg) {
			if (DEBUG) {
				console.log(msg);
			}
			self.errors.push(msg);
		}; 
	}
	
	// Prototype based inheritance
	SimpleLanguageCompiler.prototype = new Compiler();
	SimpleLanguageCompiler.prototype.constructor = SimpleLanguageCompiler;
	
	SimpleLanguageCompiler.prototype.compile = function(program) {
		this.errors = new Array();

		this.notifyListeners(new CompilerEvent(this, "STARTED_COMPILATION"));

		var cstream = new org.antlr.runtime.ANTLRStringStream(program.currentSource.text + "\n");
		var lexer = new SimpleLanguageLexer(cstream);
		var tstream = new org.antlr.runtime.CommonTokenStream(lexer);
		var parser = new SimpleLanguageParser(tstream);
		var programTree = parser.program();

		if (this.errors.length != 0) {
			this.sendCompilationErrorEvent();
			return false;
		}

		if (DEBUG) {
			console.log("Program tree", programTree.tree);
		}
		
		if (! this.findMainFunction(programTree.tree)) {
			this.errors.push("ERROR: No main function defined.");
			this.sendCompilationErrorEvent();
			return false;
		}

		this.parseVariablesDeclarationNodesForFunctions(programTree.tree);
		this.parseVariablesDeclarationNodesForStructureDeclarations(programTree.tree);
		this.findStructureDeclarations(programTree.tree);
		this.findFunctionDefinitionForFunctionCalls(programTree.tree);

		if (this.errors.length != 0) {
			this.sendCompilationErrorEvent();
			return false;	
		}

		program.programTree = programTree.tree;		
		this.notifyListeners(new CompilerEvent(this, "COMPILED_PROGRAM"));

		return true;
	}

	SimpleLanguageCompiler.prototype.sendCompilationErrorEvent = function() {
		var event = new CompilerEvent(this, "COMPILATION_ERROR");
		event.errors = this.errors;
		this.notifyListeners(event);
	}

	SimpleLanguageCompiler.prototype.findMainFunction = function(program) {
		var functionList = program.getFunctionList();
		for (var i = 0; i < functionList.children.length; ++i) {
			if (functionList.children[i].getName() == "main") {
				program.setMainFunction(functionList.children[i]);
				return true;
			}
		}
		return false;
	}

	SimpleLanguageCompiler.prototype.parseVariablesDeclarationNodesForFunctions = function(program) {
		var functionList = program.getFunctionList();
		for (var i = 0; i < functionList.children.length; ++i) {
			var currentFunctionNode = functionList.children[i];
			var variablesDeclarationListNode = currentFunctionNode.getLocalVariableDeclarations();
			currentFunctionNode.setLocalVariableDeclarations(this.parseVariablesDeclarationNodes(variablesDeclarationListNode));
		}
	}

	SimpleLanguageCompiler.prototype.parseVariablesDeclarationNodesForStructureDeclarations = function(program) {
		var structureDeclarationList = program.getStructureDeclarationList();

		if (structureDeclarationList.children == undefined) {
			return;
		}

		for (var i = 0; i < structureDeclarationList.children.length; ++i) {
			var currentStructureDeclarationNode = structureDeclarationList.children[i];
			var variablesDeclarationListNode = currentStructureDeclarationNode.getFieldDeclarationList();
			currentStructureDeclarationNode.setFieldDeclarationList(this.parseVariablesDeclarationNodes(variablesDeclarationListNode));
		}
	}

	SimpleLanguageCompiler.prototype.parseVariablesDeclarationNodes = function(variablesDeclarationListNode) {
		var newVariablesDeclarationListNode = new VariablesDeclarationListNode();
		for (var j = 0; j < variablesDeclarationListNode.children.length; ++j) {
			var currentVariablesDeclarationNode = variablesDeclarationListNode.children[j];
			var identifierList = currentVariablesDeclarationNode.getIdentifierList();
			for (var k = 0; k < identifierList.children.length; ++k) {
				var newVariableDeclarationNode = new VariableDeclarationNode();
				newVariableDeclarationNode.addChild(new VariableNameNode(undefined, undefined, identifierList.children[k].getText()));
				newVariableDeclarationNode.addChild(currentVariablesDeclarationNode.getVariableType());
				newVariablesDeclarationListNode.addChild(newVariableDeclarationNode);
			}
		}
		return newVariablesDeclarationListNode;
	}

	SimpleLanguageCompiler.prototype.findStructureDeclarations = function(program) {
		var structureDeclarationListNode = program.getStructureDeclarationList();
		var functionList = program.getFunctionList();
		for (var i = 0; i < functionList.children.length; ++i) {
			var currentFunctionNode = functionList.children[i];
			var variablesDeclarationListNode = currentFunctionNode.getLocalVariableDeclarations();
			for (var j = 0; j < variablesDeclarationListNode.children.length; ++j) {
				var currentVariableDeclarationNode = variablesDeclarationListNode.children[j];
				var dataType = currentVariableDeclarationNode.getVariableType();
				if (dataType instanceof StructureDataType) {
					var structureDeclarationNode = this.findStructureDeclarationNode(dataType.getStructureName());
					dataType.setStructureDeclarationNode(structureDeclarationNode);
				}
			}
		}
	}

	SimpleLanguageCompiler.prototype.findStructureDeclarationNode = function(structureName) {
		var structureDeclarationNode = this.programTree.getStructureDeclarationList().getStructureDeclarationByName(structureName);
		if (structureDeclarationNode == undefined) {
			JSUtils.throwException("UndeclaredItemException", "Undeclared structure : " + dataType.getStructureName());	
		}
		return structureDeclarationNode;
	}
	
	SimpleLanguageCompiler.prototype.findFunctionDefinitionForFunctionCalls = function(program) {
		var functionCalls = program.getFunctionCalls();
		
		for (var i = 0; i < functionCalls.length; ++i) {
			var functionNode = program.getFunctionNode(functionCalls[i].getFunctionName(), functionCalls[i].getNumberOfParameters());
			if (functionNode === undefined) {
				this.errors.push("Function not implemented: " + functionCalls[i].getFunctionName() + " with " +  functionCalls[i].getNumberOfParameters() + " parameters.");
			} else {
				functionCalls[i].setFunctionNode(functionNode);
			}
		}
	}

	return SimpleLanguageCompiler;
});
