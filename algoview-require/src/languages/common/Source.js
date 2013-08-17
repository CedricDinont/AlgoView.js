define("Source",
["BreakpointList"],
function(BreakpointList) {

	function Source() {
		this.name;
		this.text;
		this.breakpoints = new BreakpointList();
	}

	Source.prototype.getName = function() {
		return this.name;
	}

	Source.prototype.setName = function(name) {
		this.name = name;
	}

	Source.prototype.getText = function() {
		return this.text;
	}

	Source.prototype.setText = function(text) {
		this.text = text;
	}
	
	Source.prototype.isBreakpoint = function(line) {
		return this.breakpoints.isBreakpoint(line);
	}
	
	Source.prototype.setBreakpoints = function(breakpointList) {
		this.breakpoints = breakpoints;
	}
	
	Source.prototype.addBreakpoint = function(line) {
		this.breakpoints.addBreakpoint(line);
	}
	
	return Source;
});
