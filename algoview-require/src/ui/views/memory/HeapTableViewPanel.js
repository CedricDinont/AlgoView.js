define("HeapTableViewPanel",
["HeapTableView"],
function(HeapTableView) {
	
	function HeapTableViewPanel(algoViewApp) {
		this.app = algoViewApp;
	}
	
	HeapTableViewPanel.prototype.destroy = function() {
		this.app.programRunner.memory.removeView(this.heapTableView);
	}
	
	HeapTableViewPanel.prototype.createExtComponent = function() {
		var panel = Ext.create("Ext.panel.Panel", {
			title: "Heap",
			layout: {
				type: 'fit',
				manageOverflow: 2,
				//reserveScrollbar: true,
			},
			overflowY: 'scroll',
		});
			
		this.heapTableView = new HeapTableView(false, false, panel);
		this.app.programRunner.memory.addView(this.heapTableView);
		
		return panel;
	}
	
	return HeapTableViewPanel;
	
});
