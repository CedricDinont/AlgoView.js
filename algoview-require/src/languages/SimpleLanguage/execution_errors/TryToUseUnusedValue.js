define("TryToUseUnusedValue",
["Exception"],
function(Exception) {

    function TryToUseUnusedValue(variableName) {
        Exception.call(this);
        
        this.variableName = variableName;
    }

	// prototype based inheritance
    TryToUseUnusedValue.prototype = new Exception();
    TryToUseUnusedValue.prototype.constructor = TryToUseUnusedValue;

    TryToUseUnusedValue.prototype.toString = function() {
        return "Trying to use unused value " + this.variableName + " (you probably have a wrong pointer).";
    }

    return TryToUseUnusedValue;

});
