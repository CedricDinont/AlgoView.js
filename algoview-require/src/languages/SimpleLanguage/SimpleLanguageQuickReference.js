define("SimpleLanguageQuickReference",
[],
function() {
	
	function SimpleLanguageQuickReference() {
		this.text = "\n\
	/**\n\
	 * Variable types\n\
	 **/\n\
	BOOLEAN\n\
	INTEGER\n\
	FLOAT\n\
	CHARACTER\n\
	POINTER\n\
	POINTER<VARIABLE_TYPE>  // Typed pointer\n\
	STRUCT StructureName\n\
\n\
	/**\n\
	 * Structure declaration\n\
	 **/\n\
	STRUCT StructureName\n\
		field1 : TYPE\n\
		field2 : TYPE\n\
\n\
	/**\n\
	 * Subprogram declaration\n\
	 **/\n\
	FUNCTION functionName(parameter1 : TYPE, parameter2 : TYPE) : TYPE\n\
	VAR\n\
		variables_declarations\n\
	BEGIN\n\
		instructions\n\
	END\n\
\n\
	PROCEDURE procedureName(parameter1 : VARIABLE_TYPE, parameter2 : VARIABLE_TYPE)\n\
	VAR\n\
		variables_declarations\n\
	BEGIN\n\
		instructions\n\
	END\n\
\n\
\n\
	/**\n\
	 * Assignation\n\
	 **/\n\
	variable <- value\n\
\n\
\n\
	/**\n\
	 * Control structures\n\
	 **/\n\
	IF (condition) THEN\n\
		instructions\n\
	END_IF\n\
\n\
	IF (condition) THEN\n\
		instructions\n\
	ELSE\n\
		instructions\n\
	END_IF\n\
\n\
	FOR variable FROM start TO end DO\n\
		instructions\n\
	END_FOR\n\
\n\
	FOR variable FROM start TO end STEP stepValue DO\n\
		instructions\n\
	END_FOR\n\
\n\
	WHILE (condition) DO\n\
		instructions\n\
	END_WHILE\n\
\n\
	DO\n\
		instructions\n\
	WHILE (condition)\n\
\n\
\n\
	/**\n\
	 * Dynamic memory allocation\n\
	 **/\n\
	pointer <- ALLOC(type)  // Single element\n\
\n\
	pointer <- ALLOC(type, numberOfElements)  // Array\n\
\n\
	FREE(pointer)\n\
 \n";
	}
	
	return SimpleLanguageQuickReference;
});
