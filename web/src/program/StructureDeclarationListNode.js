var StructureDeclarationListNode = function(tokenType, token) {	
	Node.call(this, tokenType, token);
}

// Prototype based inheritance
StructureDeclarationListNode.prototype = new Node();

StructureDeclarationListNode.prototype.getStructureDeclarationByName = function(structureName) {
	for (var i = 0; i < this.children.length; ++i) {
		if (this.children[i].getStructureName() == structureName) {
			return this.children[i];
		}
	}
	return undefined;
}
