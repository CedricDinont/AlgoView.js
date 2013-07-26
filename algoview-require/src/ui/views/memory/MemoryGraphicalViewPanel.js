define("MemoryGraphicalViewPanel",
["MemoryGraphicalView"],
function(MemoryGraphicalView) {
	
	function MemoryGraphicalViewPanel(algoViewApp) {
		this.app = algoViewApp;
		
		this.memoryGraphicalView;
	}
	
	MemoryGraphicalViewPanel.prototype.createExtComponent = function() {
		var self = this;
		var panel = Ext.create("Ext.panel.Panel", {
			id: 'graphicalMemoryViewContainer',
			title: 'Memory',
			listeners: {
				resize: function() {
					if (self.memoryGraphicalView != undefined) {
						self.memoryGraphicalView.updateDimension();
					}
				},
				afterRender: function() {
					self.memoryGraphicalView =  new MemoryGraphicalView("graphicalMemoryViewContainer-body");
					self.app.programRunner.memory.addView(self.memoryGraphicalView);
				}
			},
		});
				

		
		return panel;
	}
	
	return MemoryGraphicalViewPanel;
	
});
