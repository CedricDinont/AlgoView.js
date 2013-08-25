//AssignableNode
define("StructureElementNode",
["AssignableNode"],
function(AssignableNode) { 
	
	function StructureElementNode(tokenType, token) {	
		AssignableNode.call(this, tokenType, token);	
	}
	
	// prototype based inheritance
	StructureElementNode.prototype = new AssignableNode();
	StructureElementNode.prototype.constructor = StructureElementNode;
	
	StructureElementNode.prototype.getVariable = function() {
		return this.children[0];
	}
	
	StructureElementNode.prototype.getField = function() {
		return this.children[1];
	}
	
	StructureElementNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.currentChild++;
			nodeContext.variableContext = nodeStack.push(this.getVariable());
		} else {
			nodeContext.currentChild = 0;
			nodeStack.pop();
	
			var parent = nodeContext.variableContext;
			var structBaseAddress = parent.getAddress();
			var elementDataType = parent.getDataType();
			var structureDeclarationNode = elementDataType.getStructureDeclarationNode();
			var offset = structureDeclarationNode.getFieldOffset(this.getField().getName());
	
			nodeContext.setAddress(structBaseAddress + offset);
			nodeContext.setValue(memory.getValue(nodeContext.getAddress()));
		}
		return false;
	}

	return StructureElementNode;
});
