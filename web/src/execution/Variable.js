/**
 * class Variable extends MemoryUnit
 * models a function variable
 * @param memory : the whole memory
 * @param address : the address of the unit
 * @param variableDeclarationNode : the node representing the variable in the program tree
 * @author michael
 */
var Variable = function(memory, address, variableDeclarationNode){

	MemoryUnit.call( 	this,
						memory,
						address,
						variableDeclarationNode.getVariableType()
					);
			
	this.variableDeclarationNode = variableDeclarationNode;
}

// prototype based inheritance
Variable.prototype = new MemoryUnit();


Variable.prototype.getName = function() {
        return this.variableDeclarationNode.getVariableName();
}



