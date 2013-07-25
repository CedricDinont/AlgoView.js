/**
 * MathUtils : math tool box ; static functions
 * @author michael
 */
 
define("MathUtils",
[],
function() {
	var MathUtils = {
		
		parseIntIfDefined: function(value) {
			if (value != undefined) {
				return parseInt(value);
			}
			return value;
		},
	
		randomNumber: function(infValue, supValue) {
			return Math.floor(Math.random() * (supValue - infValue + 1) ) + infValue;
		},
		
		getAddressFromKey: function (key) {
			return parseInt(key.substring(1, key.length)); // removes "@" prefix and convert into int
		},
		
		parseBoolean: function(str) {
			return /^TRUE$/i.test(str); 
		},

	};
	
	return MathUtils;
});
