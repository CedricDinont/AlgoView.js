define("InstructionListNode",
["Node", "NodeContext"],
function(Node, NodeContext) {
	//Node
	function InstructionListNode(tokenType, token) {	
		Node.call(this, tokenType, token);
	}

	// Prototype based inheritance
	InstructionListNode.prototype = new Node();
	InstructionListNode.prototype.constructor = InstructionListNode;

	InstructionListNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild > 0) {
			if (programRunner.stopAfterInstructionExecution
					&& nodeContext.children[nodeContext.currentChild - 1].isExecuted()) {
				--nodeContext.currentChild;
			}
		}

		if (nodeContext.currentChild < this.children.length) {
			var newNodeContext = this.children[nodeContext.currentChild].createContext();
			nodeContext.addChild(newNodeContext);
			nodeStack.push(this.children[nodeContext.currentChild], newNodeContext);
			++nodeContext.currentChild;
			return true;
		} else {
			nodeContext.currentChild = 0;
			nodeStack.pop();
			return false;
		}
	}
	
	return InstructionListNode;
});
