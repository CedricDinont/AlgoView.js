define("TryToDereferenceNullPointer",
["Exception"],
function(Exception) {

    function TryToDereferenceNullPointer(variableName) {
        Exception.call(this);
        
        this.variableName = variableName;
    }

	// prototype based inheritance
    TryToDereferenceNullPointer.prototype = new Exception();
    TryToDereferenceNullPointer.prototype.constructor = TryToDereferenceNullPointer;

    TryToDereferenceNullPointer.prototype.toString = function() {
        return "Trying to dereference pointer " + this.variableName + " which is NULL (i.e. you did an illegal " + this.variableName + "->___ operation).";
    }

    return TryToDereferenceNullPointer;

});
