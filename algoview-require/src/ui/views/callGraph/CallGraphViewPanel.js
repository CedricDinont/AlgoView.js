define("CallGraphViewPanel",
["CallGraphView"],
function(CallGraphView) {
	
	function CallGraphViewPanel(algoViewApp) {
		this.app = algoViewApp;
		this.callGraphView =  new CallGraphView(this.app, "callGraphViewContainer-body");
	}
	
	CallGraphViewPanel.prototype.destroy = function() {
		this.callGraphView.destroy();
	}
	
	CallGraphViewPanel.prototype.createExtComponent = function() {
		var self = this;
		var panel = Ext.create("Ext.panel.Panel", {
			id: 'callGraphViewContainer',
			title: 'Call Graph',
			listeners: {
				resize: function() {
					if (self.callGraphView != undefined) {
						self.callGraphView.updateDimension();
					}
				},
				afterRender: function() {
					self.callGraphView.updateDimension();
				}
			},
		});
		
		return panel;
	}
	
	return CallGraphViewPanel;
	
});
