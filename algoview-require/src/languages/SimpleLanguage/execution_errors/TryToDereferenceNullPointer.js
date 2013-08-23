define("TryToDereferenceNullPointer",
["Exception"],
function(Exception) {

    function TryToDereferenceNullPointer() {
        Exception.call(this);
    }

	// prototype based inheritance
    TryToDereferenceNullPointer.prototype = new Exception();
    TryToDereferenceNullPointer.prototype.constructor = TryToDereferenceNullPointer;

    TryToDereferenceNullPointer.prototype.toString = function() {
        return "Trying to use NULL pointer.";
    }

    return TryToDereferenceNullPointer;

});
