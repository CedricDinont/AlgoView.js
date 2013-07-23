define("FunctionNameNode",
["Node"],
function(Node){
	function FunctionNameNode(tokenType, token, name) {	
		Node.call(this, tokenType, token);
		
		this.name = name;
	}

	// Prototype based inheritance
	FunctionNameNode.prototype = new Node();
	FunctionNameNode.prototype.constructor = FunctionNameNode;

	FunctionNameNode.prototype.getName = function() {
		return this.name;
	}
return FunctionNameNode;
});