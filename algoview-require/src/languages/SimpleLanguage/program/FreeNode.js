define("FreeNode",
["Node"],
function(Node) {

	function FreeNode(tokenType, token) {	
		Node.call(this, tokenType, token);	
	}

	// prototype based inheritance
	FreeNode.prototype = new Node();
	FreeNode.prototype.constructor = FreeNode;

	FreeNode.prototype.getExpression = function() {
		return this.children[0];
	}

	FreeNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.currentChild++;
			nodeContext.expressionContext = nodeStack.push(this.getExpression());
		} else {
			nodeContext.currentChild = 0;
			nodeStack.pop();

			var expressionValue = nodeContext.expressionContext;
			console.log(expressionValue);
			
			// TODO: Vérifier que expressionValue.memoryValue est bien un PointerMemoryValue

			memory.free(expressionValue.getValue());
		}
		return false;
	}
	
	return FreeNode;
	
});
