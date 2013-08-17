define("SimpleAssemblerModule",
["LanguageModule", "SimpleAssemblerProgramTemplate", "SimpleAssemblerQuickReference",
"SimpleAssemblerCompiler", "SimpleAssemblerProgramRunner"],
function(LanguageModule, SimpleAssemblerProgramTemplate, SimpleAssemblerQuickReference,
SimpleAssemblerCompiler, SimpleAssemblerProgramRunner) {
	
	function SimpleAssemblerModule() {
		LanguageModule.call(this);
		
		this.programTemplate = new SimpleAssemblerProgramTemplate();
		this.quickReference = new SimpleAssemblerQuickReference();
		this.compiler = new SimpleAssemblerCompiler();
		this.programRunner = new SimpleAssemblerProgramRunner();
	}
	
	// Prototype based inheritance
	SimpleAssemblerModule.prototype = new LanguageModule();
	SimpleAssemblerModule.prototype.constructor = SimpleAssemblerModule;
	
	return SimpleAssemblerModule;
	
});
