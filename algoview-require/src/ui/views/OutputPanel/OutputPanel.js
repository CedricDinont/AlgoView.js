define("OutputPanel",
["Exception"],
function(Exception) {
	
	function OutputPanel(algoViewApp) {
		this.app = algoViewApp;
		
		this.extComponent;
		
		this.app.compiler.addListener(this);
		this.app.programRunner.addListener(this);
	}
	
	OutputPanel.prototype.destroy = function() {
		this.app.compiler.removeListener(this);
		this.app.programRunner.removeListener(this);
	}
	
	OutputPanel.prototype.createExtComponent = function() {
		this.extComponent = Ext.create("Ext.panel.Panel", {
			id: 'outputPanel',
			title: 'Output',
			autoScroll: true,
		});
		return this.extComponent;
	}
	
	OutputPanel.prototype.append = function(html) {		
		var oldValue = this.extComponent.body.dom.innerHTML;
		this.extComponent.update(oldValue + html);
		this.extComponent.scrollBy(0, 50, false);
	}
	
	OutputPanel.prototype.programChanged = function(event) {
		switch (event.type) {
			case "OUTPUT_TEXT":
			console.log(event);
				// TODO: Voir pour protéger les balises HTML
				var html = event.text.replace(/\n/g, "<br />");
				this.append("<span>" + html + "</span>");
				break;
			case "DONE_STEP":
				break;
			case "DONE_INSTRUCTION":
				break;
			case "STARTED_PROGRAM":
				this.append("<div>Running program.</div><hr />");
				break;
			case "STOPPED_PROGRAM":
				this.append("<hr /><div>Program terminated.</div>");
				break;
			case "ENTERING_FUNCTION":
				break;
			case "EXITING_FUNCTION":
				break;
			case "EXCEPTION":
				var message;
				if (event.exception instanceof Exception) {
					if (event.exception.wrappedException != undefined) {
						message = event.exception.wrappedException.toString();
					} else {
						message = event.exception.toString();
					}
				} else {
					message = event.exception;
				}
				this.append("<hr /><div class='programRunnerErrorMessage'><div>Error during program execution.</div><div>" + message + "</div></div>");
				break;
		}
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
					var error = event.errors[i];
					var message = "";
					if (error.location !== undefined) {
						message += error.location.toString() + " - ";
					}
					message += error.toString();
					newContent += "<div class='error-message'>" + message + "</div>";
				}
				this.extComponent.update(newContent);
				break;
		}
	}
		
	return OutputPanel;
	
});
