define("BreakpointList",
[0],
function() {
	
var BreakpointList = function() {
	this.breakpoints = new Array();
}

BreakpointList.prototype.addBreakPoint = function(breakpoint) {
	this.breakpoints.push(breakpoint);
}

BreakpointList.prototype.setBreakpoints = function(breakpoints) {
	this.breakpoints = breakpoints;
}

BreakpointList.prototype.isBreakpoint = function(line) {
	
//	console.log("Breakpoints", this.breakpoints);
//	console.log("Requested line", line);
	
	for (var i = 0; i < this.breakpoints.length; ++i) {
	//	console.log(i, this.breakpoints[i]);
		if (this.breakpoints[i] == line) {
		//	console.log("true");
			return true;
		}
	}
	return false;
}

	return BreakpointList;
});
