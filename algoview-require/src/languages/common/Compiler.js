define("Compiler",
[],
function() {
	
	function Compiler() {
		this.errors = new Array();
		
		this.listeners = new Array();
	}
	
	Compiler.prototype.compile = function(program) {
		return undefined;
	}
	
	Compiler.prototype.notifyListeners = function(event) {
		for (var i = 0; i < this.listeners.length; ++i) {
			this.listeners[i].onCompilerEvent(event);
		}
	}
	
	return Compiler;
});
