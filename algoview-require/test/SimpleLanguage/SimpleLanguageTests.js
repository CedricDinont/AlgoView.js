define("SimpleLanguageTests",
["AlgoViewAppInit","jQuery", "Source"], function(algoViewApp, $j, Source) {

	var SimpleLanguageTests = function() {
		this.testModules = [{
			name: "Incorrect compilation",
			handler: "launchIncorrectCompilationTest",
			tests: [{
					name: "print",
					sources: "print",
				}, {
					name: "if",
					sources: "if",
				}]
			}, {
				name: "Correct compilation / Incorrect execution",
				handler: "launchIncorrectExecutionTest",
				tests: [{
					sources: "print",
				}, {
					sources: "if",
				}]
			}, {
				name: "Correct compilation / Correct execution",
				handler: "launchCorrectExecutionTest",
				tests: [{
					name: "print",
					sources: "print",
				}, {
					name: "if",
					sources: "if",
				}]
			},
		];
		
		algoViewApp.compiler.addListener(this);
		algoViewApp.programRunner.addListener(this);
		
		algoViewApp.program.addSource(new Source());
		
		this.currentTestModuleNumber = 0;
		this.currentTestNumber = -1;
	}
	
	SimpleLanguageTests.prototype.onCompilerEvent = function(event) {
		switch (event.type) {
			case "STARTED_COMPILATION":
				break;
			case "COMPILED_PROGRAM":
				break;
			case "COMPILATION_ERROR":
				this.currentRunningTest.compilationErrors = event.errors;
				break;
		}
	}

	SimpleLanguageTests.prototype.programChanged = function(event) {		
		switch (event.type) {
			case "OUTPUT_TEXT":
				this.currentRunningTest.realOutput += event.text;
				break;
		}
	}
	
	SimpleLanguageTests.prototype.launchIncorrectCompilationTest = function(testName) {
		test(this.testName, function() { 
			equal(true, true, "Got required compilation error.");
		});
		this.launchNextTest();
	}

	SimpleLanguageTests.prototype.launchIncorrectExecutionTest = function(testName) {
		test(this.testName, function() { 
			equal(true, true, "Got required execution error.");
		});
		this.launchNextTest();
	}

	SimpleLanguageTests.prototype.launchCorrectExecutionTest = function(test) {
		var self = this;
		
		asyncTest(test.name, 1, function() {
			self.getTestSourceFile(test)
				.done(function(data) { test.programText = data; console.log("PROG", data, test); },
					function() { self.getExpectedOutput(test)
						.done(function(data) { console.log("EXP", data); test.expectedOutput = data; },
							function() { self.runTest(test); } 
						 )
					}
			)
		});
		
		this.launchNextTest();
	 }

	SimpleLanguageTests.prototype.getTestSourceFile = function(test) {
		console.log("Getting source file for test " + test.name);
		
		return $j.ajax({
			url: "data/" + test.sources + ".sl",
			dataType: "text",
		});
	}

	SimpleLanguageTests.prototype.getExpectedOutput = function(test) {
		console.log("Getting expected output for test " + test.name);

		return $j.ajax({
			url: "data/" + test.sources + ".expected_output",
			dataType: "text",
		});
	}

	SimpleLanguageTests.prototype.compareOutputs = function(test) {
		test.realOutput += "\n";
		
		console.log("Real: ", test.realOutput);
		console.log("Expected: ", test.expectedOutput);
		
		equal(test.realOutput, test.expectedOutput, "Expected and real outputs are equal.");
	}

	SimpleLanguageTests.prototype.runTest = function(test) {
		this.currentRunningTest = test;
		test.realOutput = "";
		
		console.log(test);
		
		algoViewApp.program.currentSource.text = test.programText;
		var compilationResult = algoViewApp.compiler.compile(algoViewApp.program);
		if (compilationResult == true) {
			algoViewApp.programRunner.setProgram(algoViewApp.program);
			algoViewApp.programRunner.start();
			algoViewApp.programRunner.doStep(true, true);
		} else {
			
		}
		
		this.compareOutputs(test);
		
		start();
	}
	
	SimpleLanguageTests.prototype.getCurrentTest = function() {
		return this.testModules[this.currentTestModuleNumber].tests[this.currentTestNumber];
	}
		
	SimpleLanguageTests.prototype.launchNextTest = function() {		
		this.currentTestNumber++;
		
		var currentTestModule = this.testModules[this.currentTestModuleNumber];
		if (currentTestModule == undefined) {
			return;
		}

		if (this.currentTestNumber == 0) {
			module(currentTestModule.name);
		}

		var currentTest = currentTestModule.tests[this.currentTestNumber];
		if (currentTest == undefined) {
			this.currentTestNumber = -1;
			this.currentTestModuleNumber++;
			this.launchNextTest();			
		} else {
			//currentTestModule.handler.bind(this, currentTest)();
			var command = "this." + currentTestModule.handler + "(" + "this.getCurrentTest()" + ")";
			console.log(command);
			eval(command);
		}
	}

	SimpleLanguageTests.prototype.startTests = function() {
		console.log("Starting tests...");
				
		this.launchNextTest();
	}
	
	return SimpleLanguageTests;
})
