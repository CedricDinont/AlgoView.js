var programCompiler = new ProgramCompiler();



buildProgramTree = function(fileName) {
	
	console.log("Getting file " + fileName);
	$.ajax({
   		type: "GET",
		url: "samples/" + fileName + ".sl",
		error: function(){ loadErrorHandler(fileName) },
		success: compileProgram,
		dataType: "text",
	});
}


loadErrorHandler = function(fileName){
		$('#compilerOutput').html( "Unable to load file : " + fileName + ".js");	
}


compileProgram = function(programText) {

	$('#programCode').html( programText.replace(/\n/g,"<br/>") );
	
	console.log("Compiling program");	
	programCompiler.getProgram().setText(programText);
	
	try{
		programCompiler.compile();
	
		$('#compilerOutput').html( AlgoUtils.getTreeLevelsString( programCompiler.getProgramTree() ).replace(/\n/g,"<br/>")  );
	}catch(e){

		var errorHTML = e.toString();
		
		if( e.getWrappedException() != undefined ){
			errorHTML += "<br/> Wrapped Exception : <br/>" + e.getWrappedException().toString().replace(/\n/g,"<br/>");
		}
		
		$('#compilerOutput').html( errorHTML );
	}


}

// buildProgramTree takes a program name without extension
// the corresponding file is supposed to be in the /samples folder and to have the extension .sl

buildProgramTree("if");		
//buildProgramTree("linkedlist");



