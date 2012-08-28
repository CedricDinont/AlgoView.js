/**
 * class VariableTypeNode extends Node
 * @param dataType : the type of the variable (DataType instance)
 * @author michael
 */
var VariableTypeNode = function(tokenType, token, dataType){	

	Node.call(this, tokenType, token);	
	
	this.dataType = dataType;

}

// prototype based inheritance
VariableTypeNode.prototype = new Node();


// methods
VariableTypeNode.prototype.getDataType = function(){
	return this.dataType;
}


