// InvalidReferenceException
define("InvalidReferenceException",
["SimpleGraphException"],

function(Exception) {
    function InvalidReferenceException() {
            Exception.call(this, "Invalid reference");
    }
    InvalidReferenceException.prototype = new Exception();
    InvalidReferenceException.prototype.constructor = InvalidReferenceException;

    return InvalidReferenceException;
});