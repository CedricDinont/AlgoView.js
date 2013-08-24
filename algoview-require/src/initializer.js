// Require configuration
// All Files with their dependencies are listed here

"use strict"; // Permet de voir les doublons, qui empêchent la minification

requirejs.config({
    paths: {
        // Lib aliases
        jQuery: '../lib/jquery/jquery-1.9.0.min',
        antlr: '../lib/antlr-javascript-runtime-3.1/antlr3-all-patched',
        bootstrap: '../lib/bootstrap/bootstrap.min',
		ace: "../lib/ace/ace-0.2/ace",
		aceAlgoviewTheme: "../lib/ace/ace-0.2/theme-algoview",
		aceSimpleLanguageMode: "../lib/ace/ace-0.2/mode-simple_language",
		Ext: "../lib/extjs/extjs-4.1.0/ext-all",     
        raphael: "../lib/raphael/raphael-2.1",  
        
        // AlgoView GUI
        AlgoViewApp: "AlgoViewApp",
        ExternalController: "external_control/ExternalController",
        ExtInit: "ui/init/ExtInit",     
        aceinit: "ui/init/aceinit",     
        MainFrame: "ui/MainFrame",
        ToolBar: 'ui/ToolBar/ToolBar',
        OutputPanel: 'ui/views/OutputPanel/OutputPanel',
        LayoutManager: 'ui/LayoutManager',
        EditorsPanel: 'ui/views/EditorsPanel/EditorsPanel',
        ExtUxAceEditor: "ui/editor/Editor",
        ExtUxAceEditorPanel: "ui/editor/Panel",
        
        // Memory Views
        DebugLogger: "ui/views/memory/DebugLogger",
        View: "ui/views/memory/View",
        LinkView: "ui/views/memory/LinkView",
        MemoryUnitView: "ui/views/memory/MemoryUnitView",
        MemoryGraphicalView: "ui/views/memory/MemoryGraphicalView",
        StackTableView: "ui/views/memory/StackTableView",
        HeapTableView: "ui/views/memory/HeapTableView",
        ProgramTreeView: "ui/views/callGraph/ProgramTreeView",
        MemoryGraphicalViewPanel: "ui/views/memory/MemoryGraphicalViewPanel",
        StackTableViewPanel: "ui/views/memory/StackTableViewPanel",
        HeapTableViewPanel: "ui/views/memory/HeapTableViewPanel",
        ProgramTreeViewPanel: "ui/views/callGraph/ProgramTreeViewPanel",

        // Simple Graph aliases
        AlgoUtils: "utils/AlgoUtils",
        SimpleGraphExceptions: 'ui/views/callGraph/model/graph/SimpleGraphExceptions',
        AlreadyExistingEdgeException: "ui/views/callGraph/model/graph/SimpleGraphExceptions/AlreadyExistingEdgeException",
        AlreadyExistingNodeException: "ui/views/callGraph/model/graph/SimpleGraphExceptions/AlreadyExistingNodeException",
        InvalidIdException: "ui/views/callGraph/model/graph/SimpleGraphExceptions/InvalidIdException",
        InvalidReferenceException: "ui/views/callGraph/model/graph/SimpleGraphExceptions/InvalidReferenceException",
        UnexistingNodeException: "ui/views/callGraph/model/graph/SimpleGraphExceptions/UnexistingNodeException",
        UnexistingEdgeException: "ui/views/callGraph/model/graph/SimpleGraphExceptions/UnexistingEdgeException",
        ViewHandlerExceptions: 'ui/views/callGraph/model/graph/ViewHandlerExceptions',
        InvalidViewTypeException: 'ui/views/callGraph/model/graph/ViewHandlerExceptions/InvalidViewTypeException',
        Edge: 'ui/views/callGraph/model/graph/edge/Edge',
        EdgeExceptions: "ui/views/callGraph/model/graph/edge/EdgeExceptions",
        InvalidWeigthException: "ui/views/callGraph/model/graph/edge/EdgeExceptions/InvalidWeigthException",
        AbstractNode: 'ui/views/callGraph/model/graph/node/AbstractNode',
        AbstractNodeIterator: 'ui/views/callGraph/model/graph/node/AbstractNodeIterator',
        SimpleGraphNode: 'ui/views/callGraph/model/graph/node/Node',
        NodeIterator: 'ui/views/callGraph/model/graph/node/NodeIterator',
        AbstractSimpleGraph: 'ui/views/callGraph/model/graph/AbstractSimpleGraph',
        SimpleGraph: 'ui/views/callGraph/model/graph/SimpleGraph',
        GraphCreationEvent: 'ui/views/callGraph/model/GraphCreationEvent',
        GraphCreator: 'ui/views/callGraph/model/GraphCreator',
        ViewHandler: 'ui/views/callGraph/model/ViewHandler',
        view: 'ui/views/callGraph/view',
        graphicalView: 'ui/views/callGraph/view/graphicalView',
        GraphicalViewListenerHandler: 'ui/views/callGraph/view/graphicalView/controller/GraphicalViewListenerHandler',
        WindowWidthChangeEvent: 'ui/views/callGraph/view/graphicalView/model/WindowWidthChangeEvent',
        GraphicalViewNode: 'ui/views/callGraph/view/graphicalView/model/GraphicalViewNode',
        GraphicalViewSimpleGraph: 'ui/views/callGraph/view/graphicalView/model/GraphicalViewSimpleGraph',
        GraphicalView: 'ui/views/callGraph/view/graphicalView/view/GraphicalView',
        GraphicalViewEdgeView: 'ui/views/callGraph/view/graphicalView/view/GraphicalViewEdgeView',
        GraphicalViewNodeView: 'ui/views/callGraph/view/graphicalView/view/GraphicalViewNodeView',
        textView: 'ui/views/callGraph/view/textView',
        TextViewExceptions: 'ui/views/callGraph/view/textView/TextViewExceptions',
        UndefinedGraphException: 'ui/views/callGraph/view/textView/TextViewExceptions/UndefinedGraphException',
        UndefinedSpecificationException: 'ui/views/callGraph/view/textView/TextViewExceptions/UndefinedSpecificationException',
        TextViewListenerHandler: 'ui/views/callGraph/view/textView/controller/TextViewListenerHandler',
        TextViewSimpleGraphExceptions: 'ui/views/callGraph/view/textView/model/TextViewSimpleGraphExceptions',
        InvalidStatusException: 'ui/views/callGraph/view/textView/model/TextViewSimpleGraphExceptions/InvalidStatusException',
        CloseNodeEvent: 'ui/views/callGraph/view/textView/model/CloseNodeEvent',
        OpenNodeEvent: 'ui/views/callGraph/view/textView/model/OpenNodeEvent',
        TextViewSimpleGraph: 'ui/views/callGraph/view/textView/model/TextViewSimpleGraph',
        TextView: 'ui/views/callGraph/view/textView/view/TextView',
        AbstractView: 'ui/views/callGraph/view/AbstractView',
        Event: 'ui/views/callGraph/Event',
        SimpleGraphException: 'ui/views/callGraph/Exception',
        
        // Compiler Simple Language //
        // Program parser aliases
        SimpleLanguageLexer: "languages/SimpleLanguage/program/parser/SimpleLanguageLexer",
        SimpleLanguageParser: "languages/SimpleLanguage/program/parser/SimpleLanguageParser",
        
        // Simple Language compiler errors
        NoMainFunctionError: "languages/SimpleLanguage/compilation_errors/NoMainFunctionError",
        UndefinedFunctionError: "languages/SimpleLanguage/compilation_errors/UndefinedFunctionError",
        UndefinedStructureError: "languages/SimpleLanguage/compilation_errors/UndefinedStructureError",
        ParsingError: "languages/SimpleLanguage/compilation_errors/ParsingError",
        
        // Simple Language execution errors
        TryToDereferenceNullPointer: "languages/SimpleLanguage/execution_errors/TryToDereferenceNullPointer",
        
        // AlgoView Exceptions
        AlreadyAllocatedSegmentException: "exceptions/AlreadyAllocatedSegmentException",
        CannotApplyTestOperatorException: "exceptions/CannotApplyTestOperatorException",
        DoubleFreeException: "exceptions/DoubleFreeException",
        ErrorInstructionException: "exceptions/ErrorInstructionException",
        IllegalArgumentException: "exceptions/IllegalArgumentException",
        PartOfPrimitiveTypeException: "exceptions/PartOfPrimitiveTypeException",
        UnallocatedSegmentException: "exceptions/UnallocatedSegmentException",
        BadVariableNameException: "exceptions/BadVariableNameException",
      //  CompilationError: "exceptions/CompilationError",
        EmptyStackException: "exceptions/EmptyStackException",
        Exception: "exceptions/Exception",
        InvalidAddressException: "exceptions/InvalidAddressException",
        InfiniteLoopException: "exceptions/InfiniteLoopException",
        StackOverflowException: "exceptions/StackOverflowException",
        UndeclaredItemException: "exceptions/UndeclaredItemException",
                
        // Compiler execution aliases
        BooleanMemoryValue: "execution/BooleanMemoryValue",
        PointerMemoryValue: "execution/PointerMemoryValue",
        FloatMemoryValue: "execution/FloatMemoryValue",
        Memory: "execution/Memory",
        MemoryState: "execution/MemoryState",
        CharacterMemoryValue: "execution/CharacterMemoryValue",
        IntegerMemoryValue: "execution/IntegerMemoryValue",
        MemoryValue: "execution/MemoryValue",

        NodeStack: "execution/NodeStack",
        NodeStackElement: 'execution/NodeStackElement',
        NodeContext: 'execution/NodeContext',
        ExpressionNodeContext: 'execution/ExpressionNodeContext',
        ExpressionListNodeContext: 'execution/ExpressionListNodeContext',
        FunctionNodeContext: 'execution/FunctionNodeContext',
        AssignableNodeContext: 'execution/AssignableNodeContext',
        Breakpoint: "execution/Breakpoint",
        BreakpointList: "execution/BreakpointList",
        Stack: "execution/Stack",
        Heap: "execution/Heap",
        MemoryUnit: "execution/MemoryUnit",
        MemoryUnitHashTable: "execution/MemoryUnitHashTable",
        Variable: "execution/Variable",
        AbstractModel: "model/AbstractModel",
        
        
        // Compiler and program runner aliases
        
        Compiler: 'languages/common/Compiler',
        CompilerEvent: 'languages/common/CompilerEvent',
        CompilationError: 'languages/common/CompilationError',
        Program: "languages/common/Program",
        Source: "languages/common/Source",
        ProgramLocation: "languages/common/ProgramLocation",
        ProgramRunner: 'languages/common/ProgramRunner',
        ProgramRunnerEvent: "execution/ProgramRunnerEvent",
        ProgramRunnerListener: "execution/ProgramRunnerListener",
        TreeProgramRunner: "execution/TreeProgramRunner",
        LanguageModule: 'languages/common/LanguageModule',
        
        IntegerDataType: "languages/SimpleLanguage/program/IntegerDataType",
        
        // RemoteC specific aliases
		RemoteCModule: 'languages/RemoteC/RemoteCModule',
        RemoteCCompiler: 'languages/RemoteC/RemoteCCompiler',
        RemoteCProgramRunner: 'languages/RemoteC/RemoteCProgramRunner',
        RemoteCQuickReference: 'languages/RemoteC/RemoteCQuickReference',
        RemoteCProgramTemplate: 'languages/RemoteC/RemoteCProgramTemplate',        

        // Simple Assembler specific aliases
		SimpleAssemblerModule: 'languages/SimpleAssembler/SimpleAssemblerModule',
        SimpleAssemblerCompiler: 'languages/SimpleAssembler/SimpleAssemblerCompiler',
        SimpleAssemblerProgramRunner: 'languages/SimpleAssembler/SimpleAssemblerProgramRunner',
        SimpleAssemblerQuickReference: 'languages/SimpleAssembler/SimpleAssemblerQuickReference',
        SimpleAssemblerProgramTemplate: 'languages/SimpleAssembler/SimpleAssemblerProgramTemplate',     
        
        // Simple Language specific aliases
        SimpleLanguageModule: 'languages/SimpleLanguage/SimpleLanguageModule',
        SimpleLanguageCompiler: 'languages/SimpleLanguage/SimpleLanguageCompiler',
        SimpleLanguageProgramRunner: 'languages/SimpleLanguage/SimpleLanguageProgramRunner',
        SimpleLanguageQuickReference: 'languages/SimpleLanguage/SimpleLanguageQuickReference',
        SimpleLanguageProgramTemplate: 'languages/SimpleLanguage/SimpleLanguageProgramTemplate',
        DoWhileNode: "languages/SimpleLanguage/program/DoWhileNode",
        WhileNode: "languages/SimpleLanguage/program/WhileNode",
        StructureNameNode: "languages/SimpleLanguage/program/StructureNameNode",
        StructureDeclarationNode: "languages/SimpleLanguage/program/StructureDeclarationNode",
        AllocateNode: "languages/SimpleLanguage/program/AllocateNode",
        FunctionNameNode: "languages/SimpleLanguage/program/FunctionNameNode",
        ArithmeticExpressionNode: "languages/SimpleLanguage/program/ArithmeticExpressionNode",
        FunctionNode: "languages/SimpleLanguage/program/FunctionNode",
        StringNode: "languages/SimpleLanguage/program/StringNode",
        ConditionNode: "languages/SimpleLanguage/program/ConditionNode",
        ErrorNode: "languages/SimpleLanguage/program/ErrorNode",
        StructureElementNameNode: "languages/SimpleLanguage/program/StructureElementNameNode",
        RandomNode: "languages/SimpleLanguage/program/RandomNode",
        PointerDereferenceNode: "languages/SimpleLanguage/program/PointerDereferenceNode",
        AndNode: "languages/SimpleLanguage/program/AndNode",
        StructureElementNode: "languages/SimpleLanguage/program/StructureElementNode",
        ForNode: "languages/SimpleLanguage/program/ForNode",
        CharacterDataType: "languages/SimpleLanguage/program/CharacterDataType",
        PrintNode: "languages/SimpleLanguage/program/PrintNode",
        FreeNode: "languages/SimpleLanguage/program/FreeNode",
        VariableNameNode: "languages/SimpleLanguage/program/VariableNameNode",
        AddressNode: "languages/SimpleLanguage/program/AddressNode",
        AssignableNode: "languages/SimpleLanguage/program/AssignableNode",
        DereferenceNode: "languages/SimpleLanguage/program/DereferenceNode",
        FunctionParameterDeclarationNode: "languages/SimpleLanguage/program/FunctionParameterDeclarationNode",
        IdentifierListNode: "languages/SimpleLanguage/program/IdentifierListNode",
        NumberNode: "languages/SimpleLanguage/program/NumberNode",
        BeginNode: "languages/SimpleLanguage/program/BeginNode",
        ExpressionListNode: "languages/SimpleLanguage/program/ExpressionListNode",
        OrNode: "languages/SimpleLanguage/program/OrNode",
        InstructionListNode: "languages/SimpleLanguage/program/InstructionListNode",
        ArrayDataType: "languages/SimpleLanguage/program/ArrayDataType",
        VariablesDeclarationListNode: "languages/SimpleLanguage/program/VariablesDeclarationListNode",
        AssignNode: "languages/SimpleLanguage/program/AssignNode",
        ContentNode: "languages/SimpleLanguage/program/ContentNode",
        UnaryMinusNode: "languages/SimpleLanguage/program/UnaryMinusNode",
        ReturnNode: "languages/SimpleLanguage/program/ReturnNode",
        IfNode: "languages/SimpleLanguage/program/IfNode",
        ProgramNode: "languages/SimpleLanguage/program/ProgramNode",
        DataType: "languages/SimpleLanguage/program/DataType",
        ArrayElementNode: "languages/SimpleLanguage/program/ArrayElementNode",
        FunctionListNode: "languages/SimpleLanguage/program/FunctionListNode",
        SimpleLanguageProgram: "languages/SimpleLanguage/SimpleLanguageProgram",
        StructureDataType: "languages/SimpleLanguage/program/StructureDataType",
        TestNode: "languages/SimpleLanguage/program/TestNode",
        EndNode: "languages/SimpleLanguage/program/EndNode",
        FunctionCallNode: "languages/SimpleLanguage/program/FunctionCallNode",
        FloatDataType: "languages/SimpleLanguage/program/FloatDataType",
        Node: "languages/SimpleLanguage/program/Node",
        ExpressionNode: "languages/SimpleLanguage/program/ExpressionNode",
        StructureDeclarationListNode: "languages/SimpleLanguage/program/StructureDeclarationListNode",
        AssignExpressionNode: "languages/SimpleLanguage/program/AssignExpressionNode",
        NullPointerNode: "languages/SimpleLanguage/program/NullPointerNode",
        VariableDeclarationNode: "languages/SimpleLanguage/program/VariableDeclarationNode",
        PointerDataType: "languages/SimpleLanguage/program/PointerDataType",
        VariablesDeclarationNode: "languages/SimpleLanguage/program/VariablesDeclarationNode",
        AssignStringNode: "languages/SimpleLanguage/program/AssignStringNode",
        BooleanDataType: "languages/SimpleLanguage/program/BooleanDataType",
        FileLocation: "languages/SimpleLanguage/program/FileLocation",
        FunctionParametersListNode: "languages/SimpleLanguage/program/FunctionParametersListNode",
        VariableTypeNode: "languages/SimpleLanguage/program/VariableTypeNode",
        NotNode: "languages/SimpleLanguage/program/NotNode",
        FunctionParameterValueNode: "languages/SimpleLanguage/program/FunctionParameterValueNode",
        
        BuiltInFunctionLibrary: "languages/SimpleLanguage/program/libraries/common/BuiltInFunctionLibrary",
        BuiltInFunctionLibrariesManager: "languages/SimpleLanguage/program/libraries/common/BuiltInFunctionLibrariesManager",
        BuiltInFunctionNode: "languages/SimpleLanguage/program/libraries/common/BuiltInFunctionNode",
        MathLibrary: "languages/SimpleLanguage/program/libraries/math/MathLibrary",
        CosFunctionNode: "languages/SimpleLanguage/program/libraries/math/CosFunctionNode",
        SinFunctionNode: "languages/SimpleLanguage/program/libraries/math/SinFunctionNode",
        TanFunctionNode: "languages/SimpleLanguage/program/libraries/math/TanFunctionNode",
        PowFunctionNode: "languages/SimpleLanguage/program/libraries/math/PowFunctionNode",
        StringLibrary: "languages/SimpleLanguage/program/libraries/string/StringLibrary",
        
        // Compiler not yet implemented classes aliases
        InternalError: "notImplementedYet/InternalError",
        InvalidExpressionException: "notImplementedYet/InvalidExpressionException",
        InvalidMemoryAddressException: "notImplementedYet/InvalidMemoryAddressException",
        CannotConvertTo: "notImplementedYet/CannotConvertTo",
        Assignable: "notImplementedYet/Assignable",
        TryToAccessIncorrectArrayElementException: "notImplementedYet/TryToAccessIncorrectArrayElementException",
        FunctionRequiresReturnValue: "notImplementedYet/FunctionRequiresReturnValue",
        NotAnArrayException: "notImplementedYet/NotAnArrayException",
        FunctionNotImplemented: "notImplementedYet/FunctionNotImplemented",
        
        // Compiler utils aliases
        JSUtils: "utils/JSUtils",
        MathUtils: "utils/MathUtils",
        
        // Simple Language unit tests
        SimpleLanguageTester: "../test/SimpleLanguage/SimpleLanguageTester",
        SimpleLanguageUnitTests: "../test/SimpleLanguage/SimpleLanguageUnitTests",
    },
    shim: {
        'jQuery': {
            exports: 'jQuery'
        },
        'antlr': {
            exports: 'antlr'
        },
        "bootstrap": {
          deps: ["jQuery"],
          exports: "$.fn.popover"
        },
        "Ext": {			
          exports: "Ext"
        }                         
    }
});


if (INIT_UI) {
	require(["ExtInit", "aceinit"], initAlgoView)
} else {
	initAlgoView()
}


function initAlgoView(Ext, ace) {
	require(["AlgoViewAppInit"], function(AlgoViewApp) {
		// Nothing
	})
}

function updateLoadingMessage(loadingStep) {
	var div = document.getElementById("loading-task");
	if (div == undefined) {
		return;
	}
	div.innerHTML = loadingStep;
}

define("AlgoViewAppInit", 
["AlgoViewApp", LANGUAGE_MODULE], function(AlgoViewApp, LanguageModule) {
	
	if (DEBUG) {
		console.log("AlgoView classes successfully loaded.");
		console.log("Initializing AlgoView...");
	}
	updateLoadingMessage("Initializing application");
		
	var algoViewApp = new AlgoViewApp(new LanguageModule());

	if (DEBUG) {
		console.log("AlgoView initialized.");
	}

	if (INIT_UI) {
		if (DEBUG) {
			console.log("Initializing GUI...");
		}
		updateLoadingMessage("Initializing user interface");

		require(["MainFrame"], function(MainFrame) {
			algoViewApp.mainFrame = new MainFrame(algoViewApp); 
	
			if (DEBUG) {
				console.log("GUI initialized.");
			}
			updateLoadingMessage("Done.");
		})
	} else {
		if (AFTER_ALGOVIEW_INIT != undefined) {
			AFTER_ALGOVIEW_INIT();
		} 
	}	

	return algoViewApp;
})

