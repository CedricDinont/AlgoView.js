define("TreeProgramRunner",
["ProgramRunner", "JSUtils", 
"Memory", "NodeStack", "ProgramRunnerEvent", "BreakpointList", 
"NodeContext", "NodeStackElement", "FunctionNode"],
function(ProgramRunner, JSUtils, 
Memory, NodeStack, ProgramRunnerEvent, BreakpointList, 
NodeContext, NodeStackElement, FunctionNode) {

	var TreeProgramRunner = function() {
		ProgramRunner.call(this);
		
		this.nodeStack = new NodeStack(); 
		
		this.instructionCounter = 0;
	}
	
	// Prototype based inheritance
	TreeProgramRunner.prototype = new ProgramRunner();
	TreeProgramRunner.prototype.constructor = TreeProgramRunner;

	TreeProgramRunner.prototype.getProgramTree = function() {
		if (this.program != undefined) {
			return this.program.programTree;
		} else {
			return undefined;
		}
	}

	TreeProgramRunner.prototype.reset = function() {
		this.memory.reset();
		this.nodeStack = new NodeStack();
		this.stopOnException = false;
	}


	// @Override
	TreeProgramRunner.prototype.start = function() {
		this.reset();	
				
		this.nodeStack.push(this.program.programTree, new NodeContext());
		
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

	// @Override
	TreeProgramRunner.prototype.stopProgram = function(doReset) {
		var currentNode;
		
		if (this.nodeStack.isEmpty()) {
			console.log("Stack empty before stopping program.");
			return;
		}
		
		// On vide la pile
		while (!this.nodeStack.isEmpty()) {
			currentStackElement = this.nodeStack.pop();
		}
		
		// On remet le noeud program sur la pile
		currentStackElement.contextNode.setExecuted(false);
		this.nodeStack.push(currentStackElement.programNode, currentStackElement.contextNode);
		
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

	TreeProgramRunner.prototype.stepInFunctions = function(alreadyInMemoryTransaction) {
		if (! alreadyInMemoryTransaction) {
			this.memory.beginTransaction();
			this.instructionCounter = 0;
		}
		
		this.doStep(function(currentNode) {
			// A chaque fois qu'on a la possibilité de s'arrêter, on s'arrête
			return true;
		});
		
		if (! alreadyInMemoryTransaction) {
			this.memory.endTransaction();
		}
	}

	TreeProgramRunner.prototype.stepOverFunctions = function() {
		var stackLevelBeforeStepOver = this.nodeStack.level();
		var self = this;
		var lineBeforeStepOver = this.nodeStack.peek().programNode.getFilePosition();
		var currentLine = lineBeforeStepOver;
		
		this.memory.beginTransaction();
		this.instructionCounter = 0;

		if (DEBUG) {
			console.log("Stack before step over");
			this.nodeStack.print();
		}

		while (currentLine == lineBeforeStepOver) {
			this.stepInFunctions(true);

			if (DEBUG) {
				console.log("Stack after step in");
				this.nodeStack.print();
			}
			
			var enteredFunction = false;
			var currentLevel = this.nodeStack.level() - 1;
			while (currentLevel >= stackLevelBeforeStepOver) {
				if (this.nodeStack.getItem(currentLevel).programNode instanceof FunctionNode) {
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
			currentLine = this.nodeStack.peek().programNode.getFilePosition();
		}
		
		this.memory.endTransaction();
	}

	TreeProgramRunner.prototype.stepOutCurrentFunction = function(alreadyInMemoryTransaction) {
		// Recherche du noeud correspondant à la fonction dans laquelle on se trouve
		var currentNodeStackLevel = this.nodeStack.level();
		var currentFunctionNode;
		while (!((currentFunctionNode = this.nodeStack.getItem(currentNodeStackLevel - 1)).programNode instanceof FunctionNode)) {
			currentNodeStackLevel--;
		}
		
		this.stopAtEnd = true;
		
		if (! alreadyInMemoryTransaction) {
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

		if (! alreadyInMemoryTransaction) {
			this.memory.endTransaction();	
		}
	}

	TreeProgramRunner.prototype.continueToNextBreakpoint = function() {
		var self = this;
		
		var oldStopAtBegin = this.stopAtBegin;
		this.stopAtBegin = true;
		
		this.memory.beginTransaction();	
		this.instructionCounter = 0;
		this.doStep(function(currentNode) {
			var currentFilePosition = self.nodeStack.peek().programNode.getFilePosition();
			if (self.breakpoints.isBreakpoint(currentFilePosition)) {
				return true;
			} else {
				return false;
			}
		});
		this.memory.endTransaction();
		
		this.stopAtBegin = oldStopAtBegin;
	}

	TreeProgramRunner.prototype.doStep = function(stopChecker) {
		var stop = false;

		if (this.nodeStack.isEmpty()) {
			return;
		}

		/* Tant que la pile n'est pas vide et que le stopChecker ne nous a 
		 * pas dit d'arrêter, on dépile un noeud et on l'exécute.
		 * La fonction execute() des noeuds renvoie un booléen indiquant
		 * si on a atteint un éventuel point d'arrêt.
		 * Dans l'affirmative, on crée un événement DONE_INSTRUCTION.
		 * On soumet ensuite le point d'arrêt au stop checker pour savoir 
		 * si on stoppe vraiment.
		 * Si on stoppe, on crée un événement DONE_STEP.
		 */ 
		while ((! stop) && (! this.nodeStack.isEmpty())) {
			var currentNodeStackElement = this.nodeStack.peek();
			var currentNode = currentNodeStackElement.programNode;
			var currentNodeContext = currentNodeStackElement.contextNode;

			if (DEBUG) {
				console.log(currentNodeStackElement);
			}
			
			if (currentNodeContext.isExecuted()) {
				this.nodeStack.pop();
				continue;
			}
			
			var stopPoint = true;
			
			try {
				stopPoint = currentNode.execute(currentNodeContext, this.memory, this.nodeStack, this);
				
				// Infinite loop detection in the Simple Language program
				this.instructionCounter++;
				if (this.instructionCounter == ProgramRunner.INFINITE_LOOP_DETECTION_INSTRUCTION_THRESHOLD) {
					JSUtils.throwException("InfiniteLoopException");	
				}
			} catch (e) {
				console.log("Exception during node execution", currentNode, currentNode.getFilePosition(), currentNodeContext, e, e.stack);
				//var instructionEvent = new ProgramRunnerEvent(this, "DONE_INSTRUCTION");
				//instructionEvent.setFilePosition(currentNode.getFilePosition());
				//this.notifyListeners(instructionEvent);
				
				var exceptionEvent = new ProgramRunnerEvent(this, "EXCEPTION", undefined, e);
				this.notifyListeners(exceptionEvent);
				return;
			}

			if (stopPoint) {
				// Attention, ne pas utiliser currentNode car il y a eu de nouveaux noeuds sur la pile depuis son exécution
				var newCurrentNodeStackElement = this.nodeStack.peek();
				var newCurrentNode = newCurrentNodeStackElement.programNode;
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

	TreeProgramRunner.INFINITE_LOOP_DETECTION_INSTRUCTION_THRESHOLD = 1000000;

	return TreeProgramRunner;
});

