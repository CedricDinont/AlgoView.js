/**
 * class Stack  extends MemoryUnitHashTable
 * models a memory stack
 * @param memory : a reference on the whole memory
 * @author michael
 */
var Stack = function(memory) {

	MemoryUnitHashTable.call(this, memory);
	
	this.variables = []; 
	this.endAddress = this.memory.getSize();
	
	this.numberOfVariablesByFunction = new Array();
}

// prototype based inheritance
Stack.prototype = new MemoryUnitHashTable();

// ******* methods

Stack.prototype.pop = function() {	// throws EmptyStackException
	var variable = this.variables.pop();
	
	if (variable == undefined) {
		throw new Error("[Stack.pop()] empty stack"); // -> EmptyStackException
	}
	
	this.decrementNumberOfVariablesForCurrentFunction();
	
	var address = variable.getAddress();	
	var unit = this.getUnit(address);
	var dataSize = unit.getDataType().getSize();
	
	this.endAddress += dataSize;
	this.updateHeapEndAddress(this.endAddress);	
	this.memory.free(address);		
}

Stack.prototype.push = function(variableDeclarationNode) {
	var variableType = variableDeclarationNode.getVariableType();	
	var endAddressTrial = this.endAddress - variableType.getSize();
	var minEndAddress = this.memory.getHeap().getLastVariableAddress();
	
	if (endAddressTrial < minEndAddress - 1) {
		throw new Error("[Stack.push()] Stack overflow");	// -> StackOverflowException 
	}
	
	this.endAddress = endAddressTrial;
	this.updateHeapEndAddress(this.endAddress);
	
	return this.createVariable(this.memory, this.endAddress + 1, variableDeclarationNode);
}

Stack.prototype.enterNewFunction = function() {
	this.numberOfVariablesByFunction[this.numberOfVariablesByFunction.length] = 0;
}

Stack.prototype.getCurrentNumberOfFunctions = function() {
	return this.numberOfVariablesByFunction.length;
}

Stack.prototype.incrementNumberOfVariablesForCurrentFunction = function() {
	this.numberOfVariablesByFunction[this.numberOfVariablesByFunction.length - 1]++;
}

Stack.prototype.decrementNumberOfVariablesForCurrentFunction = function() {
	this.numberOfVariablesByFunction[this.numberOfVariablesByFunction.length - 1]--;
	if (this.getNumberOfVariablesForCurrentFunction() == 0) {
		this.numberOfVariablesByFunction.splice(this.numberOfVariablesByFunction.length - 1);
	}
}

Stack.prototype.getNumberOfVariablesForCurrentFunction = function() {
	return this.numberOfVariablesByFunction[this.numberOfVariablesByFunction.length - 1];
}


Stack.prototype.createVariable = function(memory, address, variableDeclarationNode) {
	var variable = new Variable(memory, address, variableDeclarationNode);	
	
	variable.getDataType().initMemory(memory, address);	// also checks if the area is already allocated
	
	this.setUnit(address, variable);
	this.variables.push(variable);
	this.incrementNumberOfVariablesForCurrentFunction();
	
	this.memory.changed();	
	
	return variable;
}

Stack.prototype.getVariableName = function(address) {	// throws BadAddressExcpetion
	var variable = this.getUnit(address);
	
	if (variable != undefined) {
		return variable.getName();
	} else {
		throw new Error("[Stack.getVariableName()] Unable to find a variable at address " + address); // -> BadAddressExcpetion
	}
}

Stack.prototype.updateHeapEndAddress = function() {
	this.memory.getHeap().setEndAddress(this.endAddress);
}

Stack.prototype.getEndAddress = function() {
	return this.endAddress;
}

Stack.prototype.findVariable = function(name) {	// throws BadVariableNameException
	
	for(var i = this.variables.length - 1; i >= this.variables.length - this.getNumberOfVariablesForCurrentFunction(); i--) {
		var variable = this.variables[i];
		if( variable.getName() == name ) {
			return variable;
		}
	}
	
	throw new Error("[Stack.findVariable()] Unable to find the variable named: " + name); // -> BadVariableNameException
}

Stack.prototype.setVariableValue = function(name, memoryValue) {
	var variable = this.findVariable(name);
	
	variable.setValue(memoryValue);
	this.memory.changed();		
}
