/**
 * class StackOverflowException extends Exception: raised when the user tries to pop a variable in a full stack
 * @param functionName : the name of the function that raised the exception 
 * @author michael
 */
var StackOverflowException = function(functionName){
	
	Exception.call(this, functionName);
	

}

// prototype based inheritance
StackOverflowException.prototype = new Exception();


StackOverflowException.prototype.toString = function(){
	return this.functionNameStringPrefix() + "Stack overflow";
}


