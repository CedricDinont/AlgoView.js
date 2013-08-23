//Node
/**
 * class VariableTypeNode extends Node
 * @param dataType : the type of the variable (DataType instance)
 * @author michael
 */
define("VariableTypeNode",
["Node"],
function(Node) {
	
	function VariableTypeNode(tokenType, token, dataType) {	
	
		Node.call(this, tokenType, token);	
		
		this.dataType = dataType;
	}
	
	// prototype based inheritance
	VariableTypeNode.prototype = new Node();
	VariableTypeNode.prototype.constructor = VariableTypeNode;
	
	
	// methods
	VariableTypeNode.prototype.getDataType = function() {
		return this.dataType;
	}
	
	VariableTypeNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		var dataType = this.getDataType();
		
		//console.log("Executing variable type node", this);
		
		if (dataType instanceof StructureDataType) {
			var structureDeclarationNode = programRunner.findStructureDeclarationNode(dataType.getStructureName());
			dataType.setStructureDeclarationNode(structureDeclarationNode);
		}
		
		nodeStack.pop();
		return false;
	}
	
	return VariableTypeNode;
});
