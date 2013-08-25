define("SimpleLanguageUnitTests",
[], function() {

	return [
			////////////////////////////////////////////////////
			// Suite de tests pour les erreurs de compilation
			////////////////////////////////////////////////////
			{
			name: "Incorrect compilation",
			handler: "launchIncorrectCompilationTest",
			sourcesPrefix: 'data/IncorrectCompilation',
			tests: [{
					name: "No program entry point",
					sources: "NoMainFunction",
					expectedCompilationErrors: [
						"NoMainFunctionError"
					]
				}, {
					name: "Wrong program entry point prototype - Function instead of procedure",
					sources: "WrongMainFunctionPrototype_Function",
					expectedCompilationErrors: [
						"WrongMainFunctionPrototypeError"
					]
				}, {
					name: "Wrong program entry point prototype - Procedure with parameters",
					sources: "WrongMainFunctionPrototype_Procedure_with_parameters",
					expectedCompilationErrors: [
						"WrongMainFunctionPrototypeError"
					]
				}, {
					name: "Undefined function",
					sources: "UndefinedFunction",
					expectedCompilationErrors: [
						"UndefinedFunctionError"
					]
				}, {
					name: "Undefined structure",
					sources: "UndefinedStructure",
					expectedCompilationErrors: [
						"UndefinedStructureError"
					]
				}]
			},
			////////////////////////////////////////////////////
			// Suite de tests pour les erreurs d'exécution
			////////////////////////////////////////////////////
			 {
				name: "Correct compilation / Incorrect execution",
				handler: "launchIncorrectExecutionTest",
				sourcesPrefix: 'data/CorrectCompilation/IncorrectExecution',
				tests: [{
						name: "Try to dereference NULL pointer",
						sources: "TryToDereferenceNullPointer",
						expectedExecutionErrors: [
							"TryToDereferenceNullPointer"
						]
				}, {
						name: "Try to use an undefined value in a PRINT instruction",
						sources: "UseOfUndefinedValue_Print",
						expectedExecutionErrors: [
							"TryToUseUndefinedValue"
						]
				}, {
						name: "Try to use an undefined value in an assign instruction",
						sources: "UseOfUndefinedValue_Assign",
						expectedExecutionErrors: [
							"TryToUseUndefinedValue"
						]
				}]
			},
			////////////////////////////////////////////////////
			// Suite de tests pour les exécutions sans problème
			////////////////////////////////////////////////////			
			{
				name: "Correct compilation / Correct execution",
				handler: "launchCorrectExecutionTest",
				sourcesPrefix: 'data/CorrectCompilation/CorrectExecution',
				tests: [{
					name: "Print",
					sources: "Print",
				}, {
					name: "If",
					sources: "If",
				}, {
					name: "For",
					sources: "For",
				}, {
					name: "Type conversions",
					sources: "TypeConversions",
				}, {
					name: "Type conversions TODO - Fail for now",
					sources: "TypeConversions_TODO",
				}, {
					name: "Recursion - Factorial",
					sources: "Recursion_Factorial",
				}, {
					name: "Math Library",
					sources: "MathLibrary",
				},
				
					// Exemples utilisés dans les slides
				 {
					name: "Slides codage de l'information - Equality example",
					sources: "Slides_Codage_Info_equality_example",
				}]
			},
		];
		
});
