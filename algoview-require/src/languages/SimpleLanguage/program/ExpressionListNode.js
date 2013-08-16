define("ExpressionListNode",
["Node", "NodeContext"],
function(Node, NodeContext) {

	function ExpressionListNode(tokenType, token, name) {	
		Node.call(this, tokenType, token);
	}

	// Prototype based inheritance
	ExpressionListNode.prototype = new Node();
	ExpressionListNode.prototype.constructor = ExpressionListNode;

	ExpressionListNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild < this.children.length) {
			var childContext = this.children[nodeContext.currentChild].createContext();
			nodeContext.addChild(childContext);
			nodeStack.push(this.children[nodeContext.currentChild], childContext);
			nodeContext.currentChild++;
		} else {
			nodeContext.currentChild = 0;
			nodeStack.pop();
		}
		return false;
	}

	return ExpressionListNode;

});
