define("SimpleAssemblerProgramTemplate",
["Program", "Source"],
function(Program, Source) {
	
	function SimpleAssemblerProgramTemplate() {
		Program.call(this);
		
		var source = new Source();
		
		source.name = "program.asm";
		source.text = "LDA 42\n";
		source.addBreakpoint(1);
	
		this.addSource(source);
	}
	
	// Prototype based inheritance
	SimpleAssemblerProgramTemplate.prototype = new Program();
	SimpleAssemblerProgramTemplate.prototype.constructor = SimpleAssemblerProgramTemplate;
	
	return SimpleAssemblerProgramTemplate;
});
