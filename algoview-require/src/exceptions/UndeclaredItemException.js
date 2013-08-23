/**
 * class UndeclaredItemException : raised when an item (variable, function, structure) is used without beeing declared
 * @param text : the text of the error
 * @author michael
 */
 
 define("UndeclaredItemException",
["Exception"],
function(Exception) {

	var UndeclaredItemException = function(text) {
		Exception.call(this);
		
		this.text = text;
	}

	// prototype based inheritance
	UndeclaredItemException.prototype = new Exception();

	UndeclaredItemException.prototype.toString = function() {
		return this.text;
	}

    return UndeclaredItemException;

});
