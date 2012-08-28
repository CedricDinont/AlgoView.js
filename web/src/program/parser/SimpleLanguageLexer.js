// $ANTLR 3.3 Nov 30, 2010 12:50:56 SimpleLanguage.g 2012-08-26 15:04:03

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
    PRINT_EXPRESSION: 8,
    PRINT_STRING: 9,
    VARIABLES_DECLARATION_LIST: 10,
    IDENTIFIER_LIST: 11,
    VARIABLES_DECLARATION: 12,
    FUNCTION_PARAMETERS_LIST: 13,
    FUNCTION_PARAMETER_DECLARATION: 14,
    STRUCT_DECLARATION: 15,
    FUNCTION_LIST: 16,
    FUNCTION_CALL: 17,
    STRUCT_DECLARATIONS: 18,
    VARIABLE_TYPE: 19,
    ASSIGNABLE_ELEMENT: 20,
    ASSIGN: 21,
    NUMBER: 22,
    NEWLINE: 23,
    STRUCT: 24,
    IDENTIFIER: 25,
    VAR: 26,
    COLON: 27,
    COMMA: 28,
    INTEGER: 29,
    POINTER: 30,
    BOOLEAN: 31,
    CHARACTER: 32,
    FLOAT: 33,
    LB: 34,
    RB: 35,
    FUNCTION: 36,
    LP: 37,
    RP: 38,
    PROCEDURE: 39,
    INTEGER_VALUE: 40,
    FLOAT_VALUE: 41,
    BOOLEAN_VALUE: 42,
    BEGIN: 43,
    END: 44,
    RETURN: 45,
    ERROR: 46,
    PRINT: 47,
    IF: 48,
    THEN: 49,
    END_IF: 50,
    ELSE: 51,
    WHILE: 52,
    DO: 53,
    END_WHILE: 54,
    FOR: 55,
    FROM: 56,
    TO: 57,
    STEP: 58,
    END_FOR: 59,
    AFFECT: 60,
    POINT: 61,
    NULL: 62,
    RANDOM: 63,
    ADDRESS: 64,
    CONTENT: 65,
    NOT: 66,
    MINUS: 67,
    AND: 68,
    OR: 69,
    EQ: 70,
    NEQ: 71,
    LT: 72,
    LTE: 73,
    GT: 74,
    GTE: 75,
    PLUS: 76,
    MULT: 77,
    EXP: 78,
    DIV: 79,
    MODULO: 80,
    STRING: 81,
    REPEAT: 82,
    UNTIL: 83,
    PRINTLN: 84,
    READ: 85,
    ALLOCATE: 86,
    FREE: 87,
    DEREFERENCE: 88,
    WHITE_SPACE: 89,
    HEX_DIGIT: 90,
    DIGIT: 91,
    LETTER: 92,
    COMMENT: 93,
    LINE_COMMENT: 94
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
    PRINT_EXPRESSION : 8,
    PRINT_STRING : 9,
    VARIABLES_DECLARATION_LIST : 10,
    IDENTIFIER_LIST : 11,
    VARIABLES_DECLARATION : 12,
    FUNCTION_PARAMETERS_LIST : 13,
    FUNCTION_PARAMETER_DECLARATION : 14,
    STRUCT_DECLARATION : 15,
    FUNCTION_LIST : 16,
    FUNCTION_CALL : 17,
    STRUCT_DECLARATIONS : 18,
    VARIABLE_TYPE : 19,
    ASSIGNABLE_ELEMENT : 20,
    ASSIGN : 21,
    NUMBER : 22,
    NEWLINE : 23,
    STRUCT : 24,
    IDENTIFIER : 25,
    VAR : 26,
    COLON : 27,
    COMMA : 28,
    INTEGER : 29,
    POINTER : 30,
    BOOLEAN : 31,
    CHARACTER : 32,
    FLOAT : 33,
    LB : 34,
    RB : 35,
    FUNCTION : 36,
    LP : 37,
    RP : 38,
    PROCEDURE : 39,
    INTEGER_VALUE : 40,
    FLOAT_VALUE : 41,
    BOOLEAN_VALUE : 42,
    BEGIN : 43,
    END : 44,
    RETURN : 45,
    ERROR : 46,
    PRINT : 47,
    IF : 48,
    THEN : 49,
    END_IF : 50,
    ELSE : 51,
    WHILE : 52,
    DO : 53,
    END_WHILE : 54,
    FOR : 55,
    FROM : 56,
    TO : 57,
    STEP : 58,
    END_FOR : 59,
    AFFECT : 60,
    POINT : 61,
    NULL : 62,
    RANDOM : 63,
    ADDRESS : 64,
    CONTENT : 65,
    NOT : 66,
    MINUS : 67,
    AND : 68,
    OR : 69,
    EQ : 70,
    NEQ : 71,
    LT : 72,
    LTE : 73,
    GT : 74,
    GTE : 75,
    PLUS : 76,
    MULT : 77,
    EXP : 78,
    DIV : 79,
    MODULO : 80,
    STRING : 81,
    REPEAT : 82,
    UNTIL : 83,
    PRINTLN : 84,
    READ : 85,
    ALLOCATE : 86,
    FREE : 87,
    DEREFERENCE : 88,
    WHITE_SPACE : 89,
    HEX_DIGIT : 90,
    DIGIT : 91,
    LETTER : 92,
    COMMENT : 93,
    LINE_COMMENT : 94,
    getGrammarFileName: function() { return "SimpleLanguage.g"; }
});
org.antlr.lang.augmentObject(SimpleLanguageLexer.prototype, {
    // $ANTLR start END_IF
    mEND_IF: function()  {
        try {
            var _type = this.END_IF;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:317:7: ( 'END_IF' )
            // SimpleLanguage.g:317:9: 'END_IF'
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
            // SimpleLanguage.g:318:10: ( 'END_WHILE' )
            // SimpleLanguage.g:318:12: 'END_WHILE'
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
            // SimpleLanguage.g:319:8: ( 'END_FOR' )
            // SimpleLanguage.g:319:10: 'END_FOR'
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
            // SimpleLanguage.g:320:4: ( 'END' )
            // SimpleLanguage.g:320:6: 'END'
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
            // SimpleLanguage.g:321:5: ( '+' )
            // SimpleLanguage.g:321:7: '+'
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
            // SimpleLanguage.g:322:6: ( '-' )
            // SimpleLanguage.g:322:8: '-'
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
            // SimpleLanguage.g:323:5: ( '*' )
            // SimpleLanguage.g:323:7: '*'
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
            // SimpleLanguage.g:324:4: ( '^' )
            // SimpleLanguage.g:324:6: '^'
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
            // SimpleLanguage.g:325:4: ( '/' )
            // SimpleLanguage.g:325:6: '/'
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
            // SimpleLanguage.g:326:7: ( '%' )
            // SimpleLanguage.g:326:9: '%'
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
            // SimpleLanguage.g:327:3: ( '=' )
            // SimpleLanguage.g:327:5: '='
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
            // SimpleLanguage.g:328:4: ( '!=' )
            // SimpleLanguage.g:328:6: '!='
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
            // SimpleLanguage.g:329:4: ( '!' )
            // SimpleLanguage.g:329:6: '!'
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
            // SimpleLanguage.g:330:4: ( '<=' )
            // SimpleLanguage.g:330:6: '<='
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
            // SimpleLanguage.g:331:3: ( '<' )
            // SimpleLanguage.g:331:5: '<'
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
            // SimpleLanguage.g:332:4: ( '>=' )
            // SimpleLanguage.g:332:6: '>='
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
            // SimpleLanguage.g:333:3: ( '>' )
            // SimpleLanguage.g:333:5: '>'
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
            // SimpleLanguage.g:334:4: ( 'AND' )
            // SimpleLanguage.g:334:6: 'AND'
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
            // SimpleLanguage.g:335:3: ( 'OR' )
            // SimpleLanguage.g:335:5: 'OR'
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
            // SimpleLanguage.g:336:7: ( 'REPEAT' )
            // SimpleLanguage.g:336:9: 'REPEAT'
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
            // SimpleLanguage.g:337:6: ( 'UNTIL' )
            // SimpleLanguage.g:337:8: 'UNTIL'
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
            // SimpleLanguage.g:338:4: ( 'FOR' )
            // SimpleLanguage.g:338:6: 'FOR'
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
            // SimpleLanguage.g:339:5: ( 'FROM' )
            // SimpleLanguage.g:339:7: 'FROM'
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
            // SimpleLanguage.g:340:3: ( 'TO' )
            // SimpleLanguage.g:340:5: 'TO'
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
            // SimpleLanguage.g:341:5: ( 'STEP' )
            // SimpleLanguage.g:341:7: 'STEP'
            this.match("STEP"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STEP",

    // $ANTLR start PRINTLN
    mPRINTLN: function()  {
        try {
            var _type = this.PRINTLN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:342:8: ( 'PRINTLN' )
            // SimpleLanguage.g:342:10: 'PRINTLN'
            this.match("PRINTLN"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PRINTLN",

    // $ANTLR start READ
    mREAD: function()  {
        try {
            var _type = this.READ;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:343:5: ( 'READ' )
            // SimpleLanguage.g:343:7: 'READ'
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
            // SimpleLanguage.g:344:8: ( 'ADDRESS' )
            // SimpleLanguage.g:344:10: 'ADDRESS'
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
            // SimpleLanguage.g:345:8: ( 'CONTENT' )
            // SimpleLanguage.g:345:10: 'CONTENT'
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
            // SimpleLanguage.g:346:9: ( 'ALLOC' )
            // SimpleLanguage.g:346:11: 'ALLOC'
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
            // SimpleLanguage.g:347:5: ( 'FREE' )
            // SimpleLanguage.g:347:7: 'FREE'
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
            // SimpleLanguage.g:348:5: ( 'NULL' )
            // SimpleLanguage.g:348:7: 'NULL'
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
            // SimpleLanguage.g:349:6: ( 'BEGIN' )
            // SimpleLanguage.g:349:8: 'BEGIN'
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
            // SimpleLanguage.g:350:4: ( 'VAR' )
            // SimpleLanguage.g:350:6: 'VAR'
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
            // SimpleLanguage.g:351:6: ( 'WHILE' )
            // SimpleLanguage.g:351:8: 'WHILE'
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
            // SimpleLanguage.g:352:3: ( 'DO' )
            // SimpleLanguage.g:352:5: 'DO'
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
            // SimpleLanguage.g:353:7: ( 'STRUCT' )
            // SimpleLanguage.g:353:9: 'STRUCT'
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
            // SimpleLanguage.g:354:8: ( 'BOOLEAN' )
            // SimpleLanguage.g:354:10: 'BOOLEAN'
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
            // SimpleLanguage.g:355:8: ( 'INTEGER' )
            // SimpleLanguage.g:355:10: 'INTEGER'
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
            // SimpleLanguage.g:356:6: ( 'FLOAT' )
            // SimpleLanguage.g:356:8: 'FLOAT'
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
            // SimpleLanguage.g:357:10: ( 'CHARACTER' )
            // SimpleLanguage.g:357:12: 'CHARACTER'
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
            // SimpleLanguage.g:358:8: ( 'POINTER' )
            // SimpleLanguage.g:358:10: 'POINTER'
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
            // SimpleLanguage.g:359:3: ( 'IF' )
            // SimpleLanguage.g:359:5: 'IF'
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
            // SimpleLanguage.g:360:5: ( 'THEN' )
            // SimpleLanguage.g:360:7: 'THEN'
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
            // SimpleLanguage.g:361:5: ( 'ELSE' )
            // SimpleLanguage.g:361:7: 'ELSE'
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
            // SimpleLanguage.g:362:9: ( 'FUNCTION' )
            // SimpleLanguage.g:362:11: 'FUNCTION'
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
            // SimpleLanguage.g:363:10: ( 'PROCEDURE' )
            // SimpleLanguage.g:363:12: 'PROCEDURE'
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
            // SimpleLanguage.g:364:6: ( 'PRINT' )
            // SimpleLanguage.g:364:8: 'PRINT'
            this.match("PRINT"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PRINT",

    // $ANTLR start ERROR
    mERROR: function()  {
        try {
            var _type = this.ERROR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:365:6: ( 'ERROR' )
            // SimpleLanguage.g:365:8: 'ERROR'
            this.match("ERROR"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ERROR",

    // $ANTLR start RANDOM
    mRANDOM: function()  {
        try {
            var _type = this.RANDOM;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:366:7: ( 'RANDOM' )
            // SimpleLanguage.g:366:9: 'RANDOM'
            this.match("RANDOM"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RANDOM",

    // $ANTLR start RETURN
    mRETURN: function()  {
        try {
            var _type = this.RETURN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:367:7: ( 'RETURN' )
            // SimpleLanguage.g:367:9: 'RETURN'
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
            // SimpleLanguage.g:368:6: ( ':' )
            // SimpleLanguage.g:368:8: ':'
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
            // SimpleLanguage.g:369:6: ( ',' )
            // SimpleLanguage.g:369:8: ','
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
            // SimpleLanguage.g:370:3: ( '[' )
            // SimpleLanguage.g:370:5: '['
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
            // SimpleLanguage.g:371:3: ( ']' )
            // SimpleLanguage.g:371:5: ']'
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
            // SimpleLanguage.g:372:3: ( '(' )
            // SimpleLanguage.g:372:5: '('
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
            // SimpleLanguage.g:373:3: ( ')' )
            // SimpleLanguage.g:373:5: ')'
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
            // SimpleLanguage.g:374:6: ( '.' )
            // SimpleLanguage.g:374:8: '.'
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
            // SimpleLanguage.g:375:12: ( '->' )
            // SimpleLanguage.g:375:14: '->'
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
            // SimpleLanguage.g:376:7: ( '<-' )
            // SimpleLanguage.g:376:9: '<-'
            this.match("<-"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "AFFECT",

    // $ANTLR start WHITE_SPACE
    mWHITE_SPACE: function()  {
        try {
            var _type = this.WHITE_SPACE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleLanguage.g:386:12: ( ( ' ' | '\\t' ) )
            // SimpleLanguage.g:386:15: ( ' ' | '\\t' )
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
            // SimpleLanguage.g:390:2: ( ( '0' .. '9' | 'A' .. 'F' | 'a' .. 'f' ) )
            // SimpleLanguage.g:390:4: ( '0' .. '9' | 'A' .. 'F' | 'a' .. 'f' )
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
            // SimpleLanguage.g:394:2: ( '0' .. '9' )
            // SimpleLanguage.g:394:4: '0' .. '9'
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
            // SimpleLanguage.g:398:2: ( ( DIGIT )+ )
            // SimpleLanguage.g:398:4: ( DIGIT )+
            // SimpleLanguage.g:398:4: ( DIGIT )+
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
                    // SimpleLanguage.g:398:4: DIGIT
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
            // SimpleLanguage.g:402:2: ( ( DIGIT )* '.' ( DIGIT )* )
            // SimpleLanguage.g:402:4: ( DIGIT )* '.' ( DIGIT )*
            // SimpleLanguage.g:402:4: ( DIGIT )*
            loop2:
            do {
                var alt2=2;
                var LA2_0 = this.input.LA(1);

                if ( ((LA2_0>='0' && LA2_0<='9')) ) {
                    alt2=1;
                }


                switch (alt2) {
                case 1 :
                    // SimpleLanguage.g:402:4: DIGIT
                    this.mDIGIT(); 


                    break;

                default :
                    break loop2;
                }
            } while (true);

            this.match('.'); 
            // SimpleLanguage.g:402:13: ( DIGIT )*
            loop3:
            do {
                var alt3=2;
                var LA3_0 = this.input.LA(1);

                if ( ((LA3_0>='0' && LA3_0<='9')) ) {
                    alt3=1;
                }


                switch (alt3) {
                case 1 :
                    // SimpleLanguage.g:402:13: DIGIT
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
            // SimpleLanguage.g:406:2: ( 'TRUE' | 'FALSE' )
            var alt4=2;
            var LA4_0 = this.input.LA(1);

            if ( (LA4_0=='T') ) {
                alt4=1;
            }
            else if ( (LA4_0=='F') ) {
                alt4=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 4, 0, this.input);

                throw nvae;
            }
            switch (alt4) {
                case 1 :
                    // SimpleLanguage.g:406:4: 'TRUE'
                    this.match("TRUE"); 



                    break;
                case 2 :
                    // SimpleLanguage.g:407:4: 'FALSE'
                    this.match("FALSE"); 



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
            // SimpleLanguage.g:411:2: ( 'a' .. 'z' | 'A' .. 'Z' | '_' )
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
            // SimpleLanguage.g:414:2: ( LETTER ( LETTER | DIGIT )* )
            // SimpleLanguage.g:414:4: LETTER ( LETTER | DIGIT )*
            this.mLETTER(); 
            // SimpleLanguage.g:414:11: ( LETTER | DIGIT )*
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
            // SimpleLanguage.g:418:5: ( ( ( '\\r' )? '\\n' )+ )
            // SimpleLanguage.g:418:7: ( ( '\\r' )? '\\n' )+
            // SimpleLanguage.g:418:7: ( ( '\\r' )? '\\n' )+
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
                    // SimpleLanguage.g:418:8: ( '\\r' )? '\\n'
                    // SimpleLanguage.g:418:8: ( '\\r' )?
                    var alt6=2;
                    var LA6_0 = this.input.LA(1);

                    if ( (LA6_0=='\r') ) {
                        alt6=1;
                    }
                    switch (alt6) {
                        case 1 :
                            // SimpleLanguage.g:418:8: '\\r'
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
            // SimpleLanguage.g:422:5: ( '/*' ( . )* '*/' )
            // SimpleLanguage.g:422:7: '/*' ( . )* '*/'
            this.match("/*"); 

            // SimpleLanguage.g:422:12: ( . )*
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
                    // SimpleLanguage.g:422:12: .
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
            // SimpleLanguage.g:426:5: ( '//' (~ ( '\\n' | '\\r' ) )* )
            // SimpleLanguage.g:426:7: '//' (~ ( '\\n' | '\\r' ) )*
            this.match("//"); 

            // SimpleLanguage.g:426:12: (~ ( '\\n' | '\\r' ) )*
            loop9:
            do {
                var alt9=2;
                var LA9_0 = this.input.LA(1);

                if ( ((LA9_0>='\u0000' && LA9_0<='\t')||(LA9_0>='\u000B' && LA9_0<='\f')||(LA9_0>='\u000E' && LA9_0<='\uFFFF')) ) {
                    alt9=1;
                }


                switch (alt9) {
                case 1 :
                    // SimpleLanguage.g:426:12: ~ ( '\\n' | '\\r' )
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
            // SimpleLanguage.g:430:2: ( '\"' ( ( . )* ) '\"' )
            // SimpleLanguage.g:430:4: '\"' ( ( . )* ) '\"'
            this.match('\"'); 
            // SimpleLanguage.g:430:8: ( ( . )* )
            // SimpleLanguage.g:430:9: ( . )*
            // SimpleLanguage.g:430:9: ( . )*
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
                    // SimpleLanguage.g:430:9: .
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

    mTokens: function() {
        // SimpleLanguage.g:1:8: ( END_IF | END_WHILE | END_FOR | END | PLUS | MINUS | MULT | EXP | DIV | MODULO | EQ | NEQ | NOT | LTE | LT | GTE | GT | AND | OR | REPEAT | UNTIL | FOR | FROM | TO | STEP | PRINTLN | READ | ADDRESS | CONTENT | ALLOCATE | FREE | NULL | BEGIN | VAR | WHILE | DO | STRUCT | BOOLEAN | INTEGER | FLOAT | CHARACTER | POINTER | IF | THEN | ELSE | FUNCTION | PROCEDURE | PRINT | ERROR | RANDOM | RETURN | COLON | COMMA | LB | RB | LP | RP | POINT | DEREFERENCE | AFFECT | WHITE_SPACE | INTEGER_VALUE | FLOAT_VALUE | BOOLEAN_VALUE | IDENTIFIER | NEWLINE | COMMENT | LINE_COMMENT | STRING )
        var alt11=69;
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
                // SimpleLanguage.g:1:132: PRINTLN
                this.mPRINTLN(); 


                break;
            case 27 :
                // SimpleLanguage.g:1:140: READ
                this.mREAD(); 


                break;
            case 28 :
                // SimpleLanguage.g:1:145: ADDRESS
                this.mADDRESS(); 


                break;
            case 29 :
                // SimpleLanguage.g:1:153: CONTENT
                this.mCONTENT(); 


                break;
            case 30 :
                // SimpleLanguage.g:1:161: ALLOCATE
                this.mALLOCATE(); 


                break;
            case 31 :
                // SimpleLanguage.g:1:170: FREE
                this.mFREE(); 


                break;
            case 32 :
                // SimpleLanguage.g:1:175: NULL
                this.mNULL(); 


                break;
            case 33 :
                // SimpleLanguage.g:1:180: BEGIN
                this.mBEGIN(); 


                break;
            case 34 :
                // SimpleLanguage.g:1:186: VAR
                this.mVAR(); 


                break;
            case 35 :
                // SimpleLanguage.g:1:190: WHILE
                this.mWHILE(); 


                break;
            case 36 :
                // SimpleLanguage.g:1:196: DO
                this.mDO(); 


                break;
            case 37 :
                // SimpleLanguage.g:1:199: STRUCT
                this.mSTRUCT(); 


                break;
            case 38 :
                // SimpleLanguage.g:1:206: BOOLEAN
                this.mBOOLEAN(); 


                break;
            case 39 :
                // SimpleLanguage.g:1:214: INTEGER
                this.mINTEGER(); 


                break;
            case 40 :
                // SimpleLanguage.g:1:222: FLOAT
                this.mFLOAT(); 


                break;
            case 41 :
                // SimpleLanguage.g:1:228: CHARACTER
                this.mCHARACTER(); 


                break;
            case 42 :
                // SimpleLanguage.g:1:238: POINTER
                this.mPOINTER(); 


                break;
            case 43 :
                // SimpleLanguage.g:1:246: IF
                this.mIF(); 


                break;
            case 44 :
                // SimpleLanguage.g:1:249: THEN
                this.mTHEN(); 


                break;
            case 45 :
                // SimpleLanguage.g:1:254: ELSE
                this.mELSE(); 


                break;
            case 46 :
                // SimpleLanguage.g:1:259: FUNCTION
                this.mFUNCTION(); 


                break;
            case 47 :
                // SimpleLanguage.g:1:268: PROCEDURE
                this.mPROCEDURE(); 


                break;
            case 48 :
                // SimpleLanguage.g:1:278: PRINT
                this.mPRINT(); 


                break;
            case 49 :
                // SimpleLanguage.g:1:284: ERROR
                this.mERROR(); 


                break;
            case 50 :
                // SimpleLanguage.g:1:290: RANDOM
                this.mRANDOM(); 


                break;
            case 51 :
                // SimpleLanguage.g:1:297: RETURN
                this.mRETURN(); 


                break;
            case 52 :
                // SimpleLanguage.g:1:304: COLON
                this.mCOLON(); 


                break;
            case 53 :
                // SimpleLanguage.g:1:310: COMMA
                this.mCOMMA(); 


                break;
            case 54 :
                // SimpleLanguage.g:1:316: LB
                this.mLB(); 


                break;
            case 55 :
                // SimpleLanguage.g:1:319: RB
                this.mRB(); 


                break;
            case 56 :
                // SimpleLanguage.g:1:322: LP
                this.mLP(); 


                break;
            case 57 :
                // SimpleLanguage.g:1:325: RP
                this.mRP(); 


                break;
            case 58 :
                // SimpleLanguage.g:1:328: POINT
                this.mPOINT(); 


                break;
            case 59 :
                // SimpleLanguage.g:1:334: DEREFERENCE
                this.mDEREFERENCE(); 


                break;
            case 60 :
                // SimpleLanguage.g:1:346: AFFECT
                this.mAFFECT(); 


                break;
            case 61 :
                // SimpleLanguage.g:1:353: WHITE_SPACE
                this.mWHITE_SPACE(); 


                break;
            case 62 :
                // SimpleLanguage.g:1:365: INTEGER_VALUE
                this.mINTEGER_VALUE(); 


                break;
            case 63 :
                // SimpleLanguage.g:1:379: FLOAT_VALUE
                this.mFLOAT_VALUE(); 


                break;
            case 64 :
                // SimpleLanguage.g:1:391: BOOLEAN_VALUE
                this.mBOOLEAN_VALUE(); 


                break;
            case 65 :
                // SimpleLanguage.g:1:405: IDENTIFIER
                this.mIDENTIFIER(); 


                break;
            case 66 :
                // SimpleLanguage.g:1:416: NEWLINE
                this.mNEWLINE(); 


                break;
            case 67 :
                // SimpleLanguage.g:1:424: COMMENT
                this.mCOMMENT(); 


                break;
            case 68 :
                // SimpleLanguage.g:1:432: LINE_COMMENT
                this.mLINE_COMMENT(); 


                break;
            case 69 :
                // SimpleLanguage.g:1:445: STRING
                this.mSTRING(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(SimpleLanguageLexer, {
    DFA11_eotS:
        "\u0001\uffff\u0001\u0024\u0001\uffff\u0001\u002b\u0002\uffff\u0001"+
    "\u002e\u0002\uffff\u0001\u0030\u0001\u0033\u0001\u0035\u000f\u0024\u0006"+
    "\uffff\u0001\u0052\u0001\uffff\u0001\u0054\u0003\uffff\u0003\u0024\u000c"+
    "\uffff\u0003\u0024\u0001\u005b\u0008\u0024\u0001\u0067\u000c\u0024\u0001"+
    "\u0076\u0001\u0024\u0001\u0078\u0003\uffff\u0001\u007a\u0002\u0024\u0001"+
    "\u007d\u0002\u0024\u0001\uffff\u0005\u0024\u0001\u0085\u0005\u0024\u0001"+
    "\uffff\u000c\u0024\u0001\u0097\u0001\u0024\u0001\uffff\u0001\u0024\u0001"+
    "\uffff\u0001\u0024\u0001\uffff\u0001\u009d\u0001\u0024\u0001\uffff\u0003"+
    "\u0024\u0001\u00a2\u0003\u0024\u0001\uffff\u0001\u00a6\u0001\u00a7\u0003"+
    "\u0024\u0001\u00ab\u0001\u00ac\u0001\u00ad\u0006\u0024\u0001\u00b4\u0002"+
    "\u0024\u0001\uffff\u0005\u0024\u0001\uffff\u0001\u00bc\u0001\u0024\u0001"+
    "\u00be\u0001\u0024\u0001\uffff\u0002\u0024\u0001\u00c2\u0002\uffff\u0001"+
    "\u00c3\u0001\u0024\u0001\u00ac\u0003\uffff\u0001\u0024\u0001\u00c7\u0004"+
    "\u0024\u0001\uffff\u0001\u00cc\u0001\u0024\u0001\u00ce\u0001\u0024\u0001"+
    "\u00d0\u0002\u0024\u0001\uffff\u0001\u0024\u0001\uffff\u0001\u00d4\u0001"+
    "\u00d5\u0001\u00d6\u0002\uffff\u0001\u0024\u0001\u00d8\u0001\u0024\u0001"+
    "\uffff\u0004\u0024\u0001\uffff\u0001\u0024\u0001\uffff\u0001\u0024\u0001"+
    "\uffff\u0001\u0024\u0001\u00e1\u0001\u00e2\u0003\uffff\u0001\u0024\u0001"+
    "\uffff\u0001\u00e4\u0001\u0024\u0001\u00e6\u0001\u00e7\u0001\u0024\u0001"+
    "\u00e9\u0001\u00ea\u0001\u0024\u0002\uffff\u0001\u00ec\u0001\uffff\u0001"+
    "\u0024\u0002\uffff\u0001\u0024\u0002\uffff\u0001\u00ef\u0001\uffff\u0001"+
    "\u00f0\u0001\u00f1\u0003\uffff",
    DFA11_eofS:
        "\u00f2\uffff",
    DFA11_minS:
        "\u0001\u0009\u0001\u004c\u0001\uffff\u0001\u003e\u0002\uffff\u0001"+
    "\u002a\u0002\uffff\u0001\u003d\u0001\u002d\u0001\u003d\u0001\u0044\u0001"+
    "\u0052\u0001\u0041\u0001\u004e\u0001\u0041\u0001\u0048\u0001\u0054\u0001"+
    "\u004f\u0001\u0048\u0001\u0055\u0001\u0045\u0001\u0041\u0001\u0048\u0001"+
    "\u004f\u0001\u0046\u0006\uffff\u0001\u0030\u0001\uffff\u0001\u002e\u0003"+
    "\uffff\u0001\u0044\u0001\u0053\u0001\u0052\u000c\uffff\u0002\u0044\u0001"+
    "\u004c\u0001\u0030\u0001\u0041\u0001\u004e\u0001\u0054\u0001\u0052\u0001"+
    "\u0045\u0001\u004f\u0001\u004e\u0001\u004c\u0001\u0030\u0001\u0045\u0001"+
    "\u0055\u0001\u0045\u0002\u0049\u0001\u004e\u0001\u0041\u0001\u004c\u0001"+
    "\u0047\u0001\u004f\u0001\u0052\u0001\u0049\u0001\u0030\u0001\u0054\u0001"+
    "\u0030\u0003\uffff\u0001\u0030\u0001\u0045\u0001\u004f\u0001\u0030\u0001"+
    "\u0052\u0001\u004f\u0001\uffff\u0001\u0045\u0001\u0044\u0001\u0055\u0001"+
    "\u0044\u0001\u0049\u0001\u0030\u0001\u004d\u0001\u0045\u0001\u0041\u0001"+
    "\u0043\u0001\u0053\u0001\uffff\u0001\u004e\u0001\u0045\u0001\u0050\u0001"+
    "\u0055\u0001\u004e\u0001\u0043\u0001\u004e\u0001\u0054\u0001\u0052\u0001"+
    "\u004c\u0001\u0049\u0001\u004c\u0001\u0030\u0001\u004c\u0001\uffff\u0001"+
    "\u0045\u0001\uffff\u0001\u0046\u0001\uffff\u0001\u0030\u0001\u0052\u0001"+
    "\uffff\u0001\u0045\u0001\u0043\u0001\u0041\u0001\u0030\u0001\u0052\u0001"+
    "\u004f\u0001\u004c\u0001\uffff\u0002\u0030\u0002\u0054\u0001\u0045\u0003"+
    "\u0030\u0001\u0043\u0001\u0054\u0001\u0045\u0001\u0054\u0001\u0045\u0001"+
    "\u0041\u0001\u0030\u0001\u004e\u0001\u0045\u0001\uffff\u0001\u0045\u0001"+
    "\u0047\u0001\u0046\u0001\u0048\u0001\u004f\u0001\uffff\u0001\u0030\u0001"+
    "\u0053\u0001\u0030\u0001\u0054\u0001\uffff\u0001\u004e\u0001\u004d\u0001"+
    "\u0030\u0002\uffff\u0001\u0030\u0001\u0049\u0001\u0030\u0003\uffff\u0001"+
    "\u0054\u0001\u0030\u0001\u0044\u0001\u0045\u0001\u004e\u0001\u0043\u0001"+
    "\uffff\u0001\u0030\u0001\u0041\u0001\u0030\u0001\u0045\u0001\u0030\u0001"+
    "\u0049\u0001\u0052\u0001\uffff\u0001\u0053\u0001\uffff\u0003\u0030\u0002"+
    "\uffff\u0001\u004f\u0001\u0030\u0001\u004e\u0001\uffff\u0001\u0055\u0001"+
    "\u0052\u0002\u0054\u0001\uffff\u0001\u004e\u0001\uffff\u0001\u0052\u0001"+
    "\uffff\u0001\u004c\u0002\u0030\u0003\uffff\u0001\u004e\u0001\uffff\u0001"+
    "\u0030\u0001\u0052\u0002\u0030\u0001\u0045\u0002\u0030\u0001\u0045\u0002"+
    "\uffff\u0001\u0030\u0001\uffff\u0001\u0045\u0002\uffff\u0001\u0052\u0002"+
    "\uffff\u0001\u0030\u0001\uffff\u0002\u0030\u0003\uffff",
    DFA11_maxS:
        "\u0001\u007a\u0001\u0052\u0001\uffff\u0001\u003e\u0002\uffff\u0001"+
    "\u002f\u0002\uffff\u0003\u003d\u0001\u004e\u0001\u0052\u0001\u0045\u0001"+
    "\u004e\u0001\u0055\u0001\u0052\u0001\u0054\u0001\u0052\u0001\u004f\u0001"+
    "\u0055\u0001\u004f\u0001\u0041\u0001\u0048\u0001\u004f\u0001\u004e\u0006"+
    "\uffff\u0001\u0039\u0001\uffff\u0001\u0039\u0003\uffff\u0001\u0044\u0001"+
    "\u0053\u0001\u0052\u000c\uffff\u0002\u0044\u0001\u004c\u0001\u007a\u0001"+
    "\u0054\u0001\u004e\u0001\u0054\u0001\u0052\u0002\u004f\u0001\u004e\u0001"+
    "\u004c\u0001\u007a\u0001\u0045\u0001\u0055\u0001\u0052\u0001\u004f\u0001"+
    "\u0049\u0001\u004e\u0001\u0041\u0001\u004c\u0001\u0047\u0001\u004f\u0001"+
    "\u0052\u0001\u0049\u0001\u007a\u0001\u0054\u0001\u007a\u0003\uffff\u0001"+
    "\u007a\u0001\u0045\u0001\u004f\u0001\u007a\u0001\u0052\u0001\u004f\u0001"+
    "\uffff\u0001\u0045\u0001\u0044\u0001\u0055\u0001\u0044\u0001\u0049\u0001"+
    "\u007a\u0001\u004d\u0001\u0045\u0001\u0041\u0001\u0043\u0001\u0053\u0001"+
    "\uffff\u0001\u004e\u0001\u0045\u0001\u0050\u0001\u0055\u0001\u004e\u0001"+
    "\u0043\u0001\u004e\u0001\u0054\u0001\u0052\u0001\u004c\u0001\u0049\u0001"+
    "\u004c\u0001\u007a\u0001\u004c\u0001\uffff\u0001\u0045\u0001\uffff\u0001"+
    "\u0057\u0001\uffff\u0001\u007a\u0001\u0052\u0001\uffff\u0001\u0045\u0001"+
    "\u0043\u0001\u0041\u0001\u007a\u0001\u0052\u0001\u004f\u0001\u004c\u0001"+
    "\uffff\u0002\u007a\u0002\u0054\u0001\u0045\u0003\u007a\u0001\u0043\u0001"+
    "\u0054\u0001\u0045\u0001\u0054\u0001\u0045\u0001\u0041\u0001\u007a\u0001"+
    "\u004e\u0001\u0045\u0001\uffff\u0001\u0045\u0001\u0047\u0001\u0046\u0001"+
    "\u0048\u0001\u004f\u0001\uffff\u0001\u007a\u0001\u0053\u0001\u007a\u0001"+
    "\u0054\u0001\uffff\u0001\u004e\u0001\u004d\u0001\u007a\u0002\uffff\u0001"+
    "\u007a\u0001\u0049\u0001\u007a\u0003\uffff\u0001\u0054\u0001\u007a\u0001"+
    "\u0044\u0001\u0045\u0001\u004e\u0001\u0043\u0001\uffff\u0001\u007a\u0001"+
    "\u0041\u0001\u007a\u0001\u0045\u0001\u007a\u0001\u0049\u0001\u0052\u0001"+
    "\uffff\u0001\u0053\u0001\uffff\u0003\u007a\u0002\uffff\u0001\u004f\u0001"+
    "\u007a\u0001\u004e\u0001\uffff\u0001\u0055\u0001\u0052\u0002\u0054\u0001"+
    "\uffff\u0001\u004e\u0001\uffff\u0001\u0052\u0001\uffff\u0001\u004c\u0002"+
    "\u007a\u0003\uffff\u0001\u004e\u0001\uffff\u0001\u007a\u0001\u0052\u0002"+
    "\u007a\u0001\u0045\u0002\u007a\u0001\u0045\u0002\uffff\u0001\u007a\u0001"+
    "\uffff\u0001\u0045\u0002\uffff\u0001\u0052\u0002\uffff\u0001\u007a\u0001"+
    "\uffff\u0002\u007a\u0003\uffff",
    DFA11_acceptS:
        "\u0002\uffff\u0001\u0005\u0001\uffff\u0001\u0007\u0001\u0008\u0001"+
    "\uffff\u0001\u000a\u0001\u000b\u0012\uffff\u0001\u0034\u0001\u0035\u0001"+
    "\u0036\u0001\u0037\u0001\u0038\u0001\u0039\u0001\uffff\u0001\u003d\u0001"+
    "\uffff\u0001\u0041\u0001\u0042\u0001\u0045\u0003\uffff\u0001\u003b\u0001"+
    "\u0006\u0001\u0043\u0001\u0044\u0001\u0009\u0001\u000c\u0001\u000d\u0001"+
    "\u000e\u0001\u003c\u0001\u000f\u0001\u0010\u0001\u0011\u001c\uffff\u0001"+
    "\u003a\u0001\u003f\u0001\u003e\u0006\uffff\u0001\u0013\u000b\uffff\u0001"+
    "\u0018\u000e\uffff\u0001\u0024\u0001\uffff\u0001\u002b\u0001\uffff\u0001"+
    "\u0004\u0002\uffff\u0001\u0012\u0007\uffff\u0001\u0016\u0011\uffff\u0001"+
    "\u0022\u0005\uffff\u0001\u002d\u0004\uffff\u0001\u001b\u0003\uffff\u0001"+
    "\u0017\u0001\u001f\u0003\uffff\u0001\u002c\u0001\u0040\u0001\u0019\u0006"+
    "\uffff\u0001\u0020\u0007\uffff\u0001\u0031\u0001\uffff\u0001\u001e\u0003"+
    "\uffff\u0001\u0015\u0001\u0028\u0003\uffff\u0001\u0030\u0004\uffff\u0001"+
    "\u0021\u0001\uffff\u0001\u0023\u0001\uffff\u0001\u0001\u0003\uffff\u0001"+
    "\u0014\u0001\u0033\u0001\u0032\u0001\uffff\u0001\u0025\u0008\uffff\u0001"+
    "\u0003\u0001\u001c\u0001\uffff\u0001\u001a\u0001\uffff\u0001\u002a\u0001"+
    "\u001d\u0001\uffff\u0001\u0026\u0001\u0027\u0001\uffff\u0001\u002e\u0002"+
    "\uffff\u0001\u0002\u0001\u002f\u0001\u0029",
    DFA11_specialS:
        "\u00f2\uffff}>",
    DFA11_transitionS: [
            "\u0001\u0022\u0001\u0025\u0002\uffff\u0001\u0025\u0012\uffff"+
            "\u0001\u0022\u0001\u0009\u0001\u0026\u0002\uffff\u0001\u0007"+
            "\u0002\uffff\u0001\u001f\u0001\u0020\u0001\u0004\u0001\u0002"+
            "\u0001\u001c\u0001\u0003\u0001\u0021\u0001\u0006\u000a\u0023"+
            "\u0001\u001b\u0001\uffff\u0001\u000a\u0001\u0008\u0001\u000b"+
            "\u0002\uffff\u0001\u000c\u0001\u0016\u0001\u0014\u0001\u0019"+
            "\u0001\u0001\u0001\u0010\u0002\u0024\u0001\u001a\u0004\u0024"+
            "\u0001\u0015\u0001\u000d\u0001\u0013\u0001\u0024\u0001\u000e"+
            "\u0001\u0012\u0001\u0011\u0001\u000f\u0001\u0017\u0001\u0018"+
            "\u0003\u0024\u0001\u001d\u0001\uffff\u0001\u001e\u0001\u0005"+
            "\u0001\u0024\u0001\uffff\u001a\u0024",
            "\u0001\u0028\u0001\uffff\u0001\u0027\u0003\uffff\u0001\u0029",
            "",
            "\u0001\u002a",
            "",
            "",
            "\u0001\u002c\u0004\uffff\u0001\u002d",
            "",
            "",
            "\u0001\u002f",
            "\u0001\u0032\u000f\uffff\u0001\u0031",
            "\u0001\u0034",
            "\u0001\u0037\u0007\uffff\u0001\u0038\u0001\uffff\u0001\u0036",
            "\u0001\u0039",
            "\u0001\u003b\u0003\uffff\u0001\u003a",
            "\u0001\u003c",
            "\u0001\u0041\u000a\uffff\u0001\u003f\u0002\uffff\u0001\u003d"+
            "\u0002\uffff\u0001\u003e\u0002\uffff\u0001\u0040",
            "\u0001\u0043\u0006\uffff\u0001\u0042\u0002\uffff\u0001\u0044",
            "\u0001\u0045",
            "\u0001\u0047\u0002\uffff\u0001\u0046",
            "\u0001\u0049\u0006\uffff\u0001\u0048",
            "\u0001\u004a",
            "\u0001\u004b\u0009\uffff\u0001\u004c",
            "\u0001\u004d",
            "\u0001\u004e",
            "\u0001\u004f",
            "\u0001\u0051\u0007\uffff\u0001\u0050",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u000a\u0053",
            "",
            "\u0001\u0053\u0001\uffff\u000a\u0023",
            "",
            "",
            "",
            "\u0001\u0055",
            "\u0001\u0056",
            "\u0001\u0057",
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
            "\u0001\u0058",
            "\u0001\u0059",
            "\u0001\u005a",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u005d\u000e\uffff\u0001\u005c\u0003\uffff\u0001\u005e",
            "\u0001\u005f",
            "\u0001\u0060",
            "\u0001\u0061",
            "\u0001\u0063\u0009\uffff\u0001\u0062",
            "\u0001\u0064",
            "\u0001\u0065",
            "\u0001\u0066",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u0068",
            "\u0001\u0069",
            "\u0001\u006a\u000c\uffff\u0001\u006b",
            "\u0001\u006c\u0005\uffff\u0001\u006d",
            "\u0001\u006e",
            "\u0001\u006f",
            "\u0001\u0070",
            "\u0001\u0071",
            "\u0001\u0072",
            "\u0001\u0073",
            "\u0001\u0074",
            "\u0001\u0075",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u0077",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "",
            "",
            "",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0079"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u007b",
            "\u0001\u007c",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u007e",
            "\u0001\u007f",
            "",
            "\u0001\u0080",
            "\u0001\u0081",
            "\u0001\u0082",
            "\u0001\u0083",
            "\u0001\u0084",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u0086",
            "\u0001\u0087",
            "\u0001\u0088",
            "\u0001\u0089",
            "\u0001\u008a",
            "",
            "\u0001\u008b",
            "\u0001\u008c",
            "\u0001\u008d",
            "\u0001\u008e",
            "\u0001\u008f",
            "\u0001\u0090",
            "\u0001\u0091",
            "\u0001\u0092",
            "\u0001\u0093",
            "\u0001\u0094",
            "\u0001\u0095",
            "\u0001\u0096",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u0098",
            "",
            "\u0001\u0099",
            "",
            "\u0001\u009c\u0002\uffff\u0001\u009a\u000d\uffff\u0001\u009b",
            "",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u009e",
            "",
            "\u0001\u009f",
            "\u0001\u00a0",
            "\u0001\u00a1",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u00a3",
            "\u0001\u00a4",
            "\u0001\u00a5",
            "",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u00a8",
            "\u0001\u00a9",
            "\u0001\u00aa",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u00ae",
            "\u0001\u00af",
            "\u0001\u00b0",
            "\u0001\u00b1",
            "\u0001\u00b2",
            "\u0001\u00b3",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u00b5",
            "\u0001\u00b6",
            "",
            "\u0001\u00b7",
            "\u0001\u00b8",
            "\u0001\u00b9",
            "\u0001\u00ba",
            "\u0001\u00bb",
            "",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u00bd",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u00bf",
            "",
            "\u0001\u00c0",
            "\u0001\u00c1",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "",
            "",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u00c4",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "",
            "",
            "",
            "\u0001\u00c5",
            "\u000a\u0024\u0007\uffff\u000b\u0024\u0001\u00c6\u000e\u0024"+
            "\u0004\uffff\u0001\u0024\u0001\uffff\u001a\u0024",
            "\u0001\u00c8",
            "\u0001\u00c9",
            "\u0001\u00ca",
            "\u0001\u00cb",
            "",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u00cd",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u00cf",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u00d1",
            "\u0001\u00d2",
            "",
            "\u0001\u00d3",
            "",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "",
            "",
            "\u0001\u00d7",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u00d9",
            "",
            "\u0001\u00da",
            "\u0001\u00db",
            "\u0001\u00dc",
            "\u0001\u00dd",
            "",
            "\u0001\u00de",
            "",
            "\u0001\u00df",
            "",
            "\u0001\u00e0",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "",
            "",
            "",
            "\u0001\u00e3",
            "",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u00e5",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u00e8",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u00eb",
            "",
            "",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "",
            "\u0001\u00ed",
            "",
            "",
            "\u0001\u00ee",
            "",
            "",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "",
            "",
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
        return "1:1: Tokens : ( END_IF | END_WHILE | END_FOR | END | PLUS | MINUS | MULT | EXP | DIV | MODULO | EQ | NEQ | NOT | LTE | LT | GTE | GT | AND | OR | REPEAT | UNTIL | FOR | FROM | TO | STEP | PRINTLN | READ | ADDRESS | CONTENT | ALLOCATE | FREE | NULL | BEGIN | VAR | WHILE | DO | STRUCT | BOOLEAN | INTEGER | FLOAT | CHARACTER | POINTER | IF | THEN | ELSE | FUNCTION | PROCEDURE | PRINT | ERROR | RANDOM | RETURN | COLON | COMMA | LB | RB | LP | RP | POINT | DEREFERENCE | AFFECT | WHITE_SPACE | INTEGER_VALUE | FLOAT_VALUE | BOOLEAN_VALUE | IDENTIFIER | NEWLINE | COMMENT | LINE_COMMENT | STRING );";
    },
    dummy: null
});
 
})();