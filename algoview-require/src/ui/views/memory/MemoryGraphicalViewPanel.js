define("MemoryGraphicalViewPanel",
["MemoryGraphicalView"],
function(MemoryGraphicalView) {
	
	function MemoryGraphicalViewPanel(algoViewApp) {
		this.app = algoViewApp;
	}
	
	MemoryGraphicalViewPanel.prototype.createExtComponent = function() {
		var self = this;
		var panel = Ext.create("Ext.panel.Panel", {
			id: 'graphicalMemoryViewContainer',
			title: 'Memory',
		//	html: "toto",
			listeners: {
				resize: function() {
					// TODO: A revoir
					if (self.memoryGraphicalView != undefined) {
						self.memoryGraphicalView.updateDimension();
					}
				},
				afterRender: function() {
					var view =  new MemoryGraphicalView("graphicalMemoryViewContainer-body");
					self.app.programRunner.memory.addView(view);
				}
			},
			//autoRender: true,
		});
				

		
		return panel;
	}
	
	return MemoryGraphicalViewPanel;
	
});
