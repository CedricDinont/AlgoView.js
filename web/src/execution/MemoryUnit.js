/**
 * class MemoryUnit : models a memory unit
 * In the case of a composed type (array, struture), the memoryunit is the root of a tree
 * @param memory : the whole memory
 * @param address : the address of the unit
 * @param dataType : the data type of the unit
 * @author michael  
 */
var MemoryUnit = function(memory, address, dataType){

	this.memory = memory;
	this.address = address;
	this.dataType = dataType;
	this.parent = undefined;		
	this.children = {};			// associative array "@" + address -> child memory unit
	this.view = undefined;
	
}


MemoryUnit.prototype.matchKey = function(otherKey){
	var myKey = "@" + this.address;
	
	return (myKey == otherKey);
}

MemoryUnit.prototype.getParent = function(){
	return this.parent;
}

MemoryUnit.prototype.getChildren = function(){
	return this.children;
}

MemoryUnit.prototype.getChildCount = function(){
	return Object.keys(this.children).length;
}



MemoryUnit.prototype.getBaseAddress = function(refAddress){

	for(var childKey in this.children){
	
		var child = this.children[childKey];
		
		var childAddress = MathUtils.getAddressFromKey(childKey);
		
		if( refAddress >= childAddress && refAddress < childAddress + child.getDataType().getSize() ){
			return childAddress;
		}
		
	}
	
	return undefined;
	
	
}

MemoryUnit.prototype.hasChangedRecursive = function(){
	
	if( this.isComposedDataType() ){
	
		for(var child in this.children){
			if( child.hasChangedRecursive() ){ // recursion
				return true;
			}
		}
		
		return false;
	}
	else{
		return this.hasChanged();
	}
}



MemoryUnit.prototype.getChild = function(childAddress){
	
	// recursive depth first search in the case of a composed data type
	if( this.isComposedDataType() ){
		
		var baseAddress = this.getBaseAddress(childAddress);
		
		if(baseAddress != undefined ){
			var child = this.children["@" + baseAddress];
			
			if(	child.isComposedDataType() ){
				return child.getChild(childAddress);		// recursion
			}
		}

		
	}
	
	return this.children["@" + childAddress];
}	

MemoryUnit.prototype.addChild = function(memoryUnit, memoryOffset){
	var childAddress = this.address + memoryOffset;
	
	this.children["@" + childAddress] = memoryUnit;
	
	memoryUnit.parent = this;
}



	
MemoryUnit.prototype.getDataType = function(){
	return this.dataType;
}	

MemoryUnit.prototype.getSize = function(){
	return this.dataType.getSize();
}	
	
MemoryUnit.prototype.getAddress = function(){
	return this.address;
}

MemoryUnit.prototype.getMemory = function(){
	return this.memory;
}

MemoryUnit.prototype.getValue = function(){
	return this.memory.getValue(this.address);
}

MemoryUnit.prototype.isAccessibleFromStack = function(){
	return this.memory.getValue(this.address).isAccessibleFromStack();
}


MemoryUnit.prototype.setValue = function(memoryValue){
	
	this.memory.setValue(this.address, memoryValue);

}	
	
	
MemoryUnit.prototype.getPrimitiveValue = function(){
	return this.memory.getValue(this.address).getPrimitiveValue();
}	

MemoryUnit.prototype.getValueString = function(){
	return this.memory.getValue(this.address).toString();
}

MemoryUnit.prototype.hasChanged = function(){
	return this.memory.getValue(this.address).hasChanged();
}
	
MemoryUnit.prototype.hasValue = function(){
	return (this.memory.getValue(this.address).getState() == MemoryState.HAS_VALUE);
}	

MemoryUnit.prototype.finalize = function(){
	
	if(this.enclosingView != undefined){
		this.enclosingView.clear();
	}
		
	if(this.view != undefined){
		this.view.clear();
	}
}	
	
MemoryUnit.prototype.getView = function(){
	return this.view;
}

MemoryUnit.prototype.setView = function(view){
	this.view = view;
}


MemoryUnit.prototype.toString = function(){
	
	var dataString;
	var nameString = (this instanceof Variable) ? this.getName() : this.getDataType();
	
	if( this.isArray() ) {
		
		
		dataString = "[";
		
		var length = this.getDataType().getLength();
		var currentAddress = this.getAddress();
		var elementsSize = this.getDataType().getElementsSize(); 		
		
		for(var i=0; i < length; i++){
			dataString += this.memory.getValue(currentAddress).toString();
			currentAddress += elementsSize;
			
			if(i< length - 1){
				dataString +=",";
			}
		}
		
		dataString += "]";
				
	}
	else{
		dataString = this.getValueString();
	}
	
	return nameString + "@" + this.getAddress() + "(" + dataString + ")";
}

MemoryUnit.prototype.isComposedDataType = function(){
	return ( this.isArray() || this.isStructure() );
}

MemoryUnit.prototype.isPointer = function(){
	
	return (this.dataType instanceof PointerDataType);
}

MemoryUnit.prototype.isArray = function(){
	
	return (this.dataType instanceof ArrayDataType);
}

MemoryUnit.prototype.isStructure = function(){
	
	return (this.dataType instanceof StructureDataType);
}

MemoryUnit.prototype.isBoolean = function(){
	
	return (this.dataType instanceof BooleanDataType);
}
	


