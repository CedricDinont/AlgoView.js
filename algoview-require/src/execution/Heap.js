/**
 * class Heap extends MemoryUnitHashTable
 * models a memory heap
 * @param memory : a reference on the whole memory
 * @param startAddress : the heap start index in memory cells
 * @param endAddress : the heap end index in memory cells
 * @author michael
 */
 
 define("Heap",
["ArrayDataType", "MemoryUnitHashTable", "MemoryUnit", "PointerMemoryValue"], 
function(ArrayDataType, MemoryUnitHashTable, MemoryUnit, PointerMemoryValue) { 
	 
var Heap = function(memory, startAddress, endAddress) {
	
	MemoryUnitHashTable.call(this, memory);
	
	this.memory = memory;
	
	this.startAddress = startAddress;
	this.endAddress = endAddress;
	this.lastVariableAddress = -1;
}



// prototype based inheritance
Heap.prototype = new MemoryUnitHashTable();

// methods

Heap.prototype.findFreeArea = function(datatype, nbelements, maxAddress) {

	nbelements = nbelements || 1;	// changes undefined to 1 if required

	if(nbelements > 0 ){

		var i = this.startAddress;
		var requiredSize = datatype.getSize() * nbelements;
		var dataEndAddress;
		var noData = true;
		var freeSpace;
		var j;
		
		while (i <= maxAddress) {
			j = i;
			noData = true;
			dataEndAddress = i + requiredSize;
			freeSpace = 0;
			
			while (noData && j <= maxAddress && j <= dataEndAddress) {
				if (! this.memory.isUsed(j)) {
					freeSpace++;
					
					if (freeSpace >= requiredSize) {
						return i;
					}
				} else {
					noData = false;
					i = j;
				}	
				j++;
			} 
			i++;
		}
	
	}
	
	return PointerMemoryValue.NIL.getPrimitiveValue();	
}


// returns the address of the allocated memory unit
// NIL on error
Heap.prototype.malloc = function(datatype, nbelements, maxAddress) {
	
	var address = this.findFreeArea(datatype, nbelements, maxAddress);
	
	if (address != PointerMemoryValue.NIL.getPrimitiveValue() ) {	// enough free memory in heap

		// in the case of several elements, we allocate an array
		if (nbelements != undefined) {
			datatype = new ArrayDataType( datatype, nbelements );	
		}
		
		datatype.initMemory(this.memory, address);	// also checks if the area is already allocated
		
		var newMemoryUnit = new MemoryUnit(this.memory, address, datatype );
		this.setUnit( address, newMemoryUnit );	
		
		this.setLastVariableAddress( address + datatype.getSize() );
	}
	
	return address;
}	
	
	
Heap.prototype.recomputeLastVariableAddress = function() {
	var lastVariableAddress = -Infinity;
	
	for (memoryUnitKey in this.memoryUnits) {
		var variable = this.memoryUnits[memoryUnitKey];
		var variableEndAddress = variable.getAddress() + variable.getDataType().getSize();
		lastVariableAddress = Math.max( lastVariableAddress, variableEndAddress);
	}
	
	this.lastVariableAddress = lastVariableAddress;
}

Heap.prototype.findMemoryUnit = function(address) {
	for (memoryUnitKey in this.memoryUnits) {
		var memoryUnit = this.memoryUnits[memoryUnitKey];
		var startAddress = memoryUnit.getAddress();
		var endAddress = startAddress + memoryUnit.getDataType().getSize();
		
		if ((startAddress <= address) && (address < endAddress)) {
				return memoryUnit;
		}
	}
	
	return undefined;
}
	
Heap.prototype.getLastVariableAddress = function() {
	return this.lastVariableAddress;
}

// returns true if the last variable address has been updated
Heap.prototype.setLastVariableAddress = function(address) {
	if (address > this.lastVariableAddress) {
		this.lastVariableAddress = address;
		return true;
	}
	
	return false;
}
	
Heap.prototype.getStartAddress = function() {
	return this.startAddress;
}
	
Heap.prototype.getEndAddress = function() {
	return this.endAddress;
}
	
// used by the stack
Heap.prototype.setEndAddress = function(endAddress) {
	this.endAddress = endAddress;
}

Heap.prototype.getValue = function(address) {
	return this.memory.getValue(address);
}

Heap.prototype.getMemory = function() {
	return this.memory;
}

    return Heap;

});

