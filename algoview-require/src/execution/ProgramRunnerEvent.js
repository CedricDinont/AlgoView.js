define("ProgramRunnerEvent",
[0],
function() {
	
ProgramRunnerEvent = function(source, type, text, exception) {
	this.source = source;
	this.type = type;
	this.text = text;
	this.exception = exception;
	this.filePosition;
}

ProgramRunnerEvent.prototype.setFilePosition = function(filePosition) {
	this.filePosition = filePosition;
}

	return ProgramRunnerEvent;
});
