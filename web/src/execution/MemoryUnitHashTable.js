/**
 * class MemoryUnitHashTable
 * Memory units are stored in an associative array : address -> memory unit
 * The prefix "@" is used in keys to force the javascript engine to use a hashmap 
 * @param memory : a reference on the whole memory
 * @author michael
 */
var MemoryUnitHashTable = function(memory){

	this.memory = memory;

	
	this.memoryUnits = {}; //associative array : address -> memory unit
}
	
MemoryUnitHashTable.prototype.getUnit = function(address){
	return this.memoryUnits["@" + address];
}
	
MemoryUnitHashTable.prototype.setUnit = function(address, unit, parentUnit){

	if(parentUnit == undefined){
		parentUnit = unit;
	}
	
	var memory = unit.memory;
	var memoryOffset = 0;
	
	if( unit.isArray() ){
		
		var elementsSize = unit.getDataType().getElementsSize(); 	
		var elementsCount = unit.getDataType().getLength();	
		var dataType = unit.getDataType().getElementsDataType();

		
		for(var i=0; i < elementsCount; i++){
			
			var childUnit = new MemoryUnit(memory, address, dataType);
			unit.addChild( childUnit, memoryOffset );	
			
			
			this.memoryUnits["@" + address] = parentUnit;		
			// recursive process to handle nested data types
			this.setUnit(address, childUnit, parentUnit);
			
			memoryOffset += elementsSize;
			address += elementsSize;
		}		
	}
	else if( unit.isStructure() ){
		
		var currentDataType;
		var currentSize;
				
		var fields = unit.getDataType().getStructureDeclarationNode().getFieldDeclarationList().getChildren();
		
		for(var i=0; i < fields.length; i++){
			currentDataType = fields[i].getVariableType();
			currentSize = currentDataType.getSize();
						
			var childUnit = new MemoryUnit(memory, address, currentDataType);
			unit.addChild( childUnit, memoryOffset );	
			
			
			this.memoryUnits["@" + address] = parentUnit;		
			// recursive process to handle nested data types
			this.setUnit(address, childUnit, parentUnit);
			
			memoryOffset += currentSize;
			address += currentSize;
 			
		}		
		
	}
	else{ // stopping criterion : primitive data type
		this.memoryUnits["@" + address] = parentUnit;		
	}
	

}	

MemoryUnitHashTable.prototype.deleteUnit = function(address){
	
	var unit = this.memoryUnits["@" + address];
	
	if( unit == undefined){
			throw new Error("[MemoryUnitHashTable.deleteUnit()] No unit at address: " +  address); // -> BadAddressException
	}
	
	this.deleteUnitRec( unit );
	
	
}

MemoryUnitHashTable.prototype.deleteUnitRec = function(unit){
	
	if( unit.isComposedDataType() ){
		
		unit.finalize();
				
		var cells = unit.getChildren();
	
		
		for(var cellAddressKey in cells){

			var cellAddress = MathUtils.getAddressFromKey(cellAddressKey);
			
			this.deleteUnitRec( cells[ cellAddressKey ] );

		}
				
	}
	else{

		unit.finalize();
		delete this.memoryUnits["@" + unit.getAddress() ];	
	}
	
	
}
	
MemoryUnitHashTable.prototype.getMemoryUnits = function(){
	return this.memoryUnits;
}

MemoryUnitHashTable.prototype.getMemoryUnitsAsArray = function(){
	
	var memoryUnits = [];
	
	for(memoryUnitKey in this.memoryUnits){
		
		var  memoryUnit = this.memoryUnits[memoryUnitKey];
		
		if (memoryUnit.matchKey(memoryUnitKey) ){
			memoryUnits.push( memoryUnit );
		}
			
		
	} 
	
	return memoryUnits;
	
}

MemoryUnitHashTable.prototype.getMemoryUnitsCount = function(){
	return Object.keys(this.memoryUnits).length;
}

MemoryUnitHashTable.prototype.getMemoryUnitsKeys = function(){
	return Object.keys(this.memoryUnits);
}

