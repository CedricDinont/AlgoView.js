<?php

	addJsLibrary("utils/MathUtils.js");
	addJsLibrary("utils/JSUtils.js");
	addJsLibrary("model/AbstractModel.js");

	addJsLibrary("program/DataType.js");
	addJsLibrary("program/BooleanDataType.js");
	addJsLibrary("program/IntegerDataType.js");
	addJsLibrary("program/FloatDataType.js");
	addJsLibrary("program/CharacterDataType.js");
	addJsLibrary("program/PointerDataType.js");
	addJsLibrary("program/ArrayDataType.js");
	addJsLibrary("program/StructureDataType.js");	

	addJsLibrary("execution/Memory.js");
	addJsLibrary("execution/MemoryUnit.js");
	addJsLibrary("execution/MemoryUnitHashTable.js");	
	addJsLibrary("execution/Heap.js");
	addJsLibrary("execution/Stack.js");
	addJsLibrary("execution/Variable.js");
	addJsLibrary("execution/MemoryState.js");
	
	addJsLibrary("execution/MemoryValue.js");
	addJsLibrary("execution/BooleanMemoryValue.js");
	addJsLibrary("execution/IntegerMemoryValue.js");
	addJsLibrary("execution/FloatMemoryValue.js");	
	addJsLibrary("execution/CharacterMemoryValue.js");
	addJsLibrary("execution/PointerMemoryValue.js");

	addJsLibrary("exceptions/Exception.js");
	addJsLibrary("exceptions/InvalidAddressException.js");
	addJsLibrary("exceptions/PartOfPrimitiveTypeException.js");
	addJsLibrary("exceptions/AlreadyAllocatedSegmentException.js");
	addJsLibrary("exceptions/IllegalArgumentException.js");
	addJsLibrary("exceptions/DoubleFreeException.js");
	addJsLibrary("exceptions/EmptyStackException.js");	
	addJsLibrary("exceptions/StackOverflowException.js");
	addJsLibrary("exceptions/BadVariableNameException.js");	

?>
