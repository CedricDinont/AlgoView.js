/**
 * class DebugLogger
 * Allows writing infos to the console depending on a debug flag
 * @author michael
 */
 
 define("DebugLogger",
[0], 
function() {


	var DebugLogger = function(debug) {

		this.debug = debug || false;
		
		this.log = function() {
			if (this.debug) {
				console.log.apply(console, arguments);
			}
		}
	


	}

	return DebugLogger;

});
