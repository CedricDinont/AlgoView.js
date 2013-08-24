/**
 * abstract class AbstractModel
 * defines the event firing process of a model
 * @author michael
 */
define("AbstractModel",
["JSUtils"],
function(JSUtils) {
	
	function AbstractModel() {	
		this.views = [];
	}
	
	AbstractModel.prototype.addView = function(view, noRefresh) {
		this.views.push(view);
			
		if (! noRefresh) {
			view.update(this);
		}
	}
	
	AbstractModel.prototype.removeView = function(view) {
		JSUtils.removeElementsFromArray(this.views, view);
	}
	
	AbstractModel.prototype.updateViews = function() {
		for (var i = 0; i < this.views.length; i++) {
			this.views[i].update(this);
		}
	}
	
	return AbstractModel;
});
