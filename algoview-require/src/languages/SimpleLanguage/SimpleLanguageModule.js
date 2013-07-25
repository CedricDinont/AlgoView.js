define("SimpleLanguageModule",
["LanguageModule", "SimpleLanguageProgramTemplate", "SimpleLanguageQuickReference",
"SimpleLanguageCompiler", "SimpleLanguageProgramRunner"],
function(LanguageModule, SimpleLanguageProgramTemplate, SimpleLanguageQuickReference,
SimpleLanguageCompiler, SimpleLanguageProgramRunner) {
	
	function SimpleLanguageModule() {
		LanguageModule.call(this);
		
		this.programTemplate = new SimpleLanguageProgramTemplate();
		this.quickReference = new SimpleLanguageQuickReference();
		this.compiler = new SimpleLanguageCompiler();
		this.programRunner = new SimpleLanguageProgramRunner();
	}
	
	// Prototype based inheritance
	SimpleLanguageModule.prototype = new LanguageModule();
	SimpleLanguageModule.prototype.constructor = SimpleLanguageModule;
	
	return SimpleLanguageModule;
	
});
