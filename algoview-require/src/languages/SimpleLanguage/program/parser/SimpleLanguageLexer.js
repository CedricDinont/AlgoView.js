// $ANTLR 3.3 Nov 30, 2010 12:50:56 SimpleLanguage.g 2013-07-26 15:36:49


define("SimpleLanguageLexer",
['antlr'],
function() {



var SimpleLanguageLexer = function(input, state) {
// alternate constructor @todo
// public SimpleLanguageLexer(CharStream input)
// public SimpleLanguageLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    this.dfa11 = new SimpleLanguageLexer.DFA11(this);
    SimpleLanguageLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(SimpleLanguageLexer, {
    EOF: -1,
    PROGRAM: 4,
    PROGRAM_MAIN_PART: 5,
    INSTRUCTION_LIST: 6,
    EXPRESSION_LIST: 7,
    PRINT: 8,
    VARIABLES_DECLARATION_LIST: 9,
    IDENTIFIER_LIST: 10,
    VARIABLES_DECLARATION: 11,
    FUNCTION_PARAMETERS_LIST: 12,
    FUNCTION_PARAMETER_DECLARATION: 13,
    STRUCT_DECLARATION: 14,
    FUNCTION_LIST: 15,
    FUNCTION_CALL: 16,
    STRUCT_DECLARATIONS: 17,
    VARIABLE_TYPE: 18,
    ASSIGNABLE_ELEMENT: 19,
    ARRAY_ELEMENT: 20,
    ASSIGN: 21,
    NUMBER: 22,
    ARRAY_DATA_TYPE: 23,
    ARRAY_VARIABLE_TYPE: 24,
    DO_WHILE: 25,
    CONDITION: 26,
    NEWLINE: 27,
    STRUCT: 28,
    IDENTIFIER: 29,
    VAR: 30,
    COLON: 31,
    COMMA: 32,
    LB: 33,
    RB: 34,
    INTEGER: 35,
    BOOLEAN: 36,
    CHARACTER: 37,
    FLOAT: 38,
    POINTER: 39,
    LT: 40,
    GT: 41,
    FUNCTION: 42,
    LP: 43,
    RP: 44,
    PROCEDURE: 45,
    INTEGER_VALUE: 46,
    FLOAT_VALUE: 47,
    BOOLEAN_VALUE: 48,
    BEGIN: 49,
    END: 50,
    FREE: 51,
    RETURN: 52,
    ERROR: 53,
    PRINTLN: 54,
    IF: 55,
    THEN: 56,
    END_IF: 57,
    ELSE: 58,
    WHILE: 59,
    DO: 60,
    END_WHILE: 61,
    FOR: 62,
    FROM: 63,
    TO: 64,
    END_FOR: 65,
    STEP: 66,
    AFFECT: 67,
    ALLOCATE: 68,
    POINT: 69,
    DEREFERENCE: 70,
    CONTENT: 71,
    RANDOM_INTEGER: 72,
    ADDRESS: 73,
    NULL: 74,
    NOT: 75,
    MINUS: 76,
    AND: 77,
    OR: 78,
    EQ: 79,
    NEQ: 80,
    LTE: 81,
    GTE: 82,
    PLUS: 83,
    MULT: 84,
    EXP: 85,
    DIV: 86,
    MODULO: 87,
    STRING: 88,
    REPEAT: 89,
    UNTIL: 90,
    READ: 91,
    APOSTROPH: 92,
    WHITE_SPACE: 93,
    HEX_DIGIT: 94,
    DIGIT: 95,
    LETTER: 96,
    COMMENT: 97,
    LINE_COMMENT: 98,
    CHARACTER_VALUE: 99
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(SimpleLanguageLexer, org.antlr.runtime.Lexer, {
    EOF : -1,
    PROGRAM : 4,
    PROGRAM_MAIN_PART : 5,
    INSTRUCTION_LIST : 6,
    EXPRESSION_LIST : 7,
    PRINT : 8,
    VARIABLES_DECLARATION_LIST : 9,
    IDENTIFIER_LIST : 10,
    VARIABLES_DECLARATION : 11,
    FUNCTION_PARAMETERS_LIST : 12,
    FUNCTION_PARAMETER_DECLARATION : 13,
    STRUCT_DECLARATION : 14,
    FUNCTION_LIST : 15,
    FUNCTION_CALL : 16,
    STRUCT_DECLARATIONS : 17,
    VARIABLE_TYPE : 18,
    ASSIGNABLE_ELEMENT : 19,
    ARRAY_ELEMENT : 20,
    ASSIGN : 21,
    NUMBER : 22,
    ARRAY_DATA_TYPE : 23,
    ARRAY_VARIABLE_TYPE : 24,
    DO_WHILE : 25,
    CONDITION : 26,
    NEWLINE : 27,
    STRUCT : 28,
    IDENTIFIER : 29,
    VAR : 30,
    COLON : 31,
    COMMA : 32,
    LB : 33,
    RB : 34,
    INTEGER : 35,
    BOOLEAN : 36,
    CHARACTER : 37,
    FLOAT : 38,
    POINTER : 39,
    LT : 40,
    GT : 41,
    FUNCTION : 42,
    LP : 43,
    RP : 44,
    PROCEDURE : 45,
    INTEGER_VALUE : 46,
    FLOAT_VALUE : 47,
    BOOLEAN_VALUE : 48,
    BEGIN : 49,
    END : 50,
    FREE : 51,
    RETURN : 52,
    ERROR : 53,
    PRINTLN : 54,
    IF : 55,
    THEN : 56,
    END_IF : 57,
    ELSE : 58,
    WHILE : 59,
    DO : 60,
    END_WHILE : 61,
    FOR : 62,
    FROM : 63,
    TO : 64,
    END_FOR : 65,
    STEP : 66,
    AFFECT : 67,
    ALLOCATE : 68,
    POINT : 69,
    DEREFERENCE : 70,
    CONTENT : 71,
    RANDOM_INTEGER : 72,
    ADDRESS : 73,
    NULL : 74,
    NOT : 75,
    MINUS : 76,
    AND : 77,
    OR : 78,
    EQ : 79,
    NEQ : 80,
    LTE : 81,
    GTE : 82,
    PLUS : 83,
    MULT : 84,
    EXP : 85,
    DIV : 86,
    MODULO : 87,
    STRING : 88,
    REPEAT : 89,
    UNTIL : 90,
    READ : 91,
    APOSTROPH : 92,
    WHITE_SPACE : 93,
    HEX_DIGIT : 94,
    DIGIT : 95,
    LETTER : 96,
    COMMENT : 97,
    LINE_COMMENT : 98,
    CHARACTER_VALUE : 99,
    getGrammarFileName: function() { return "SimpleLanguage.g"; }
});
org.antlr.lang.augmentObject(SimpleLanguageLexer.prototype, {
    // $ANTLR start END_IF
    mEND_IF: function()  {
        try {
            var _type = this.END_IF;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:608:7: ( 'END_IF' )
            // SimpleLanguage.g:608:9: 'END_IF'
            this.match("END_IF"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "END_IF",

    // $ANTLR start END_WHILE
    mEND_WHILE: function()  {
        try {
            var _type = this.END_WHILE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:609:10: ( 'END_WHILE' )
            // SimpleLanguage.g:609:12: 'END_WHILE'
            this.match("END_WHILE"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "END_WHILE",

    // $ANTLR start END_FOR
    mEND_FOR: function()  {
        try {
            var _type = this.END_FOR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:610:8: ( 'END_FOR' )
            // SimpleLanguage.g:610:10: 'END_FOR'
            this.match("END_FOR"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "END_FOR",

    // $ANTLR start END
    mEND: function()  {
        try {
            var _type = this.END;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:611:4: ( 'END' )
            // SimpleLanguage.g:611:6: 'END'
            this.match("END"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "END",

    // $ANTLR start PLUS
    mPLUS: function()  {
        try {
            var _type = this.PLUS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:612:5: ( '+' )
            // SimpleLanguage.g:612:7: '+'
            this.match('+'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PLUS",

    // $ANTLR start MINUS
    mMINUS: function()  {
        try {
            var _type = this.MINUS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:613:6: ( '-' )
            // SimpleLanguage.g:613:8: '-'
            this.match('-'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MINUS",

    // $ANTLR start MULT
    mMULT: function()  {
        try {
            var _type = this.MULT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:614:5: ( '*' )
            // SimpleLanguage.g:614:7: '*'
            this.match('*'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MULT",

    // $ANTLR start EXP
    mEXP: function()  {
        try {
            var _type = this.EXP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:615:4: ( '^' )
            // SimpleLanguage.g:615:6: '^'
            this.match('^'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EXP",

    // $ANTLR start DIV
    mDIV: function()  {
        try {
            var _type = this.DIV;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:616:4: ( '/' )
            // SimpleLanguage.g:616:6: '/'
            this.match('/'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DIV",

    // $ANTLR start MODULO
    mMODULO: function()  {
        try {
            var _type = this.MODULO;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:617:7: ( '%' )
            // SimpleLanguage.g:617:9: '%'
            this.match('%'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MODULO",

    // $ANTLR start EQ
    mEQ: function()  {
        try {
            var _type = this.EQ;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:618:3: ( '=' )
            // SimpleLanguage.g:618:5: '='
            this.match('='); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EQ",

    // $ANTLR start NEQ
    mNEQ: function()  {
        try {
            var _type = this.NEQ;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:619:4: ( '!=' )
            // SimpleLanguage.g:619:6: '!='
            this.match("!="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NEQ",

    // $ANTLR start NOT
    mNOT: function()  {
        try {
            var _type = this.NOT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:620:4: ( '!' )
            // SimpleLanguage.g:620:6: '!'
            this.match('!'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NOT",

    // $ANTLR start LTE
    mLTE: function()  {
        try {
            var _type = this.LTE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:621:4: ( '<=' )
            // SimpleLanguage.g:621:6: '<='
            this.match("<="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LTE",

    // $ANTLR start LT
    mLT: function()  {
        try {
            var _type = this.LT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:622:3: ( '<' )
            // SimpleLanguage.g:622:5: '<'
            this.match('<'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LT",

    // $ANTLR start GTE
    mGTE: function()  {
        try {
            var _type = this.GTE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:623:4: ( '>=' )
            // SimpleLanguage.g:623:6: '>='
            this.match(">="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "GTE",

    // $ANTLR start GT
    mGT: function()  {
        try {
            var _type = this.GT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:624:3: ( '>' )
            // SimpleLanguage.g:624:5: '>'
            this.match('>'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "GT",

    // $ANTLR start AND
    mAND: function()  {
        try {
            var _type = this.AND;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:625:4: ( 'AND' )
            // SimpleLanguage.g:625:6: 'AND'
            this.match("AND"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "AND",

    // $ANTLR start OR
    mOR: function()  {
        try {
            var _type = this.OR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:626:3: ( 'OR' )
            // SimpleLanguage.g:626:5: 'OR'
            this.match("OR"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "OR",

    // $ANTLR start REPEAT
    mREPEAT: function()  {
        try {
            var _type = this.REPEAT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:627:7: ( 'REPEAT' )
            // SimpleLanguage.g:627:9: 'REPEAT'
            this.match("REPEAT"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "REPEAT",

    // $ANTLR start UNTIL
    mUNTIL: function()  {
        try {
            var _type = this.UNTIL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:628:6: ( 'UNTIL' )
            // SimpleLanguage.g:628:8: 'UNTIL'
            this.match("UNTIL"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "UNTIL",

    // $ANTLR start FOR
    mFOR: function()  {
        try {
            var _type = this.FOR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:629:4: ( 'FOR' )
            // SimpleLanguage.g:629:6: 'FOR'
            this.match("FOR"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FOR",

    // $ANTLR start FROM
    mFROM: function()  {
        try {
            var _type = this.FROM;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:630:5: ( 'FROM' )
            // SimpleLanguage.g:630:7: 'FROM'
            this.match("FROM"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FROM",

    // $ANTLR start TO
    mTO: function()  {
        try {
            var _type = this.TO;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:631:3: ( 'TO' )
            // SimpleLanguage.g:631:5: 'TO'
            this.match("TO"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "TO",

    // $ANTLR start STEP
    mSTEP: function()  {
        try {
            var _type = this.STEP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:632:5: ( 'STEP' )
            // SimpleLanguage.g:632:7: 'STEP'
            this.match("STEP"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STEP",

    // $ANTLR start READ
    mREAD: function()  {
        try {
            var _type = this.READ;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:633:5: ( 'READ' )
            // SimpleLanguage.g:633:7: 'READ'
            this.match("READ"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "READ",

    // $ANTLR start ADDRESS
    mADDRESS: function()  {
        try {
            var _type = this.ADDRESS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:634:8: ( 'ADDRESS' )
            // SimpleLanguage.g:634:10: 'ADDRESS'
            this.match("ADDRESS"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ADDRESS",

    // $ANTLR start CONTENT
    mCONTENT: function()  {
        try {
            var _type = this.CONTENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:635:8: ( 'CONTENT' )
            // SimpleLanguage.g:635:10: 'CONTENT'
            this.match("CONTENT"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CONTENT",

    // $ANTLR start ALLOCATE
    mALLOCATE: function()  {
        try {
            var _type = this.ALLOCATE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:636:9: ( 'ALLOC' )
            // SimpleLanguage.g:636:11: 'ALLOC'
            this.match("ALLOC"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ALLOCATE",

    // $ANTLR start FREE
    mFREE: function()  {
        try {
            var _type = this.FREE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:637:5: ( 'FREE' )
            // SimpleLanguage.g:637:7: 'FREE'
            this.match("FREE"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FREE",

    // $ANTLR start NULL
    mNULL: function()  {
        try {
            var _type = this.NULL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:638:5: ( 'NULL' )
            // SimpleLanguage.g:638:7: 'NULL'
            this.match("NULL"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NULL",

    // $ANTLR start BEGIN
    mBEGIN: function()  {
        try {
            var _type = this.BEGIN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:639:6: ( 'BEGIN' )
            // SimpleLanguage.g:639:8: 'BEGIN'
            this.match("BEGIN"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BEGIN",

    // $ANTLR start VAR
    mVAR: function()  {
        try {
            var _type = this.VAR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:640:4: ( 'VAR' )
            // SimpleLanguage.g:640:6: 'VAR'
            this.match("VAR"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "VAR",

    // $ANTLR start WHILE
    mWHILE: function()  {
        try {
            var _type = this.WHILE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:641:6: ( 'WHILE' )
            // SimpleLanguage.g:641:8: 'WHILE'
            this.match("WHILE"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WHILE",

    // $ANTLR start DO
    mDO: function()  {
        try {
            var _type = this.DO;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:642:3: ( 'DO' )
            // SimpleLanguage.g:642:5: 'DO'
            this.match("DO"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DO",

    // $ANTLR start STRUCT
    mSTRUCT: function()  {
        try {
            var _type = this.STRUCT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:643:7: ( 'STRUCT' )
            // SimpleLanguage.g:643:9: 'STRUCT'
            this.match("STRUCT"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STRUCT",

    // $ANTLR start BOOLEAN
    mBOOLEAN: function()  {
        try {
            var _type = this.BOOLEAN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:644:8: ( 'BOOLEAN' )
            // SimpleLanguage.g:644:10: 'BOOLEAN'
            this.match("BOOLEAN"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BOOLEAN",

    // $ANTLR start INTEGER
    mINTEGER: function()  {
        try {
            var _type = this.INTEGER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:645:8: ( 'INTEGER' )
            // SimpleLanguage.g:645:10: 'INTEGER'
            this.match("INTEGER"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INTEGER",

    // $ANTLR start FLOAT
    mFLOAT: function()  {
        try {
            var _type = this.FLOAT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:646:6: ( 'FLOAT' )
            // SimpleLanguage.g:646:8: 'FLOAT'
            this.match("FLOAT"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FLOAT",

    // $ANTLR start CHARACTER
    mCHARACTER: function()  {
        try {
            var _type = this.CHARACTER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:647:10: ( 'CHARACTER' )
            // SimpleLanguage.g:647:12: 'CHARACTER'
            this.match("CHARACTER"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CHARACTER",

    // $ANTLR start POINTER
    mPOINTER: function()  {
        try {
            var _type = this.POINTER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:648:8: ( 'POINTER' )
            // SimpleLanguage.g:648:10: 'POINTER'
            this.match("POINTER"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "POINTER",

    // $ANTLR start IF
    mIF: function()  {
        try {
            var _type = this.IF;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:649:3: ( 'IF' )
            // SimpleLanguage.g:649:5: 'IF'
            this.match("IF"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IF",

    // $ANTLR start THEN
    mTHEN: function()  {
        try {
            var _type = this.THEN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:650:5: ( 'THEN' )
            // SimpleLanguage.g:650:7: 'THEN'
            this.match("THEN"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "THEN",

    // $ANTLR start ELSE
    mELSE: function()  {
        try {
            var _type = this.ELSE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:651:5: ( 'ELSE' )
            // SimpleLanguage.g:651:7: 'ELSE'
            this.match("ELSE"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ELSE",

    // $ANTLR start FUNCTION
    mFUNCTION: function()  {
        try {
            var _type = this.FUNCTION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:652:9: ( 'FUNCTION' )
            // SimpleLanguage.g:652:11: 'FUNCTION'
            this.match("FUNCTION"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FUNCTION",

    // $ANTLR start PROCEDURE
    mPROCEDURE: function()  {
        try {
            var _type = this.PROCEDURE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:653:10: ( 'PROCEDURE' )
            // SimpleLanguage.g:653:12: 'PROCEDURE'
            this.match("PROCEDURE"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PROCEDURE",

    // $ANTLR start PRINT
    mPRINT: function()  {
        try {
            var _type = this.PRINT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:654:6: ( 'PRINT' )
            // SimpleLanguage.g:654:8: 'PRINT'
            this.match("PRINT"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PRINT",

    // $ANTLR start PRINTLN
    mPRINTLN: function()  {
        try {
            var _type = this.PRINTLN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:655:8: ( 'PRINTLN' )
            // SimpleLanguage.g:655:10: 'PRINTLN'
            this.match("PRINTLN"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PRINTLN",

    // $ANTLR start ERROR
    mERROR: function()  {
        try {
            var _type = this.ERROR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:656:6: ( 'ERROR' )
            // SimpleLanguage.g:656:8: 'ERROR'
            this.match("ERROR"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ERROR",

    // $ANTLR start RANDOM_INTEGER
    mRANDOM_INTEGER: function()  {
        try {
            var _type = this.RANDOM_INTEGER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:657:15: ( 'RANDOM_INTEGER' )
            // SimpleLanguage.g:657:17: 'RANDOM_INTEGER'
            this.match("RANDOM_INTEGER"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RANDOM_INTEGER",

    // $ANTLR start RETURN
    mRETURN: function()  {
        try {
            var _type = this.RETURN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:658:7: ( 'RETURN' )
            // SimpleLanguage.g:658:9: 'RETURN'
            this.match("RETURN"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RETURN",

    // $ANTLR start COLON
    mCOLON: function()  {
        try {
            var _type = this.COLON;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:659:6: ( ':' )
            // SimpleLanguage.g:659:8: ':'
            this.match(':'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COLON",

    // $ANTLR start COMMA
    mCOMMA: function()  {
        try {
            var _type = this.COMMA;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:660:6: ( ',' )
            // SimpleLanguage.g:660:8: ','
            this.match(','); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMA",

    // $ANTLR start LB
    mLB: function()  {
        try {
            var _type = this.LB;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:661:3: ( '[' )
            // SimpleLanguage.g:661:5: '['
            this.match('['); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LB",

    // $ANTLR start RB
    mRB: function()  {
        try {
            var _type = this.RB;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:662:3: ( ']' )
            // SimpleLanguage.g:662:5: ']'
            this.match(']'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RB",

    // $ANTLR start LP
    mLP: function()  {
        try {
            var _type = this.LP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:663:3: ( '(' )
            // SimpleLanguage.g:663:5: '('
            this.match('('); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LP",

    // $ANTLR start RP
    mRP: function()  {
        try {
            var _type = this.RP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:664:3: ( ')' )
            // SimpleLanguage.g:664:5: ')'
            this.match(')'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RP",

    // $ANTLR start POINT
    mPOINT: function()  {
        try {
            var _type = this.POINT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:665:6: ( '.' )
            // SimpleLanguage.g:665:8: '.'
            this.match('.'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "POINT",

    // $ANTLR start DEREFERENCE
    mDEREFERENCE: function()  {
        try {
            var _type = this.DEREFERENCE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:666:12: ( '->' )
            // SimpleLanguage.g:666:14: '->'
            this.match("->"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DEREFERENCE",

    // $ANTLR start AFFECT
    mAFFECT: function()  {
        try {
            var _type = this.AFFECT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:667:7: ( '<-' )
            // SimpleLanguage.g:667:9: '<-'
            this.match("<-"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "AFFECT",

    // $ANTLR start APOSTROPH
    mAPOSTROPH: function()  {
        try {
            var _type = this.APOSTROPH;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:668:10: ( '\\'' )
            // SimpleLanguage.g:668:12: '\\''
            this.match('\''); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "APOSTROPH",

    // $ANTLR start WHITE_SPACE
    mWHITE_SPACE: function()  {
        try {
            var _type = this.WHITE_SPACE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:678:12: ( ( ' ' | '\\t' ) )
            // SimpleLanguage.g:678:15: ( ' ' | '\\t' )
            if ( this.input.LA(1)=='\t'||this.input.LA(1)==' ' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

             _channel = HIDDEN; 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WHITE_SPACE",

    // $ANTLR start HEX_DIGIT
    mHEX_DIGIT: function()  {
        try {
            // SimpleLanguage.g:682:2: ( ( '0' .. '9' | 'A' .. 'F' | 'a' .. 'f' ) )
            // SimpleLanguage.g:682:4: ( '0' .. '9' | 'A' .. 'F' | 'a' .. 'f' )
            if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='F')||(this.input.LA(1)>='a' && this.input.LA(1)<='f') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "HEX_DIGIT",

    // $ANTLR start DIGIT
    mDIGIT: function()  {
        try {
            // SimpleLanguage.g:686:2: ( '0' .. '9' )
            // SimpleLanguage.g:686:4: '0' .. '9'
            this.matchRange('0','9'); 



        }
        finally {
        }
    },
    // $ANTLR end "DIGIT",

    // $ANTLR start INTEGER_VALUE
    mINTEGER_VALUE: function()  {
        try {
            var _type = this.INTEGER_VALUE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:690:2: ( ( DIGIT )+ )
            // SimpleLanguage.g:690:4: ( DIGIT )+
            // SimpleLanguage.g:690:4: ( DIGIT )+
            var cnt1=0;
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( ((LA1_0>='0' && LA1_0<='9')) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // SimpleLanguage.g:690:4: DIGIT
                    this.mDIGIT(); 


                    break;

                default :
                    if ( cnt1 >= 1 ) {
                        break loop1;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(1, this.input);
                        throw eee;
                }
                cnt1++;
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INTEGER_VALUE",

    // $ANTLR start FLOAT_VALUE
    mFLOAT_VALUE: function()  {
        try {
            var _type = this.FLOAT_VALUE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:694:2: ( ( DIGIT )* '.' ( DIGIT )* )
            // SimpleLanguage.g:694:4: ( DIGIT )* '.' ( DIGIT )*
            // SimpleLanguage.g:694:4: ( DIGIT )*
            loop2:
            do {
                var alt2=2;
                var LA2_0 = this.input.LA(1);

                if ( ((LA2_0>='0' && LA2_0<='9')) ) {
                    alt2=1;
                }


                switch (alt2) {
                case 1 :
                    // SimpleLanguage.g:694:4: DIGIT
                    this.mDIGIT(); 


                    break;

                default :
                    break loop2;
                }
            } while (true);

            this.match('.'); 
            // SimpleLanguage.g:694:13: ( DIGIT )*
            loop3:
            do {
                var alt3=2;
                var LA3_0 = this.input.LA(1);

                if ( ((LA3_0>='0' && LA3_0<='9')) ) {
                    alt3=1;
                }


                switch (alt3) {
                case 1 :
                    // SimpleLanguage.g:694:13: DIGIT
                    this.mDIGIT(); 


                    break;

                default :
                    break loop3;
                }
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FLOAT_VALUE",

    // $ANTLR start BOOLEAN_VALUE
    mBOOLEAN_VALUE: function()  {
        try {
            var _type = this.BOOLEAN_VALUE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:698:2: ( 'TRUE' | 'FALSE' | 'true' | 'false' )
            var alt4=4;
            switch ( this.input.LA(1) ) {
            case 'T':
                alt4=1;
                break;
            case 'F':
                alt4=2;
                break;
            case 't':
                alt4=3;
                break;
            case 'f':
                alt4=4;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 4, 0, this.input);

                throw nvae;
            }

            switch (alt4) {
                case 1 :
                    // SimpleLanguage.g:698:4: 'TRUE'
                    this.match("TRUE"); 



                    break;
                case 2 :
                    // SimpleLanguage.g:699:4: 'FALSE'
                    this.match("FALSE"); 



                    break;
                case 3 :
                    // SimpleLanguage.g:700:4: 'true'
                    this.match("true"); 



                    break;
                case 4 :
                    // SimpleLanguage.g:701:4: 'false'
                    this.match("false"); 



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BOOLEAN_VALUE",

    // $ANTLR start LETTER
    mLETTER: function()  {
        try {
            // SimpleLanguage.g:705:2: ( 'a' .. 'z' | 'A' .. 'Z' | '_' )
            // SimpleLanguage.g:
            if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "LETTER",

    // $ANTLR start IDENTIFIER
    mIDENTIFIER: function()  {
        try {
            var _type = this.IDENTIFIER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:708:2: ( LETTER ( LETTER | DIGIT )* )
            // SimpleLanguage.g:708:4: LETTER ( LETTER | DIGIT )*
            this.mLETTER(); 
            // SimpleLanguage.g:708:11: ( LETTER | DIGIT )*
            loop5:
            do {
                var alt5=2;
                var LA5_0 = this.input.LA(1);

                if ( ((LA5_0>='0' && LA5_0<='9')||(LA5_0>='A' && LA5_0<='Z')||LA5_0=='_'||(LA5_0>='a' && LA5_0<='z')) ) {
                    alt5=1;
                }


                switch (alt5) {
                case 1 :
                    // SimpleLanguage.g:
                    if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop5;
                }
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IDENTIFIER",

    // $ANTLR start NEWLINE
    mNEWLINE: function()  {
        try {
            var _type = this.NEWLINE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:712:5: ( ( ( '\\r' )? '\\n' )+ )
            // SimpleLanguage.g:712:7: ( ( '\\r' )? '\\n' )+
            // SimpleLanguage.g:712:7: ( ( '\\r' )? '\\n' )+
            var cnt7=0;
            loop7:
            do {
                var alt7=2;
                var LA7_0 = this.input.LA(1);

                if ( (LA7_0=='\n'||LA7_0=='\r') ) {
                    alt7=1;
                }


                switch (alt7) {
                case 1 :
                    // SimpleLanguage.g:712:8: ( '\\r' )? '\\n'
                    // SimpleLanguage.g:712:8: ( '\\r' )?
                    var alt6=2;
                    var LA6_0 = this.input.LA(1);

                    if ( (LA6_0=='\r') ) {
                        alt6=1;
                    }
                    switch (alt6) {
                        case 1 :
                            // SimpleLanguage.g:712:8: '\\r'
                            this.match('\r'); 


                            break;

                    }

                    this.match('\n'); 


                    break;

                default :
                    if ( cnt7 >= 1 ) {
                        break loop7;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(7, this.input);
                        throw eee;
                }
                cnt7++;
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NEWLINE",

    // $ANTLR start COMMENT
    mCOMMENT: function()  {
        try {
            var _type = this.COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:716:5: ( '/*' ( . )* '*/' )
            // SimpleLanguage.g:716:7: '/*' ( . )* '*/'
            this.match("/*"); 

            // SimpleLanguage.g:716:12: ( . )*
            loop8:
            do {
                var alt8=2;
                var LA8_0 = this.input.LA(1);

                if ( (LA8_0=='*') ) {
                    var LA8_1 = this.input.LA(2);

                    if ( (LA8_1=='/') ) {
                        alt8=2;
                    }
                    else if ( ((LA8_1>='\u0000' && LA8_1<='.')||(LA8_1>='0' && LA8_1<='\uFFFF')) ) {
                        alt8=1;
                    }


                }
                else if ( ((LA8_0>='\u0000' && LA8_0<=')')||(LA8_0>='+' && LA8_0<='\uFFFF')) ) {
                    alt8=1;
                }


                switch (alt8) {
                case 1 :
                    // SimpleLanguage.g:716:12: .
                    this.matchAny(); 


                    break;

                default :
                    break loop8;
                }
            } while (true);

            this.match("*/"); 

             _channel = HIDDEN; 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMENT",

    // $ANTLR start LINE_COMMENT
    mLINE_COMMENT: function()  {
        try {
            var _type = this.LINE_COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:720:5: ( '//' (~ ( '\\n' | '\\r' ) )* )
            // SimpleLanguage.g:720:7: '//' (~ ( '\\n' | '\\r' ) )*
            this.match("//"); 

            // SimpleLanguage.g:720:12: (~ ( '\\n' | '\\r' ) )*
            loop9:
            do {
                var alt9=2;
                var LA9_0 = this.input.LA(1);

                if ( ((LA9_0>='\u0000' && LA9_0<='\t')||(LA9_0>='\u000B' && LA9_0<='\f')||(LA9_0>='\u000E' && LA9_0<='\uFFFF')) ) {
                    alt9=1;
                }


                switch (alt9) {
                case 1 :
                    // SimpleLanguage.g:720:12: ~ ( '\\n' | '\\r' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop9;
                }
            } while (true);

             _channel = HIDDEN; 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LINE_COMMENT",

    // $ANTLR start STRING
    mSTRING: function()  {
        try {
            var _type = this.STRING;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:724:2: ( '\"' ( ( . )* ) '\"' )
            // SimpleLanguage.g:724:4: '\"' ( ( . )* ) '\"'
            this.match('\"'); 
            // SimpleLanguage.g:724:8: ( ( . )* )
            // SimpleLanguage.g:724:9: ( . )*
            // SimpleLanguage.g:724:9: ( . )*
            loop10:
            do {
                var alt10=2;
                var LA10_0 = this.input.LA(1);

                if ( (LA10_0=='\"') ) {
                    alt10=2;
                }
                else if ( ((LA10_0>='\u0000' && LA10_0<='!')||(LA10_0>='#' && LA10_0<='\uFFFF')) ) {
                    alt10=1;
                }


                switch (alt10) {
                case 1 :
                    // SimpleLanguage.g:724:9: .
                    this.matchAny(); 


                    break;

                default :
                    break loop10;
                }
            } while (true);




            this.match('\"'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STRING",

    // $ANTLR start CHARACTER_VALUE
    mCHARACTER_VALUE: function()  {
        try {
            var _type = this.CHARACTER_VALUE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:728:2: ( . )
            // SimpleLanguage.g:728:4: .
            this.matchAny(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CHARACTER_VALUE",

    mTokens: function() {
        // SimpleLanguage.g:1:8: ( END_IF | END_WHILE | END_FOR | END | PLUS | MINUS | MULT | EXP | DIV | MODULO | EQ | NEQ | NOT | LTE | LT | GTE | GT | AND | OR | REPEAT | UNTIL | FOR | FROM | TO | STEP | READ | ADDRESS | CONTENT | ALLOCATE | FREE | NULL | BEGIN | VAR | WHILE | DO | STRUCT | BOOLEAN | INTEGER | FLOAT | CHARACTER | POINTER | IF | THEN | ELSE | FUNCTION | PROCEDURE | PRINT | PRINTLN | ERROR | RANDOM_INTEGER | RETURN | COLON | COMMA | LB | RB | LP | RP | POINT | DEREFERENCE | AFFECT | APOSTROPH | WHITE_SPACE | INTEGER_VALUE | FLOAT_VALUE | BOOLEAN_VALUE | IDENTIFIER | NEWLINE | COMMENT | LINE_COMMENT | STRING | CHARACTER_VALUE )
        var alt11=71;
        alt11 = this.dfa11.predict(this.input);
        switch (alt11) {
            case 1 :
                // SimpleLanguage.g:1:10: END_IF
                this.mEND_IF(); 


                break;
            case 2 :
                // SimpleLanguage.g:1:17: END_WHILE
                this.mEND_WHILE(); 


                break;
            case 3 :
                // SimpleLanguage.g:1:27: END_FOR
                this.mEND_FOR(); 


                break;
            case 4 :
                // SimpleLanguage.g:1:35: END
                this.mEND(); 


                break;
            case 5 :
                // SimpleLanguage.g:1:39: PLUS
                this.mPLUS(); 


                break;
            case 6 :
                // SimpleLanguage.g:1:44: MINUS
                this.mMINUS(); 


                break;
            case 7 :
                // SimpleLanguage.g:1:50: MULT
                this.mMULT(); 


                break;
            case 8 :
                // SimpleLanguage.g:1:55: EXP
                this.mEXP(); 


                break;
            case 9 :
                // SimpleLanguage.g:1:59: DIV
                this.mDIV(); 


                break;
            case 10 :
                // SimpleLanguage.g:1:63: MODULO
                this.mMODULO(); 


                break;
            case 11 :
                // SimpleLanguage.g:1:70: EQ
                this.mEQ(); 


                break;
            case 12 :
                // SimpleLanguage.g:1:73: NEQ
                this.mNEQ(); 


                break;
            case 13 :
                // SimpleLanguage.g:1:77: NOT
                this.mNOT(); 


                break;
            case 14 :
                // SimpleLanguage.g:1:81: LTE
                this.mLTE(); 


                break;
            case 15 :
                // SimpleLanguage.g:1:85: LT
                this.mLT(); 


                break;
            case 16 :
                // SimpleLanguage.g:1:88: GTE
                this.mGTE(); 


                break;
            case 17 :
                // SimpleLanguage.g:1:92: GT
                this.mGT(); 


                break;
            case 18 :
                // SimpleLanguage.g:1:95: AND
                this.mAND(); 


                break;
            case 19 :
                // SimpleLanguage.g:1:99: OR
                this.mOR(); 


                break;
            case 20 :
                // SimpleLanguage.g:1:102: REPEAT
                this.mREPEAT(); 


                break;
            case 21 :
                // SimpleLanguage.g:1:109: UNTIL
                this.mUNTIL(); 


                break;
            case 22 :
                // SimpleLanguage.g:1:115: FOR
                this.mFOR(); 


                break;
            case 23 :
                // SimpleLanguage.g:1:119: FROM
                this.mFROM(); 


                break;
            case 24 :
                // SimpleLanguage.g:1:124: TO
                this.mTO(); 


                break;
            case 25 :
                // SimpleLanguage.g:1:127: STEP
                this.mSTEP(); 


                break;
            case 26 :
                // SimpleLanguage.g:1:132: READ
                this.mREAD(); 


                break;
            case 27 :
                // SimpleLanguage.g:1:137: ADDRESS
                this.mADDRESS(); 


                break;
            case 28 :
                // SimpleLanguage.g:1:145: CONTENT
                this.mCONTENT(); 


                break;
            case 29 :
                // SimpleLanguage.g:1:153: ALLOCATE
                this.mALLOCATE(); 


                break;
            case 30 :
                // SimpleLanguage.g:1:162: FREE
                this.mFREE(); 


                break;
            case 31 :
                // SimpleLanguage.g:1:167: NULL
                this.mNULL(); 


                break;
            case 32 :
                // SimpleLanguage.g:1:172: BEGIN
                this.mBEGIN(); 


                break;
            case 33 :
                // SimpleLanguage.g:1:178: VAR
                this.mVAR(); 


                break;
            case 34 :
                // SimpleLanguage.g:1:182: WHILE
                this.mWHILE(); 


                break;
            case 35 :
                // SimpleLanguage.g:1:188: DO
                this.mDO(); 


                break;
            case 36 :
                // SimpleLanguage.g:1:191: STRUCT
                this.mSTRUCT(); 


                break;
            case 37 :
                // SimpleLanguage.g:1:198: BOOLEAN
                this.mBOOLEAN(); 


                break;
            case 38 :
                // SimpleLanguage.g:1:206: INTEGER
                this.mINTEGER(); 


                break;
            case 39 :
                // SimpleLanguage.g:1:214: FLOAT
                this.mFLOAT(); 


                break;
            case 40 :
                // SimpleLanguage.g:1:220: CHARACTER
                this.mCHARACTER(); 


                break;
            case 41 :
                // SimpleLanguage.g:1:230: POINTER
                this.mPOINTER(); 


                break;
            case 42 :
                // SimpleLanguage.g:1:238: IF
                this.mIF(); 


                break;
            case 43 :
                // SimpleLanguage.g:1:241: THEN
                this.mTHEN(); 


                break;
            case 44 :
                // SimpleLanguage.g:1:246: ELSE
                this.mELSE(); 


                break;
            case 45 :
                // SimpleLanguage.g:1:251: FUNCTION
                this.mFUNCTION(); 


                break;
            case 46 :
                // SimpleLanguage.g:1:260: PROCEDURE
                this.mPROCEDURE(); 


                break;
            case 47 :
                // SimpleLanguage.g:1:270: PRINT
                this.mPRINT(); 


                break;
            case 48 :
                // SimpleLanguage.g:1:276: PRINTLN
                this.mPRINTLN(); 


                break;
            case 49 :
                // SimpleLanguage.g:1:284: ERROR
                this.mERROR(); 


                break;
            case 50 :
                // SimpleLanguage.g:1:290: RANDOM_INTEGER
                this.mRANDOM_INTEGER(); 


                break;
            case 51 :
                // SimpleLanguage.g:1:305: RETURN
                this.mRETURN(); 


                break;
            case 52 :
                // SimpleLanguage.g:1:312: COLON
                this.mCOLON(); 


                break;
            case 53 :
                // SimpleLanguage.g:1:318: COMMA
                this.mCOMMA(); 


                break;
            case 54 :
                // SimpleLanguage.g:1:324: LB
                this.mLB(); 


                break;
            case 55 :
                // SimpleLanguage.g:1:327: RB
                this.mRB(); 


                break;
            case 56 :
                // SimpleLanguage.g:1:330: LP
                this.mLP(); 


                break;
            case 57 :
                // SimpleLanguage.g:1:333: RP
                this.mRP(); 


                break;
            case 58 :
                // SimpleLanguage.g:1:336: POINT
                this.mPOINT(); 


                break;
            case 59 :
                // SimpleLanguage.g:1:342: DEREFERENCE
                this.mDEREFERENCE(); 


                break;
            case 60 :
                // SimpleLanguage.g:1:354: AFFECT
                this.mAFFECT(); 


                break;
            case 61 :
                // SimpleLanguage.g:1:361: APOSTROPH
                this.mAPOSTROPH(); 


                break;
            case 62 :
                // SimpleLanguage.g:1:371: WHITE_SPACE
                this.mWHITE_SPACE(); 


                break;
            case 63 :
                // SimpleLanguage.g:1:383: INTEGER_VALUE
                this.mINTEGER_VALUE(); 


                break;
            case 64 :
                // SimpleLanguage.g:1:397: FLOAT_VALUE
                this.mFLOAT_VALUE(); 


                break;
            case 65 :
                // SimpleLanguage.g:1:409: BOOLEAN_VALUE
                this.mBOOLEAN_VALUE(); 


                break;
            case 66 :
                // SimpleLanguage.g:1:423: IDENTIFIER
                this.mIDENTIFIER(); 


                break;
            case 67 :
                // SimpleLanguage.g:1:434: NEWLINE
                this.mNEWLINE(); 


                break;
            case 68 :
                // SimpleLanguage.g:1:442: COMMENT
                this.mCOMMENT(); 


                break;
            case 69 :
                // SimpleLanguage.g:1:450: LINE_COMMENT
                this.mLINE_COMMENT(); 


                break;
            case 70 :
                // SimpleLanguage.g:1:463: STRING
                this.mSTRING(); 


                break;
            case 71 :
                // SimpleLanguage.g:1:470: CHARACTER_VALUE
                this.mCHARACTER_VALUE(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(SimpleLanguageLexer, {
    DFA11_eotS:
        "\u0001\uffff\u0001\u002f\u0001\uffff\u0001\u0032\u0002\uffff\u0001"+
    "\u0037\u0002\uffff\u0001\u003b\u0001\u003e\u0001\u0040\u000f\u002f\u0006"+
    "\uffff\u0001\u0063\u0002\uffff\u0001\u0067\u0002\u002f\u0001\uffff\u0001"+
    "\u002b\u0001\uffff\u0001\u002b\u0001\uffff\u0003\u002f\u0012\uffff\u0003"+
    "\u002f\u0001\u0073\u0008\u002f\u0001\u007f\u000a\u002f\u0001\u008b\u0001"+
    "\u002f\u0001\u008d\u0002\u002f\u000b\uffff\u0001\u0067\u0002\u002f\u0002"+
    "\uffff\u0001\u0094\u0002\u002f\u0001\u0097\u0002\u002f\u0001\uffff\u0005"+
    "\u002f\u0001\u009f\u0005\u002f\u0001\uffff\u0009\u002f\u0001\u00ae\u0001"+
    "\u002f\u0001\uffff\u0001\u002f\u0001\uffff\u0006\u002f\u0001\uffff\u0001"+
    "\u00b9\u0001\u002f\u0001\uffff\u0003\u002f\u0001\u00be\u0003\u002f\u0001"+
    "\uffff\u0001\u00c2\u0001\u00c3\u0003\u002f\u0001\u00c7\u0001\u00c8\u0001"+
    "\u00c9\u0003\u002f\u0001\u00cd\u0002\u002f\u0001\uffff\u0005\u002f\u0001"+
    "\u00c8\u0004\u002f\u0001\uffff\u0001\u00d9\u0001\u002f\u0001\u00db\u0001"+
    "\u002f\u0001\uffff\u0002\u002f\u0001\u00df\u0002\uffff\u0001\u00e0\u0001"+
    "\u002f\u0001\u00c8\u0003\uffff\u0003\u002f\u0001\uffff\u0001\u00e5\u0001"+
    "\u002f\u0001\u00e7\u0003\u002f\u0001\u00ec\u0001\u00c8\u0001\u00ed\u0002"+
    "\u002f\u0001\uffff\u0001\u002f\u0001\uffff\u0001\u00f1\u0001\u00f2\u0001"+
    "\u002f\u0002\uffff\u0001\u002f\u0001\u00f5\u0002\u002f\u0001\uffff\u0001"+
    "\u002f\u0001\uffff\u0004\u002f\u0002\uffff\u0001\u002f\u0001\u00fe\u0001"+
    "\u00ff\u0002\uffff\u0002\u002f\u0001\uffff\u0001\u0102\u0001\u002f\u0001"+
    "\u0104\u0001\u0105\u0001\u0106\u0001\u002f\u0001\u0108\u0001\u002f\u0002"+
    "\uffff\u0001\u002f\u0001\u010b\u0001\uffff\u0001\u002f\u0003\uffff\u0001"+
    "\u002f\u0001\uffff\u0001\u010e\u0001\u002f\u0001\uffff\u0001\u0110\u0001"+
    "\u0111\u0001\uffff\u0001\u002f\u0002\uffff\u0003\u002f\u0001\u0116\u0001"+
    "\uffff",
    DFA11_eofS:
        "\u0117\uffff",
    DFA11_minS:
        "\u0001\u0000\u0001\u004c\u0001\uffff\u0001\u003e\u0002\uffff\u0001"+
    "\u002a\u0002\uffff\u0001\u003d\u0001\u002d\u0001\u003d\u0001\u0044\u0001"+
    "\u0052\u0001\u0041\u0001\u004e\u0001\u0041\u0001\u0048\u0001\u0054\u0001"+
    "\u0048\u0001\u0055\u0001\u0045\u0001\u0041\u0001\u0048\u0001\u004f\u0001"+
    "\u0046\u0001\u004f\u0006\uffff\u0001\u0030\u0002\uffff\u0001\u002e\u0001"+
    "\u0072\u0001\u0061\u0001\uffff\u0001\u000a\u0001\uffff\u0001\u0000\u0001"+
    "\uffff\u0001\u0044\u0001\u0053\u0001\u0052\u0012\uffff\u0002\u0044\u0001"+
    "\u004c\u0001\u0030\u0001\u0041\u0001\u004e\u0001\u0054\u0001\u0052\u0001"+
    "\u0045\u0001\u004f\u0001\u004e\u0001\u004c\u0001\u0030\u0001\u0045\u0001"+
    "\u0055\u0001\u0045\u0001\u004e\u0001\u0041\u0001\u004c\u0001\u0047\u0001"+
    "\u004f\u0001\u0052\u0001\u0049\u0001\u0030\u0001\u0054\u0001\u0030\u0002"+
    "\u0049\u000b\uffff\u0001\u002e\u0001\u0075\u0001\u006c\u0002\uffff\u0001"+
    "\u0030\u0001\u0045\u0001\u004f\u0001\u0030\u0001\u0052\u0001\u004f\u0001"+
    "\uffff\u0001\u0045\u0001\u0044\u0001\u0055\u0001\u0044\u0001\u0049\u0001"+
    "\u0030\u0001\u004d\u0001\u0045\u0001\u0041\u0001\u0043\u0001\u0053\u0001"+
    "\uffff\u0001\u004e\u0001\u0045\u0001\u0050\u0001\u0055\u0001\u0054\u0001"+
    "\u0052\u0001\u004c\u0001\u0049\u0001\u004c\u0001\u0030\u0001\u004c\u0001"+
    "\uffff\u0001\u0045\u0001\uffff\u0001\u004e\u0001\u0043\u0001\u004e\u0001"+
    "\u0065\u0001\u0073\u0001\u0046\u0001\uffff\u0001\u0030\u0001\u0052\u0001"+
    "\uffff\u0001\u0045\u0001\u0043\u0001\u0041\u0001\u0030\u0001\u0052\u0001"+
    "\u004f\u0001\u004c\u0001\uffff\u0002\u0030\u0002\u0054\u0001\u0045\u0003"+
    "\u0030\u0001\u0043\u0001\u0045\u0001\u0041\u0001\u0030\u0001\u004e\u0001"+
    "\u0045\u0001\uffff\u0001\u0045\u0001\u0047\u0001\u0054\u0001\u0045\u0001"+
    "\u0054\u0001\u0030\u0001\u0065\u0001\u0046\u0001\u0048\u0001\u004f\u0001"+
    "\uffff\u0001\u0030\u0001\u0053\u0001\u0030\u0001\u0054\u0001\uffff\u0001"+
    "\u004e\u0001\u004d\u0001\u0030\u0002\uffff\u0001\u0030\u0001\u0049\u0001"+
    "\u0030\u0003\uffff\u0001\u0054\u0001\u004e\u0001\u0043\u0001\uffff\u0001"+
    "\u0030\u0001\u0041\u0001\u0030\u0002\u0045\u0001\u0044\u0003\u0030\u0001"+
    "\u0049\u0001\u0052\u0001\uffff\u0001\u0053\u0001\uffff\u0002\u0030\u0001"+
    "\u005f\u0002\uffff\u0001\u004f\u0001\u0030\u0002\u0054\u0001\uffff\u0001"+
    "\u004e\u0001\uffff\u0002\u0052\u0001\u0055\u0001\u004e\u0002\uffff\u0001"+
    "\u004c\u0002\u0030\u0002\uffff\u0001\u0049\u0001\u004e\u0001\uffff\u0001"+
    "\u0030\u0001\u0045\u0003\u0030\u0001\u0052\u0001\u0030\u0001\u0045\u0002"+
    "\uffff\u0001\u004e\u0001\u0030\u0001\uffff\u0001\u0052\u0003\uffff\u0001"+
    "\u0045\u0001\uffff\u0001\u0030\u0001\u0054\u0001\uffff\u0002\u0030\u0001"+
    "\uffff\u0001\u0045\u0002\uffff\u0001\u0047\u0001\u0045\u0001\u0052\u0001"+
    "\u0030\u0001\uffff",
    DFA11_maxS:
        "\u0001\uffff\u0001\u0052\u0001\uffff\u0001\u003e\u0002\uffff\u0001"+
    "\u002f\u0002\uffff\u0003\u003d\u0001\u004e\u0001\u0052\u0001\u0045\u0001"+
    "\u004e\u0001\u0055\u0001\u0052\u0001\u0054\u0001\u004f\u0001\u0055\u0001"+
    "\u004f\u0001\u0041\u0001\u0048\u0001\u004f\u0001\u004e\u0001\u0052\u0006"+
    "\uffff\u0001\u0039\u0002\uffff\u0001\u0039\u0001\u0072\u0001\u0061\u0001"+
    "\uffff\u0001\u000a\u0001\uffff\u0001\uffff\u0001\uffff\u0001\u0044\u0001"+
    "\u0053\u0001\u0052\u0012\uffff\u0002\u0044\u0001\u004c\u0001\u007a\u0001"+
    "\u0054\u0001\u004e\u0001\u0054\u0001\u0052\u0002\u004f\u0001\u004e\u0001"+
    "\u004c\u0001\u007a\u0001\u0045\u0001\u0055\u0001\u0052\u0001\u004e\u0001"+
    "\u0041\u0001\u004c\u0001\u0047\u0001\u004f\u0001\u0052\u0001\u0049\u0001"+
    "\u007a\u0001\u0054\u0001\u007a\u0001\u0049\u0001\u004f\u000b\uffff\u0001"+
    "\u0039\u0001\u0075\u0001\u006c\u0002\uffff\u0001\u007a\u0001\u0045\u0001"+
    "\u004f\u0001\u007a\u0001\u0052\u0001\u004f\u0001\uffff\u0001\u0045\u0001"+
    "\u0044\u0001\u0055\u0001\u0044\u0001\u0049\u0001\u007a\u0001\u004d\u0001"+
    "\u0045\u0001\u0041\u0001\u0043\u0001\u0053\u0001\uffff\u0001\u004e\u0001"+
    "\u0045\u0001\u0050\u0001\u0055\u0001\u0054\u0001\u0052\u0001\u004c\u0001"+
    "\u0049\u0001\u004c\u0001\u007a\u0001\u004c\u0001\uffff\u0001\u0045\u0001"+
    "\uffff\u0001\u004e\u0001\u0043\u0001\u004e\u0001\u0065\u0001\u0073\u0001"+
    "\u0057\u0001\uffff\u0001\u007a\u0001\u0052\u0001\uffff\u0001\u0045\u0001"+
    "\u0043\u0001\u0041\u0001\u007a\u0001\u0052\u0001\u004f\u0001\u004c\u0001"+
    "\uffff\u0002\u007a\u0002\u0054\u0001\u0045\u0003\u007a\u0001\u0043\u0001"+
    "\u0045\u0001\u0041\u0001\u007a\u0001\u004e\u0001\u0045\u0001\uffff\u0001"+
    "\u0045\u0001\u0047\u0001\u0054\u0001\u0045\u0001\u0054\u0001\u007a\u0001"+
    "\u0065\u0001\u0046\u0001\u0048\u0001\u004f\u0001\uffff\u0001\u007a\u0001"+
    "\u0053\u0001\u007a\u0001\u0054\u0001\uffff\u0001\u004e\u0001\u004d\u0001"+
    "\u007a\u0002\uffff\u0001\u007a\u0001\u0049\u0001\u007a\u0003\uffff\u0001"+
    "\u0054\u0001\u004e\u0001\u0043\u0001\uffff\u0001\u007a\u0001\u0041\u0001"+
    "\u007a\u0002\u0045\u0001\u0044\u0003\u007a\u0001\u0049\u0001\u0052\u0001"+
    "\uffff\u0001\u0053\u0001\uffff\u0002\u007a\u0001\u005f\u0002\uffff\u0001"+
    "\u004f\u0001\u007a\u0002\u0054\u0001\uffff\u0001\u004e\u0001\uffff\u0002"+
    "\u0052\u0001\u0055\u0001\u004e\u0002\uffff\u0001\u004c\u0002\u007a\u0002"+
    "\uffff\u0001\u0049\u0001\u004e\u0001\uffff\u0001\u007a\u0001\u0045\u0003"+
    "\u007a\u0001\u0052\u0001\u007a\u0001\u0045\u0002\uffff\u0001\u004e\u0001"+
    "\u007a\u0001\uffff\u0001\u0052\u0003\uffff\u0001\u0045\u0001\uffff\u0001"+
    "\u007a\u0001\u0054\u0001\uffff\u0002\u007a\u0001\uffff\u0001\u0045\u0002"+
    "\uffff\u0001\u0047\u0001\u0045\u0001\u0052\u0001\u007a\u0001\uffff",
    DFA11_acceptS:
        "\u0002\uffff\u0001\u0005\u0001\uffff\u0001\u0007\u0001\u0008\u0001"+
    "\uffff\u0001\u000a\u0001\u000b\u0012\uffff\u0001\u0034\u0001\u0035\u0001"+
    "\u0036\u0001\u0037\u0001\u0038\u0001\u0039\u0001\uffff\u0001\u003d\u0001"+
    "\u003e\u0003\uffff\u0001\u0042\u0001\uffff\u0001\u0043\u0001\uffff\u0001"+
    "\u0047\u0003\uffff\u0001\u0042\u0001\u0005\u0001\u003b\u0001\u0006\u0001"+
    "\u0007\u0001\u0008\u0001\u0044\u0001\u0045\u0001\u0009\u0001\u000a\u0001"+
    "\u000b\u0001\u000c\u0001\u000d\u0001\u000e\u0001\u003c\u0001\u000f\u0001"+
    "\u0010\u0001\u0011\u001c\uffff\u0001\u0034\u0001\u0035\u0001\u0036\u0001"+
    "\u0037\u0001\u0038\u0001\u0039\u0001\u003a\u0001\u0040\u0001\u003d\u0001"+
    "\u003e\u0001\u003f\u0003\uffff\u0001\u0043\u0001\u0046\u0006\uffff\u0001"+
    "\u0013\u000b\uffff\u0001\u0018\u000b\uffff\u0001\u0023\u0001\uffff\u0001"+
    "\u002a\u0006\uffff\u0001\u0004\u0002\uffff\u0001\u0012\u0007\uffff\u0001"+
    "\u0016\u000e\uffff\u0001\u0021\u000a\uffff\u0001\u002c\u0004\uffff\u0001"+
    "\u001a\u0003\uffff\u0001\u0017\u0001\u001e\u0003\uffff\u0001\u002b\u0001"+
    "\u0041\u0001\u0019\u0003\uffff\u0001\u001f\u000b\uffff\u0001\u0031\u0001"+
    "\uffff\u0001\u001d\u0003\uffff\u0001\u0015\u0001\u0027\u0004\uffff\u0001"+
    "\u0020\u0001\uffff\u0001\u0022\u0004\uffff\u0001\u002f\u0001\u0001\u0003"+
    "\uffff\u0001\u0014\u0001\u0033\u0002\uffff\u0001\u0024\u0008\uffff\u0001"+
    "\u0003\u0001\u001b\u0002\uffff\u0001\u001c\u0001\uffff\u0001\u0025\u0001"+
    "\u0026\u0001\u0029\u0001\uffff\u0001\u0030\u0002\uffff\u0001\u002d\u0002"+
    "\uffff\u0001\u0002\u0001\uffff\u0001\u0028\u0001\u002e\u0004\uffff\u0001"+
    "\u0032",
    DFA11_specialS:
        "\u0001\u0001\u0029\uffff\u0001\u0000\u00ec\uffff}>",
    DFA11_transitionS: [
            "\u0009\u002b\u0001\u0023\u0001\u0029\u0002\u002b\u0001\u0028"+
            "\u0012\u002b\u0001\u0023\u0001\u0009\u0001\u002a\u0002\u002b"+
            "\u0001\u0007\u0001\u002b\u0001\u0022\u0001\u001f\u0001\u0020"+
            "\u0001\u0004\u0001\u0002\u0001\u001c\u0001\u0003\u0001\u0021"+
            "\u0001\u0006\u000a\u0024\u0001\u001b\u0001\u002b\u0001\u000a"+
            "\u0001\u0008\u0001\u000b\u0002\u002b\u0001\u000c\u0001\u0015"+
            "\u0001\u0013\u0001\u0018\u0001\u0001\u0001\u0010\u0002\u0027"+
            "\u0001\u0019\u0004\u0027\u0001\u0014\u0001\u000d\u0001\u001a"+
            "\u0001\u0027\u0001\u000e\u0001\u0012\u0001\u0011\u0001\u000f"+
            "\u0001\u0016\u0001\u0017\u0003\u0027\u0001\u001d\u0001\u002b"+
            "\u0001\u001e\u0001\u0005\u0001\u0027\u0001\u002b\u0005\u0027"+
            "\u0001\u0026\u000d\u0027\u0001\u0025\u0006\u0027\uff85\u002b",
            "\u0001\u002d\u0001\uffff\u0001\u002c\u0003\uffff\u0001\u002e",
            "",
            "\u0001\u0031",
            "",
            "",
            "\u0001\u0035\u0004\uffff\u0001\u0036",
            "",
            "",
            "\u0001\u003a",
            "\u0001\u003d\u000f\uffff\u0001\u003c",
            "\u0001\u003f",
            "\u0001\u0042\u0007\uffff\u0001\u0043\u0001\uffff\u0001\u0041",
            "\u0001\u0044",
            "\u0001\u0046\u0003\uffff\u0001\u0045",
            "\u0001\u0047",
            "\u0001\u004c\u000a\uffff\u0001\u004a\u0002\uffff\u0001\u0048"+
            "\u0002\uffff\u0001\u0049\u0002\uffff\u0001\u004b",
            "\u0001\u004e\u0006\uffff\u0001\u004d\u0002\uffff\u0001\u004f",
            "\u0001\u0050",
            "\u0001\u0052\u0006\uffff\u0001\u0051",
            "\u0001\u0053",
            "\u0001\u0054\u0009\uffff\u0001\u0055",
            "\u0001\u0056",
            "\u0001\u0057",
            "\u0001\u0058",
            "\u0001\u005a\u0007\uffff\u0001\u0059",
            "\u0001\u005b\u0002\uffff\u0001\u005c",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u000a\u0064",
            "",
            "",
            "\u0001\u0064\u0001\uffff\u000a\u0068",
            "\u0001\u0069",
            "\u0001\u006a",
            "",
            "\u0001\u006b",
            "",
            "\u0000\u006c",
            "",
            "\u0001\u006d",
            "\u0001\u006e",
            "\u0001\u006f",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0070",
            "\u0001\u0071",
            "\u0001\u0072",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u0075\u000e\uffff\u0001\u0074\u0003\uffff\u0001\u0076",
            "\u0001\u0077",
            "\u0001\u0078",
            "\u0001\u0079",
            "\u0001\u007b\u0009\uffff\u0001\u007a",
            "\u0001\u007c",
            "\u0001\u007d",
            "\u0001\u007e",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u0080",
            "\u0001\u0081",
            "\u0001\u0082\u000c\uffff\u0001\u0083",
            "\u0001\u0084",
            "\u0001\u0085",
            "\u0001\u0086",
            "\u0001\u0087",
            "\u0001\u0088",
            "\u0001\u0089",
            "\u0001\u008a",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u008c",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u008e",
            "\u0001\u0090\u0005\uffff\u0001\u008f",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0064\u0001\uffff\u000a\u0068",
            "\u0001\u0091",
            "\u0001\u0092",
            "",
            "",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u0093"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u0095",
            "\u0001\u0096",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u0098",
            "\u0001\u0099",
            "",
            "\u0001\u009a",
            "\u0001\u009b",
            "\u0001\u009c",
            "\u0001\u009d",
            "\u0001\u009e",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u00a0",
            "\u0001\u00a1",
            "\u0001\u00a2",
            "\u0001\u00a3",
            "\u0001\u00a4",
            "",
            "\u0001\u00a5",
            "\u0001\u00a6",
            "\u0001\u00a7",
            "\u0001\u00a8",
            "\u0001\u00a9",
            "\u0001\u00aa",
            "\u0001\u00ab",
            "\u0001\u00ac",
            "\u0001\u00ad",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u00af",
            "",
            "\u0001\u00b0",
            "",
            "\u0001\u00b1",
            "\u0001\u00b2",
            "\u0001\u00b3",
            "\u0001\u00b4",
            "\u0001\u00b5",
            "\u0001\u00b8\u0002\uffff\u0001\u00b6\u000d\uffff\u0001\u00b7",
            "",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u00ba",
            "",
            "\u0001\u00bb",
            "\u0001\u00bc",
            "\u0001\u00bd",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u00bf",
            "\u0001\u00c0",
            "\u0001\u00c1",
            "",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u00c4",
            "\u0001\u00c5",
            "\u0001\u00c6",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u00ca",
            "\u0001\u00cb",
            "\u0001\u00cc",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u00ce",
            "\u0001\u00cf",
            "",
            "\u0001\u00d0",
            "\u0001\u00d1",
            "\u0001\u00d2",
            "\u0001\u00d3",
            "\u0001\u00d4",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u00d5",
            "\u0001\u00d6",
            "\u0001\u00d7",
            "\u0001\u00d8",
            "",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u00da",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u00dc",
            "",
            "\u0001\u00dd",
            "\u0001\u00de",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "",
            "",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u00e1",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "",
            "",
            "",
            "\u0001\u00e2",
            "\u0001\u00e3",
            "\u0001\u00e4",
            "",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u00e6",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u00e8",
            "\u0001\u00e9",
            "\u0001\u00ea",
            "\u000a\u002f\u0007\uffff\u000b\u002f\u0001\u00eb\u000e\u002f"+
            "\u0004\uffff\u0001\u002f\u0001\uffff\u001a\u002f",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u00ee",
            "\u0001\u00ef",
            "",
            "\u0001\u00f0",
            "",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u00f3",
            "",
            "",
            "\u0001\u00f4",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u00f6",
            "\u0001\u00f7",
            "",
            "\u0001\u00f8",
            "",
            "\u0001\u00f9",
            "\u0001\u00fa",
            "\u0001\u00fb",
            "\u0001\u00fc",
            "",
            "",
            "\u0001\u00fd",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "",
            "",
            "\u0001\u0100",
            "\u0001\u0101",
            "",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u0103",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u0107",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u0109",
            "",
            "",
            "\u0001\u010a",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "",
            "\u0001\u010c",
            "",
            "",
            "",
            "\u0001\u010d",
            "",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u0001\u010f",
            "",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            "",
            "\u0001\u0112",
            "",
            "",
            "\u0001\u0113",
            "\u0001\u0114",
            "\u0001\u0115",
            "\u000a\u002f\u0007\uffff\u001a\u002f\u0004\uffff\u0001\u002f"+
            "\u0001\uffff\u001a\u002f",
            ""
    ]
});

org.antlr.lang.augmentObject(SimpleLanguageLexer, {
    DFA11_eot:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleLanguageLexer.DFA11_eotS),
    DFA11_eof:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleLanguageLexer.DFA11_eofS),
    DFA11_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleLanguageLexer.DFA11_minS),
    DFA11_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleLanguageLexer.DFA11_maxS),
    DFA11_accept:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleLanguageLexer.DFA11_acceptS),
    DFA11_special:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleLanguageLexer.DFA11_specialS),
    DFA11_transition: (function() {
        var a = [],
            i,
            numStates = SimpleLanguageLexer.DFA11_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(SimpleLanguageLexer.DFA11_transitionS[i]));
        }
        return a;
    })()
});

SimpleLanguageLexer.DFA11 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 11;
    this.eot = SimpleLanguageLexer.DFA11_eot;
    this.eof = SimpleLanguageLexer.DFA11_eof;
    this.min = SimpleLanguageLexer.DFA11_min;
    this.max = SimpleLanguageLexer.DFA11_max;
    this.accept = SimpleLanguageLexer.DFA11_accept;
    this.special = SimpleLanguageLexer.DFA11_special;
    this.transition = SimpleLanguageLexer.DFA11_transition;
};

org.antlr.lang.extend(SimpleLanguageLexer.DFA11, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( END_IF | END_WHILE | END_FOR | END | PLUS | MINUS | MULT | EXP | DIV | MODULO | EQ | NEQ | NOT | LTE | LT | GTE | GT | AND | OR | REPEAT | UNTIL | FOR | FROM | TO | STEP | READ | ADDRESS | CONTENT | ALLOCATE | FREE | NULL | BEGIN | VAR | WHILE | DO | STRUCT | BOOLEAN | INTEGER | FLOAT | CHARACTER | POINTER | IF | THEN | ELSE | FUNCTION | PROCEDURE | PRINT | PRINTLN | ERROR | RANDOM_INTEGER | RETURN | COLON | COMMA | LB | RB | LP | RP | POINT | DEREFERENCE | AFFECT | APOSTROPH | WHITE_SPACE | INTEGER_VALUE | FLOAT_VALUE | BOOLEAN_VALUE | IDENTIFIER | NEWLINE | COMMENT | LINE_COMMENT | STRING | CHARACTER_VALUE );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA11_42 = input.LA(1);

                            s = -1;
                            if ( ((LA11_42>='\u0000' && LA11_42<='\uFFFF')) ) {s = 108;}

                            else s = 43;

                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA11_0 = input.LA(1);

                            s = -1;
                            if ( (LA11_0=='E') ) {s = 1;}

                            else if ( (LA11_0=='+') ) {s = 2;}

                            else if ( (LA11_0=='-') ) {s = 3;}

                            else if ( (LA11_0=='*') ) {s = 4;}

                            else if ( (LA11_0=='^') ) {s = 5;}

                            else if ( (LA11_0=='/') ) {s = 6;}

                            else if ( (LA11_0=='%') ) {s = 7;}

                            else if ( (LA11_0=='=') ) {s = 8;}

                            else if ( (LA11_0=='!') ) {s = 9;}

                            else if ( (LA11_0=='<') ) {s = 10;}

                            else if ( (LA11_0=='>') ) {s = 11;}

                            else if ( (LA11_0=='A') ) {s = 12;}

                            else if ( (LA11_0=='O') ) {s = 13;}

                            else if ( (LA11_0=='R') ) {s = 14;}

                            else if ( (LA11_0=='U') ) {s = 15;}

                            else if ( (LA11_0=='F') ) {s = 16;}

                            else if ( (LA11_0=='T') ) {s = 17;}

                            else if ( (LA11_0=='S') ) {s = 18;}

                            else if ( (LA11_0=='C') ) {s = 19;}

                            else if ( (LA11_0=='N') ) {s = 20;}

                            else if ( (LA11_0=='B') ) {s = 21;}

                            else if ( (LA11_0=='V') ) {s = 22;}

                            else if ( (LA11_0=='W') ) {s = 23;}

                            else if ( (LA11_0=='D') ) {s = 24;}

                            else if ( (LA11_0=='I') ) {s = 25;}

                            else if ( (LA11_0=='P') ) {s = 26;}

                            else if ( (LA11_0==':') ) {s = 27;}

                            else if ( (LA11_0==',') ) {s = 28;}

                            else if ( (LA11_0=='[') ) {s = 29;}

                            else if ( (LA11_0==']') ) {s = 30;}

                            else if ( (LA11_0=='(') ) {s = 31;}

                            else if ( (LA11_0==')') ) {s = 32;}

                            else if ( (LA11_0=='.') ) {s = 33;}

                            else if ( (LA11_0=='\'') ) {s = 34;}

                            else if ( (LA11_0=='\t'||LA11_0==' ') ) {s = 35;}

                            else if ( ((LA11_0>='0' && LA11_0<='9')) ) {s = 36;}

                            else if ( (LA11_0=='t') ) {s = 37;}

                            else if ( (LA11_0=='f') ) {s = 38;}

                            else if ( ((LA11_0>='G' && LA11_0<='H')||(LA11_0>='J' && LA11_0<='M')||LA11_0=='Q'||(LA11_0>='X' && LA11_0<='Z')||LA11_0=='_'||(LA11_0>='a' && LA11_0<='e')||(LA11_0>='g' && LA11_0<='s')||(LA11_0>='u' && LA11_0<='z')) ) {s = 39;}

                            else if ( (LA11_0=='\r') ) {s = 40;}

                            else if ( (LA11_0=='\n') ) {s = 41;}

                            else if ( (LA11_0=='\"') ) {s = 42;}

                            else if ( ((LA11_0>='\u0000' && LA11_0<='\b')||(LA11_0>='\u000B' && LA11_0<='\f')||(LA11_0>='\u000E' && LA11_0<='\u001F')||(LA11_0>='#' && LA11_0<='$')||LA11_0=='&'||LA11_0==';'||(LA11_0>='?' && LA11_0<='@')||LA11_0=='\\'||LA11_0=='`'||(LA11_0>='{' && LA11_0<='\uFFFF')) ) {s = 43;}

                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 11, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
 
})();

    return SimpleLanguageLexer;
});
