//AssignableNode
/**
 * class VariableNameNode extends Node
 * @param tokenType : the type of the token below
 * @param token : the associated token 
 * @param name : the structure name
 * @author michael
 */
define("VariableNameNode",
["AssignableNode"],
function(AssignableNode) { 
	function VariableNameNode(tokenType, token, name) {	
	
		AssignableNode.call(this, tokenType, token);	
	
		this.name = name;
	}
	
	// prototype based inheritance
	VariableNameNode.prototype = new AssignableNode();
	VariableNameNode.prototype.constructor = VariableNameNode;
	
	// methods
	VariableNameNode.prototype.getName = function() {
		return this.name;
	}
	
	VariableNameNode.prototype.setName = function(name) {
		this.name = name;
	}
	
	VariableNameNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		var variableName = this.getName();
		var variable = memory.getStack().findVariable(variableName);
	
		nodeContext.setAddress(variable.getAddress());
		nodeContext.setDataType(variable.getDataType());
	
		var value = variable.getValue();
		nodeContext.setValue(value);
	
		nodeStack.pop();
	
		return false;
	}
	
	return VariableNameNode;
});

