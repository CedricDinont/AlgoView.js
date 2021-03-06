define("Program",
["Source"],
function() {

	function Program() {
		this.sources = new Array();
		this.currentSource;
	}
	
	Program.prototype.addSource = function(source) {
		if (this.sources.length == 0) {
			this.currentSource = source;
		}
		
		this.sources.push(source);
	}
	
	Program.prototype.getSources = function() {
		return this.sources;
	}
	
	return Program;
});
