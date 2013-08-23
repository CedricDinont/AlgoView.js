define("SimpleLanguageTester",
["AlgoViewAppInit","jQuery", "Source"], function(algoViewApp, $j, Source) {

	function SimpleLanguageTester(testSuite) {
		this.testModules = testSuite;

		algoViewApp.compiler.addListener(this);
		algoViewApp.programRunner.addListener(this);
		
		algoViewApp.program.addSource(new Source());
		
		this.currentTestModuleNumber = 0;
		this.currentTestNumber = -1;
	}
	
	SimpleLanguageTester.prototype.onCompilerEvent = function(event) {
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

	SimpleLanguageTester.prototype.programChanged = function(event) {		
		switch (event.type) {
			case "OUTPUT_TEXT":
				this.currentRunningTest.realOutput += event.text;
				break;
			case "EXCEPTION":
				this.currentRunningTest.executionErrors.push(event.exception);
				break;
		}
	}
	
	SimpleLanguageTester.prototype.launchIncorrectCompilationTest = function(test) {
		var self = this;
		
		asyncTest(test.name, 1 + test.expectedCompilationErrors.length + 1, function() {
			self.getTestSourceFile(test)
				.done(function() { 
					self.runTest(test); 
				})
		});
		
		this.launchNextTest();
	}

	SimpleLanguageTester.prototype.launchIncorrectExecutionTest = function(test) {
		var self = this;
		
		asyncTest(test.name, 2 + test.expectedExecutionErrors.length + 1, function() {
			self.getTestSourceFile(test)
				.done(function() { 
					self.runTest(test); 
				})
		});
		
		this.launchNextTest();
	}

	SimpleLanguageTester.prototype.launchCorrectExecutionTest = function(test) {
		var self = this;
		
		asyncTest(test.name, 3, function() {
			self.getTestSourceFile(test)
				.done(function() { 
					self.getExpectedOutput(test)
						.done(function() { 
							self.runTest(test); 
						})
				})
		});
		
		this.launchNextTest();
	 }

	SimpleLanguageTester.prototype.getTestSourceFile = function(test) {
		console.log("Getting source file for test " + test.name);
		
		return $j.ajax({
			url: test.sourcesPrefix + "/" + test.sources + ".sl",
			dataType: "text",
			success: function(data) {
				test.programText = data;
			}
		});
	}

	SimpleLanguageTester.prototype.getExpectedOutput = function(test) {
		console.log("Getting expected output for test " + test.name);

		return $j.ajax({
			url: test.sourcesPrefix + "/" + test.sources + ".expected_output",
			dataType: "text",
			success: function(data) {
				test.expectedOutput = data;
			}
		});
	}

	SimpleLanguageTester.prototype.compareCompilationErrors = function(test) {
		ok(test.expectedCompilationErrors.length == test.compilationErrors.length, 
			"Number of expected and real compilation errors are equal.");
		for (var i = 0; i < test.expectedCompilationErrors.length; ++i) {
			ok(test.expectedCompilationErrors[i] == test.compilationErrors[i].constructor.name,
				"Compilation error " + (i + 1) + " is " + test.expectedCompilationErrors[i] + "(got " + test.compilationErrors[i].constructor.name + ").");
		}
	}

	SimpleLanguageTester.prototype.compareExecutionErrors = function(test) {
		ok(test.expectedExecutionErrors.length == test.executionErrors.length, "Number of expected and real execution errors are equal.");
		for (var i = 0; i < test.expectedExecutionErrors.length; ++i) {
			ok(test.expectedExecutionErrors[i] == test.executionErrors[i].constructor.name,
				"Execution error " + (i + 1) + " is " + test.expectedExecutionErrors[i] + "(got " + test.executionErrors[i].constructor.name + ").");
		}
	}

	SimpleLanguageTester.prototype.compareOutputs = function(test) {
		test.realOutput += "\n";
		
		console.log("Real: ", test.realOutput);
		console.log("Expected: ", test.expectedOutput);
		
		equal(test.realOutput, test.expectedOutput, "Expected and real outputs are equal.");
	}

	SimpleLanguageTester.prototype.runTest = function(test) {
		this.currentRunningTest = test;

		algoViewApp.program.currentSource.text = test.programText;
		var compilationResult = algoViewApp.compiler.compile(algoViewApp.program);
		
		if (test.expectedCompilationErrors == undefined) {
			ok(compilationResult, "Test compiles without error.");
		} else {
			ok(! compilationResult, "Test compiles with errors.");
			this.compareCompilationErrors(test);
			start();
			return;
		}
		
		if (! compilationResult) {
			start();
			return;
		}
		
		test.executionErrors = new Array();
		test.realOutput = "";
		algoViewApp.programRunner.setProgram(algoViewApp.program);
		algoViewApp.programRunner.start();

		if (test.expectedExecutionErrors == undefined) {
			ok(test.executionErrors.length == 0, "Test runs without error.");
		} else {
			ok(test.executionErrors.length != 0, "Test runs with errors.");
			this.compareExecutionErrors(test);
			start();
			return;
		}
		
		if (test.executionErrors.length != 0) {
			start();
			return;
		}
		
		if (test.expectedOutput !== undefined) {
			this.compareOutputs(test);
		}
		
		start();
	}
	
	SimpleLanguageTester.prototype.getCurrentTest = function() {
		return this.testModules[this.currentTestModuleNumber].tests[this.currentTestNumber];
	}
		
	SimpleLanguageTester.prototype.launchNextTest = function() {		
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
			currentTest.sourcesPrefix = currentTestModule.sourcesPrefix;
			//currentTestModule.handler.bind(this, currentTest)();
			var command = "this." + currentTestModule.handler + "(" + "this.getCurrentTest()" + ")";
			console.log(command);
			eval(command);
		}
	}

	SimpleLanguageTester.prototype.startTests = function() {
		console.log("Starting tests...");
				
		this.launchNextTest();
	}
	
	return SimpleLanguageTester;
})
