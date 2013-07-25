define("SimpleLanguageCompiler",
["Compiler", "FunctionNotImplemented"],
function(Compiler, FunctionNotImplemented) {

	function SimpleLanguageCompiler () {
		
		Compiler.call(this);
		
		var self = this;
		org.antlr.runtime.BaseRecognizer.prototype.emitErrorMessage = function (msg) {
			if (DEBUG) {
				console.log(msg);
			}
			$j('#outputPanel-body').html("<div class='error-message'>" + msg + "</div>"); //A REMETTRE
			self.errors.push(msg);
		};
	}
	
	// Prototype based inheritance
	SimpleLanguageCompiler.prototype = new Compiler();
	SimpleLanguageCompiler.prototype.constructor = SimpleLanguageCompiler;
	
	SimpleLanguageCompiler.prototype.compile = function(program) {
		this.reset();	

		this.errors = new Array();
		$j('#outputPanel-body').html(""); //A REMETTRE
		var cstream = new org.antlr.runtime.ANTLRStringStream(this.program.text + "\n");
		var lexer = new SimpleLanguageLexer(cstream);
		var tstream = new org.antlr.runtime.CommonTokenStream(lexer);
		var parser = new SimpleLanguageParser(tstream);
		var programTree = parser.program();

		if (this.errors.length != 0) {
			throw new CompilationError(this.errors);
		}

		if (DEBUG) {
			console.log("Program tree", programTree.tree);
		}
		
		if (! this.findMainFunction(programTree.tree)) {
			$j('#outputPanel-body').html("<div class='programRunnerErrorMessage'>" + "ERROR: No main function defined." + "</div>");
			this.programTree = undefined;
			this.errors.push("ERROR: No main function defined.");
			throw new CompilationError(this.errors);
		}

		this.parseVariablesDeclarationNodesForFunctions(programTree.tree);
		this.parseVariablesDeclarationNodesForStructureDeclarations(programTree.tree);
		this.findStructureDeclarations(programTree.tree);
		this.findFunctionDefinitionForFunctionCalls(programTree.tree);

		if (this.errors.length != 0) {
			throw new CompilationError(this.errors);		
		}
		
		this.state = "COMPILED";
		
		var event = new ProgramRunnerEvent(this, "COMPILED_PROGRAM"); 
		this.notifyListeners(event);

		program.programTree = programTree.tree;
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
	
	SimpleLanguageCompiler.prototype.findFunctionDefinitionForFunctionCalls = function() {
		// TODO: A implementer et à appeler
		/*var functionNode = programRunner.getProgramTree().getFunction(this.getFunctionName(), this.getNumberOfParameters());
		if (functionNode === undefined) {
			throw new FunctionNotImplemented(getFunctionName(), this.getNumberOfParameters());
	    }*/
	}

	return SimpleLanguageCompiler;
});
