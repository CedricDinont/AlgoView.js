/**
 * abstract class View extends DebugLogger
 * defines the methods of a view
 * @author michael
 */
 
 define("View",
["DebugLogger"], 
function(DebugLogger) {

	var View = function() {

		DebugLogger.call(this);		
		
		
		this.update = function(model) {
			
			 // Abstract - should be overridden
		}

	}

	View.prototype = new DebugLogger();
	
	return View;

});
