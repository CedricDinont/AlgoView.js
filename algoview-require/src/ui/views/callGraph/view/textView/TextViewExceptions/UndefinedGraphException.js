define("UndefinedSpecificationException",
["SimpleGraphException"],
function(Exception){

    // Undefined graph exception
    function UndefinedGraphException() {
            Exception.call(this, "The specification must at least have a graph");
    }
    UndefinedGraphException.prototype = new Exception();
    UndefinedGraphException.prototype.constructor = UndefinedGraphException;

    return UndefinedGraphException;
});