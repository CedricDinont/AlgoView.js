define("OutputPanel",
[],
function() {
	
	function OutputPanel(algoViewApp) {
		this.app = algoViewApp;
		
		this.extComponent;
		
		this.app.compiler.addListener(this);
	}
	
	OutputPanel.prototype.createExtComponent = function() {
		this.extComponent = Ext.create("Ext.panel.Panel", {
			id: 'outputPanel',
			title: 'Output',
			autoScroll: true,
		});
		return this.extComponent;
	}
	
	OutputPanel.prototype.onCompilerEvent = function(event) {
		switch (event.type) {
			case "STARTED_COMPILATION":
				this.extComponent.update("");
				break;
			case "COMPILED_PROGRAM":
				this.extComponent.update("<div>Compiled without error.</div>");
				break;
			case "COMPILATION_ERROR":
				var newContent = "<div class='error-message'>Compilation errors:</div>";
				for (var i = 0; i < event.errors.length; ++i) {
					var message = event.errors[i];
					newContent += "<div class='error-message'>" + message + "</div>";
				}
				this.extComponent.update(newContent);
				break;
		}
	}
		
	return OutputPanel;
	
});
