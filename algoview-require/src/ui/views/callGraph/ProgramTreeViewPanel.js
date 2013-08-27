define("ProgramTreeViewPanel",
["ProgramTreeView"],
function(ProgramTreeView) {
	
	function ProgramTreeViewPanel(algoViewApp) {
		this.app = algoViewApp;
		this.programTreeView =  new ProgramTreeView(this.app, "programTreeViewContainer-body");
	}
	
	ProgramTreeViewPanel.prototype.destroy = function() {
		this.programTreeView.destroy();
	}
	
	ProgramTreeViewPanel.prototype.createExtComponent = function() {
		var self = this;
		var panel = Ext.create("Ext.panel.Panel", {
			id: 'programTreeViewContainer',
			title: 'Program tree',
			listeners: {
				resize: function() {
					if (self.programTreeView != undefined) {
						self.programTreeView.updateDimension();
					}
				},
				afterRender: function() {
					self.programTreeView.updateDimension();
				}
			},
		});
		
		return panel;
	}
	
	return ProgramTreeViewPanel;
	
});
