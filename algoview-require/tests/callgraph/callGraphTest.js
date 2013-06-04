// Require configuration
// All Files with their dependences are listed here

requirejs.config({
    baseUrl: '../../src',
    paths: {
        // Folders aliases
        lib: '../lib',
        model: 'model',
        graph: 'ui/views/callGraph/model/graph',
        utils: 'utils',
        program: 'program',
        
        // Lib aliases
        jquery: '../lib/jquery/jquery-1.9.0.min',
        antlr: '../lib/antlr-javascript-runtime-3.1/antlr3-all-patched',
        bootstrap: '../lib/bootstrap/bootstrap.min',
        
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
        
        // Compiler exception aliases
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
        'jquery': {
            exports: 'jquery'
        },
        'antlr': {
            exports: 'antlr'
        },
        "bootstrap": {
          deps: ["jquery"],
          exports: "$.fn.popover"
        }
    }
});


require(['jquery', "GraphCreator", 'SimpleGraph', 'ViewHandler', 'Program', 'ProgramRunner', 'AlgoUtils'],
        function($, GraphCreator, SimpleGraph, ViewHandler, Program, ProgramRunner, AlgoUtils) {


            var programCompiler = new ProgramRunner(new Program());
			var tree;
			
            buildProgramTree = function(fileName) {
                console.log("Getting file " + fileName);
                $.ajax({
                    type: "GET",
                    url: "samples/" + fileName + ".sl",
                    error: function() {
                        loadErrorHandler(fileName);
                    },
                    success: compileProgram,
                    async: false,
                    dataType: "text"
                });
            };


            loadErrorHandler = function(fileName) {
                $('#compilerOutput').append("Unable to load file : " + fileName + ".sl");
            };
            compileProgram = function(programText) {
                $('#sourceCode').append(programText.replace(/\n/g, "<br/>"));

                programCompiler.getProgram().setText(programText);
                try {
                    programCompiler.compile();

                tree = programCompiler.getProgramTree();
                displayFunctionCallGraph(tree);

                    $('#compilerOutput').append(AlgoUtils.getTreeLevelsString(programCompiler.getProgramTree()).replace(/\n/g, "<br/>"));


                } catch (e) {
                    throw(e);
                    var errorHTML = e.toString();

                    if (e.getWrappedException() !== undefined) {
                        errorHTML += "<br/> Wrapped Exception : <br/>" + e.getWrappedException().toString().replace(/\n/g, "<br/>");
                    }

                    $('#compilerOutput').append(errorHTML);
                }
            };

            // buildProgramTree takes a program name without extension
            // the corresponding file is supposed to be in the /samples folder and to have the extension .sl

            //buildProgramTree("if");		
            //buildProgramTree("fact");
            //buildProgramTree("linkedList");
            // buildProgramTree("anniv");




            newFunctionCallGraphFromTree = function(tree) {
                var g = new SimpleGraph(true);
                var gc = new GraphCreator(g, tree);
                gc.programTreeToFunctionCallSimpleGraph();
                return g;
            };
            newGraphFromTree = function(tree) {
                var g = new SimpleGraph(true);
                var gc = new GraphCreator(g, tree);
                gc.programTreeToSimpleGraph();
                return g;
            };

            createNewModel = function(g) {
                var vh = new ViewHandler(g);
                return vh;
            };

            function displayFullGraph(tree)
            {
                if ($('#functionGraphButton').hasClass('active')) {
                    $('#functionGraphButton').removeClass('active');
                }
                if (!$('#fullGraphButton').hasClass('active')) {
                    $('#fullGraphButton').addClass('active');
                }

                var g = newGraphFromTree(tree);
                var vh = createNewModel(g).addView("graphical").addView("text");
                vh.refreshViews();
            }
            function displayFunctionCallGraph(tree)
            {
                if ($('#fullGraphButton').hasClass('active')) {
                    $('#fullGraphButton').removeClass('active');
                }
                if (!$('#functionGraphButton').hasClass('active')) {
                    $('#functionGraphButton').addClass('active');
                }
                var g = newFunctionCallGraphFromTree(tree);
                var vh = createNewModel(g).addView("graphical").addView("text");
                vh.refreshViews();
            }


            var initialisation = function() {

                var programName = $('.sl-program').filter(":selected").val();
                buildProgramTree(programName);



                // event setters
                $('.program-choice').change(function() {
                    var programName = $('.sl-program').filter(":selected").val();
                    buildProgramTree(programName);

                });

                $('#fullGraphButton').click(function() {
                    displayFullGraph(tree);
                });
                $('#functionGraphButton').click(function() {
                    displayFunctionCallGraph(tree)
                });
                $('#graphical-view').change(function() {
                    if ($('#graphical-view').is(':checked')) {
                        $('#graphicalView').show();
                    } else {
                        $('#graphicalView').hide();
                    }
                });
                $('#text-view').change(function() {
                    if ($('#text-view').is(':checked')) {
                        $('#textView').show();
                    } else {
                        $('#textView').hide();
                    }
                });
                $('#source-code').change(function() {
                    if ($('#source-code').is(':checked')) {
                        $('#sourceCode').show();
                    } else {
                        $('#sourceCode').hide();
                    }
                });
                $('#compiler-output').change(function() {
                    if ($('#compiler-output').is(':checked')) {
                        $('#compilerOutput').show();
                    } else {
                        $('#compilerOutput').hide();
                    }
                });


            }

            initialisation();
        });
