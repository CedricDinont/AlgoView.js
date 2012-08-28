/**
 * class StructureNameNode extends Node
 * @param tokenType : the type of the token below
 * @param token : the associated token
 * @param name : the structure name
 * @author michael
 */
 

var StructureNameNode = function(tokenType, token, name) {	

	Node.call(this, tokenType, token);	
	this.name = name;

}

// prototype based inheritance
StructureNameNode.prototype = new Node();

// methods
StructureNameNode.prototype.getName = function() {
	return this.name;
}


