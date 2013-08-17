define("RemoteCModule",
["LanguageModule", "RemoteCProgramTemplate", "RemoteCQuickReference",
"RemoteCCompiler", "RemoteCProgramRunner"],
function(LanguageModule, RemoteCProgramTemplate, RemoteCQuickReference,
RemoteCCompiler, RemoteCProgramRunner) {
	
	function RemoteCModule() {
		LanguageModule.call(this);
		
		this.programTemplate = new RemoteCProgramTemplate();
		this.quickReference = new RemoteCQuickReference();
		this.compiler = new RemoteCCompiler();
		this.programRunner = new RemoteCProgramRunner();
	}
	
	// Prototype based inheritance
	RemoteCModule.prototype = new LanguageModule();
	RemoteCModule.prototype.constructor = RemoteCModule;
	
	return RemoteCModule;
});

