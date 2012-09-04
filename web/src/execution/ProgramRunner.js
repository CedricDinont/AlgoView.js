var ProgramRunner = function(program, memorySize) {
	this.program = program;
	
	if ((memorySize == undefined) || (memorySize <= 0)) {
		memorySize = 255;
	}
	if (memorySize > 10000) {
		memorySize = 10000;
	}
	this.memory = new Memory(memorySize);

	this.nodeStack = new NodeStack();

	this.programTree;
	
	this.startPaused = false;
	this.stopAtBegin = false;
	this.stopAfterInstructionExecution = false;

	this.errors = new Array();
	this.listeners = new Array();
	this.breakpoints = new BreakpointList();
	
	this.state = "STOPPED";
	this.instructionCounter = 0;
	
	org.antlr.runtime.BaseRecognizer.prototype.emitErrorMessage = function (msg) {
		console.log(msg);
		$j('#outputPanel-body').html("<div class='error-message'>" + msg + "</div>");
		algoViewApp.programRunner.errors.push(msg);
	};
}

ProgramRunner.prototype.setStopAfterInstructionExecution = function(value) {
	this.stopAfterInstructionExecution = value;
}

ProgramRunner.prototype.setStartPaused = function(value) {
	this.startPaused = value;
}

ProgramRunner.prototype.addListener = function(listener) {
	this.listeners.push(listener);
}

ProgramRunner.prototype.notifyListeners = function(event) {
	for (var i = 0; i < this.listeners.length; ++i) {
		this.listeners[i].programChanged(event);
	}
}

ProgramRunner.prototype.getProgramTree = function() {
	return this.programTree;
}

ProgramRunner.prototype.reset = function() {
	this.memory.reset();
	this.nodeStack = new NodeStack();
	this.stopOnException = false;
}

ProgramRunner.prototype.compile = function() {
	this.reset();	

	this.errors = new Array();
	$j('#outputPanel-body').html("");
	var cstream = new org.antlr.runtime.ANTLRStringStream(this.program.text + "\n");
	var lexer = new SimpleLanguageLexer(cstream);
	var tstream = new org.antlr.runtime.CommonTokenStream(lexer);
	var parser = new SimpleLanguageParser(tstream);
	var programTree = parser.program();

	if (this.errors.length != 0) {
		throw new CompilationError(this.errors);
	}

	// console.log("Program tree", programTree.tree);
	
	if (! this.findMainFunction(programTree.tree)) {
		$j('#outputPanel-body').html("<div class='programRunnerErrorMessage'>" + "ERROR: No main function defined." + "</div>");
		this.programTree = undefined;
		this.errors.push("ERROR: No main function defined.");
		throw new CompilationError(this.errors);
	}

	this.programTree = programTree.tree;

	this.parseVariablesDeclarationNodesForFunctions(programTree.tree);
	this.parseVariablesDeclarationNodesForStructureDeclarations(programTree.tree);
	this.findStructureDeclarations(programTree.tree);

	if (this.errors.length != 0) {
		throw new CompilationError(this.errors);		
	}
	
	this.state = "COMPILED";
	
	var event = new ProgramRunnerEvent(this, "COMPILED_PROGRAM");
    this.notifyListeners(event);
}

// TODO: Suite à placer ailleurs
ProgramRunner.prototype.findMainFunction = function(program) {
	var functionList = program.getFunctionList();
	console.log(functionList);
	for (var i = 0; i < functionList.children.length; ++i) {
		console.log(functionList.children[i].getName());
		if (functionList.children[i].getName() == "main") {
			program.setMainFunction(functionList.children[i]);
			return true;
		}
	}
	return false;
}

ProgramRunner.prototype.parseVariablesDeclarationNodesForFunctions = function(program) {
	var functionList = program.getFunctionList();
	for (var i = 0; i < functionList.children.length; ++i) {
		var currentFunctionNode = functionList.children[i];
		var variablesDeclarationListNode = currentFunctionNode.getLocalVariableDeclarations();
		currentFunctionNode.setLocalVariableDeclarations(this.parseVariablesDeclarationNodes(variablesDeclarationListNode));
	}
}

ProgramRunner.prototype.parseVariablesDeclarationNodesForStructureDeclarations = function(program) {
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

ProgramRunner.prototype.parseVariablesDeclarationNodes = function(variablesDeclarationListNode) {
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

ProgramRunner.prototype.findStructureDeclarations = function(program) {
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

ProgramRunner.prototype.findStructureDeclarationNode = function(structureName) {
	var structureDeclarationNode = this.programTree.getStructureDeclarationList().getStructureDeclarationByName(structureName);
	if (structureDeclarationNode == undefined) {
		throw new Error("Cannot find structure '" + dataType.getStructureName() + "' declaration.");
	}
	return structureDeclarationNode;
}
// Fin à placer ailleurs

ProgramRunner.prototype.start = function() {
	this.nodeStack.push(this.programTree);
	
	this.state = "RUNNING";
	
	if (this.startPaused) {
		this.memory.beginTransaction();
		this.instructionCounter = 0;
		this.doStep(function() {
			return true;
		});
		this.memory.endTransaction();
	} else {
		this.continueToNextBreakpoint();
	}
}

ProgramRunner.prototype.stopProgram = function(doReset) {
	var currentNode;
	
	if (this.nodeStack.isEmpty()) {
		console.log("Stack empty before stopping program.");
		return;
	}
	
	// On vide la pile
	while (!this.nodeStack.isEmpty()) {
		currentNode = this.nodeStack.pop();
	}
	
	// On remet le noeud program sur la pile
	currentNode.setExecuted(false);
	this.nodeStack.push(currentNode);
	
	if (doReset == false) {
		this.stopOnException = true;
	}
	
	// On l'exécute pour finir proprement l'exécution
	this.memory.beginTransaction();
	this.instructionCounter = 0;
	this.doStep(function(currentNode) {
		return true;
	});
	this.memory.endTransaction();
	
	if (doReset == true) {
		this.reset();
	}
}

ProgramRunner.prototype.stepInFunctions = function(alreadyInMemorytransaction) {
	if (! alreadyInMemorytransaction) {
		this.memory.beginTransaction();
		this.instructionCounter = 0;
	}
	
	this.doStep(function(currentNode) {
		// A chaque fois qu'on a la possibilité de s'arrêter, on s'arrête
		return true;
	});
	
	if (! alreadyInMemorytransaction) {
		this.memory.endTransaction();
	}
}

ProgramRunner.prototype.stepOverFunctions = function() {
	var stackLevelBeforeStepOver = this.nodeStack.level();
	var self = this;
	var lineBeforeStepOver = this.nodeStack.peek().getFilePosition();
	var currentLine = lineBeforeStepOver;
	
	this.memory.beginTransaction();
	this.instructionCounter = 0;

	console.log(currentLine, lineBeforeStepOver);

	while (currentLine === lineBeforeStepOver) {
		this.stepInFunctions(true);
		
		var enteredFunction = false;
		var currentLevel = this.nodeStack.level() - 1;
		while (currentLevel >= stackLevelBeforeStepOver) {
			if (this.nodeStack.getItem(currentLevel).type == "FUNCTION_NODE") {
				enteredFunction = true;
			}
			--currentLevel;
		}
		
		if (enteredFunction) {
			this.stepOutCurrentFunction(true);
		}
		if (this.nodeStack.level() == 0) {
			break;
		}
		currentLine = this.nodeStack.peek().getFilePosition();
	}
	
	this.memory.endTransaction();
}

ProgramRunner.prototype.stepOutCurrentFunction = function(alreadyInMemorytransaction) {
	// Recherche du noeud correspondant à la fonction dans laquelle on se trouve
	var currentNodeStackLevel = this.nodeStack.level();
	var currentFunctionNode;
	while ((currentFunctionNode = this.nodeStack.getItem(currentNodeStackLevel - 1)).type != "FUNCTION_NODE") {
		currentNodeStackLevel--;
	}
	
	this.stopAtEnd = true;
	
	if (! alreadyInMemorytransaction) {
		this.memory.beginTransaction();
		this.instructionCounter = 0;
	}
	this.doStep(function(currentNode) {
		// On stoppe quand on revient sur le noeud fonction précédemment trouvé
		if (currentNode == currentFunctionNode) {
			return true;
		} else {
			return false;
		}
	});
	
	this.stopAtEnd = false;
	
	// On est maintenant sur le noeud end de la fonction
	// On continue encore une fois pour revenir dans la fonction appelante
	this.doStep(function(currentNode) {
		return true;
	});

	if (! alreadyInMemorytransaction) {
		this.memory.endTransaction();	
	}
}

ProgramRunner.prototype.continueToNextBreakpoint = function() {
	var self = this;
	
	var oldStopAtBegin = this.stopAtBegin;
	this.stopAtBegin = true;
	
	this.memory.beginTransaction();	
	this.instructionCounter = 0;
	this.doStep(function(currentNode) {
		var currentFilePosition = self.nodeStack.peek().getFilePosition();
		if (self.breakpoints.isBreakpoint(currentFilePosition)) {
			return true;
		} else {
			return false;
		}
	});
	this.memory.endTransaction();
	
	this.stopAtBegin = oldStopAtBegin;
}

ProgramRunner.prototype.doStep = function(stopChecker) {
	var stop = false;

	if (this.nodeStack.isEmpty()) {
		return;
	}

	/* Tant que la pile n'est pas vide et que le stopChecker ne nous a 
	 * pas dit d'arrêter, on dépile un noeud et on l'exécute.
	 * La fonction execute des noeuds renvoie un booléen indiquant
	 * si on a atteint un éventuel point d'arrêt.
	 * Dans l'affirmative, on crée un événement DONE_INSTRUCTION.
	 * On soumet ensuite le point d'arrêt au stop checker pour savoir 
	 * si on stoppe vraiment.
	 * Si on stoppe, on crée un événement DONE_STEP.
	 */ 
	while ((! stop) && (! this.nodeStack.isEmpty())) {
		var currentNode = this.nodeStack.peek();

		if (currentNode.isExecuted()) {
			this.nodeStack.pop();
			continue;
		}
		
		var stopPoint = true;
		
		try {
			stopPoint = currentNode.execute(this.memory, this.nodeStack, this);
			
			// Infinite loop detection in the Simple Language program
			this.instructionCounter++;
			if (this.instructionCounter == ProgramRunner.INFINITE_LOOP_DETECTION_INSTRUCTION_THRESHOLD) {
				throw new InfiniteLoopException();
			}
		} catch (e) {
			console.log("Exception during node execution", currentNode, currentNode.getFilePosition(), e);
			//var instructionEvent = new ProgramRunnerEvent(this, "DONE_INSTRUCTION");
            //instructionEvent.setFilePosition(currentNode.getFilePosition());
            //this.notifyListeners(instructionEvent);
			var exceptionEvent = new ProgramRunnerEvent(this, "EXCEPTION", undefined, e);
            this.notifyListeners(exceptionEvent);
			return;
		}

		if (stopPoint) {
			// Attention, ne pas utiliser currentNode car il y a eu de nouveaux noeuds sur la pile depuis son exécution
			var newCurrentNode = this.nodeStack.peek();	
            var event = new ProgramRunnerEvent(this, "DONE_INSTRUCTION");
            event.setFilePosition(newCurrentNode.getFilePosition());
            this.notifyListeners(event);

			stop = stopChecker(currentNode);
			if (stop) {
				var event = new ProgramRunnerEvent(this, "DONE_STEP");
				event.setFilePosition(newCurrentNode.getFilePosition()); 
				this.notifyListeners(event);
			}
		}
	}
}

ProgramRunner.INFINITE_LOOP_DETECTION_INSTRUCTION_THRESHOLD = 10000;
