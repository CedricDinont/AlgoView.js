/**
 * class EmptyStackException extends Exception: raised when the user tries to pop a variable in an empty stack
 * @param functionName : the name of the function that raised the exception 
 * @author michael
 */
var EmptyStackException = function(functionName){
	
	Exception.call(this, functionName);
	

}

// prototype based inheritance
EmptyStackException.prototype = new Exception();


EmptyStackException.prototype.toString = function(){
	return this.functionNameStringPrefix() + "Empty stack";
}


