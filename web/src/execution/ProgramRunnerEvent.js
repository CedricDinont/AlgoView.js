ProgramRunnerEvent = function(source, type, text) {
	this.source = source;
	this.type = type;
	this.text = text;
	this.filePosition;
}

ProgramRunnerEvent.prototype.setFilePosition = function(filePosition) {
	this.filePosition = filePosition;
}
