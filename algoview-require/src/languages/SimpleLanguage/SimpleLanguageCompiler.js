define("SimpleLanguageCompiler",
["Compiler", "SimpleLanguageLexer", "SimpleLanguageParser", 
"VariablesDeclarationListNode", "VariableDeclarationNode", "VariableNameNode",
"StructureDataType", "CompilerEvent", "CompilationError", "NoMainFunctionError", 
"UndefinedFunctionError", "UndefinedStructureError", "ProgramLocation", "ParsingError",
"WrongMainFunctionPrototypeError", "RedefinedFunctionError", "RedefinedStructureError"],
function(Compiler, SimpleLanguageLexer, SimpleLanguageParser, 
VariablesDeclarationListNode, VariableDeclarationNode, VariableNameNode, 
StructureDataType, CompilerEvent, CompilationError, NoMainFunctionError, 
UndefinedFunctionError, UndefinedStructureError, ProgramLocation, ParsingError,
WrongMainFunctionPrototypeError, RedefinedFunctionError, RedefinedStructureError) {

	function SimpleLanguageCompiler() {
		
		Compiler.call(this);
		
		this.program;
		
		var self = this;
		org.antlr.runtime.BaseRecognizer.prototype.emitErrorMessage = function (errorMessage) {
			if (DEBUG) {
				console.log(errorMessage);
			}
			
			var regex = new RegExp("^line ([0-9]+):(-?[0-9]+)(.*)","g");
			var result = regex.exec(errorMessage);
			if (result[1] == 0) {
				result[1] = 1;
			}
		
			var location = new ProgramLocation(self.program,
				self.program.currentSource,
				result[1],
				result[2]
			);
			
			self.errors.push(new ParsingError(location, result[3], errorMessage));
		}; 
	}
	
	// Prototype based inheritance
	SimpleLanguageCompiler.prototype = new Compiler();
	SimpleLanguageCompiler.prototype.constructor = SimpleLanguageCompiler;
	
	SimpleLanguageCompiler.prototype.compile = function(program) {
		this.errors = new Array();
		this.program = program;

		this.notifyListeners(new CompilerEvent(this, "STARTED_COMPILATION"));

		var cstream = new org.antlr.runtime.ANTLRStringStream(program.currentSource.text + "\n");
		var lexer = new SimpleLanguageLexer(cstream);
		var tokenStream = new org.antlr.runtime.CommonTokenStream(lexer);
		var parser = new SimpleLanguageParser(tokenStream);
		var programTree = parser.program();

		if (this.errors.length != 0) {
			this.sendCompilationErrorEvent();
			return false;
		}

		if (DEBUG) {
			console.log("Program tree", programTree.tree);
		}
		
		this.findMainFunction(programTree.tree);
		this.parseVariablesDeclarationNodesForFunctions(programTree.tree);
		this.parseVariablesDeclarationNodesForStructureDeclarations(programTree.tree);
		this.findStructureDeclarations(programTree.tree);
		this.findFunctionDefinitionForFunctionCalls(programTree.tree);
		this.checkRedefinedFunctions(programTree.tree);
		// TODO: Check for redefined structures

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

	SimpleLanguageCompiler.prototype.checkRedefinedFunctions = function(program) {
		var functionList = program.getFunctionList();
		var functionSignatures = new Array();
		// TODO: Push built-in function signatures
		
		for (var i = 0; i < functionList.children.length; ++i) {
			var currentFunction = functionList.children[i];
			var currentFunctionSignature = {
				name: currentFunction.getName(), 
				numberOfParameters: currentFunction.getNumberOfParameters(),
				type: "USER",
				source: "",
				line: ""
			};
			
			for (var j = 0; j < functionSignatures.length; ++j) {
				if ((currentFunctionSignature.name == functionSignatures[j].name)
					&& (currentFunctionSignature.numberOfParameters == functionSignatures[j].numberOfParameters)) {
						this.errors.push(new RedefinedFunctionError(currentFunctionSignature, functionSignatures[j]));
					}
			}
						
			functionSignatures.push(currentFunctionSignature);
		}
	}

	SimpleLanguageCompiler.prototype.checkMainFunctionPrototype = function(functionNode) {
		// Check if this is a PROCEDURE
		if (functionNode.getReturnType() != undefined) {
			return false;
		}
		
		if (functionNode.getNumberOfParameters() != 0) {
			return false;
		}
		
		return true;
	}

	SimpleLanguageCompiler.prototype.findMainFunction = function(program) {
		var haveMainWithWrongPrototype = false;
		var functionList = program.getFunctionList();
		for (var i = 0; i < functionList.children.length; ++i) {
			if (functionList.children[i].getName() == "main") {
				if (this.checkMainFunctionPrototype(functionList.children[i])) {
					program.setMainFunction(functionList.children[i]);
					return;
				} else {
					haveMainWithWrongPrototype = true;
				}
			}
		}
		
		if (haveMainWithWrongPrototype) {
			this.errors.push(new WrongMainFunctionPrototypeError());
		} else {
			this.errors.push(new NoMainFunctionError());
		}
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
					var structureDeclarationNode = this.findStructureDeclarationNode(program, dataType.getStructureName());
					if (structureDeclarationNode == undefined) {
						var variableTypeNode = currentVariableDeclarationNode.children[VariableDeclarationNode.VARIABLE_TYPE_CHILD_INDEX];
						this.errors.push(
							new UndefinedStructureError(
								new ProgramLocation(this.program,
									this.program.currentSource, 
									variableTypeNode.token.line, 
									variableTypeNode.token.charPositionInLine
								),
								dataType.getStructureName()
							)
						);
					}
					dataType.setStructureDeclarationNode(structureDeclarationNode);
				}
			}
		}
	}

	SimpleLanguageCompiler.prototype.findStructureDeclarationNode = function(program, structureName) {
		var structureDeclarationNode = program.getStructureDeclarationList().getStructureDeclarationByName(structureName);
		if (structureDeclarationNode == undefined) {
			return undefined;
		}
		return structureDeclarationNode;
	}
	
	SimpleLanguageCompiler.prototype.findFunctionDefinitionForFunctionCalls = function(program) {
		var functionCalls = program.getFunctionCalls();
		
		for (var i = 0; i < functionCalls.length; ++i) {
			var functionNode = program.getFunctionNode(functionCalls[i].getFunctionName(), functionCalls[i].getNumberOfParameters());
			if (functionNode === undefined) {
				this.errors.push(new UndefinedFunctionError(
					new ProgramLocation(this.program, 
						this.program.currentSource, 
						functionCalls[i].token.line, 
						functionCalls[i].token.charPositionInLine + 1
					),
					functionCalls[i].getFunctionName(),
					functionCalls[i].getNumberOfParameters())
				);
				console.log(this.errors);
			} else {
				functionCalls[i].setFunctionNode(functionNode);
			}
		}
	}

	return SimpleLanguageCompiler;
});
