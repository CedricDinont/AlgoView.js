// InvalidWeigthException
define("InvalidWeigthException",
["SimpleGraphException"],
function(Exception) {
    var InvalidWeigthException = function(weight) {
        Exception.call(this, "A weight must be a number");


    };

    InvalidWeigthException.prototype = new Exception();
    InvalidWeigthException.prototype.constructor = InvalidWeigthException;

    return InvalidWeigthException;
});