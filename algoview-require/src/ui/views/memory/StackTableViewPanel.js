define("StackTableViewPanel",
["StackTableView"],
function(StackTableView) {
	
	function StackTableViewPanel(algoViewApp) {
		this.app = algoViewApp;
		
		this.extComponent;
		this.stackTableView;
	}
	
	StackTableViewPanel.prototype.destroy = function() {
		this.app.programRunner.memory.removeView(this.stackTableView);
	}
	
	StackTableViewPanel.prototype.createExtComponent = function() {
		this.extComponent = Ext.create("Ext.panel.Panel", {
			title: "Stack",
			layout: {
				type: 'fit',
				manageOverflow: 2,
			},
			overflowY: 'scroll', 
		});
			
		this.stackTableView = new StackTableView(false, false, this.extComponent);
		this.app.programRunner.memory.addView(this.stackTableView);
		
		return this.extComponent;
	}
	
	return StackTableViewPanel;
});
