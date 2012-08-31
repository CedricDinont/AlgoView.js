var AssignNode = function(tokenType, token) {	
	Node.call(this, tokenType, token);
}

// Prototype based inheritance
AssignNode.prototype = new Node();

AssignNode.prototype.getVariable = function() {
	return this.children[0];
}

AssignNode.prototype.getExpression = function() {
	return this.children[1];
}

AssignNode.prototype.execute = function(memory, nodeStack, programRunner) {
	console.log("AssignNode", this.currentChild);
	if (this.currentChild == 0) {
		this.currentChild++;
		nodeStack.push(this.getExpression());
	} else if (this.currentChild == 1) {
		this.currentChild++;
		nodeStack.push(this.getVariable());
	} else if (this.currentChild == 2) {
		this.currentChild++;
		if (this.getExpression().containsFunctionCall()) {
			console.log("AssignNode contains function call.");
			return true;
		} else {
			console.log("AssignNode does not contain function call.");
			return false;
		}
	} else {
		this.currentChild = 0;

		// TODO: Gérer la conversion de type entre le résultat et le type de destination

		console.log("Execute assign", this.getVariable(), this.getExpression());

		memory.setValue(this.getVariable().getAddress(), this.getExpression().getValue());
		nodeStack.pop();
	}
	return false;
}
