define("MemoryGraphicalViewPanel",
["MemoryGraphicalView"],
function(MemoryGraphicalView) {
	
	function MemoryGraphicalViewPanel(algoViewApp) {
		this.app = algoViewApp;
	}
	
	MemoryGraphicalViewPanel.prototype.createExtComponent = function(parent) {
		var panel = Ext.create("Ext.panel.Panel", {
			id: 'graphicalMemoryViewContainer',
			html: "toto",
			listeners: {
				resize: function() {
					// TODO: A revoir
					if (self.memoryGraphicalView != undefined) {
						self.memoryGraphicalView.updateDimension();
					}
				}
			},
			//autoRender: true,
		});
				
	//	var view =  new MemoryGraphicalView("graphicalMemoryViewContainer-body");
	//	this.app.programRunner.memory.addView(view);
		
		return panel;
	}
	
	return MemoryGraphicalViewPanel;
	
});
