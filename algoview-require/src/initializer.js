// Require configuration
// All Files with their dependences are listed here

requirejs.config({

    paths: {
        
        // Lib aliases
        jQuery: '../lib/jquery/jquery-1.9.0.min',
        antlr: '../lib/antlr-javascript-runtime-3.1/antlr3-all-patched',
        bootstrap: '../lib/bootstrap/bootstrap.min',
		ace : "../lib/ace/ace-0.2/ace",
		aceAlgoviewTheme : "../lib/ace/ace-0.2/theme-algoview",
		aceSimpleLanguageMode : "../lib/ace/ace-0.2/mode-simple_language",
		Ext : "../lib/extjs/extjs-4.1.0/ext-all",     
        raphael : "../lib/raphael/raphael-2.1",  
        
        // Simple Graph aliases
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
        SimpleLanguageLexer: "program/parser/SimpleLanguageLexer",
        SimpleLanguageParser: "program/parser/SimpleLanguageParser",
        
        // AlgoView Exceptions
        AlreadyAllocatedSegmentException: "exceptions/AlreadyAllocatedSegmentException",
        CannotApplyTestOperatorException: "exceptions/CannotApplyTestOperatorException",
        DoubleFreeException: "exceptions/DoubleFreeException",
        ErrorInstructionException: "exceptions/ErrorInstructionException",
        IllegalArgumentException: "exceptions/IllegalArgumentException",
        PartOfPrimitiveTypeException: "exceptions/PartOfPrimitiveTypeException",
        UnallocatedSegmentException: "exceptions/UnallocatedSegmentException",
        BadVariableNameException: "exceptions/BadVariableNameException",
        CompilationError: "exceptions/CompilationError",
        EmptyStackException: "exceptions/EmptyStackException",
        Exception: "exceptions/Exception",
        InvalidAddressException: "exceptions/InvalidAddressException",
        InfiniteLoopException: "exceptions/InfiniteLoopException",
        StackOverflowException: "exceptions/StackOverflowException",
        UndeclaredItemException: "exceptions/UndeclaredItemException",
        
        
        // AlgoView GUI
        AlgoViewApp: "AlgoViewApp",
        ExternalController: "external_control/ExternalController",
        ExtInit : "ui/init/ExtInit",     
        aceinit : "ui/init/aceinit",     
        MainFrame: "ui/MainFrame",
        ExtUxAceEditor : "ui/editor/Editor",
        ExtUxAceEditorPanel : "ui/editor/Panel",
        
        // Memory Views
        DebugLogger : "ui/views/memory/DebugLogger",
        View: "ui/views/memory/View",
        LinkView: "ui/views/memory/LinkView",
        MemoryUnitView: "ui/views/memory/MemoryUnitView",
        MemoryGraphicalView: "ui/views/memory/MemoryGraphicalView",
        StackTableView: "ui/views/memory/StackTableView",
        HeapTableView: "ui/views/memory/HeapTableView",
        ProgramTreeView: "ui/views/callGraph/ProgramTreeView",
        
        // Compiler execution aliases
        BooleanMemoryValue: "execution/BooleanMemoryValue",
        PointerMemoryValue: "execution/PointerMemoryValue",
        FloatMemoryValue: "execution/FloatMemoryValue",
        Memory: "execution/Memory",
        MemoryState: "execution/MemoryState",
        CharacterMemoryValue: "execution/CharacterMemoryValue",
        IntegerMemoryValue: "execution/IntegerMemoryValue",
        MemoryValue: "execution/MemoryValue",
        ProgramRunner: "execution/ProgramRunner",
        ProgramRunnerEvent: "execution/ProgramRunnerEvent",
        ProgramRunnerListener: "execution/ProgramRunnerListener",
        NodeStack: "execution/NodeStack",
        BreakpointList: "execution/BreakpointList",
        Stack: "execution/Stack",
        Heap: "execution/Heap",
        MemoryUnit: "execution/MemoryUnit",
        MemoryUnitHashTable: "execution/MemoryUnitHashTable",
        Variable: "execution/Variable",
        AbstractModel: "model/AbstractModel",
        
        
        // Compiler program aliases
        IntegerDataType: "program/IntegerDataType",
        DoWhileNode: "program/DoWhileNode",
        WhileNode: "program/WhileNode",
        StructureNameNode: "program/StructureNameNode",
        StructureDeclarationNode: "program/StructureDeclarationNode",
        AllocateNode: "program/AllocateNode",
        FunctionNameNode: "program/FunctionNameNode",
        ArithmeticExpressionNode: "program/ArithmeticExpressionNode",
        FunctionNode: "program/FunctionNode",
        StringNode: "program/StringNode",
        ConditionNode: "program/ConditionNode",
        ErrorNode: "program/ErrorNode",
        StructureElementNameNode: "program/StructureElementNameNode",
        RandomNode: "program/RandomNode",
        PointerDereferenceNode: "program/PointerDereferenceNode",
        AndNode: "program/AndNode",
        StructureElementNode: "program/StructureElementNode",
        ForNode: "program/ForNode",
        CharacterDataType: "program/CharacterDataType",
        PrintNode: "program/PrintNode",
        FreeNode: "program/FreeNode",
        VariableNameNode: "program/VariableNameNode",
        AddressNode: "program/AddressNode",
        AssignableNode: "program/AssignableNode",
        DereferenceNode: "program/DereferenceNode",
        FunctionParameterDeclarationNode: "program/FunctionParameterDeclarationNode",
        IdentifierListNode: "program/IdentifierListNode",
        NumberNode: "program/NumberNode",
        BeginNode: "program/BeginNode",
        ExpressionListNode: "program/ExpressionListNode",
        OrNode: "program/OrNode",
        InstructionListNode: "program/InstructionListNode",
        ArrayDataType: "program/ArrayDataType",
        VariablesDeclarationListNode: "program/VariablesDeclarationListNode",
        AssignNode: "program/AssignNode",
        ContentNode: "program/ContentNode",
        UnaryMinusNode: "program/UnaryMinusNode",
        ReturnNode: "program/ReturnNode",
        IfNode: "program/IfNode",
        ProgramNode: "program/ProgramNode",
        DataType: "program/DataType",
        ArrayElementNode: "program/ArrayElementNode",
        FunctionListNode: "program/FunctionListNode",
        Program: "program/Program",
        StructureDataType: "program/StructureDataType",
        TestNode: "program/TestNode",
        EndNode: "program/EndNode",
        FunctionCallNode: "program/FunctionCallNode",
        FloatDataType: "program/FloatDataType",
        Node: "program/Node",
        ExpressionNode: "program/ExpressionNode",
        StructureDeclarationListNode: "program/StructureDeclarationListNode",
        AssignExpressionNode: "program/AssignExpressionNode",
        NullPointerNode: "program/NullPointerNode",
        VariableDeclarationNode: "program/VariableDeclarationNode",
        PointerDataType: "program/PointerDataType",
        VariablesDeclarationNode: "program/VariablesDeclarationNode",
        AssignStringNode: "program/AssignStringNode",
        BooleanDataType: "program/BooleanDataType",
        FileLocation: "program/FileLocation",
        FunctionParametersListNode: "program/FunctionParametersListNode",
        VariableTypeNode: "program/VariableTypeNode",
        NotNode: "program/NotNode",
        
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
        AlgoUtils: "utils/AlgoUtils",
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


var algoViewApp;
var $j;


require(["Ext", 'jQuery', "AlgoViewApp", "aceinit"],
        function(Ext, $, AlgoViewApp, ace) {
			
				

                    
	console.log("AlgoView classes successfully loaded.");
	console.log("Initializing GUI...");

	$j = jQuery.noConflict();
	
	algoViewApp = new AlgoViewApp();
	algoViewApp.loadProgramTemplate();

	var hideMask = function () {
		try {
			Ext.get('loading').remove();
			Ext.fly('loading-mask').animate({
				opacity: 0,
				remove: true,
			});
		} catch (e) {
			console.log("Cannot remove loading mask", e);
		}
	};

	Ext.defer(hideMask, 250);


	jQuery.expr[':'].regex = function(elem, index, match) {
		var matchParams = match[3].split(','),
		validLabels = /^(data|css):/,
		attr = {
			method: matchParams[0].match(validLabels) ? matchParams[0].split(':')[0] : 'attr',
			property: matchParams.shift().replace(validLabels,'')
		},
		regexFlags = 'ig',
		regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
		return regex.test(jQuery(elem)[attr.method](attr.property));
	} 
               
            
			
 
    
});






