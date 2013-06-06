/**
 * interface View
 * defines the methods of a view
 * @author michael
 */
 
 define("View",
[0], 
function() {


var View = function() {

	this.debug = false;
	
	this.log = function() {
		if (this.debug) {
			console.log.apply(console, arguments);
		}
	}

	 // Should be overridden
	this.update = function(model) {
	}

}

return View;

});
