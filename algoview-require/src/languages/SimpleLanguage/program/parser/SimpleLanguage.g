grammar SimpleLanguage;

options {
	language=JavaScript;
	output=AST;
	ASTLabelType=Node;
//	k=1;
	backtrack = true;
//	memoize=true;
//  defaultErrorHandler=false;
}

tokens {
	PROGRAM;
	PROGRAM_MAIN_PART;
	INSTRUCTION_LIST;
	EXPRESSION_LIST;
	PRINT;
	VARIABLES_DECLARATION_LIST;
	IDENTIFIER_LIST;
	VARIABLES_DECLARATION;
	FUNCTION_PARAMETERS_LIST;
	FUNCTION_PARAMETER_DECLARATION;
	STRUCT_DECLARATION;
	FUNCTION_LIST;
	FUNCTION_CALL;
	STRUCT_DECLARATIONS;
	VARIABLE_TYPE;
	ASSIGNABLE_ELEMENT;
	ARRAY_ELEMENT;
	ASSIGN;
	NUMBER;
	ARRAY_DATA_TYPE;
	ARRAY_VARIABLE_TYPE;
	DO_WHILE;
	CONDITION;
}

@lexer::header {

define("SimpleLanguageLexer",
['antlr'],
function() ____BEGIN____

}

@header {

define("SimpleLanguageParser",
[  "MathUtils",
    "WhileNode",
    "StructureDataType",
    "CharacterDataType",
    "FloatDataType",
    "IntegerDataType",
    "BooleanDataType",
    "ArrayDataType",
    "PointerDataType",
 "SimpleLanguageLexer",
 "InvalidAddressException",
"ErrorInstructionException",
"DoubleFreeException",
"BadVariableNameException",
"IllegalArgumentException",
"PartOfPrimitiveTypeException",
"Exception",
"AlreadyAllocatedSegmentException",
"StackOverflowException",
"CompilationError",
"UnallocatedSegmentException",
"CannotApplyTestOperatorException",
"EmptyStackException",
    
    
    
 "BooleanMemoryValue",
 "CharacterMemoryValue",
 "FloatMemoryValue",
 "IntegerMemoryValue",
 "MemoryState",
 "MemoryValue",
 "PointerMemoryValue",
 "ProgramRunner",
 
    
    
    

    "AssignExpressionNode",
	"AssignStringNode",
	"BeginNode",
	"DoWhileNode",
	"EndNode",
	"ErrorNode",
	"ExpressionListNode",
	"ExpressionNode",
		"AddressNode",
		"AllocateNode",
		"AndNode",
		"ArithmeticExpressionNode",
		"AssignableNode",
			"ArrayElementNode",
			"ContentNode",
			"PointerDereferenceNode",
			"StructureElementNameNode",
			"StructureElementNode",
			"VariableNameNode",
		"AssignNode",
		"ConditionNode",
		"DereferenceNode",
		"FunctionCallNode",
		"FunctionNode",
		"NotNode",
		"NullPointerNode",
		"NumberNode",
		"OrNode",
		"RandomNode",
		"ReturnNode",
		"TestNode",
		"UnaryMinusNode",	
    "ForNode",
	"FreeNode",
	"FunctionListNode",
	"FunctionNameNode",
	"FunctionParameterDeclarationNode",
	"FunctionParametersListNode",
	"IdentifierListNode",
	"IfNode",
	"InstructionListNode",
	"PrintNode",
	"ProgramNode",
	"StringNode",
	"StructureDeclarationListNode",
	"StructureDeclarationNode",
	"StructureNameNode",
	"VariableDeclarationNode",
	"VariablesDeclarationListNode",
	"VariablesDeclarationNode",
	"VariableTypeNode",
    "antlr"],
function(MathUtils,
WhileNode,
StructureDataType,
CharacterDataType,
FloatDataType,
IntegerDataType,
BooleanDataType,
ArrayDataType,
PointerDataType,
 SimpleLanguageLexer,
InvalidAddressException,
ErrorInstructionException,
DoubleFreeException,
BadVariableNameException,
IllegalArgumentException,
PartOfPrimitiveTypeException,
Exception,
AlreadyAllocatedSegmentException,
StackOverflowException,
CompilationError,
UnallocatedSegmentException,
CannotApplyTestOperatorException,
EmptyStackException,
        
        
        
 BooleanMemoryValue,
 CharacterMemoryValue,
 FloatMemoryValue,
 IntegerMemoryValue,
 MemoryState,
 MemoryValue,
 PointerMemoryValue,
 ProgramCompiler,
        
        
	AssignExpressionNode,
	AssignStringNode,
	BeginNode,
	DoWhileNode,
	EndNode,
	ErrorNode,
	ExpressionListNode,
	ExpressionNode,
		AddressNode,
		AllocateNode,
		AndNode,
		ArithmeticExpressionNode,
		AssignableNode,
			ArrayElementNode,
			ContentNode,
			PointerDereferenceNode,
			StructureElementNameNode,
			StructureElementNode,
			VariableNameNode,
		AssignNode,
		ConditionNode,
		DereferenceNode,
		FunctionCallNode,
		FunctionNode,
		NotNode,
		NullPointerNode,
		NumberNode,
		OrNode,
		RandomNode,
		ReturnNode,
		TestNode,
		UnaryMinusNode,
	ForNode,
	FreeNode,
	FunctionListNode,
	FunctionNameNode,
	FunctionParameterDeclarationNode,
	FunctionParametersListNode,
	IdentifierListNode,
	IfNode,
	InstructionListNode,
	PrintNode,
	ProgramNode,
	StringNode,
	StructureDeclarationListNode,
	StructureDeclarationNode,
	StructureNameNode,
	VariableDeclarationNode,
	VariablesDeclarationListNode,
	VariablesDeclarationNode,
	VariableTypeNode) ____BEGIN____
	
	fixArrayDataTypesInVariabeType = function(variableTypeNode) {
	 console.log("Fixing", variableTypeNode);
		if (variableTypeNode == undefined) {
			return;
		}

		/* Est-ce un tableau dont les dimensions sont indiquées ?
		 * On le détermine en regardant le nombre d'enfants : 
		 * si c'est le cas, les dimensions sont indiquées après le premier fils
		 **/
		if (variableTypeNode.children.length > 1) {
			variableTypeNode.dataType.setElementsDataType(variableTypeNode.children[0].dataType);			
			for (var i = variableTypeNode.children.length - 1; i >= 1; --i) {
				variableTypeNode.dataType.setLength(variableTypeNode.children[i]);
				if (i != 1) {
					variableTypeNode.dataType = new ArrayDataType(variableTypeNode.dataType, undefined);
				}
			}
		} else if (variableTypeNode.children.length == 1) { // On a un type de base ou une structure, mais on a ajouté un niveau ArrayDataType inutile
			// console.log("Before", variableTypeNode);
			variableTypeNode.dataType = variableTypeNode.children[0].dataType;
			// console.log("After", variableTypeNode);
		}
		/* Sinon, c'est un tableau dont les dimensions ne sont pas indiquées
		 * on a déjà créé un PointerDataType pour le représenter
		 */
	}
}

program
	: NEWLINE* (struct_declaration | subprogram_declaration)+
		-> ^(PROGRAM<ProgramNode> ^(STRUCT_DECLARATIONS<StructureDeclarationListNode> struct_declaration*) ^(FUNCTION_LIST<FunctionListNode> subprogram_declaration*))
	;

// $p_m_p.tree.token

/*catch [re] {
    reportError(re);
	console.log(re);
	console.log(re.state);
//    myRecoverMethodForMyRule();
//	alert(re);
}*/

struct_declaration
	: STRUCT i=IDENTIFIER NEWLINE v_d_l=variables_declaration_list_opt -> ^(STRUCT_DECLARATION<StructureDeclarationNode> {new StructureNameNode(undefined, undefined, $i.getText())} $v_d_l)
	;

variables_declaration_section_opt
	: /* Nothing */ -> VARIABLES_DECLARATION_LIST<VariablesDeclarationListNode>
	| variables_declaration_section
	;

variables_declaration_section
	: VAR NEWLINE v_d_l=variables_declaration_list_opt -> $v_d_l
	;

variables_declaration_list_opt
	: /* Nothing */ -> VARIABLES_DECLARATION_LIST<VariablesDeclarationListNode>
	| variables_declaration_list 
	;

variables_declaration_list
	: (variables_declaration | NEWLINE)+ -> ^(VARIABLES_DECLARATION_LIST<VariablesDeclarationListNode> variables_declaration*)
	;

variables_declaration
	: i_l=identifier_list COLON v_t=variable_type NEWLINE -> ^(VARIABLES_DECLARATION<VariablesDeclarationNode> $i_l $v_t)
	;

identifier_list
	: (IDENTIFIER) (COMMA IDENTIFIER)* -> ^(IDENTIFIER_LIST<IdentifierListNode> IDENTIFIER*)
	;

variable_type
	:	variable_type_to_be_fixed  { fixArrayDataTypesInVariabeType($variable_type_to_be_fixed.tree); } -> variable_type_to_be_fixed
	;

variable_type_to_be_fixed
	: s=simple_variable_type 
		(LB (
				(integer_number RB) -> ^(VARIABLE_TYPE<VariableTypeNode>[undefined, new ArrayDataType()] simple_variable_type integer_number*)
				| RB-> ^(VARIABLE_TYPE<VariableTypeNode>[undefined, new PointerDataType(new VariableTypeNode(undefined, undefined))] )
			)
		)* -> simple_variable_type
	;

simple_variable_type
	: i=INTEGER   -> ^(VARIABLE_TYPE<VariableTypeNode>[$i, new IntegerDataType()])
	| pointer_variable_type -> pointer_variable_type
	| b=BOOLEAN   -> ^(VARIABLE_TYPE<VariableTypeNode>[$b, new BooleanDataType()])
	| c=CHARACTER -> ^(VARIABLE_TYPE<VariableTypeNode>[$c, new CharacterDataType()])
	| f=FLOAT     -> ^(VARIABLE_TYPE<VariableTypeNode>[$f, new FloatDataType()])
	| STRUCT id=IDENTIFIER  -> ^(VARIABLE_TYPE<VariableTypeNode>[$id, new StructureDataType($id.getText())])
	;

pointer_variable_type
	: p=POINTER param=pointer_variable_type_param -> ^(VARIABLE_TYPE<VariableTypeNode>[$p, new PointerDataType($param.tree)])
	;
	
pointer_variable_type_param
	: /* Nothing */ -> VARIABLE_TYPE<VariableTypeNode>[undefined, undefined]
	| lt=LT v_t=variable_type GT -> ^(VARIABLE_TYPE<VariableTypeNode>[$lt, $v_t.tree])
	;

subprogram_declaration
	: function_declaration
	| procedure_declaration
	;

function_declaration
	: f=FUNCTION i=IDENTIFIER LP f_p_l=function_parameters_list_opt RP COLON v_t=variable_type NEWLINE v_d_s=variables_declaration_section_opt b=begin NEWLINE i_l=instruction_list_opt e=end NEWLINE+
		-> ^(FUNCTION<FunctionNode>[$f] {new FunctionNameNode(undefined, undefined, $i.getText())} $f_p_l $v_d_s $i_l $e $b $v_t)
	;
	
procedure_declaration
	: p=PROCEDURE i=IDENTIFIER LP f_p_l=function_parameters_list_opt RP NEWLINE v_d_s=variables_declaration_section_opt b=begin NEWLINE i_l=instruction_list_opt e=end NEWLINE+
		-> ^(FUNCTION<FunctionNode>[$p] {new FunctionNameNode(undefined, undefined, $i.getText())} $f_p_l $v_d_s $i_l $e $b)
	;

function_parameters_list_opt
	: /* Nothing */ -> FUNCTION_PARAMETERS_LIST<FunctionParametersListNode>
	| function_parameters_list
	;

function_parameters_list
	: function_parameter_declaration (COMMA function_parameter_declaration)* -> ^(FUNCTION_PARAMETERS_LIST<FunctionParametersListNode> function_parameter_declaration*)
	;

function_parameter_declaration
	: i=IDENTIFIER COLON v_t=variable_type -> ^(FUNCTION_PARAMETER_DECLARATION<VariableDeclarationNode> {new VariableNameNode(undefined, undefined, $i.getText())} $v_t)
	;

integer_number
	: i=INTEGER_VALUE -> NUMBER<NumberNode>[$i, new IntegerMemoryValue(parseInt($i.getText()))]
	;

float_number
	: f=FLOAT_VALUE -> NUMBER<NumberNode>[$f, new FloatMemoryValue(parseFloat($f.getText()))]
	;
	
boolean_value
	: b=BOOLEAN_VALUE -> NUMBER<NumberNode>[$b, new BooleanMemoryValue(MathUtils.parseBoolean($b.getText()))]
	;
	
/*
character_value
	: APOSTROPH CHARACTER_VALUE APOSTROPH
	;
*/
instruction_list
	options { backtrack = true; }
	: (instruction | NEWLINE)+ -> ^(INSTRUCTION_LIST<InstructionListNode> instruction*)
	;

instruction_list_opt
	options { backtrack = true; }
	: /* Nothing */ -> INSTRUCTION_LIST<InstructionListNode>
	| instruction_list
	;

begin
	: b=BEGIN -> ^(BEGIN<BeginNode>[$b])
	;

end
	: e=END -> ^(END<EndNode>[$e])
	;

instruction
	options { backtrack = true; }
	: print_instruction NEWLINE -> print_instruction
	| return_instruction NEWLINE -> return_instruction
	| if_instruction NEWLINE -> if_instruction
	| while_instruction NEWLINE -> while_instruction
	| do_while_instruction NEWLINE -> do_while_instruction
	| for_instruction NEWLINE -> for_instruction
	| error_instruction NEWLINE -> error_instruction
	| assign_instruction NEWLINE -> assign_instruction
	| function_call NEWLINE -> function_call
	| free_instruction NEWLINE -> free_instruction
	;

free_instruction
	: f=FREE expression -> ^(FREE<FreeNode>[$f] expression)
	;

return_instruction
	: r=RETURN expression? -> ^(RETURN<ReturnNode>[$r] expression*)
	;
	
error_instruction
	: e=ERROR LP s=string RP -> ^(ERROR<ErrorNode>[$e] $s)
	;
	
print_instruction
	:  p=PRINT LP param=print_instruction_param RP -> ^(PRINT<PrintNode>[$p, false] $param)
	|  p=PRINTLN LP param=print_instruction_param RP -> ^(PRINT<PrintNode>[$p, true] $param)
	;

print_instruction_param
	:	expression
	|	string
	;

if_instruction
	: i=IF LP e=expression RP THEN NEWLINE i_l=instruction_list_opt el=else_opt END_IF -> ^(IF<IfNode>[$i] $e $i_l $el)
	;

else_opt
	: /* Nothing */ -> INSTRUCTION_LIST<InstructionListNode>
	| ELSE i_l=instruction_list_opt -> $i_l
	;

while_instruction
	: w=WHILE lp=LP e=expression RP DO NEWLINE i_l=instruction_list_opt END_WHILE 
			-> ^(WHILE<WhileNode>[$w] ^(CONDITION<ConditionNode>[$lp] $e) $i_l)
	;

do_while_instruction
	:  d=DO NEWLINE i_l=instruction_list_opt END_DO_WHILE lp=LP e=expression RP 
			-> ^(DO_WHILE<DoWhileNode>[$d] ^(CONDITION<ConditionNode>[$lp] $e) $i_l)
	;

for_instruction
	: f=FOR a_e=assignable_element FROM begin_expr=expression TO end_expr=expression step=step_opt DO NEWLINE i_l=instruction_list_opt END_FOR
			-> ^(FOR<ForNode>[$f] $a_e $begin_expr $end_expr $step $i_l)
	;
	
step_opt
	: /* Nothing */ -> NUMBER<NumberNode>[undefined, new IntegerMemoryValue(1)]
	| STEP expression -> expression
	;

assign_instruction
	: a_e=assignable_element a=AFFECT a_p=assign_parameter -> ^(ASSIGN<AssignNode>[$a] $a_e $a_p)
	;

assign_parameter
	: expression 
	| string
	| a=ALLOCATE LP v_t=variable_type (COMMA expression)? RP -> ^(ALLOCATE<AllocateNode>[$a] $v_t expression*)
	;

assignable_element
	: (identifier_or_content -> identifier_or_content)
		(   (POINT i=IDENTIFIER -> ^(ASSIGNABLE_ELEMENT<StructureElementNode> $assignable_element {new StructureElementNameNode(undefined, undefined, $i.getText())}) ) 
		  | (DEREFERENCE i=IDENTIFIER -> ^(ASSIGNABLE_ELEMENT<PointerDereferenceNode> $assignable_element {new StructureElementNameNode(undefined, undefined, $i.getText())}) ) 
		  | (lb=LB expression RB) -> ^(ARRAY_ELEMENT<ArrayElementNode>[$lb] $assignable_element expression) 
		)*
	;

identifier_or_content
	: i=IDENTIFIER -> ^(ASSIGNABLE_ELEMENT<VariableNameNode>[$i, $i.getText()]) 
	| c=CONTENT LP assignable_element RP -> ^(ASSIGNABLE_ELEMENT<ContentNode>[$c] assignable_element)
	;

expression_list
	: expression (COMMA expression)* -> ^(EXPRESSION_LIST<ExpressionListNode> expression*)
	;

expression_list_opt
	: /* Nothing */ -> EXPRESSION_LIST<ExpressionListNode>
	| expression_list
	;

/* Attention, l'ordre est important */
expression_operand
	: integer_number
	| float_number
    | boolean_value
 //   | character_value 
	| null
	| function_call
	| r=RANDOM_INTEGER LP expression RP -> ^(RANDOM_INTEGER<RandomNode>[$r, true] expression)
//	| ambiguous_expression_operand
	| assignable_element
//	| LP ((assign_instruction RP) -> assign_instruction | (expression RP) -> expression) 
	| LP expression RP -> expression
	| a=ADDRESS LP assignable_element RP -> ^(ADDRESS<AddressNode>[$a] assignable_element)
    | not_expression
    | unary_minus_expression
	;
/*	
ambiguous_expression_operand 
	: a_e=assignable_element ambiguous_expression_operand2
	;
	
ambiguous_expression_operand2
	: (AFFECT)=> assign_instruction
	| 
	;
*/
null
	: n=NULL	-> ^(NULL<NullPointerNode>[$n])
	;

function_call
	:	i=IDENTIFIER LP e_l=expression_list_opt RP -> ^(FUNCTION_CALL<FunctionCallNode>[$i] {new FunctionNameNode(undefined, undefined, $i.getText())} $e_l)
	;

not_expression
	:	NOT expression_operand -> ^(NOT<NotNode> expression_operand)
	;

unary_minus_expression
	:	MINUS expression_operand -> ^(MINUS<UnaryMinusNode> expression_operand)
	;

expression
    :   and_expression
    ;
    
/*
assign_expression
	:   assignable_element (AFFECT and_expression)*
	| and_expression
    ;
*/
  
and_expression
	:	or_expression (AND<AndNode>^ or_expression)*
	;

or_expression
	:	eq_expression (OR<OrNode>^ eq_expression)*
	;

eq_expression
	:	neq_expression (n=EQ<TestNode>^ { n_tree.setOperator("EQ"); } neq_expression)*
	;
	
neq_expression
	:	lt_expression (n=NEQ<TestNode>^ { n_tree.setOperator("NEQ"); } lt_expression)*
	;
	
lt_expression
	:	lte_expression (n=LT<TestNode>^ { n_tree.setOperator("LT"); } lte_expression)*
	;
	
lte_expression
	:	gt_expression (n=LTE<TestNode>^ { n_tree.setOperator("LTE"); } gt_expression)*
	;
	
gt_expression
	:	gte_expression (n=GT<TestNode>^ { n_tree.setOperator("GT"); } gte_expression)*
	;
	
gte_expression
	:	plus_expression (n=GTE<TestNode>^ { n_tree.setOperator("GTE"); } plus_expression)*
	;

plus_expression
	:	minus_expression (n=PLUS<ArithmeticExpressionNode>^ { n_tree.setOperator("+"); } minus_expression)*
	;

minus_expression
	:	mult_expression (n=MINUS<ArithmeticExpressionNode>^ { n_tree.setOperator("-"); } mult_expression)*
	;

mult_expression
    :   exp_expression (n=MULT<ArithmeticExpressionNode>^ { n_tree.setOperator("*"); } exp_expression)* 
    ;
    
exp_expression
    :   div_expression (n=EXP<ArithmeticExpressionNode>^ { n_tree.setOperator("^"); } div_expression)* 
    ;
    
div_expression
	:	modulo_expression (n=DIV<ArithmeticExpressionNode>^ { n_tree.setOperator("/"); } modulo_expression)* 
	;
	
modulo_expression
	:	expression_operand (n=MODULO<ArithmeticExpressionNode>^ { n_tree.setOperator("MODULO"); } expression_operand)* 
	;
	
string
	: s=STRING -> ^(STRING<StringNode>[$s])
	;

//////////// LEXER

END_IF: 'END_IF';
END_WHILE: 'END_WHILE';
END_FOR: 'END_FOR';
END_DO_WHILE: 'END_DO_WHILE';
END: 'END';
PLUS: '+';
MINUS: '-';
MULT: '*';
EXP: '^';
DIV: '/';
MODULO: '%';
EQ: '=';
NEQ: '!=';
NOT: '!';
LTE: '<=';
LT: '<';
GTE: '>=';
GT: '>';
AND: 'AND';
OR: 'OR';
REPEAT: 'REPEAT';
UNTIL: 'UNTIL';
FOR: 'FOR';
FROM: 'FROM';
TO: 'TO';
STEP: 'STEP';
READ: 'READ';
ADDRESS: 'ADDRESS';
CONTENT: 'CONTENT';
ALLOCATE: 'ALLOC';
FREE: 'FREE';
NULL: 'NULL';
BEGIN: 'BEGIN';
VAR: 'VAR';
WHILE: 'WHILE';
DO: 'DO';
STRUCT: 'STRUCT';
BOOLEAN: 'BOOLEAN';
INTEGER: 'INTEGER';
FLOAT: 'FLOAT';
CHARACTER: 'CHARACTER';
POINTER: 'POINTER';
IF: 'IF';
THEN: 'THEN';
ELSE: 'ELSE';
FUNCTION: 'FUNCTION';
PROCEDURE: 'PROCEDURE';
PRINT: 'PRINT';
PRINTLN: 'PRINTLN';
ERROR: 'ERROR';
RANDOM_INTEGER: 'RANDOM_INTEGER';
RETURN: 'RETURN';
COLON: ':';
COMMA: ',';
LB: '[';
RB: ']';
LP: '(';
RP: ')';
POINT: '.';
DEREFERENCE: '->';
AFFECT:	'<-';
APOSTROPH: '\'';

//TRUE: 'TRUE';
//FALSE: 'FALSE';

//PRINT_STRING
//PRINT_STRINGLN:
//INTEGER_VALUE, FLOAT_VALUE, BOOLEAN_VALUE, CHARACTER_VALUE;
//STRING

WHITE_SPACE:  (' ' | '\t')+ { $channel = HIDDEN; }
	;

fragment HEX_DIGIT
	: ('0'..'9'|'A'..'F'|'a'..'f')
	;

fragment DIGIT
	: '0'..'9'
	;
	
INTEGER_VALUE
	: DIGIT+
	;

FLOAT_VALUE
	: DIGIT*'.'DIGIT*
	;

BOOLEAN_VALUE
	: 'TRUE'
	| 'FALSE'
	| 'true'
	| 'false'
	;

fragment LETTER
	: 'a'..'z' | 'A'..'Z' | '_';

IDENTIFIER
	: LETTER (LETTER | DIGIT)*
	;

NEWLINE
    : ('\r'? '\n')+
    ;

COMMENT
    : '/*' .* '*/' { $channel = HIDDEN; }
    ;

LINE_COMMENT
    : '//' ~('\n'|'\r')* { $channel = HIDDEN; }
    ;

STRING
	: '"' (.*) '"' 
	;

CHARACTER_VALUE
	:	.
	;
	
