/**
 * class Exception
 * @param functionName : the name of the function that raised the exception
 * @author michael
 */
var Exception = function(functionName){
	
	this.functionName = functionName;


}

Exception.prototype.functionNameStringPrefix = function(){
	return "[" + this.functionName + "()] "
}


