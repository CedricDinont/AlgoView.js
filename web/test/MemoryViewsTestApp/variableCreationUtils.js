/**
 * some utils to create variables in memory
 * @author michael  
 */



initStructureFields = function(structureInstance){
	
	var structureDataType = structureInstance.getDataType();
	var structureAddress = structureInstance.getAddress();

	for(var i=1; i<arguments.length; i++){
		
		var fieldNode = structureDataType.getFieldByIndex(i-1);
		var fieldName = fieldNode.getVariableName();
		var fieldType = fieldNode.getVariableType();
		
		_memory.setValue(structureAddress + structureDataType.getFieldOffset( fieldName ), fieldType.buildMemoryValue( arguments[i] ) );	
		
	}
	
}


createStructureDataType = function(structureName){

	var fieldNodeArray = [];
	
	for(i = 1; i < arguments.length; i++){
		
		var fieldNode = createVariableDeclarationNode( arguments[i].type, arguments[i].name);
		fieldNodeArray.push( fieldNode );
	}
	
	var elementsListNode = createVariablesDeclarationListNode( fieldNodeArray );
	
	var structureNode = createStructureDeclarationNode( structureName, elementsListNode );
	
	var structureDataType = new StructureDataType( structureName, structureNode );	

	return structureDataType;
	
}


createStructureDeclarationNode = function(structureName, elementsListNode){
	var fakeToken = new org.antlr.runtime.CommonToken(43);
	var tokenType = undefined;	
	
	var structureDeclarationNode = new StructureDeclarationNode( tokenType, fakeToken );
	var structureNameNode = new StructureNameNode( tokenType, fakeToken, structureName );
	
	structureDeclarationNode.addChild( structureNameNode );
	structureDeclarationNode.addChild( elementsListNode );
	
	return structureDeclarationNode;
	
		
}

createVariablesDeclarationListNode = function(fieldNodeArray){
	
	var fakeToken = new org.antlr.runtime.CommonToken(42);
	var tokenType = undefined;	
	
	var variablesDeclarationListNode = new VariablesDeclarationListNode( tokenType, fakeToken );

	for(var i=0; i< fieldNodeArray.length; i++){
		variablesDeclarationListNode.addChild( fieldNodeArray[i] );
	}
	
	return variablesDeclarationListNode;	
}


createVariableDeclarationNode = function(variableType, variableName){
	
	if( variableName == undefined ){
		variableName = "v" + variableCounter;
		variableCounter++;
	}

	
	var fakeToken = new org.antlr.runtime.CommonToken(42);
	var tokenType = undefined;	
	
	var variableDeclarationNode = new VariableDeclarationNode( tokenType, fakeToken );
	variableDeclarationNode.addChild( new VariableNameNode( tokenType, fakeToken, variableName) );
	variableDeclarationNode.addChild( new VariableTypeNode( tokenType, fakeToken, variableType) );
		
	return variableDeclarationNode;	
}

