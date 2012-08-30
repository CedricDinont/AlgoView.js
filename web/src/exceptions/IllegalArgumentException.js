/**
 * class IllegalArgumentException : raised when an illegal argument is provided as parameter of a function
 * @param functionName : the name of the function that raised the exception  
 * @param argument : the illegal argument 
 * @author michael
 */
var IllegalArgumentException = function(functionName, argument){
	
	Exception.call(this, functionName);
	
	this.argument = argument;
	

}

// prototype based inheritance
IllegalArgumentException.prototype = new Exception();


IllegalArgumentException.prototype.toString = function(){
	return this.functionNameStringPrefix() + "Illegal argument: " + this.argument;
}

