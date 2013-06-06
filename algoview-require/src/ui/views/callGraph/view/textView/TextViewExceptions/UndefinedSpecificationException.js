define("UndefinedSpecificationException",
["SimpleGraphException"],
function(Exception){

    // Undefined specification exception
    function UndefinedSpecificationException() {
            Exception.call(this, "A specification must at least be set");
    }
    UndefinedSpecificationException.prototype = new Exception();
    UndefinedSpecificationException.prototype.constructor = UndefinedSpecificationException;

    return UndefinedSpecificationException;
});