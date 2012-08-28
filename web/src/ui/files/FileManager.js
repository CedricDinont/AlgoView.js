var FileManager = function() {
	this.currentFile;
	this.files = new Array();
}

FileManager.prototype.setCurrentFile = function(file) {
	this.currentFile = file;
}

FileManager.prototype.getCurrentFile = function() {
	return this.currentFile;
}


