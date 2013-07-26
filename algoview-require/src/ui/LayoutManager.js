define("LayoutManager",
[],
function() {

	function LayoutManager() {
		this.layouts = new array();
	}
	
	LayoutManager.prototype.registerLayout(layout) {
		
	}
	
	LayoutManager.prototype.applyLayout(layout, mainFrame) {
		
	}

	LayoutManager.prototype.applyLayoutByName(layoutName, mainFrame) {
		applyLayout(this.layouts[layoutName], mainFrame);
	}	
	
	return LayoutManager;

});
