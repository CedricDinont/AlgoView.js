// $ANTLR 3.3 Nov 30, 2010 12:50:56 SimpleLanguage.g 2013-08-25 21:55:31


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

    this.dfa12 = new SimpleLanguageLexer.DFA12(this);
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
    CHARACTER_VALUE: 49,
    BEGIN: 50,
    END: 51,
    FREE: 52,
    RETURN: 53,
    ERROR: 54,
    PRINTLN: 55,
    IF: 56,
    THEN: 57,
    END_IF: 58,
    ELSE: 59,
    WHILE: 60,
    DO: 61,
    END_WHILE: 62,
    END_DO_WHILE: 63,
    FOR: 64,
    FROM: 65,
    TO: 66,
    END_FOR: 67,
    STEP: 68,
    AFFECT: 69,
    ALLOCATE: 70,
    POINT: 71,
    DEREFERENCE: 72,
    CONTENT: 73,
    RANDOM_INTEGER: 74,
    ADDRESS: 75,
    NULL: 76,
    NOT: 77,
    MINUS: 78,
    AND: 79,
    OR: 80,
    EQ: 81,
    NEQ: 82,
    LTE: 83,
    GTE: 84,
    PLUS: 85,
    MULT: 86,
    EXP: 87,
    DIV: 88,
    MODULO: 89,
    STRING: 90,
    REPEAT: 91,
    UNTIL: 92,
    READ: 93,
    APOSTROPH: 94,
    WHITE_SPACE: 95,
    HEX_DIGIT: 96,
    DIGIT: 97,
    LETTER: 98,
    COMMENT: 99,
    LINE_COMMENT: 100
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
    CHARACTER_VALUE : 49,
    BEGIN : 50,
    END : 51,
    FREE : 52,
    RETURN : 53,
    ERROR : 54,
    PRINTLN : 55,
    IF : 56,
    THEN : 57,
    END_IF : 58,
    ELSE : 59,
    WHILE : 60,
    DO : 61,
    END_WHILE : 62,
    END_DO_WHILE : 63,
    FOR : 64,
    FROM : 65,
    TO : 66,
    END_FOR : 67,
    STEP : 68,
    AFFECT : 69,
    ALLOCATE : 70,
    POINT : 71,
    DEREFERENCE : 72,
    CONTENT : 73,
    RANDOM_INTEGER : 74,
    ADDRESS : 75,
    NULL : 76,
    NOT : 77,
    MINUS : 78,
    AND : 79,
    OR : 80,
    EQ : 81,
    NEQ : 82,
    LTE : 83,
    GTE : 84,
    PLUS : 85,
    MULT : 86,
    EXP : 87,
    DIV : 88,
    MODULO : 89,
    STRING : 90,
    REPEAT : 91,
    UNTIL : 92,
    READ : 93,
    APOSTROPH : 94,
    WHITE_SPACE : 95,
    HEX_DIGIT : 96,
    DIGIT : 97,
    LETTER : 98,
    COMMENT : 99,
    LINE_COMMENT : 100,
    getGrammarFileName: function() { return "SimpleLanguage.g"; }
});
org.antlr.lang.augmentObject(SimpleLanguageLexer.prototype, {
    // $ANTLR start END_IF
    mEND_IF: function()  {
        try {
            var _type = this.END_IF;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:623:7: ( 'END_IF' )
            // SimpleLanguage.g:623:9: 'END_IF'
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
            // SimpleLanguage.g:624:10: ( 'END_WHILE' )
            // SimpleLanguage.g:624:12: 'END_WHILE'
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
            // SimpleLanguage.g:625:8: ( 'END_FOR' )
            // SimpleLanguage.g:625:10: 'END_FOR'
            this.match("END_FOR"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "END_FOR",

    // $ANTLR start END_DO_WHILE
    mEND_DO_WHILE: function()  {
        try {
            var _type = this.END_DO_WHILE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:626:13: ( 'END_DO_WHILE' )
            // SimpleLanguage.g:626:15: 'END_DO_WHILE'
            this.match("END_DO_WHILE"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "END_DO_WHILE",

    // $ANTLR start END
    mEND: function()  {
        try {
            var _type = this.END;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:627:4: ( 'END' )
            // SimpleLanguage.g:627:6: 'END'
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
            // SimpleLanguage.g:628:5: ( '+' )
            // SimpleLanguage.g:628:7: '+'
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
            // SimpleLanguage.g:629:6: ( '-' )
            // SimpleLanguage.g:629:8: '-'
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
            // SimpleLanguage.g:630:5: ( '*' )
            // SimpleLanguage.g:630:7: '*'
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
            // SimpleLanguage.g:631:4: ( '^' )
            // SimpleLanguage.g:631:6: '^'
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
            // SimpleLanguage.g:632:4: ( '/' )
            // SimpleLanguage.g:632:6: '/'
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
            // SimpleLanguage.g:633:7: ( '%' )
            // SimpleLanguage.g:633:9: '%'
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
            // SimpleLanguage.g:634:3: ( '=' )
            // SimpleLanguage.g:634:5: '='
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
            // SimpleLanguage.g:635:4: ( '!=' )
            // SimpleLanguage.g:635:6: '!='
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
            // SimpleLanguage.g:636:4: ( '!' )
            // SimpleLanguage.g:636:6: '!'
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
            // SimpleLanguage.g:637:4: ( '<=' )
            // SimpleLanguage.g:637:6: '<='
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
            // SimpleLanguage.g:638:3: ( '<' )
            // SimpleLanguage.g:638:5: '<'
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
            // SimpleLanguage.g:639:4: ( '>=' )
            // SimpleLanguage.g:639:6: '>='
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
            // SimpleLanguage.g:640:3: ( '>' )
            // SimpleLanguage.g:640:5: '>'
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
            // SimpleLanguage.g:641:4: ( 'AND' )
            // SimpleLanguage.g:641:6: 'AND'
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
            // SimpleLanguage.g:642:3: ( 'OR' )
            // SimpleLanguage.g:642:5: 'OR'
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
            // SimpleLanguage.g:643:7: ( 'REPEAT' )
            // SimpleLanguage.g:643:9: 'REPEAT'
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
            // SimpleLanguage.g:644:6: ( 'UNTIL' )
            // SimpleLanguage.g:644:8: 'UNTIL'
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
            // SimpleLanguage.g:645:4: ( 'FOR' )
            // SimpleLanguage.g:645:6: 'FOR'
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
            // SimpleLanguage.g:646:5: ( 'FROM' )
            // SimpleLanguage.g:646:7: 'FROM'
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
            // SimpleLanguage.g:647:3: ( 'TO' )
            // SimpleLanguage.g:647:5: 'TO'
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
            // SimpleLanguage.g:648:5: ( 'STEP' )
            // SimpleLanguage.g:648:7: 'STEP'
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
            // SimpleLanguage.g:649:5: ( 'READ' )
            // SimpleLanguage.g:649:7: 'READ'
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
            // SimpleLanguage.g:650:8: ( 'ADDRESS' )
            // SimpleLanguage.g:650:10: 'ADDRESS'
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
            // SimpleLanguage.g:651:8: ( 'CONTENT' )
            // SimpleLanguage.g:651:10: 'CONTENT'
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
            // SimpleLanguage.g:652:9: ( 'ALLOC' )
            // SimpleLanguage.g:652:11: 'ALLOC'
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
            // SimpleLanguage.g:653:5: ( 'FREE' )
            // SimpleLanguage.g:653:7: 'FREE'
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
            // SimpleLanguage.g:654:5: ( 'NULL' )
            // SimpleLanguage.g:654:7: 'NULL'
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
            // SimpleLanguage.g:655:6: ( 'BEGIN' )
            // SimpleLanguage.g:655:8: 'BEGIN'
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
            // SimpleLanguage.g:656:4: ( 'VAR' )
            // SimpleLanguage.g:656:6: 'VAR'
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
            // SimpleLanguage.g:657:6: ( 'WHILE' )
            // SimpleLanguage.g:657:8: 'WHILE'
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
            // SimpleLanguage.g:658:3: ( 'DO' )
            // SimpleLanguage.g:658:5: 'DO'
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
            // SimpleLanguage.g:659:7: ( 'STRUCT' )
            // SimpleLanguage.g:659:9: 'STRUCT'
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
            // SimpleLanguage.g:660:8: ( 'BOOLEAN' )
            // SimpleLanguage.g:660:10: 'BOOLEAN'
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
            // SimpleLanguage.g:661:8: ( 'INTEGER' )
            // SimpleLanguage.g:661:10: 'INTEGER'
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
            // SimpleLanguage.g:662:6: ( 'FLOAT' )
            // SimpleLanguage.g:662:8: 'FLOAT'
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
            // SimpleLanguage.g:663:10: ( 'CHARACTER' )
            // SimpleLanguage.g:663:12: 'CHARACTER'
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
            // SimpleLanguage.g:664:8: ( 'POINTER' )
            // SimpleLanguage.g:664:10: 'POINTER'
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
            // SimpleLanguage.g:665:3: ( 'IF' )
            // SimpleLanguage.g:665:5: 'IF'
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
            // SimpleLanguage.g:666:5: ( 'THEN' )
            // SimpleLanguage.g:666:7: 'THEN'
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
            // SimpleLanguage.g:667:5: ( 'ELSE' )
            // SimpleLanguage.g:667:7: 'ELSE'
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
            // SimpleLanguage.g:668:9: ( 'FUNCTION' )
            // SimpleLanguage.g:668:11: 'FUNCTION'
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
            // SimpleLanguage.g:669:10: ( 'PROCEDURE' )
            // SimpleLanguage.g:669:12: 'PROCEDURE'
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
            // SimpleLanguage.g:670:6: ( 'PRINT' )
            // SimpleLanguage.g:670:8: 'PRINT'
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
            // SimpleLanguage.g:671:8: ( 'PRINTLN' )
            // SimpleLanguage.g:671:10: 'PRINTLN'
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
            // SimpleLanguage.g:672:6: ( 'ERROR' )
            // SimpleLanguage.g:672:8: 'ERROR'
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
            // SimpleLanguage.g:673:15: ( 'RANDOM_INTEGER' )
            // SimpleLanguage.g:673:17: 'RANDOM_INTEGER'
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
            // SimpleLanguage.g:674:7: ( 'RETURN' )
            // SimpleLanguage.g:674:9: 'RETURN'
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
            // SimpleLanguage.g:675:6: ( ':' )
            // SimpleLanguage.g:675:8: ':'
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
            // SimpleLanguage.g:676:6: ( ',' )
            // SimpleLanguage.g:676:8: ','
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
            // SimpleLanguage.g:677:3: ( '[' )
            // SimpleLanguage.g:677:5: '['
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
            // SimpleLanguage.g:678:3: ( ']' )
            // SimpleLanguage.g:678:5: ']'
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
            // SimpleLanguage.g:679:3: ( '(' )
            // SimpleLanguage.g:679:5: '('
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
            // SimpleLanguage.g:680:3: ( ')' )
            // SimpleLanguage.g:680:5: ')'
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
            // SimpleLanguage.g:681:6: ( '.' )
            // SimpleLanguage.g:681:8: '.'
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
            // SimpleLanguage.g:682:12: ( '->' )
            // SimpleLanguage.g:682:14: '->'
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
            // SimpleLanguage.g:683:7: ( '<-' )
            // SimpleLanguage.g:683:9: '<-'
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
            // SimpleLanguage.g:684:10: ( '\\'' )
            // SimpleLanguage.g:684:12: '\\''
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
            // SimpleLanguage.g:694:12: ( ( ' ' | '\\t' )+ )
            // SimpleLanguage.g:694:15: ( ' ' | '\\t' )+
            // SimpleLanguage.g:694:15: ( ' ' | '\\t' )+
            var cnt1=0;
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( (LA1_0=='\t'||LA1_0==' ') ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // SimpleLanguage.g:
                    if ( this.input.LA(1)=='\t'||this.input.LA(1)==' ' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



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
            // SimpleLanguage.g:698:2: ( ( '0' .. '9' | 'A' .. 'F' | 'a' .. 'f' ) )
            // SimpleLanguage.g:698:4: ( '0' .. '9' | 'A' .. 'F' | 'a' .. 'f' )
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
            // SimpleLanguage.g:702:2: ( '0' .. '9' )
            // SimpleLanguage.g:702:4: '0' .. '9'
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
            // SimpleLanguage.g:706:2: ( ( DIGIT )+ )
            // SimpleLanguage.g:706:4: ( DIGIT )+
            // SimpleLanguage.g:706:4: ( DIGIT )+
            var cnt2=0;
            loop2:
            do {
                var alt2=2;
                var LA2_0 = this.input.LA(1);

                if ( ((LA2_0>='0' && LA2_0<='9')) ) {
                    alt2=1;
                }


                switch (alt2) {
                case 1 :
                    // SimpleLanguage.g:706:4: DIGIT
                    this.mDIGIT(); 


                    break;

                default :
                    if ( cnt2 >= 1 ) {
                        break loop2;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(2, this.input);
                        throw eee;
                }
                cnt2++;
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
            // SimpleLanguage.g:710:2: ( ( DIGIT )* '.' ( DIGIT )* )
            // SimpleLanguage.g:710:4: ( DIGIT )* '.' ( DIGIT )*
            // SimpleLanguage.g:710:4: ( DIGIT )*
            loop3:
            do {
                var alt3=2;
                var LA3_0 = this.input.LA(1);

                if ( ((LA3_0>='0' && LA3_0<='9')) ) {
                    alt3=1;
                }


                switch (alt3) {
                case 1 :
                    // SimpleLanguage.g:710:4: DIGIT
                    this.mDIGIT(); 


                    break;

                default :
                    break loop3;
                }
            } while (true);

            this.match('.'); 
            // SimpleLanguage.g:710:13: ( DIGIT )*
            loop4:
            do {
                var alt4=2;
                var LA4_0 = this.input.LA(1);

                if ( ((LA4_0>='0' && LA4_0<='9')) ) {
                    alt4=1;
                }


                switch (alt4) {
                case 1 :
                    // SimpleLanguage.g:710:13: DIGIT
                    this.mDIGIT(); 


                    break;

                default :
                    break loop4;
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
            // SimpleLanguage.g:714:2: ( 'TRUE' | 'FALSE' | 'true' | 'false' )
            var alt5=4;
            switch ( this.input.LA(1) ) {
            case 'T':
                alt5=1;
                break;
            case 'F':
                alt5=2;
                break;
            case 't':
                alt5=3;
                break;
            case 'f':
                alt5=4;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 5, 0, this.input);

                throw nvae;
            }

            switch (alt5) {
                case 1 :
                    // SimpleLanguage.g:714:4: 'TRUE'
                    this.match("TRUE"); 



                    break;
                case 2 :
                    // SimpleLanguage.g:715:4: 'FALSE'
                    this.match("FALSE"); 



                    break;
                case 3 :
                    // SimpleLanguage.g:716:4: 'true'
                    this.match("true"); 



                    break;
                case 4 :
                    // SimpleLanguage.g:717:4: 'false'
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
            // SimpleLanguage.g:721:2: ( 'a' .. 'z' | 'A' .. 'Z' | '_' )
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
            // SimpleLanguage.g:724:2: ( LETTER ( LETTER | DIGIT )* )
            // SimpleLanguage.g:724:4: LETTER ( LETTER | DIGIT )*
            this.mLETTER(); 
            // SimpleLanguage.g:724:11: ( LETTER | DIGIT )*
            loop6:
            do {
                var alt6=2;
                var LA6_0 = this.input.LA(1);

                if ( ((LA6_0>='0' && LA6_0<='9')||(LA6_0>='A' && LA6_0<='Z')||LA6_0=='_'||(LA6_0>='a' && LA6_0<='z')) ) {
                    alt6=1;
                }


                switch (alt6) {
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
                    break loop6;
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
            // SimpleLanguage.g:728:5: ( ( ( '\\r' )? '\\n' )+ )
            // SimpleLanguage.g:728:7: ( ( '\\r' )? '\\n' )+
            // SimpleLanguage.g:728:7: ( ( '\\r' )? '\\n' )+
            var cnt8=0;
            loop8:
            do {
                var alt8=2;
                var LA8_0 = this.input.LA(1);

                if ( (LA8_0=='\n'||LA8_0=='\r') ) {
                    alt8=1;
                }


                switch (alt8) {
                case 1 :
                    // SimpleLanguage.g:728:8: ( '\\r' )? '\\n'
                    // SimpleLanguage.g:728:8: ( '\\r' )?
                    var alt7=2;
                    var LA7_0 = this.input.LA(1);

                    if ( (LA7_0=='\r') ) {
                        alt7=1;
                    }
                    switch (alt7) {
                        case 1 :
                            // SimpleLanguage.g:728:8: '\\r'
                            this.match('\r'); 


                            break;

                    }

                    this.match('\n'); 


                    break;

                default :
                    if ( cnt8 >= 1 ) {
                        break loop8;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(8, this.input);
                        throw eee;
                }
                cnt8++;
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
            // SimpleLanguage.g:732:5: ( '/*' ( . )* '*/' )
            // SimpleLanguage.g:732:7: '/*' ( . )* '*/'
            this.match("/*"); 

            // SimpleLanguage.g:732:12: ( . )*
            loop9:
            do {
                var alt9=2;
                var LA9_0 = this.input.LA(1);

                if ( (LA9_0=='*') ) {
                    var LA9_1 = this.input.LA(2);

                    if ( (LA9_1=='/') ) {
                        alt9=2;
                    }
                    else if ( ((LA9_1>='\u0000' && LA9_1<='.')||(LA9_1>='0' && LA9_1<='\uFFFF')) ) {
                        alt9=1;
                    }


                }
                else if ( ((LA9_0>='\u0000' && LA9_0<=')')||(LA9_0>='+' && LA9_0<='\uFFFF')) ) {
                    alt9=1;
                }


                switch (alt9) {
                case 1 :
                    // SimpleLanguage.g:732:12: .
                    this.matchAny(); 


                    break;

                default :
                    break loop9;
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
            // SimpleLanguage.g:736:5: ( '//' (~ ( '\\n' | '\\r' ) )* )
            // SimpleLanguage.g:736:7: '//' (~ ( '\\n' | '\\r' ) )*
            this.match("//"); 

            // SimpleLanguage.g:736:12: (~ ( '\\n' | '\\r' ) )*
            loop10:
            do {
                var alt10=2;
                var LA10_0 = this.input.LA(1);

                if ( ((LA10_0>='\u0000' && LA10_0<='\t')||(LA10_0>='\u000B' && LA10_0<='\f')||(LA10_0>='\u000E' && LA10_0<='\uFFFF')) ) {
                    alt10=1;
                }


                switch (alt10) {
                case 1 :
                    // SimpleLanguage.g:736:12: ~ ( '\\n' | '\\r' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop10;
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
            // SimpleLanguage.g:740:2: ( '\"' ( ( . )* ) '\"' )
            // SimpleLanguage.g:740:4: '\"' ( ( . )* ) '\"'
            this.match('\"'); 
            // SimpleLanguage.g:740:8: ( ( . )* )
            // SimpleLanguage.g:740:9: ( . )*
            // SimpleLanguage.g:740:9: ( . )*
            loop11:
            do {
                var alt11=2;
                var LA11_0 = this.input.LA(1);

                if ( (LA11_0=='\"') ) {
                    alt11=2;
                }
                else if ( ((LA11_0>='\u0000' && LA11_0<='!')||(LA11_0>='#' && LA11_0<='\uFFFF')) ) {
                    alt11=1;
                }


                switch (alt11) {
                case 1 :
                    // SimpleLanguage.g:740:9: .
                    this.matchAny(); 


                    break;

                default :
                    break loop11;
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
            // SimpleLanguage.g:744:2: ( '\\'' ( . ) '\\'' )
            // SimpleLanguage.g:744:4: '\\'' ( . ) '\\''
            this.match('\''); 
            // SimpleLanguage.g:744:9: ( . )
            // SimpleLanguage.g:744:10: .
            this.matchAny(); 



            this.match('\''); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CHARACTER_VALUE",

    mTokens: function() {
        // SimpleLanguage.g:1:8: ( END_IF | END_WHILE | END_FOR | END_DO_WHILE | END | PLUS | MINUS | MULT | EXP | DIV | MODULO | EQ | NEQ | NOT | LTE | LT | GTE | GT | AND | OR | REPEAT | UNTIL | FOR | FROM | TO | STEP | READ | ADDRESS | CONTENT | ALLOCATE | FREE | NULL | BEGIN | VAR | WHILE | DO | STRUCT | BOOLEAN | INTEGER | FLOAT | CHARACTER | POINTER | IF | THEN | ELSE | FUNCTION | PROCEDURE | PRINT | PRINTLN | ERROR | RANDOM_INTEGER | RETURN | COLON | COMMA | LB | RB | LP | RP | POINT | DEREFERENCE | AFFECT | APOSTROPH | WHITE_SPACE | INTEGER_VALUE | FLOAT_VALUE | BOOLEAN_VALUE | IDENTIFIER | NEWLINE | COMMENT | LINE_COMMENT | STRING | CHARACTER_VALUE )
        var alt12=72;
        alt12 = this.dfa12.predict(this.input);
        switch (alt12) {
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
                // SimpleLanguage.g:1:35: END_DO_WHILE
                this.mEND_DO_WHILE(); 


                break;
            case 5 :
                // SimpleLanguage.g:1:48: END
                this.mEND(); 


                break;
            case 6 :
                // SimpleLanguage.g:1:52: PLUS
                this.mPLUS(); 


                break;
            case 7 :
                // SimpleLanguage.g:1:57: MINUS
                this.mMINUS(); 


                break;
            case 8 :
                // SimpleLanguage.g:1:63: MULT
                this.mMULT(); 


                break;
            case 9 :
                // SimpleLanguage.g:1:68: EXP
                this.mEXP(); 


                break;
            case 10 :
                // SimpleLanguage.g:1:72: DIV
                this.mDIV(); 


                break;
            case 11 :
                // SimpleLanguage.g:1:76: MODULO
                this.mMODULO(); 


                break;
            case 12 :
                // SimpleLanguage.g:1:83: EQ
                this.mEQ(); 


                break;
            case 13 :
                // SimpleLanguage.g:1:86: NEQ
                this.mNEQ(); 


                break;
            case 14 :
                // SimpleLanguage.g:1:90: NOT
                this.mNOT(); 


                break;
            case 15 :
                // SimpleLanguage.g:1:94: LTE
                this.mLTE(); 


                break;
            case 16 :
                // SimpleLanguage.g:1:98: LT
                this.mLT(); 


                break;
            case 17 :
                // SimpleLanguage.g:1:101: GTE
                this.mGTE(); 


                break;
            case 18 :
                // SimpleLanguage.g:1:105: GT
                this.mGT(); 


                break;
            case 19 :
                // SimpleLanguage.g:1:108: AND
                this.mAND(); 


                break;
            case 20 :
                // SimpleLanguage.g:1:112: OR
                this.mOR(); 


                break;
            case 21 :
                // SimpleLanguage.g:1:115: REPEAT
                this.mREPEAT(); 


                break;
            case 22 :
                // SimpleLanguage.g:1:122: UNTIL
                this.mUNTIL(); 


                break;
            case 23 :
                // SimpleLanguage.g:1:128: FOR
                this.mFOR(); 


                break;
            case 24 :
                // SimpleLanguage.g:1:132: FROM
                this.mFROM(); 


                break;
            case 25 :
                // SimpleLanguage.g:1:137: TO
                this.mTO(); 


                break;
            case 26 :
                // SimpleLanguage.g:1:140: STEP
                this.mSTEP(); 


                break;
            case 27 :
                // SimpleLanguage.g:1:145: READ
                this.mREAD(); 


                break;
            case 28 :
                // SimpleLanguage.g:1:150: ADDRESS
                this.mADDRESS(); 


                break;
            case 29 :
                // SimpleLanguage.g:1:158: CONTENT
                this.mCONTENT(); 


                break;
            case 30 :
                // SimpleLanguage.g:1:166: ALLOCATE
                this.mALLOCATE(); 


                break;
            case 31 :
                // SimpleLanguage.g:1:175: FREE
                this.mFREE(); 


                break;
            case 32 :
                // SimpleLanguage.g:1:180: NULL
                this.mNULL(); 


                break;
            case 33 :
                // SimpleLanguage.g:1:185: BEGIN
                this.mBEGIN(); 


                break;
            case 34 :
                // SimpleLanguage.g:1:191: VAR
                this.mVAR(); 


                break;
            case 35 :
                // SimpleLanguage.g:1:195: WHILE
                this.mWHILE(); 


                break;
            case 36 :
                // SimpleLanguage.g:1:201: DO
                this.mDO(); 


                break;
            case 37 :
                // SimpleLanguage.g:1:204: STRUCT
                this.mSTRUCT(); 


                break;
            case 38 :
                // SimpleLanguage.g:1:211: BOOLEAN
                this.mBOOLEAN(); 


                break;
            case 39 :
                // SimpleLanguage.g:1:219: INTEGER
                this.mINTEGER(); 


                break;
            case 40 :
                // SimpleLanguage.g:1:227: FLOAT
                this.mFLOAT(); 


                break;
            case 41 :
                // SimpleLanguage.g:1:233: CHARACTER
                this.mCHARACTER(); 


                break;
            case 42 :
                // SimpleLanguage.g:1:243: POINTER
                this.mPOINTER(); 


                break;
            case 43 :
                // SimpleLanguage.g:1:251: IF
                this.mIF(); 


                break;
            case 44 :
                // SimpleLanguage.g:1:254: THEN
                this.mTHEN(); 


                break;
            case 45 :
                // SimpleLanguage.g:1:259: ELSE
                this.mELSE(); 


                break;
            case 46 :
                // SimpleLanguage.g:1:264: FUNCTION
                this.mFUNCTION(); 


                break;
            case 47 :
                // SimpleLanguage.g:1:273: PROCEDURE
                this.mPROCEDURE(); 


                break;
            case 48 :
                // SimpleLanguage.g:1:283: PRINT
                this.mPRINT(); 


                break;
            case 49 :
                // SimpleLanguage.g:1:289: PRINTLN
                this.mPRINTLN(); 


                break;
            case 50 :
                // SimpleLanguage.g:1:297: ERROR
                this.mERROR(); 


                break;
            case 51 :
                // SimpleLanguage.g:1:303: RANDOM_INTEGER
                this.mRANDOM_INTEGER(); 


                break;
            case 52 :
                // SimpleLanguage.g:1:318: RETURN
                this.mRETURN(); 


                break;
            case 53 :
                // SimpleLanguage.g:1:325: COLON
                this.mCOLON(); 


                break;
            case 54 :
                // SimpleLanguage.g:1:331: COMMA
                this.mCOMMA(); 


                break;
            case 55 :
                // SimpleLanguage.g:1:337: LB
                this.mLB(); 


                break;
            case 56 :
                // SimpleLanguage.g:1:340: RB
                this.mRB(); 


                break;
            case 57 :
                // SimpleLanguage.g:1:343: LP
                this.mLP(); 


                break;
            case 58 :
                // SimpleLanguage.g:1:346: RP
                this.mRP(); 


                break;
            case 59 :
                // SimpleLanguage.g:1:349: POINT
                this.mPOINT(); 


                break;
            case 60 :
                // SimpleLanguage.g:1:355: DEREFERENCE
                this.mDEREFERENCE(); 


                break;
            case 61 :
                // SimpleLanguage.g:1:367: AFFECT
                this.mAFFECT(); 


                break;
            case 62 :
                // SimpleLanguage.g:1:374: APOSTROPH
                this.mAPOSTROPH(); 


                break;
            case 63 :
                // SimpleLanguage.g:1:384: WHITE_SPACE
                this.mWHITE_SPACE(); 


                break;
            case 64 :
                // SimpleLanguage.g:1:396: INTEGER_VALUE
                this.mINTEGER_VALUE(); 


                break;
            case 65 :
                // SimpleLanguage.g:1:410: FLOAT_VALUE
                this.mFLOAT_VALUE(); 


                break;
            case 66 :
                // SimpleLanguage.g:1:422: BOOLEAN_VALUE
                this.mBOOLEAN_VALUE(); 


                break;
            case 67 :
                // SimpleLanguage.g:1:436: IDENTIFIER
                this.mIDENTIFIER(); 


                break;
            case 68 :
                // SimpleLanguage.g:1:447: NEWLINE
                this.mNEWLINE(); 


                break;
            case 69 :
                // SimpleLanguage.g:1:455: COMMENT
                this.mCOMMENT(); 


                break;
            case 70 :
                // SimpleLanguage.g:1:463: LINE_COMMENT
                this.mLINE_COMMENT(); 


                break;
            case 71 :
                // SimpleLanguage.g:1:476: STRING
                this.mSTRING(); 


                break;
            case 72 :
                // SimpleLanguage.g:1:483: CHARACTER_VALUE
                this.mCHARACTER_VALUE(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(SimpleLanguageLexer, {
    DFA12_eotS:
        "\u0001\uffff\u0001\u0027\u0001\uffff\u0001\u002e\u0002\uffff\u0001"+
    "\u0031\u0002\uffff\u0001\u0033\u0001\u0036\u0001\u0038\u000f\u0027\u0006"+
    "\uffff\u0001\u0055\u0001\u0057\u0001\uffff\u0001\u0059\u0002\u0027\u0003"+
    "\uffff\u0003\u0027\u000c\uffff\u0003\u0027\u0001\u0062\u0008\u0027\u0001"+
    "\u006e\u000a\u0027\u0001\u007a\u0001\u0027\u0001\u007c\u0002\u0027\u0005"+
    "\uffff\u0002\u0027\u0001\u0083\u0002\u0027\u0001\u0086\u0002\u0027\u0001"+
    "\uffff\u0005\u0027\u0001\u008e\u0005\u0027\u0001\uffff\u0009\u0027\u0001"+
    "\u009d\u0001\u0027\u0001\uffff\u0001\u0027\u0001\uffff\u0006\u0027\u0001"+
    "\uffff\u0001\u00a9\u0001\u0027\u0001\uffff\u0003\u0027\u0001\u00ae\u0003"+
    "\u0027\u0001\uffff\u0001\u00b2\u0001\u00b3\u0003\u0027\u0001\u00b7\u0001"+
    "\u00b8\u0001\u00b9\u0003\u0027\u0001\u00bd\u0002\u0027\u0001\uffff\u0005"+
    "\u0027\u0001\u00b8\u0005\u0027\u0001\uffff\u0001\u00ca\u0001\u0027\u0001"+
    "\u00cc\u0001\u0027\u0001\uffff\u0002\u0027\u0001\u00d0\u0002\uffff\u0001"+
    "\u00d1\u0001\u0027\u0001\u00b8\u0003\uffff\u0003\u0027\u0001\uffff\u0001"+
    "\u00d6\u0001\u0027\u0001\u00d8\u0003\u0027\u0001\u00dd\u0001\u00b8\u0001"+
    "\u00de\u0003\u0027\u0001\uffff\u0001\u0027\u0001\uffff\u0001\u00e3\u0001"+
    "\u00e4\u0001\u0027\u0002\uffff\u0001\u0027\u0001\u00e7\u0002\u0027\u0001"+
    "\uffff\u0001\u0027\u0001\uffff\u0004\u0027\u0002\uffff\u0001\u0027\u0001"+
    "\u00f0\u0001\u0027\u0001\u00f2\u0002\uffff\u0002\u0027\u0001\uffff\u0001"+
    "\u00f5\u0001\u0027\u0001\u00f7\u0001\u00f8\u0001\u00f9\u0001\u0027\u0001"+
    "\u00fb\u0001\u0027\u0001\uffff\u0001\u0027\u0001\uffff\u0001\u0027\u0001"+
    "\u00ff\u0001\uffff\u0001\u0027\u0003\uffff\u0001\u0027\u0001\uffff\u0001"+
    "\u0102\u0002\u0027\u0001\uffff\u0001\u0105\u0001\u0106\u0001\uffff\u0002"+
    "\u0027\u0002\uffff\u0002\u0027\u0001\u010b\u0001\u0027\u0001\uffff\u0001"+
    "\u0027\u0001\u010e\u0001\uffff",
    DFA12_eofS:
        "\u010f\uffff",
    DFA12_minS:
        "\u0001\u0009\u0001\u004c\u0001\uffff\u0001\u003e\u0002\uffff\u0001"+
    "\u002a\u0002\uffff\u0001\u003d\u0001\u002d\u0001\u003d\u0001\u0044\u0001"+
    "\u0052\u0001\u0041\u0001\u004e\u0001\u0041\u0001\u0048\u0001\u0054\u0001"+
    "\u0048\u0001\u0055\u0001\u0045\u0001\u0041\u0001\u0048\u0001\u004f\u0001"+
    "\u0046\u0001\u004f\u0006\uffff\u0001\u0030\u0001\u0000\u0001\uffff\u0001"+
    "\u002e\u0001\u0072\u0001\u0061\u0003\uffff\u0001\u0044\u0001\u0053\u0001"+
    "\u0052\u000c\uffff\u0002\u0044\u0001\u004c\u0001\u0030\u0001\u0041\u0001"+
    "\u004e\u0001\u0054\u0001\u0052\u0001\u0045\u0001\u004f\u0001\u004e\u0001"+
    "\u004c\u0001\u0030\u0001\u0045\u0001\u0055\u0001\u0045\u0001\u004e\u0001"+
    "\u0041\u0001\u004c\u0001\u0047\u0001\u004f\u0001\u0052\u0001\u0049\u0001"+
    "\u0030\u0001\u0054\u0001\u0030\u0002\u0049\u0005\uffff\u0001\u0075\u0001"+
    "\u006c\u0001\u0030\u0001\u0045\u0001\u004f\u0001\u0030\u0001\u0052\u0001"+
    "\u004f\u0001\uffff\u0001\u0045\u0001\u0044\u0001\u0055\u0001\u0044\u0001"+
    "\u0049\u0001\u0030\u0001\u004d\u0001\u0045\u0001\u0041\u0001\u0043\u0001"+
    "\u0053\u0001\uffff\u0001\u004e\u0001\u0045\u0001\u0050\u0001\u0055\u0001"+
    "\u0054\u0001\u0052\u0001\u004c\u0001\u0049\u0001\u004c\u0001\u0030\u0001"+
    "\u004c\u0001\uffff\u0001\u0045\u0001\uffff\u0001\u004e\u0001\u0043\u0001"+
    "\u004e\u0001\u0065\u0001\u0073\u0001\u0044\u0001\uffff\u0001\u0030\u0001"+
    "\u0052\u0001\uffff\u0001\u0045\u0001\u0043\u0001\u0041\u0001\u0030\u0001"+
    "\u0052\u0001\u004f\u0001\u004c\u0001\uffff\u0002\u0030\u0002\u0054\u0001"+
    "\u0045\u0003\u0030\u0001\u0043\u0001\u0045\u0001\u0041\u0001\u0030\u0001"+
    "\u004e\u0001\u0045\u0001\uffff\u0001\u0045\u0001\u0047\u0001\u0054\u0001"+
    "\u0045\u0001\u0054\u0001\u0030\u0001\u0065\u0001\u0046\u0001\u0048\u0002"+
    "\u004f\u0001\uffff\u0001\u0030\u0001\u0053\u0001\u0030\u0001\u0054\u0001"+
    "\uffff\u0001\u004e\u0001\u004d\u0001\u0030\u0002\uffff\u0001\u0030\u0001"+
    "\u0049\u0001\u0030\u0003\uffff\u0001\u0054\u0001\u004e\u0001\u0043\u0001"+
    "\uffff\u0001\u0030\u0001\u0041\u0001\u0030\u0002\u0045\u0001\u0044\u0003"+
    "\u0030\u0001\u0049\u0001\u0052\u0001\u005f\u0001\uffff\u0001\u0053\u0001"+
    "\uffff\u0002\u0030\u0001\u005f\u0002\uffff\u0001\u004f\u0001\u0030\u0002"+
    "\u0054\u0001\uffff\u0001\u004e\u0001\uffff\u0002\u0052\u0001\u0055\u0001"+
    "\u004e\u0002\uffff\u0001\u004c\u0001\u0030\u0001\u0057\u0001\u0030\u0002"+
    "\uffff\u0001\u0049\u0001\u004e\u0001\uffff\u0001\u0030\u0001\u0045\u0003"+
    "\u0030\u0001\u0052\u0001\u0030\u0001\u0045\u0001\uffff\u0001\u0048\u0001"+
    "\uffff\u0001\u004e\u0001\u0030\u0001\uffff\u0001\u0052\u0003\uffff\u0001"+
    "\u0045\u0001\uffff\u0001\u0030\u0001\u0049\u0001\u0054\u0001\uffff\u0002"+
    "\u0030\u0001\uffff\u0001\u004c\u0001\u0045\u0002\uffff\u0001\u0045\u0001"+
    "\u0047\u0001\u0030\u0001\u0045\u0001\uffff\u0001\u0052\u0001\u0030\u0001"+
    "\uffff",
    DFA12_maxS:
        "\u0001\u007a\u0001\u0052\u0001\uffff\u0001\u003e\u0002\uffff\u0001"+
    "\u002f\u0002\uffff\u0003\u003d\u0001\u004e\u0001\u0052\u0001\u0045\u0001"+
    "\u004e\u0001\u0055\u0001\u0052\u0001\u0054\u0001\u004f\u0001\u0055\u0001"+
    "\u004f\u0001\u0041\u0001\u0048\u0001\u004f\u0001\u004e\u0001\u0052\u0006"+
    "\uffff\u0001\u0039\u0001\uffff\u0001\uffff\u0001\u0039\u0001\u0072\u0001"+
    "\u0061\u0003\uffff\u0001\u0044\u0001\u0053\u0001\u0052\u000c\uffff\u0002"+
    "\u0044\u0001\u004c\u0001\u007a\u0001\u0054\u0001\u004e\u0001\u0054\u0001"+
    "\u0052\u0002\u004f\u0001\u004e\u0001\u004c\u0001\u007a\u0001\u0045\u0001"+
    "\u0055\u0001\u0052\u0001\u004e\u0001\u0041\u0001\u004c\u0001\u0047\u0001"+
    "\u004f\u0001\u0052\u0001\u0049\u0001\u007a\u0001\u0054\u0001\u007a\u0001"+
    "\u0049\u0001\u004f\u0005\uffff\u0001\u0075\u0001\u006c\u0001\u007a\u0001"+
    "\u0045\u0001\u004f\u0001\u007a\u0001\u0052\u0001\u004f\u0001\uffff\u0001"+
    "\u0045\u0001\u0044\u0001\u0055\u0001\u0044\u0001\u0049\u0001\u007a\u0001"+
    "\u004d\u0001\u0045\u0001\u0041\u0001\u0043\u0001\u0053\u0001\uffff\u0001"+
    "\u004e\u0001\u0045\u0001\u0050\u0001\u0055\u0001\u0054\u0001\u0052\u0001"+
    "\u004c\u0001\u0049\u0001\u004c\u0001\u007a\u0001\u004c\u0001\uffff\u0001"+
    "\u0045\u0001\uffff\u0001\u004e\u0001\u0043\u0001\u004e\u0001\u0065\u0001"+
    "\u0073\u0001\u0057\u0001\uffff\u0001\u007a\u0001\u0052\u0001\uffff\u0001"+
    "\u0045\u0001\u0043\u0001\u0041\u0001\u007a\u0001\u0052\u0001\u004f\u0001"+
    "\u004c\u0001\uffff\u0002\u007a\u0002\u0054\u0001\u0045\u0003\u007a\u0001"+
    "\u0043\u0001\u0045\u0001\u0041\u0001\u007a\u0001\u004e\u0001\u0045\u0001"+
    "\uffff\u0001\u0045\u0001\u0047\u0001\u0054\u0001\u0045\u0001\u0054\u0001"+
    "\u007a\u0001\u0065\u0001\u0046\u0001\u0048\u0002\u004f\u0001\uffff\u0001"+
    "\u007a\u0001\u0053\u0001\u007a\u0001\u0054\u0001\uffff\u0001\u004e\u0001"+
    "\u004d\u0001\u007a\u0002\uffff\u0001\u007a\u0001\u0049\u0001\u007a\u0003"+
    "\uffff\u0001\u0054\u0001\u004e\u0001\u0043\u0001\uffff\u0001\u007a\u0001"+
    "\u0041\u0001\u007a\u0002\u0045\u0001\u0044\u0003\u007a\u0001\u0049\u0001"+
    "\u0052\u0001\u005f\u0001\uffff\u0001\u0053\u0001\uffff\u0002\u007a\u0001"+
    "\u005f\u0002\uffff\u0001\u004f\u0001\u007a\u0002\u0054\u0001\uffff\u0001"+
    "\u004e\u0001\uffff\u0002\u0052\u0001\u0055\u0001\u004e\u0002\uffff\u0001"+
    "\u004c\u0001\u007a\u0001\u0057\u0001\u007a\u0002\uffff\u0001\u0049\u0001"+
    "\u004e\u0001\uffff\u0001\u007a\u0001\u0045\u0003\u007a\u0001\u0052\u0001"+
    "\u007a\u0001\u0045\u0001\uffff\u0001\u0048\u0001\uffff\u0001\u004e\u0001"+
    "\u007a\u0001\uffff\u0001\u0052\u0003\uffff\u0001\u0045\u0001\uffff\u0001"+
    "\u007a\u0001\u0049\u0001\u0054\u0001\uffff\u0002\u007a\u0001\uffff\u0001"+
    "\u004c\u0001\u0045\u0002\uffff\u0001\u0045\u0001\u0047\u0001\u007a\u0001"+
    "\u0045\u0001\uffff\u0001\u0052\u0001\u007a\u0001\uffff",
    DFA12_acceptS:
        "\u0002\uffff\u0001\u0006\u0001\uffff\u0001\u0008\u0001\u0009\u0001"+
    "\uffff\u0001\u000b\u0001\u000c\u0012\uffff\u0001\u0035\u0001\u0036\u0001"+
    "\u0037\u0001\u0038\u0001\u0039\u0001\u003a\u0002\uffff\u0001\u003f\u0003"+
    "\uffff\u0001\u0043\u0001\u0044\u0001\u0047\u0003\uffff\u0001\u003c\u0001"+
    "\u0007\u0001\u0045\u0001\u0046\u0001\u000a\u0001\u000d\u0001\u000e\u0001"+
    "\u000f\u0001\u003d\u0001\u0010\u0001\u0011\u0001\u0012\u001c\uffff\u0001"+
    "\u003b\u0001\u0041\u0001\u003e\u0001\u0048\u0001\u0040\u0008\uffff\u0001"+
    "\u0014\u000b\uffff\u0001\u0019\u000b\uffff\u0001\u0024\u0001\uffff\u0001"+
    "\u002b\u0006\uffff\u0001\u0005\u0002\uffff\u0001\u0013\u0007\uffff\u0001"+
    "\u0017\u000e\uffff\u0001\u0022\u000b\uffff\u0001\u002d\u0004\uffff\u0001"+
    "\u001b\u0003\uffff\u0001\u0018\u0001\u001f\u0003\uffff\u0001\u002c\u0001"+
    "\u0042\u0001\u001a\u0003\uffff\u0001\u0020\u000c\uffff\u0001\u0032\u0001"+
    "\uffff\u0001\u001e\u0003\uffff\u0001\u0016\u0001\u0028\u0004\uffff\u0001"+
    "\u0021\u0001\uffff\u0001\u0023\u0004\uffff\u0001\u0030\u0001\u0001\u0004"+
    "\uffff\u0001\u0015\u0001\u0034\u0002\uffff\u0001\u0025\u0008\uffff\u0001"+
    "\u0003\u0001\uffff\u0001\u001c\u0002\uffff\u0001\u001d\u0001\uffff\u0001"+
    "\u0026\u0001\u0027\u0001\u002a\u0001\uffff\u0001\u0031\u0003\uffff\u0001"+
    "\u002e\u0002\uffff\u0001\u0002\u0002\uffff\u0001\u0029\u0001\u002f\u0004"+
    "\uffff\u0001\u0004\u0002\uffff\u0001\u0033",
    DFA12_specialS:
        "\u0022\uffff\u0001\u0000\u00ec\uffff}>",
    DFA12_transitionS: [
            "\u0001\u0023\u0001\u0028\u0002\uffff\u0001\u0028\u0012\uffff"+
            "\u0001\u0023\u0001\u0009\u0001\u0029\u0002\uffff\u0001\u0007"+
            "\u0001\uffff\u0001\u0022\u0001\u001f\u0001\u0020\u0001\u0004"+
            "\u0001\u0002\u0001\u001c\u0001\u0003\u0001\u0021\u0001\u0006"+
            "\u000a\u0024\u0001\u001b\u0001\uffff\u0001\u000a\u0001\u0008"+
            "\u0001\u000b\u0002\uffff\u0001\u000c\u0001\u0015\u0001\u0013"+
            "\u0001\u0018\u0001\u0001\u0001\u0010\u0002\u0027\u0001\u0019"+
            "\u0004\u0027\u0001\u0014\u0001\u000d\u0001\u001a\u0001\u0027"+
            "\u0001\u000e\u0001\u0012\u0001\u0011\u0001\u000f\u0001\u0016"+
            "\u0001\u0017\u0003\u0027\u0001\u001d\u0001\uffff\u0001\u001e"+
            "\u0001\u0005\u0001\u0027\u0001\uffff\u0005\u0027\u0001\u0026"+
            "\u000d\u0027\u0001\u0025\u0006\u0027",
            "\u0001\u002b\u0001\uffff\u0001\u002a\u0003\uffff\u0001\u002c",
            "",
            "\u0001\u002d",
            "",
            "",
            "\u0001\u002f\u0004\uffff\u0001\u0030",
            "",
            "",
            "\u0001\u0032",
            "\u0001\u0035\u000f\uffff\u0001\u0034",
            "\u0001\u0037",
            "\u0001\u003a\u0007\uffff\u0001\u003b\u0001\uffff\u0001\u0039",
            "\u0001\u003c",
            "\u0001\u003e\u0003\uffff\u0001\u003d",
            "\u0001\u003f",
            "\u0001\u0044\u000a\uffff\u0001\u0042\u0002\uffff\u0001\u0040"+
            "\u0002\uffff\u0001\u0041\u0002\uffff\u0001\u0043",
            "\u0001\u0046\u0006\uffff\u0001\u0045\u0002\uffff\u0001\u0047",
            "\u0001\u0048",
            "\u0001\u004a\u0006\uffff\u0001\u0049",
            "\u0001\u004b",
            "\u0001\u004c\u0009\uffff\u0001\u004d",
            "\u0001\u004e",
            "\u0001\u004f",
            "\u0001\u0050",
            "\u0001\u0052\u0007\uffff\u0001\u0051",
            "\u0001\u0053\u0002\uffff\u0001\u0054",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u000a\u0056",
            "\u0000\u0058",
            "",
            "\u0001\u0056\u0001\uffff\u000a\u0024",
            "\u0001\u005a",
            "\u0001\u005b",
            "",
            "",
            "",
            "\u0001\u005c",
            "\u0001\u005d",
            "\u0001\u005e",
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
            "\u0001\u005f",
            "\u0001\u0060",
            "\u0001\u0061",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u0064\u000e\uffff\u0001\u0063\u0003\uffff\u0001\u0065",
            "\u0001\u0066",
            "\u0001\u0067",
            "\u0001\u0068",
            "\u0001\u006a\u0009\uffff\u0001\u0069",
            "\u0001\u006b",
            "\u0001\u006c",
            "\u0001\u006d",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u006f",
            "\u0001\u0070",
            "\u0001\u0071\u000c\uffff\u0001\u0072",
            "\u0001\u0073",
            "\u0001\u0074",
            "\u0001\u0075",
            "\u0001\u0076",
            "\u0001\u0077",
            "\u0001\u0078",
            "\u0001\u0079",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u007b",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u007d",
            "\u0001\u007f\u0005\uffff\u0001\u007e",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0080",
            "\u0001\u0081",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0082"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u0084",
            "\u0001\u0085",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u0087",
            "\u0001\u0088",
            "",
            "\u0001\u0089",
            "\u0001\u008a",
            "\u0001\u008b",
            "\u0001\u008c",
            "\u0001\u008d",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u008f",
            "\u0001\u0090",
            "\u0001\u0091",
            "\u0001\u0092",
            "\u0001\u0093",
            "",
            "\u0001\u0094",
            "\u0001\u0095",
            "\u0001\u0096",
            "\u0001\u0097",
            "\u0001\u0098",
            "\u0001\u0099",
            "\u0001\u009a",
            "\u0001\u009b",
            "\u0001\u009c",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u009e",
            "",
            "\u0001\u009f",
            "",
            "\u0001\u00a0",
            "\u0001\u00a1",
            "\u0001\u00a2",
            "\u0001\u00a3",
            "\u0001\u00a4",
            "\u0001\u00a8\u0001\uffff\u0001\u00a7\u0002\uffff\u0001\u00a5"+
            "\u000d\uffff\u0001\u00a6",
            "",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u00aa",
            "",
            "\u0001\u00ab",
            "\u0001\u00ac",
            "\u0001\u00ad",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u00af",
            "\u0001\u00b0",
            "\u0001\u00b1",
            "",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u00b4",
            "\u0001\u00b5",
            "\u0001\u00b6",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u00ba",
            "\u0001\u00bb",
            "\u0001\u00bc",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u00be",
            "\u0001\u00bf",
            "",
            "\u0001\u00c0",
            "\u0001\u00c1",
            "\u0001\u00c2",
            "\u0001\u00c3",
            "\u0001\u00c4",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u00c5",
            "\u0001\u00c6",
            "\u0001\u00c7",
            "\u0001\u00c8",
            "\u0001\u00c9",
            "",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u00cb",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u00cd",
            "",
            "\u0001\u00ce",
            "\u0001\u00cf",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "",
            "",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u00d2",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "",
            "",
            "",
            "\u0001\u00d3",
            "\u0001\u00d4",
            "\u0001\u00d5",
            "",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u00d7",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u00d9",
            "\u0001\u00da",
            "\u0001\u00db",
            "\u000a\u0027\u0007\uffff\u000b\u0027\u0001\u00dc\u000e\u0027"+
            "\u0004\uffff\u0001\u0027\u0001\uffff\u001a\u0027",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u00df",
            "\u0001\u00e0",
            "\u0001\u00e1",
            "",
            "\u0001\u00e2",
            "",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u00e5",
            "",
            "",
            "\u0001\u00e6",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u00e8",
            "\u0001\u00e9",
            "",
            "\u0001\u00ea",
            "",
            "\u0001\u00eb",
            "\u0001\u00ec",
            "\u0001\u00ed",
            "\u0001\u00ee",
            "",
            "",
            "\u0001\u00ef",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u00f1",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "",
            "",
            "\u0001\u00f3",
            "\u0001\u00f4",
            "",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u00f6",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u00fa",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u00fc",
            "",
            "\u0001\u00fd",
            "",
            "\u0001\u00fe",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "",
            "\u0001\u0100",
            "",
            "",
            "",
            "\u0001\u0101",
            "",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u0103",
            "\u0001\u0104",
            "",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "",
            "\u0001\u0107",
            "\u0001\u0108",
            "",
            "",
            "\u0001\u0109",
            "\u0001\u010a",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            "\u0001\u010c",
            "",
            "\u0001\u010d",
            "\u000a\u0027\u0007\uffff\u001a\u0027\u0004\uffff\u0001\u0027"+
            "\u0001\uffff\u001a\u0027",
            ""
    ]
});

org.antlr.lang.augmentObject(SimpleLanguageLexer, {
    DFA12_eot:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleLanguageLexer.DFA12_eotS),
    DFA12_eof:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleLanguageLexer.DFA12_eofS),
    DFA12_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleLanguageLexer.DFA12_minS),
    DFA12_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleLanguageLexer.DFA12_maxS),
    DFA12_accept:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleLanguageLexer.DFA12_acceptS),
    DFA12_special:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleLanguageLexer.DFA12_specialS),
    DFA12_transition: (function() {
        var a = [],
            i,
            numStates = SimpleLanguageLexer.DFA12_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(SimpleLanguageLexer.DFA12_transitionS[i]));
        }
        return a;
    })()
});

SimpleLanguageLexer.DFA12 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 12;
    this.eot = SimpleLanguageLexer.DFA12_eot;
    this.eof = SimpleLanguageLexer.DFA12_eof;
    this.min = SimpleLanguageLexer.DFA12_min;
    this.max = SimpleLanguageLexer.DFA12_max;
    this.accept = SimpleLanguageLexer.DFA12_accept;
    this.special = SimpleLanguageLexer.DFA12_special;
    this.transition = SimpleLanguageLexer.DFA12_transition;
};

org.antlr.lang.extend(SimpleLanguageLexer.DFA12, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( END_IF | END_WHILE | END_FOR | END_DO_WHILE | END | PLUS | MINUS | MULT | EXP | DIV | MODULO | EQ | NEQ | NOT | LTE | LT | GTE | GT | AND | OR | REPEAT | UNTIL | FOR | FROM | TO | STEP | READ | ADDRESS | CONTENT | ALLOCATE | FREE | NULL | BEGIN | VAR | WHILE | DO | STRUCT | BOOLEAN | INTEGER | FLOAT | CHARACTER | POINTER | IF | THEN | ELSE | FUNCTION | PROCEDURE | PRINT | PRINTLN | ERROR | RANDOM_INTEGER | RETURN | COLON | COMMA | LB | RB | LP | RP | POINT | DEREFERENCE | AFFECT | APOSTROPH | WHITE_SPACE | INTEGER_VALUE | FLOAT_VALUE | BOOLEAN_VALUE | IDENTIFIER | NEWLINE | COMMENT | LINE_COMMENT | STRING | CHARACTER_VALUE );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA12_34 = input.LA(1);

                            s = -1;
                            if ( ((LA12_34>='\u0000' && LA12_34<='\uFFFF')) ) {s = 88;}

                            else s = 87;

                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 12, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
 
})();

    return SimpleLanguageLexer;
});
