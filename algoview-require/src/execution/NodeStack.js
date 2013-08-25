define("NodeStack",
["NodeStackElement"],
function(NodeStackElement) {
	
	var NodeStack = function() {
		this.nodes = new Array();
	}

	NodeStack.prototype.peek = function() {
		return this.nodes[this.nodes.length - 1];
	}

	NodeStack.prototype.push = function(programNode, nodeContext) {
		if (nodeContext == undefined) {
			nodeContext = programNode.createContext(programNode);
		}
		
		nodeContext.programNode = programNode;
		this.nodes.push(new NodeStackElement(programNode, nodeContext));
		
		return nodeContext;
	}

	NodeStack.prototype.pop = function() {
		var nodeStackElement = this.nodes.pop();
		nodeStackElement.contextNode.setExecuted(true);
		return nodeStackElement;
	}

	NodeStack.prototype.isEmpty = function() {
		return (this.nodes.length == 0);
	}

	NodeStack.prototype.level = function() {
		return (this.nodes.length);
	}

	NodeStack.prototype.getItem = function(level) {
		return (this.nodes[level]);
	}

	NodeStack.prototype.print = function() {
		console.log("Stack");
		for (var i = 0; i < this.nodes.length; ++i) {
			console.log(this.nodes[i], this.nodes[i].contextNode.currentChild);
		}
		console.log("-----------");
	}

	return NodeStack;
});
