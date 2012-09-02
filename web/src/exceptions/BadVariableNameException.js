/**
 * class BadVariableNameException : raised when the user tries to access to an invalid address
 * @param functionName : the name of the function that raised the exception  
 * @param variableName : the invalid variable name
 * @author michael
 */

var BadVariableNameException = function(functionName, variableName) {
	
	Exception.call(this, functionName);
	
	this.variableName = variableName;
}

// prototype based inheritance
BadVariableNameException.prototype = new Exception();

BadVariableNameException.prototype.toString = function() {
	return this.functionNameStringPrefix() + "Unable to find the variable named: " + this.variableName;
}
