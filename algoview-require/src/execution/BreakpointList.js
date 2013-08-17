define("BreakpointList",
["Breakpoint"],
function() {
	
	var BreakpointList = function() {
		this.breakpoints = new Array();
	}

	BreakpointList.prototype.addBreakpoint = function(breakpoint) {
		this.breakpoints.push(breakpoint);
	}

	BreakpointList.prototype.setBreakpoints = function(breakpoints) {
		this.breakpoints = breakpoints;
	}

	BreakpointList.prototype.isBreakpoint = function(line) {		
		for (var i = 0; i < this.breakpoints.length; ++i) {
			if (this.breakpoints[i] == line) {
				return true;
			}
		}
		return false;
	}

	return BreakpointList;
});
