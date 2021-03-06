
  define("aceAlgoviewTheme",
["ace"],
function(ace){

	with(ace){
		define("ace/mode/simple_language",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/simple_language_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle","ace/worker/worker_client"],function(require,exports,module){var oop=require("../lib/oop"),TextMode=require("./text").Mode,Tokenizer=require("../tokenizer").Tokenizer,HighlightRules=require("./simple_language_highlight_rules").SimpleLanguageHighlightRules,MatchingBraceOutdent=require("./matching_brace_outdent").MatchingBraceOutdent,CstyleBehaviour=require("./behaviour/cstyle").CstyleBehaviour,CStyleFoldMode=require("./folding/cstyle").FoldMode,WorkerClient=require("../worker/worker_client").WorkerClient,Mode=function(){this.$tokenizer=new Tokenizer((new HighlightRules).getRules()),this.$outdent=new MatchingBraceOutdent,this.$behaviour=new CstyleBehaviour,this.foldingRules=new CStyleFoldMode};oop.inherits(Mode,TextMode),function(){this.getNextLineIndent=function(state,line,tab){var indent=this.$getIndent(line);if(state=="start"){var match=line.match(/^.*[\{\(\[]\s*$/);match&&(indent+=tab)}return indent},this.checkOutdent=function(state,line,input){return this.$outdent.checkOutdent(line,input)},this.autoOutdent=function(state,doc,row){this.$outdent.autoOutdent(doc,row)},this.createWorker=function(session){var worker=new WorkerClient(["ace"],"worker-simple_language.js","ace/mode/simple_language_worker","SimpleLanguageWorker");return worker.attachToDocument(session.getDocument()),worker.on("error",function(e){session.setAnnotations([e.data])}),worker.on("ok",function(){session.clearAnnotations()}),worker}}.call(Mode.prototype),exports.Mode=Mode}),define("ace/mode/simple_language_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(require,exports,module){var oop=require("../lib/oop"),lang=require("../lib/lang"),TextHighlightRules=require("./text_highlight_rules").TextHighlightRules,SimpleLanguageHighlightRules=function(){var keywords=lang.arrayToMap("END_FOR|END_WHILE|END_IF|BEGIN|END|IF|THEN|ELSE|WHILE|VAR|DO|INTEGER|FLOAT|BOOLEAN|POINTER|CHARACTER|FUNCTION|PROCEDURE|RETURN|PRINTLN|PRINT|ERROR|FOR|FROM|TO|ALLOC|FREE|TRUE|FALSE|true|false|STRUCT|RANDOM_INTEGER|<-|NULL|FREE|ALLOCATE|ADDRESS|CONTENT|DEREFERENCE|READ|STEP|REPEAT|UNTIL|AND|OR".split("|"));this.$rules={start:[{token:function(value){return keywords.hasOwnProperty(value)?"keyword":"identifier"},regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"comment",regex:"\\/\\/.*$"},{token:"comment",merge:!0,regex:"\\/\\*",next:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"invalid.illegal",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"},{token:"keyword.operator",regex:"!|%|\\+|=|!=|<=|>=|<|>|AND|OR"}],comment:[{token:"comment",regex:".*?\\*\\/",next:"start"},{token:"comment",merge:!0,regex:".+"}]}};oop.inherits(SimpleLanguageHighlightRules,TextHighlightRules),exports.SimpleLanguageHighlightRules=SimpleLanguageHighlightRules}),define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(require,exports,module){var Range=require("../range").Range,MatchingBraceOutdent=function(){};(function(){this.checkOutdent=function(line,input){return/^\s+$/.test(line)?/^\s*\}/.test(input):!1},this.autoOutdent=function(doc,row){var line=doc.getLine(row),match=line.match(/^(\s*\})/);if(!match)return 0;var column=match[1].length,openBracePos=doc.findMatchingBracket({row:row,column:column});if(!openBracePos||openBracePos.row==row)return 0;var indent=this.$getIndent(doc.getLine(openBracePos.row));doc.replace(new Range(row,0,row,column-1),indent)},this.$getIndent=function(line){var match=line.match(/^(\s+)/);return match?match[1]:""}}).call(MatchingBraceOutdent.prototype),exports.MatchingBraceOutdent=MatchingBraceOutdent}),define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour"],function(require,exports,module){var oop=require("../../lib/oop"),Behaviour=require("../behaviour").Behaviour,CstyleBehaviour=function(){this.add("braces","insertion",function(state,action,editor,session,text){if(text=="{"){var selection=editor.getSelectionRange(),selected=session.doc.getTextRange(selection);return selected!==""?{text:"{"+selected+"}",selection:!1}:{text:"{}",selection:[1,1]}}if(text=="}"){var cursor=editor.getCursorPosition(),line=session.doc.getLine(cursor.row),rightChar=line.substring(cursor.column,cursor.column+1);if(rightChar=="}"){var matching=session.$findOpeningBracket("}",{column:cursor.column+1,row:cursor.row});if(matching!==null)return{text:"",selection:[1,1]}}}else if(text=="\n"){var cursor=editor.getCursorPosition(),line=session.doc.getLine(cursor.row),rightChar=line.substring(cursor.column,cursor.column+1);if(rightChar=="}"){var openBracePos=session.findMatchingBracket({row:cursor.row,column:cursor.column+1});if(!openBracePos)return null;var indent=this.getNextLineIndent(state,line.substring(0,line.length-1),session.getTabString()),next_indent=this.$getIndent(session.doc.getLine(openBracePos.row));return{text:"\n"+indent+"\n"+next_indent,selection:[1,indent.length,1,indent.length]}}}}),this.add("braces","deletion",function(state,action,editor,session,range){var selected=session.doc.getTextRange(range);if(!range.isMultiLine()&&selected=="{"){var line=session.doc.getLine(range.start.row),rightChar=line.substring(range.end.column,range.end.column+1);if(rightChar=="}")return range.end.column++,range}}),this.add("parens","insertion",function(state,action,editor,session,text){if(text=="("){var selection=editor.getSelectionRange(),selected=session.doc.getTextRange(selection);return selected!==""?{text:"("+selected+")",selection:!1}:{text:"()",selection:[1,1]}}if(text==")"){var cursor=editor.getCursorPosition(),line=session.doc.getLine(cursor.row),rightChar=line.substring(cursor.column,cursor.column+1);if(rightChar==")"){var matching=session.$findOpeningBracket(")",{column:cursor.column+1,row:cursor.row});if(matching!==null)return{text:"",selection:[1,1]}}}}),this.add("parens","deletion",function(state,action,editor,session,range){var selected=session.doc.getTextRange(range);if(!range.isMultiLine()&&selected=="("){var line=session.doc.getLine(range.start.row),rightChar=line.substring(range.start.column+1,range.start.column+2);if(rightChar==")")return range.end.column++,range}}),this.add("string_dquotes","insertion",function(state,action,editor,session,text){if(text=='"'||text=="'"){var quote=text,selection=editor.getSelectionRange(),selected=session.doc.getTextRange(selection);if(selected!=="")return{text:quote+selected+quote,selection:!1};var cursor=editor.getCursorPosition(),line=session.doc.getLine(cursor.row),leftChar=line.substring(cursor.column-1,cursor.column);if(leftChar=="\\")return null;var tokens=session.getTokens(selection.start.row,selection.start.row)[0].tokens,col=0,token,quotepos=-1;for(var x=0;x<tokens.length;x++){token=tokens[x],token.type=="string"?quotepos=-1:quotepos<0&&(quotepos=token.value.indexOf(quote));if(token.value.length+col>selection.start.column)break;col+=tokens[x].value.length}if(!token||quotepos<0&&token.type!=="comment"&&(token.type!=="string"||selection.start.column!==token.value.length+col-1&&token.value.lastIndexOf(quote)===token.value.length-1))return{text:quote+quote,selection:[1,1]};if(token&&token.type==="string"){var rightChar=line.substring(cursor.column,cursor.column+1);if(rightChar==quote)return{text:"",selection:[1,1]}}}}),this.add("string_dquotes","deletion",function(state,action,editor,session,range){var selected=session.doc.getTextRange(range);if(!range.isMultiLine()&&(selected=='"'||selected=="'")){var line=session.doc.getLine(range.start.row),rightChar=line.substring(range.start.column+1,range.start.column+2);if(rightChar=='"')return range.end.column++,range}})};oop.inherits(CstyleBehaviour,Behaviour),exports.CstyleBehaviour=CstyleBehaviour}),define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(require,exports,module){var oop=require("../../lib/oop"),Range=require("../../range").Range,BaseFoldMode=require("./fold_mode").FoldMode,FoldMode=exports.FoldMode=function(){};oop.inherits(FoldMode,BaseFoldMode),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.getFoldWidgetRange=function(session,foldStyle,row){var line=session.getLine(row),match=line.match(this.foldingStartMarker);if(match){var i=match.index;if(match[1])return this.openingBracketBlock(session,match[1],row,i);var range=session.getCommentFoldRange(row,i+match[0].length);return range.end.column-=2,range}if(foldStyle!=="markbeginend")return;var match=line.match(this.foldingStopMarker);if(match){var i=match.index+match[0].length;if(match[2]){var range=session.getCommentFoldRange(row,i);return range.end.column-=2,range}var end={row:row,column:i},start=session.$findOpeningBracket(match[1],end);if(!start)return;return start.column++,end.column--,Range.fromPoints(start,end)}}}.call(FoldMode.prototype)}),define("ace/mode/folding/fold_mode",["require","exports","module","ace/range"],function(require,exports,module){var Range=require("../../range").Range,FoldMode=exports.FoldMode=function(){};(function(){this.foldingStartMarker=null,this.foldingStopMarker=null,this.getFoldWidget=function(session,foldStyle,row){var line=session.getLine(row);return this.foldingStartMarker.test(line)?"start":foldStyle=="markbeginend"&&this.foldingStopMarker&&this.foldingStopMarker.test(line)?"end":""},this.getFoldWidgetRange=function(session,foldStyle,row){return null},this.indentationBlock=function(session,row,column){var re=/^\s*/,startRow=row,endRow=row,line=session.getLine(row),startColumn=column||line.length,startLevel=line.match(re)[0].length,maxRow=session.getLength();while(++row<maxRow){line=session.getLine(row);var level=line.match(re)[0].length;if(level==line.length)continue;if(level<=startLevel)break;endRow=row}if(endRow>startRow){var endColumn=session.getLine(endRow).length;return new Range(startRow,startColumn,endRow,endColumn)}},this.openingBracketBlock=function(session,bracket,row,column,typeRe,allowBlankLine){var start={row:row,column:column+1},end=session.$findClosingBracket(bracket,start,typeRe,allowBlankLine);if(!end)return;var fw=session.foldWidgets[end.row];return fw==null&&(fw=this.getFoldWidget(session,end.row)),fw=="start"&&(end.row--,end.column=session.getLine(end.row).length),Range.fromPoints(start,end)}}).call(FoldMode.prototype)})
	


define('ace/theme/algoview', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {
exports.isDark = false;
exports.cssText = ".ace-crimson-editor .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-crimson-editor .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-crimson-editor .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-crimson-editor .ace_gutter-layer {\
  width: 100%;\
  text-align: right;\
}\
\
.ace-crimson-editor .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 6px;\
}\
\
.ace-crimson-editor .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-crimson-editor .ace_text-layer {\
  cursor: text;\
  color: rgb(64, 64, 64);\
}\
\
.ace-crimson-editor .ace_cursor {\
  border-left: 2px solid black;\
}\
\
.ace-crimson-editor .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid black;\
}\
\
.ace-crimson-editor .ace_line .ace_invisible {\
  color: rgb(191, 191, 191);\
}\
\
.ace-crimson-editor .ace_line .ace_identifier {\
  color: black;\
}\
\
.ace-crimson-editor .ace_line .ace_keyword {\
  color: blue;\
}\
\
.ace-crimson-editor .ace_line .ace_constant.ace_buildin {\
  color: rgb(88, 72, 246);\
}\
\
.ace-crimson-editor .ace_line .ace_constant.ace_language {\
  color: rgb(255, 156, 0);\
}\
\
.ace-crimson-editor .ace_line .ace_constant.ace_library {\
  color: rgb(6, 150, 14);\
}\
\
.ace-crimson-editor .ace_line .ace_invalid {\
  text-decoration: line-through;\
  color: rgb(224, 0, 0);\
}\
\
.ace-crimson-editor .ace_line .ace_fold {\
}\
\
.ace-crimson-editor .ace_line .ace_support.ace_function {\
  color: rgb(192, 0, 0);\
}\
\
.ace-crimson-editor .ace_line .ace_support.ace_constant {\
  color: rgb(6, 150, 14);\
}\
\
.ace-crimson-editor .ace_line .ace_support.ace_type,\
.ace-crimson-editor .ace_line .ace_support.ace_class {\
  color: rgb(109, 121, 222);\
}\
\
.ace-crimson-editor .ace_line .ace_keyword.ace_operator {\
  color: rgb(49, 132, 149);\
}\
\
.ace-crimson-editor .ace_line .ace_string {\
  color: rgb(128, 0, 128);\
}\
\
.ace-crimson-editor .ace_line .ace_comment {\
  color: rgb(76, 136, 107);\
}\
\
.ace-crimson-editor .ace_line .ace_comment.ace_doc {\
  color: rgb(0, 102, 255);\
}\
\
.ace-crimson-editor .ace_line .ace_comment.ace_doc.ace_tag {\
  color: rgb(128, 159, 191);\
}\
\
.ace-crimson-editor .ace_line .ace_constant.ace_numeric {\
  color: rgb(0, 0, 64);\
}\
\
.ace-crimson-editor .ace_line .ace_variable {\
  color: rgb(0, 64, 128);\
}\
\
.ace-crimson-editor .ace_line .ace_xml_pe {\
  color: rgb(104, 104, 91);\
}\
\
.ace-crimson-editor .ace_marker-layer .ace_selection {\
  background: rgb(181, 213, 255);\
}\
\
.ace-crimson-editor .ace_marker-layer .ace_step {\
  background: rgb(252, 255, 0);\
}\
\
.ace-crimson-editor .ace_marker-layer .ace_stack {\
  background: rgb(164, 229, 101);\
}\
\
.ace-crimson-editor .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid rgb(192, 192, 192);\
}\
\
.ace-crimson-editor .ace_marker-layer .ace_active_line {\
  background: rgb(232, 242, 254);\
}\
\
.ace-crimson-editor .ace_meta.ace_tag {\
  color:rgb(28, 2, 255);\
}\
\
.ace-crimson-editor .ace_marker-layer .ace_selected_word {\
  background: rgb(250, 250, 255);\
  border: 1px solid rgb(200, 200, 250);\
}\
\
.ace-crimson-editor .ace_string.ace_regex {\
  color: rgb(192, 0, 192);\
}";

exports.cssClass = "ace-crimson-editor";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});

}})
