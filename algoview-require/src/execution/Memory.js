/**
 * class Memory extends AbstractModel
 * models a memory
 * The memory is implemented thanks a basic array : memoryValues
 * The first adress used is 1
 * @param size : the memory size in bytes
 * @author michael
 */

  define("Memory",
["MemoryState", "Variable", "AbstractModel", "MemoryValue", "Stack", "Heap"], 
function(MemoryState, Variable, AbstractModel, MemoryValue, Stack, Heap) {

	function Memory(size) {
		AbstractModel.call(this);	// AbstractModel inheritance
		
		this.size = size;
		
		this.debug = false;
		this.inTransaction = false;
		this.sendEvents = true;
		
		this.reset();
	}

	Memory.prototype = new AbstractModel();
		
	// the internalAccess allows to read a part of a memory value or unallocated areas
	Memory.prototype.getValue = function(address, internalAccess) {
		if (!internalAccess && !this.isUsed(address)) {
			JSUtils.throwException("UnallocatedSegmentException", address);			
		}
		else if (!internalAccess && this.getUnit(address) == undefined) {
			JSUtils.throwException("PartOfPrimitiveTypeException", address);		
		}		
			
		return this.memoryValues[address];
	}

	Memory.prototype.getUnit = function(address) {
		var memoryUnit = undefined;
		
		memoryUnit = this.heap.getUnit(address);  // we look for the unit in the heap
		
		if (memoryUnit == undefined) {
			memoryUnit = this.stack.getUnit(address);  // we look for the unit in the stack	
		}
		
		return memoryUnit;
	}

	Memory.prototype.isUsed = function(address) {
		// Pour le pointeur NULL
		if (address == 0) {
			return true;
		}
		
		var value = this.memoryValues[address];
		
		if (value == undefined) {
			JSUtils.throwException("InvalidAddressException", address);
		}
		
		return (value.getState() != MemoryState.UNUSED);
	}		

	Memory.prototype.setValue = function(address, originalValue, dataSize) { // dataSize is optionnal and internally used by Heap.malloc()
		var value = originalValue.clone();
		var memoryUnit;
		var dataType;
		var oldValue = this.memoryValues[address];
			
		if (dataSize != undefined) {// memory allocation context
			if (this.isUsed(address)) {
				JSUtils.throwException("AlreadyAllocatedSegmentException", address);			
			}
		} else {
			if (!this.isUsed(address)) {
				JSUtils.throwException("UnallocatedSegmentException", address);						
			} else {			
				memoryUnit = this.getUnit(address);
				
				// accès interdit à l'intérieur d'un type de base
				if (memoryUnit == undefined) {
					JSUtils.throwException("PartOfPrimitiveTypeException", address);				
				} else { // type composé (tableau, structure) 
					dataType = memoryUnit.getDataType();
					
					if (memoryUnit.isComposedDataType()) {
						memoryUnit = memoryUnit.getChild(address);
						dataSize = memoryUnit.getDataType().getSize();
						
						//dataSize = dataType.getElementsSize();
					} else {
						dataSize = dataType.getSize();
					}	
				}	
			}
		}

		// the cell content changes, but not the pointers on this cell (which are cloned here)
		if (oldValue != undefined) {
			value.clonePointers(oldValue);
		}

		for (var i = 0; i < dataSize; i++) {
			this.memoryValues[address + i] = value;
		}
		
		// special case of a POINTER
		if (memoryUnit != undefined && memoryUnit.isPointer()) {
		
			if(oldValue != undefined && oldValue.getPrimitiveValue() != undefined){ // valid address
				var oldAddress = oldValue.getPrimitiveValue();
				
				if( oldAddress != undefined ){ // && this.getUnit(oldAddress) != undefined
					var oldPointeeValue = this.getValue( oldValue.getPrimitiveValue(), true );	
					
					if( oldPointeeValue != undefined){   // valid value
						oldPointeeValue.removePointer( memoryUnit );
					}
				}
			}
			
			var pointeeAddress = memoryUnit.getPrimitiveValue();
			
			if (pointeeAddress != undefined) {  // valid address && this.getUnit(pointeeAddress) != undefined 
				var pointeeValue = this.getValue(pointeeAddress, true);
				
				if (pointeeValue != undefined) {  // valid value
					pointeeValue.addPointer(memoryUnit);
				}
			}
		}				
		
		// the memory has at least 1 value; it is not empty anymore
		this.empty = false;	
		
		value.setChanged(true);
		this.changed();
	}	
		
	Memory.prototype.getSize = function() {
		return this.size;
	}
		
	Memory.prototype.malloc = function(datatype, nbelements) {	
		return this.heap.malloc(datatype, nbelements, this.stack.getEndAddress());
	}

	Memory.prototype.changed = function(force) {
		if ((force) || (this.sendEvents && !this.inTransaction)) {
			this.updateViews();	
		}	
	}

	Memory.prototype.removePointer = function(unit) {
		// special case of a POINTER : we remove this pointer of the the pointee's pointer list
		if (unit.isPointer()) {
			var pointeeAddress = unit.getPrimitiveValue();
			
			if (pointeeAddress != undefined) { // && this.isUsed(pointeeAddress)
				var pointeeValue = this.getValue( pointeeAddress, true );	
				
				if (pointeeValue != undefined) { // valid address
					pointeeValue.removePointer( unit );
				}
			}
		}
	}
		
	Memory.prototype.free = function(address) { // prototype provisoire
		var unit = this.getUnit(address);

		if(unit == undefined){	// free region !
			JSUtils.throwException("DoubleFreeException", address);		
		}
		
		if (unit.isComposedDataType()) {
			var cells = unit.getChildren();
			for (var cellKey in cells) {
				this.removePointer(cells[cellKey]);
			}
		} else {
			this.removePointer(unit);
		}
			
		if(unit instanceof Variable){	// variable -> pile, sinon -> tas
			this.stack.deleteUnit(address);
		}
		else{
			this.heap.deleteUnit(address);	// attention à l'ordre ! on désalloue l'unité AVANT la value car on a besoin de la MemoryValue pour récupérer les pointeurs	
			this.heap.recomputeLastVariableAddress();
		}
		
		//console.log( this.heap.getLastVariableAddress() );

		var dataSize = unit.getDataType().getSize();	
		
		for (var i = 0; i < dataSize; i++) {
			var newMemoryValue = new MemoryValue(); // generic memory value with state UNUSED
			
			// the cell content changes, but not the pointers on this cell (which are cloned here)
			
			var oldMemoryValue = this.memoryValues[address + i];
			newMemoryValue.clonePointers(oldMemoryValue);	
			
			this.memoryValues[address + i] = newMemoryValue;
		}
		
		this.changed();
	}
		
	Memory.prototype.getHeap = function() {
		return this.heap;
	}

	Memory.prototype.getStack = function() {
		return this.stack;
	}

	Memory.prototype.reset = function() {
		this.memoryValues = []; // classical array
		
		for (var i = 1; i <= this.size; i++) {
			this.memoryValues[i] = new MemoryValue(); // generic memory value with state UNDEFINED
		}
																  
		this.heap = new Heap(this, 1, this.size); // the heap initially fills the whole memory; first adress : 1
		this.stack = new Stack(this);
		this.inTransaction = false;	
		this.empty = true;		
		this.setCellsChanged(false);
		this.changed(true);
	}

	Memory.prototype.isEmpty = function() {
		return this.empty;
	}

	Memory.prototype.setCellsChanged = function(changed) {
		for(var i = 1; i <= this.size; i++) {
			this.memoryValues[i].setChanged(changed);
		}
	}

	Memory.prototype.setCellsAccessibleFromStack = function(accessible) {
		// on ne réinitialise à faux que les unités du tas : celles de la pile sont par définition accessibles
		for (var memoryUnitKey in this.heap.memoryUnits) {
			var memoryUnit = this.heap.memoryUnits[memoryUnitKey];
			memoryUnit.getValue().setAccessibleFromStack(accessible);
			
			if (memoryUnit.isComposedDataType()) {
				var children = memoryUnit.getChildren();
				for (var childKey in children) {
					var childUnit = children[childKey];
					childUnit.getValue().setAccessibleFromStack(accessible);
				}
			}
		}	
	}

	// performs a breath-first traversal of memory units and tags visited units as accessible
	Memory.prototype.propagateAccessibilityFromStack = function() {
		var tagVisitedAndPush = function(unit) {
			if (unit != undefined && !unit.isComposedDataType()) {
				unit.getValue().setAccessibleFromStack(true);
			}
				
			openSet.push(unit);
		}
		
		// la liste des ouverts contient les unités de mémoire à visiter
		// on initialise la liste des ouverts avec les MemoryValues de la stack
		var stackUnits = this.stack.getMemoryUnitsAsArray();
		var openSet = [];
		
		for(var j = 0; j < stackUnits.length; j++) {
			var stackUnit = stackUnits[j];
			
			openSet.push(stackUnit);
			
			if (stackUnit.isComposedDataType()) {
				var children = stackUnit.getChildren();
				
				for (var childKey in children) {
					var childUnit = children[childKey];
					openSet.push(childUnit);
				}
			}		
		}
		
		//console.log( openSet );
		var i = 0;
		while (i < openSet.length) {
			var currentMemoryUnit = openSet[i];
			
			//console.log( currentMemoryUnit.address );

			if (currentMemoryUnit != undefined) {
				var currentMemoryValue = this.getValue(currentMemoryUnit.getAddress());

				// composed type : array or structure
				if (currentMemoryUnit.isComposedDataType()) {				
					// adding the children units in the open set (if not visited yet)
					var children = currentMemoryUnit.getChildren();
		
					for(var childKey in children) {				
						//console.log("-- " + childKey);
						var childUnit = children[childKey];
						
						if( ! childUnit.getValue().isAccessibleFromStack()  ) { // not visited yet
							tagVisitedAndPush( childUnit );
						}
					}
				} else { 			
					// we tag the currentMemoryValue as visited
					currentMemoryValue.setAccessibleFromStack(true);
					
					if(currentMemoryUnit.isPointer() ){ // the currentMemory is a POINTER; we add its pointee in the open set if it is valid and not visited
						var pointeeAddress = currentMemoryUnit.getPrimitiveValue();
						
						// adding the pointee unit in the open set (if not visited yet)
						if (pointeeAddress != undefined && this.isUsed(pointeeAddress)) {
							var pointeeValue = this.getValue(pointeeAddress, true);	
							
							if (pointeeValue != undefined) { // valid address
								if (! pointeeValue.isAccessibleFromStack()){ // not visited yet
									var pointeeUnit = this.getUnit(pointeeAddress);
									
									tagVisitedAndPush(pointeeUnit);
								}
							}
						}
					}
				}
			}
			i++;
		}
	}

	Memory.prototype.log = function () {
		if (this.debug) {
			console.log.apply(console, arguments);
		}
	}

	// pour le profiling
	var transactionStartDate, transactionEndDate;

	Memory.prototype.beginTransaction = function() {
		this.log("--------------------------");			
		this.log("starting transaction");		
		transactionStartDate = new Date();	
		this.inTransaction = true;
		this.setCellsChanged(false);
		this.setCellsAccessibleFromStack(false);
	}

	Memory.prototype.endTransaction = function() {
		this.propagateAccessibilityFromStack();
		this.inTransaction = false;
		this.changed();
		transactionEndDate = new Date();		
		this.log("transaction duration: " + (transactionEndDate - transactionStartDate) + " ms");
	}

	Memory.prototype.setSendEvents = function(sendEvents) {
		this.sendEvents = sendEvents;
	}

	return Memory;
});

