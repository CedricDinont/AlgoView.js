/**
 * initializes the program entities
 * @author michael  
 */

// globals (for tests only)
var _memory;		
var _memoryGraphicalView;

window.onload = function () {
	var heapDebugInfos = true;
	var heapSeparateCells = false;
	var stackDebugMode = false;

	_memory = new Memory(100);
	fakeMemoryInit(_memory);
	
	var memoryTableView = new MemoryTableView("memoryTableViewContainer");	
	_memoryGraphicalView = new MemoryGraphicalView("graphicalMemoryViewContainer");
	var heapTableView = new HeapTableView("heapTableViewContainer", heapDebugInfos, heapSeparateCells);
	var stackTableView = new StackTableView("stackTableViewContainer", stackDebugMode, stackDebugMode);		
	
	_memory.addView(memoryTableView);
	_memory.addView(_memoryGraphicalView);
	_memory.addView(heapTableView);		
	_memory.addView(stackTableView);	
};

fakeMemoryInit = function(memory) {	
	_memory.beginTransaction();	

	addValueInHeap(new CharacterDataType(), 'c'); 	
	addValueInHeap(new PointerDataType(), 1); 	
	addValueInHeap(new PointerDataType(), 18); 	
	addValueInHeap(new PointerDataType(), 100); 	

	addArrayInHeap(new PointerDataType(), 8, 6, 10);
			
	_memory.endTransaction();	

	return memory;
}

allocSimpleStruct = function() {
	_memory.beginTransaction();		
	
	// définition d'une structure Toto comprenant un entier, un caractère et un pointeur
	var structureDataType = createStructureDataType("Toto",
													{type: new IntegerDataType(), name : "i"},
													{type: new CharacterDataType(), name : "c"},
													{type: new PointerDataType(), name : "p"} );
	
	var structAddress = _memory.malloc(structureDataType); 
	var structInstance = _memory.getUnit(structAddress);
	
	// affectation des valeurs des champs
	initStructureFields(structInstance, -3, 'o', 12);
	
	_memory.endTransaction();		
}

allocNestedStruct = function() {
	_memory.beginTransaction();		
	
	// définition d'une structure Toto comprenant un entier, un caractère et un pointeur
	var structureDataType = createStructureDataType("Toto",
													{type: new IntegerDataType(), name : "i"},
													{type: new CharacterDataType(), name : "c"},
													{type: new PointerDataType(), name : "p"} );
	
	_memory.malloc(structureDataType, 2); 
	
	_memory.endTransaction();
}


addValueInHeap = function(dataType, value) {
	var address = _memory.malloc(dataType); 
	_memory.setValue(address, dataType.buildMemoryValue(value));
}


allocRandomCharacter = function() {
	_memory.beginTransaction();
	
	var charcode = MathUtils.randomNumber(97, 122);
	var variableContent = String.fromCharCode(charcode);
	addValueInHeap(new CharacterDataType(), variableContent);
	
	_memory.endTransaction();	
}

allocRandomInteger = function(){
	_memory.beginTransaction();		
	
	var variableContent = MathUtils.randomNumber(-20, 20);
	addValueInHeap(new IntegerDataType(), variableContent);
	
	_memory.endTransaction();	
}

addArrayInHeap = function(elementsType) {
	var nbElements = arguments.length - 1;
	var elementsSize = elementsType.getSize();	
	
	// création du tableau
	var address = _memory.malloc(elementsType, nbElements);
	
	var cellAddress;
	
	// remplissage des cellules
	for(var i=0; i < nbElements; i++) {
		cellAddress = address + i * elementsSize;
		_memory.setValue(cellAddress, elementsType.buildMemoryValue(arguments[i+1]));	
	}
}

free = function(address) {
	var freeAddressString = document.getElementById("freeAddress").value;
	
	if (freeAddressString.length > 0) {
		_memory.beginTransaction();
		_memory.free( parseInt(freeAddressString) );
		_memory.endTransaction();
	}
}

var variableCounter = 1;

pushSimpleStructure = function() {
	_memory.beginTransaction();
	
	var stack = _memory.getStack();	

	// définition d'une structure Toto comprenant un entier, un caractère et un pointeur
	var structureDataType = createStructureDataType("Toto",
													{type: new IntegerDataType(), name : "i"},
													{type: new CharacterDataType(), name : "c"},
													{type: new PointerDataType(), name : "p"} );
		
	// instantiation de la structure Toto
	var structureToto = stack.push(createVariableDeclarationNode(structureDataType));	
		
	// affectation des valeurs des champs
	initStructureFields(structureToto, 42, 'z', 8);
	
	_memory.endTransaction();
}

pushNestedStructure = function() {
	_memory.beginTransaction();
	
	var stack = _memory.getStack();	

	// définition d'une structure Toto comprenant un entier, un caractère et un pointeur
	var innerStructureDataType = createStructureDataType("Toto",
													{type: new IntegerDataType(), name : "i"},
													{type: new CharacterDataType(), name : "c"},
													{type: new PointerDataType(), name : "p"} );
	
	// définition d'une structure Titi comprenant un entier,et une structure Toto
	var outerStructureDataType = createStructureDataType("Titi",
													{type: new IntegerDataType(), name : "j"},
													{type: innerStructureDataType, name : "toto"} );
	
	// instantiation de la structure Titi
	var structureTiti = stack.push( createVariableDeclarationNode(outerStructureDataType) );		

	_memory.endTransaction();
}


pushRandomBoolean = function() {
	var booleanInt = MathUtils.randomNumber(0, 1);

	
	pushVariable(new BooleanDataType(), new BooleanMemoryValue(booleanInt == 0));
}

pushRandomCharacter = function() {
	var charcode = MathUtils.randomNumber(97, 122);
	var variableContent = String.fromCharCode(charcode);
	
	pushVariable(new CharacterDataType(), new CharacterMemoryValue(variableContent));
}

pushRandomInteger = function() {
	var variableContent = MathUtils.randomNumber(-20, 20);
	
	pushVariable(new IntegerDataType(), new IntegerMemoryValue(variableContent));
}

var pointerContent = 12;

pushPointer = function() {
	var pointerStackAddressString = document.getElementById("pointerStackAddress").value;
	
	if (pointerStackAddressString.length > 0) {
		pointerContent = parseInt(pointerStackAddressString);
	} else {	
		switch (pointerContent) {
			case 12:
				pointerContent = 17;
				break;
			case 17:
				pointerContent = 8;
				break;
			default :
				pointerContent = 12;
		}
	}
	
	pushVariable(new PointerDataType(), new PointerMemoryValue(pointerContent));
}

pushPointerArray = function() {
	pushArray(new PointerDataType(), 12, 8, 3);
}

push2DIntegerArray = function() {
	var i = 2;
	var j = 3;
	
	var nbElements = i * j;
	var elementsType = new IntegerDataType();	
	var elementsSize = elementsType.getSize();

	_memory.beginTransaction();	

	var stack = _memory.getStack();												
	var variableType = new ArrayDataType( new ArrayDataType( elementsType, j ), i);
	
	// création du tableau
	var array = stack.push( createVariableDeclarationNode(variableType) );								
	
	var cellAddress;
	var baseAddress = array.getAddress();
	
	// remplissage des cellules
	for(var i=0; i < nbElements; i++){
		
		cellAddress = baseAddress + i * elementsSize;
		_memory.setValue(cellAddress, elementsType.buildMemoryValue(i+1));	
	}
	
	_memory.endTransaction();	
	variableCounter++;	
}

push3DIntegerArray = function() {
	var i = 2;
	var j = 3;
	var k = 2;
		
	var nbElements = i * j * k;
	var elementsType = new IntegerDataType();
	
	var elementsSize = elementsType.getSize();
	
	_memory.beginTransaction();	
	var stack = _memory.getStack();	
	
	var variableType = new ArrayDataType( 
									new ArrayDataType( new ArrayDataType( elementsType
										, k)
									, j )
								, i);
	
	// création du tableau

	var array = stack.push( createVariableDeclarationNode(variableType) );	
	
	var cellAddress;
	
	var baseAddress = array.getAddress();
	
	// remplissage des cellules
	for (var i = 0; i < nbElements; i++) {
		cellAddress = baseAddress + i * elementsSize;
		_memory.setValue(cellAddress, elementsType.buildMemoryValue(i+1));	
	}
	
	_memory.endTransaction();
}



pushArray = function(elementsType) {
	var nbElements = arguments.length - 1;
	var elementsSize = elementsType.getSize();
	
	_memory.beginTransaction();	
	var stack = _memory.getStack();	

	var variableType = new ArrayDataType(elementsType, nbElements);
	
	// création du tableau
	var array = stack.push( createVariableDeclarationNode(variableType) );	
		
	
	var cellAddress;
	
	var baseAddress = array.getAddress();
	
	// remplissage des cellules
	for(var i=0; i < nbElements; i++) {
		cellAddress = baseAddress + i * elementsSize;
		_memory.setValue(cellAddress, elementsType.buildMemoryValue(arguments[i+1]));	
	}

	_memory.endTransaction();
}


pushVariable = function(variableType, variableValue) {
	_memory.beginTransaction();	
	var stack = _memory.getStack();	
	var variable = stack.push(createVariableDeclarationNode(variableType));	
	variable.setValue(variableValue);
	_memory.endTransaction();	
}

pop = function() {
	_memory.beginTransaction();		
	_memory.stack.pop();
	_memory.endTransaction();	
}

reset = function() {
	_memory.reset();
}
