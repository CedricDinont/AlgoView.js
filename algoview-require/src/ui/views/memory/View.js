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
	}

	View.prototype = new DebugLogger();
	
	View.prototype.update = function(model) {
			 // Abstract - should be overridden
	}
	
	return View;

});
