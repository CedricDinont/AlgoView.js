define("TryToUseUndefinedValue",
["Exception"],
function(Exception) {

    function TryToUseUndefinedValue(variableName) {
        Exception.call(this);
        
        this.variableName = variableName;
    }

	// prototype based inheritance
    TryToUseUndefinedValue.prototype = new Exception();
    TryToUseUndefinedValue.prototype.constructor = TryToUseUndefinedValue;

    TryToUseUndefinedValue.prototype.toString = function() {
        return "Trying to use undefined value " + this.variableName + " (i.e. you did not assigned this variable before using it).";
    }

    return TryToUseUndefinedValue;

});
