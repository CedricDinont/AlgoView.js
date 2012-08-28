define("ace/mode/simple_language",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/simple_language_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle","ace/worker/worker_client"],function(require,exports,module){var oop=require("../lib/oop"),TextMode=require("./text").Mode,Tokenizer=require("../tokenizer").Tokenizer,HighlightRules=require("./simple_language_highlight_rules").SimpleLanguageHighlightRules,MatchingBraceOutdent=require("./matching_brace_outdent").MatchingBraceOutdent,CstyleBehaviour=require("./behaviour/cstyle").CstyleBehaviour,CStyleFoldMode=require("./folding/cstyle").FoldMode,WorkerClient=require("../worker/worker_client").WorkerClient,Mode=function(){this.$tokenizer=new Tokenizer((new HighlightRules).getRules()),this.$outdent=new MatchingBraceOutdent,this.$behaviour=new CstyleBehaviour,this.foldingRules=new CStyleFoldMode};oop.inherits(Mode,TextMode),function(){this.getNextLineIndent=function(state,line,tab){var indent=this.$getIndent(line);if(state=="start"){var match=line.match(/^.*[\{\(\[]\s*$/);match&&(indent+=tab)}return indent},this.checkOutdent=function(state,line,input){return this.$outdent.checkOutdent(line,input)},this.autoOutdent=function(state,doc,row){this.$outdent.autoOutdent(doc,row)},this.createWorker=function(session){var worker=new WorkerClient(["ace"],"worker-simple_language.js","ace/mode/simple_language_worker","SimpleLanguageWorker");return worker.attachToDocument(session.getDocument()),worker.on("error",function(e){session.setAnnotations([e.data])}),worker.on("ok",function(){session.clearAnnotations()}),worker}}.call(Mode.prototype),exports.Mode=Mode}),define("ace/mode/simple_language_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(require,exports,module){var oop=require("../lib/oop"),TextHighlightRules=require("./text_highlight_rules").TextHighlightRules,SimpleLanguageHighlightRules=function(){this.$rules={start:[{token:"keyword",regex:"END_FOR|END_WHILE|END_IF|BEGIN|END|IF|THEN|ELSE|WHILE|VAR|DO|INTEGER|FLOAT|BOOLEAN|POINTER|CHARACTER|FUNCTION|PROCEDURE|RETURN|PRINT|PRINTLN|ERROR|FOR|FROM|TO|ALLOC|FREE|TRUE|FALSE|STRUCT|RANDOM|<-|NULL|FREE|ALLOCATE|ADDRESS|CONTENT|DEREFERENCE|READ|STEP|REPEAT|UNTIL|\\!|AND|OR"},{token:"comment",regex:"\\/\\/.*$"},{token:"comment",merge:!0,regex:"\\/\\*",next:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"invalid.illegal",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"},{token:"keyword.operator",regex:"!|%|\\+|=|!=|<=|>=|<|>|!|AND|OR"}],comment:[{token:"comment",regex:".*?\\*\\/",next:"start"},{token:"comment",merge:!0,regex:".+"}]}};oop.inherits(SimpleLanguageHighlightRules,TextHighlightRules),exports.SimpleLanguageHighlightRules=SimpleLanguageHighlightRules}),define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(require,exports,module){var Range=require("../range").Range,MatchingBraceOutdent=function(){};(function(){this.checkOutdent=function(line,input){return/^\s+$/.test(line)?/^\s*\}/.test(input):!1},this.autoOutdent=function(doc,row){var line=doc.getLine(row),match=line.match(/^(\s*\})/);if(!match)return 0;var column=match[1].length,openBracePos=doc.findMatchingBracket({row:row,column:column});if(!openBracePos||openBracePos.row==row)return 0;var indent=this.$getIndent(doc.getLine(openBracePos.row));doc.replace(new Range(row,0,row,column-1),indent)},this.$getIndent=function(line){var match=line.match(/^(\s+)/);return match?match[1]:""}}).call(MatchingBraceOutdent.prototype),exports.MatchingBraceOutdent=MatchingBraceOutdent}),define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour"],function(require,exports,module){var oop=require("../../lib/oop"),Behaviour=require("../behaviour").Behaviour,CstyleBehaviour=function(){this.add("braces","insertion",function(state,action,editor,session,text){if(text=="{"){var selection=editor.getSelectionRange(),selected=session.doc.getTextRange(selection);return selected!==""?{text:"{"+selected+"}",selection:!1}:{text:"{}",selection:[1,1]}}if(text=="}"){var cursor=editor.getCursorPosition(),line=session.doc.getLine(cursor.row),rightChar=line.substring(cursor.column,cursor.column+1);if(rightChar=="}"){var matching=session.$findOpeningBracket("}",{column:cursor.column+1,row:cursor.row});if(matching!==null)return{text:"",selection:[1,1]}}}else if(text=="\n"){var cursor=editor.getCursorPosition(),line=session.doc.getLine(cursor.row),rightChar=line.substring(cursor.column,cursor.column+1);if(rightChar=="}"){var openBracePos=session.findMatchingBracket({row:cursor.row,column:cursor.column+1});if(!openBracePos)return null;var indent=this.getNextLineIndent(state,line.substring(0,line.length-1),session.getTabString()),next_indent=this.$getIndent(session.doc.getLine(openBracePos.row));return{text:"\n"+indent+"\n"+next_indent,selection:[1,indent.length,1,indent.length]}}}}),this.add("braces","deletion",function(state,action,editor,session,range){var selected=session.doc.getTextRange(range);if(!range.isMultiLine()&&selected=="{"){var line=session.doc.getLine(range.start.row),rightChar=line.substring(range.end.column,range.end.column+1);if(rightChar=="}")return range.end.column++,range}}),this.add("parens","insertion",function(state,action,editor,session,text){if(text=="("){var selection=editor.getSelectionRange(),selected=session.doc.getTextRange(selection);return selected!==""?{text:"("+selected+")",selection:!1}:{text:"()",selection:[1,1]}}if(text==")"){var cursor=editor.getCursorPosition(),line=session.doc.getLine(cursor.row),rightChar=line.substring(cursor.column,cursor.column+1);if(rightChar==")"){var matching=session.$findOpeningBracket(")",{column:cursor.column+1,row:cursor.row});if(matching!==null)return{text:"",selection:[1,1]}}}}),this.add("parens","deletion",function(state,action,editor,session,range){var selected=session.doc.getTextRange(range);if(!range.isMultiLine()&&selected=="("){var line=session.doc.getLine(range.start.row),rightChar=line.substring(range.start.column+1,range.start.column+2);if(rightChar==")")return range.end.column++,range}}),this.add("string_dquotes","insertion",function(state,action,editor,session,text){if(text=='"'||text=="'"){var quote=text,selection=editor.getSelectionRange(),selected=session.doc.getTextRange(selection);if(selected!=="")return{text:quote+selected+quote,selection:!1};var cursor=editor.getCursorPosition(),line=session.doc.getLine(cursor.row),leftChar=line.substring(cursor.column-1,cursor.column);if(leftChar=="\\")return null;var tokens=session.getTokens(selection.start.row,selection.start.row)[0].tokens,col=0,token,quotepos=-1;for(var x=0;x<tokens.length;x++){token=tokens[x],token.type=="string"?quotepos=-1:quotepos<0&&(quotepos=token.value.indexOf(quote));if(token.value.length+col>selection.start.column)break;col+=tokens[x].value.length}if(!token||quotepos<0&&token.type!=="comment"&&(token.type!=="string"||selection.start.column!==token.value.length+col-1&&token.value.lastIndexOf(quote)===token.value.length-1))return{text:quote+quote,selection:[1,1]};if(token&&token.type==="string"){var rightChar=line.substring(cursor.column,cursor.column+1);if(rightChar==quote)return{text:"",selection:[1,1]}}}}),this.add("string_dquotes","deletion",function(state,action,editor,session,range){var selected=session.doc.getTextRange(range);if(!range.isMultiLine()&&(selected=='"'||selected=="'")){var line=session.doc.getLine(range.start.row),rightChar=line.substring(range.start.column+1,range.start.column+2);if(rightChar=='"')return range.end.column++,range}})};oop.inherits(CstyleBehaviour,Behaviour),exports.CstyleBehaviour=CstyleBehaviour}),define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(require,exports,module){var oop=require("../../lib/oop"),Range=require("../../range").Range,BaseFoldMode=require("./fold_mode").FoldMode,FoldMode=exports.FoldMode=function(){};oop.inherits(FoldMode,BaseFoldMode),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.getFoldWidgetRange=function(session,foldStyle,row){var line=session.getLine(row),match=line.match(this.foldingStartMarker);if(match){var i=match.index;if(match[1])return this.openingBracketBlock(session,match[1],row,i);var range=session.getCommentFoldRange(row,i+match[0].length);return range.end.column-=2,range}if(foldStyle!=="markbeginend")return;var match=line.match(this.foldingStopMarker);if(match){var i=match.index+match[0].length;if(match[2]){var range=session.getCommentFoldRange(row,i);return range.end.column-=2,range}var end={row:row,column:i},start=session.$findOpeningBracket(match[1],end);if(!start)return;return start.column++,end.column--,Range.fromPoints(start,end)}}}.call(FoldMode.prototype)}),define("ace/mode/folding/fold_mode",["require","exports","module","ace/range"],function(require,exports,module){var Range=require("../../range").Range,FoldMode=exports.FoldMode=function(){};(function(){this.foldingStartMarker=null,this.foldingStopMarker=null,this.getFoldWidget=function(session,foldStyle,row){var line=session.getLine(row);return this.foldingStartMarker.test(line)?"start":foldStyle=="markbeginend"&&this.foldingStopMarker&&this.foldingStopMarker.test(line)?"end":""},this.getFoldWidgetRange=function(session,foldStyle,row){return null},this.indentationBlock=function(session,row,column){var re=/^\s*/,startRow=row,endRow=row,line=session.getLine(row),startColumn=column||line.length,startLevel=line.match(re)[0].length,maxRow=session.getLength();while(++row<maxRow){line=session.getLine(row);var level=line.match(re)[0].length;if(level==line.length)continue;if(level<=startLevel)break;endRow=row}if(endRow>startRow){var endColumn=session.getLine(endRow).length;return new Range(startRow,startColumn,endRow,endColumn)}},this.openingBracketBlock=function(session,bracket,row,column,typeRe,allowBlankLine){var start={row:row,column:column+1},end=session.$findClosingBracket(bracket,start,typeRe,allowBlankLine);if(!end)return;var fw=session.foldWidgets[end.row];return fw==null&&(fw=this.getFoldWidget(session,end.row)),fw=="start"&&(end.row--,end.column=session.getLine(end.row).length),Range.fromPoints(start,end)}}).call(FoldMode.prototype)})