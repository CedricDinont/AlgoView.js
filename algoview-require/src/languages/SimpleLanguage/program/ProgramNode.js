define("ProgramNode",
["Node", "ProgramRunnerEvent", "FunctionNodeContext",
"BuiltInFunctionLibrariesManager", "MathLibrary", "StringLibrary"],
function(Node, ProgramRunnerEvent, FunctionNodeContext,
BuiltInFunctionLibrariesManager, MathLibrary, StringLibrary) {

	function ProgramNode(tokenType, token) {	
		Node.call(this, tokenType, token);
		
		this.builtInFunctionLibrariesManager = new BuiltInFunctionLibrariesManager();
		this.builtInFunctionLibrariesManager.addLibrary(new MathLibrary());
		// this.builtInFunctionLibrariesManager.addLibrary(new StringLibrary());
	}

	// prototype based inheritance
	ProgramNode.prototype = new Node();
	ProgramNode.prototype.constructor = ProgramNode;

	ProgramNode.prototype.getStructureDeclarationList = function() {
		return this.children[0];
	}

	ProgramNode.prototype.getFunctionList = function() {
		return this.children[1];
	}
	
	ProgramNode.prototype.getFunctionCalls = function() {
		return this.functionCalls;
	}

	ProgramNode.prototype.getMainFunction = function() {
		return this.children[2];
	}

	ProgramNode.prototype.setMainFunction = function(mainFunction) {
		this.children[2] = mainFunction;
	}

	ProgramNode.prototype.getFunctionNode = function(functionName, numberOfParameters) {
		
		// Check if the requested function is in a built-in library...
		var builInFunctionNode = this.builtInFunctionLibrariesManager.getFunctionNode(functionName, numberOfParameters);
		if (builInFunctionNode != undefined) {
			return builInFunctionNode;
		}
		
		// ... No. Check if it is in user defined functions...
		var functionList = this.getFunctionList();
		for (var i = 0; i < functionList.children.length; ++i) {
			if (functionList.children[i].getName() === functionName) {
				var currentFunction = functionList.children[i];
				if (currentFunction.getNumberOfParameters() == numberOfParameters) {
					return currentFunction;
				}
			}
		}
		
		// ... No. Requested function does not exist.
		return undefined;
	}

	ProgramNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.currentChild++;
			nodeStack.push(this.getMainFunction(), new FunctionNodeContext());
	        programRunner.notifyListeners(new ProgramRunnerEvent(programRunner, "STARTED_PROGRAM"));
	        return false;
		} else {
			nodeContext.currentChild = 0;
			nodeStack.pop();
			programRunner.state = "STOPPED";
	        programRunner.notifyListeners(new ProgramRunnerEvent(programRunner, "STOPPED_PROGRAM"));
	        return false;
		}
	}
	
	return ProgramNode;
});
