define("CompilerEvent",
[],
function() {
	
	CompilerEvent = function(source, type, text, exception) {
		this.source = source;
		this.type = type;
		this.text = text;
		this.exception = exception;
		this.filePosition;
	}

	CompilerEvent.prototype.setFilePosition = function(filePosition) {
		this.filePosition = filePosition;
	}

	return CompilerEvent;
});
