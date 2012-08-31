grammar SimpleLanguage;

options {
	language=JavaScript;
	output=AST;
	k=2;
	ASTLabelType=Node;
//	backtrack=true;
//	memoize=true;
//   defaultErrorHandler=false;
}

tokens {
	PROGRAM;
	PROGRAM_MAIN_PART;
	INSTRUCTION_LIST;
	EXPRESSION_LIST;
	PRINT_EXPRESSION;
	PRINT_STRING;
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
}

program
	: NEWLINE* (struct_declaration | subprogram_declaration)* 
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
	: variables_declaration+ -> ^(VARIABLES_DECLARATION_LIST<VariablesDeclarationListNode> variables_declaration*)
	;

variables_declaration
	: i_l=identifier_list COLON v_t=variable_type NEWLINE -> ^(VARIABLES_DECLARATION<VariablesDeclarationNode> $i_l $v_t)
	| NEWLINE -> 
	;

identifier_list
	: (IDENTIFIER) (COMMA IDENTIFIER)* -> ^(IDENTIFIER_LIST<IdentifierListNode> IDENTIFIER*)
	;

variable_type
	: (INTEGER {var dataType = new IntegerDataType(); } 
		| POINTER  {var dataType = new PointerDataType(); } 
		| BOOLEAN  {var dataType = new BooleanDataType(); } 
		| CHARACTER {var dataType = new CharacterDataType(); } 
		| FLOAT  {var dataType = new FloatDataType(); } 
		| STRUCT i=IDENTIFIER  {var dataType = new StructureDataType($i.getText()); } 
	  ) (LB i_n=integer_number RB {var dataType = new ArrayDataType($variable_type, $i_n); })* -> ^(VARIABLE_TYPE<VariableTypeNode>[undefined, dataType])
	;

subprogram_declaration
	: function_declaration
	| procedure_declaration
	;

function_declaration
	: f=FUNCTION i=IDENTIFIER LP f_p_l=function_parameters_list_opt RP COLON v_t=variable_type NEWLINE v_d_s=variables_declaration_section_opt b=begin NEWLINE i_l=instruction_list_opt e=end NEWLINE
		-> ^(FUNCTION<FunctionNode>[$f] {new FunctionNameNode(undefined, undefined, $i.getText())} $f_p_l $v_d_s $i_l $e $b $v_t)
	;
	
procedure_declaration
	: p=PROCEDURE i=IDENTIFIER LP f_p_l=function_parameters_list_opt RP NEWLINE v_d_s=variables_declaration_section_opt b=begin NEWLINE i_l=instruction_list_opt e=end NEWLINE 
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
	
instruction_list
	: instruction+ -> ^(INSTRUCTION_LIST<InstructionListNode> instruction*)
	;

instruction_list_opt
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
	: print_instruction NEWLINE -> print_instruction
	| return_instruction NEWLINE -> return_instruction
	| if_instruction NEWLINE -> if_instruction
	| while_instruction NEWLINE -> while_instruction
	| for_instruction NEWLINE -> for_instruction
	| error_instruction NEWLINE -> error_instruction
	| assign_instruction NEWLINE -> assign_instruction
//	| assign_string_instruction NEWLINE -> assign_string_instruction
	| function_call NEWLINE -> function_call
	| free_instruction NEWLINE -> free_instruction
	| NEWLINE -> 
	;

free_instruction
	: f=FREE expression -> ^(FREE<FreeNode>[$f] expression)
	;

return_instruction
	: r=RETURN expression? -> ^(RETURN<ReturnNode>[$r] expression*)
	;
	
error_instruction
	: ERROR LP s=string RP -> ^(ERROR<ErrorNode> $s)
	;
	
print_instruction
	:  p=PRINT LP param=print_instruction_param RP -> ^(PRINT_STRING<PrintNode>[$p] $param) 
    /*  p=PRINT LP string RP -> ^(PRINT_STRING<PrintNode>[$p] string) */
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
	: WHILE LP e=expression RP DO NEWLINE i_l=instruction_list_opt END_WHILE -> ^(WHILE<WhileNode> $e $i_l)
	;

for_instruction
	: FOR assignable_element FROM expression TO expression (STEP expression)? DO NEWLINE instruction_list_opt END_FOR
	;

assign_instruction
	: a_e=assignable_element a=AFFECT a_p=assign_parameter -> ^(ASSIGN<AssignNode>[$a] $a_e $a_p)
	;

assign_parameter
	: expression 
	| string
	| a=ALLOCATE LP v_t=variable_type (COMMA expression)? RP -> ^(ALLOCATE<AllocateNode>[$a] $v_t expression*)
	;

/*
assign_string_instruction
	: assignable_element AFFECT string
	;
*/
assignable_element
	: (i=IDENTIFIER -> ^(ASSIGNABLE_ELEMENT<VariableNameNode>[undefined, $i.getText()])) 
		(   (POINT i=IDENTIFIER -> ^(ASSIGNABLE_ELEMENT<StructureElementNode> $assignable_element {new StructureElementNameNode(undefined, undefined, $i.getText())}) ) 
		  | (DEREFERENCE i=IDENTIFIER -> ^(ASSIGNABLE_ELEMENT<PointerDereferenceNode> $assignable_element {new StructureElementNameNode(undefined, undefined, $i.getText())}) ) 
		  | (lb=LB expression RB) -> ^(ARRAY_ELEMENT<ArrayElementNode>[$lb] $assignable_element expression) 
		)*
	;

expression_list
	: expression (COMMA expression)* -> ^(EXPRESSION_LIST<ExpressionListNode> expression*)
	;

expression_list_opt
	: /* Nothing */ -> EXPRESSION_LIST<ExpressionListNode>
	| expression_list
	;

expression_operand
	: integer_number
	| float_number
    | boolean_value
     //  | character_value 
	| null
	| assignable_element
	| RANDOM LP! expression RP!
	| LP expression RP -> expression
	| function_call
	| ADDRESS LP! assignable_element RP!
    | CONTENT LP! assignable_element RP!
    | not_expression
    | unary_minus_expression
	;

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
PRINTLN: 'PRINTLN';
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
ERROR: 'ERROR';
RANDOM: 'RANDOM';
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

//TRUE: 'TRUE';
//FALSE: 'FALSE';

//PRINT_STRING
//PRINT_STRINGLN:
//INTEGER_VALUE, FLOAT_VALUE, BOOLEAN_VALUE, CHARACTER_VALUE;
//STRING

WHITE_SPACE:  (' ' | '\t') { $channel = HIDDEN; }
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

