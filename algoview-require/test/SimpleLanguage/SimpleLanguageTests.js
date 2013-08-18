define("SimpleLanguageTests",
["AlgoViewAppInit","jQuery", "Source"], function(algoViewApp, $j, Source) {

	var SimpleLanguageTests = function() {
		this.testModules = [{
			name: "Incorrect compilation",
			handler: "launchIncorrectCompilationTest",
			tests: ["print",
				"if",
				]
			}, {
				name: "Correct compilation / Incorrect execution",
				handler: "launchIncorrectExecutionTest",
				tests: ["print",
					"if",
				]
			}, {
				name: "Correct compilation / Correct execution",
				handler: "launchCorrectExecutionTest",
				tests: ["print",
					"if",
				]
			},
		];
		
		algoViewApp.compiler.addListener(this);
		algoViewApp.programRunner.addListener(this);
		
		algoViewApp.program.addSource(new Source());
		
		this.currentTestModuleNumber = 0;
		this.currentTestNumber = -1;
	}
	
	SimpleLanguageTests.prototype.onCompilerEvent = function(event) {
		 console.log(event);
	}

	SimpleLanguageTests.prototype.programChanged = function(event) {		
		switch (event.type) {
			case "OUTPUT_TEXT":
				this.realOutput += event.text;
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

	SimpleLanguageTests.prototype.launchCorrectExecutionTest = function(_testName) {
		var self = this;
		asyncTest(_testName, 1, function() {
			self.launchCorrectExecutionTest2();
		});
		
		this.launchNextTest();
	 }

	SimpleLanguageTests.prototype.launchCorrectExecutionTest2 = function() {
		this.testName = QUnit.config.current.testName;
		
		//stop();
		
		console.log("Getting files for test " + QUnit.config.current.testName);
		
		var self = this;
		$j.ajax({
			type: "GET",
			url: "data/" + QUnit.config.current.testName + ".sl",
			error: this.loadErrorHandler,
			success: self.getExpectedOutput,
			dataType: "text",
			context: self,
		});
	}

	SimpleLanguageTests.prototype.getExpectedOutput = function(_programText) {
		this.programText = _programText;

		console.log("Getting expected output for test " + this.testName);

		var self = this;
		$j.ajax({
			type: "GET",
			url: "data/" + this.testName + ".expected_output",
			error: this.loadErrorHandler,
			success: self.runTest,
			dataType: "text",
			context: self,
		});
	}

	SimpleLanguageTests.prototype.compareOutputs = function() {
		this.realOutput += "\n";
		
		console.log("Real: ", this.realOutput);
		console.log("Expected: ", this.expectedOutput);
		
		equal(this.realOutput, this.expectedOutput, "Expected and real outputs are equal.");
	}

	SimpleLanguageTests.prototype.runTest = function(_expectedOutput) {
		this.expectedOutput = _expectedOutput;
		this.realOutput = "";
		
		algoViewApp.program.currentSource.text = this.programText;
		var compilationResult = algoViewApp.compiler.compile(algoViewApp.program);
		if (compilationResult == true) {
			algoViewApp.programRunner.setProgram(algoViewApp.program);
			algoViewApp.programRunner.start();
			algoViewApp.programRunner.doStep(true, true);
		}

		this.compareOutputs();
		
		start();
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
			var command = "this." + currentTestModule.handler + "('" + currentTest + "')";
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
