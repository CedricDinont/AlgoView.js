/**
 * class VariableTypeNode extends Node
 * @param dataType : the type of the variable (DataType instance)
 * @author michael
 */
var VariableTypeNode = function(tokenType, token, dataType) {	

	Node.call(this, tokenType, token);	
	
	this.dataType = dataType;
}

// prototype based inheritance
VariableTypeNode.prototype = new Node();


// methods
VariableTypeNode.prototype.getDataType = function() {
	return this.dataType;
}

VariableTypeNode.prototype.execute = function(memory, nodeStack, programRunner) {
	var dataType = this.getDataType();
	
	if (dataType.type == "STRUCTURE_DATA_TYPE") {
		var structureDeclarationNode = programRunner.findStructureDeclarationNode(dataType.getStructureName());
		dataType.setStructureDeclarationNode(structureDeclarationNode);
	}
	
	nodeStack.pop();
	return false;
}
