define("ProgramTreeViewPanel",
["ProgramTreeView"],
function(ProgramTreeView) {
	
	function ProgramTreeViewPanel(algoViewApp) {
		this.app = algoViewApp;
	}
	
	ProgramTreeViewPanel.prototype.createExtComponent = function() {
		var panel = Ext.create("Ext.panel.Panel", {
		//	html: "toto",
			title: 'Program tree',
			//autoRender: true,
		});
		
		var programTreeView =  new ProgramTreeView("programTreeContainer-body", this.app.programRunner);
		
		return panel;
	}
	
	return ProgramTreeViewPanel;
	
});
