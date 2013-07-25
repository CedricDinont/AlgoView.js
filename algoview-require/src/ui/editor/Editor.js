/**
 * @class Ext.ux.aceeditor.Editor
 * @extends Ext.AbstractComponent
 * 
 * @author Harald Hanek (c) 2011
 * @license MIT (http://www.opensource.org/licenses/mit-license.php)
 */

define("ExtUxAceEditor",
["Ext", "aceinit"],
function(Ext, ace) {

	// var Range = ace.require("ace/range").Range;

	Ext.define('Ext.ux.aceeditor.Editor', {
		// extend: 'Ext.AbstractComponent',

		path: '',
	//	parser: 'simple_language',
		sourceCode: '',
		fontSize: '12px',
		theme: 'algoview',
		printMargin: false,
		highlightActiveLine: true,
		tabSize: 4,
		useSoftTabs: false,
		showInvisible: false,
		useWrapMode: false,
		currentLines: [],

		initEditor: function() {
			var me = this;

			me.editor = ace.edit(me.editorId);
			me.setMode(me.parser);
			me.setTheme(me.theme);
			me.editor.getSession().setUseWrapMode(me.useWrapMode);
			me.editor.setShowInvisibles(me.showInvisible);
			me.setFontSize(me.fontSize);
			me.editor.setShowPrintMargin(me.printMargin);
			me.editor.setHighlightActiveLine(me.highlightActiveLine);
			me.getSession().setTabSize(me.tabSize);
			me.getSession().setUseSoftTabs(me.useSoftTabs);
			me.setValue(me.sourceCode);
					
			me.editor.getSession().on('change', function() {
				me.fireEvent('change', me);
			}, me);

			me.editor.on("guttermousedown", function(e) { 
				var target = e.domEvent.target; 
				
				if (target.className.indexOf("ace_gutter-cell") == -1) {
					return;
				}
				if (!e.editor.isFocused()) { 
					return;
				}
				if (e.clientX > 50 + target.getBoundingClientRect().left) {
					return;
				}

				var row = e.getDocumentPosition().row;
				me.toggleBreakpoint(row);
				e.stop();
			});
			
			me.editor.getSession().getDocument().on("change", function(e) {	
				var delta = e.data;
				var range = delta.range;
				
			//	console.log(delta.action);
				
				var length;
				var firstRow;
				
				if (range.end.row == range.start.row) {
				//	console.log("No row insertion/deletion. Leaving.");
					return;
				}
				
				var rowBreakpoints = me.editor.session.getBreakpoints();
			//	console.log("rowBreakpoints", rowBreakpoints);
				
				var newBreakpoints = new Array();
				var currentBreakpoint = 0;
				for (var i in rowBreakpoints) {
					if (rowBreakpoints[i] === true) {
						newBreakpoints[currentBreakpoint] = Number(i);
						currentBreakpoint++;
					}
				}
				
			//	console.log("newBreakpoints before", newBreakpoints);
				
				var startRow = range.start.row;
				var endRow  = range.end.row;
				var numberOfRows = range.end.row - range.start.row;
				
				switch (delta.action) {
					case "insertText":
						// Si l'insertion se fait dans une ligne, on ne décale pas le breakpoint qui se trouve dessus
						if (range.start.column != 0) {
							startRow++;
						}
					case "insertLines":
						for (var i = 0; i < newBreakpoints.length; ++i) {
							if (newBreakpoints[i] >= startRow) {
								newBreakpoints[i] += numberOfRows;
							}
						}
					break;
					
					case "removeText":
						startRow++;
						numberOfRows;
					case "removeLines":
						// console.log(delta, startRow, endRow, numberOfRows);
						var i = 0;
						while (i  < newBreakpoints.length) {
							if ((newBreakpoints[i] >= startRow) && (newBreakpoints[i] <= endRow)) {
								newBreakpoints.splice(i, 1);
							} else if (newBreakpoints[i] > endRow) {
								newBreakpoints[i] -= numberOfRows;
								++i;
							}
							else {
								++i;
							}
						}
					break;
				}

				//console.log("newBreakpoints after", newBreakpoints);

				me.editor.session.clearBreakpoints();			
				me.editor.session.setBreakpoints(newBreakpoints);
			});

			me.editor.focus();
		},

		getEditor: function() {
			return this.editor;
		},

		getSession: function() {
			return this.editor.getSession();
		},

		getTheme: function() {
			this.editor.getTheme();
		},

		setTheme: function(name) {
			// require("theme-" + name + ".js");
			this.editor.setTheme("ace/theme/" + name);
		},

		setMode: function(mode) {
			var Mode = ace.require("ace/mode/" + mode).Mode;
			this.getSession().setMode(new Mode());
		},

		getValue: function() {
			this.editor.getSession().getValue();
		},

		setValue: function(value) {
			this.editor.getSession().setValue(value);
		},

		setFontSize: function(value) {
			this.editor.setFontSize(value);
		},

		undo: function() {
			this.editor.undo();
		},

		redo: function() {
			this.editor.redo();
		},
		
		isBreakpoint: function(row) {
			var breakpoints = this.editor.session.getBreakpoints();
			if (breakpoints[row] === true) {
				return true;
			} else {
				return false;
			}
		},
		
		toggleBreakpoint: function(row) {
			if (this.isBreakpoint(row)) {
				this.editor.session.clearBreakpoint(row);
			} else {
				this.editor.session.setBreakpoint(row);
			}
		},
		
		setBreakpoint: function(row) {
			this.editor.session.setBreakpoint(row);
		},
		
		clearBreakpoint: function(row) {
			this.editor.session.clearBreakpoint(row);
		},
		
		clearBreakpoints: function() {
			this.editor.session.clearBreakpoints();	
		},
		
		setCurrentLine: function(line) {
			try {
				this.editor.renderer.removeGutterDecoration(this.currentLines.pop(), "current_line");
			} catch (e) {
					// On est ici s'il n'y avait pas de ligne courante auparavant
					// On ignore silencieusement
			}
			this.editor.renderer.addGutterDecoration(line, "current_line");
			this.editor.renderer.scrollToLine(line, true, true, function() {});
			this.currentLines.push(line);
			this.updateFunctionCalls();
		},
		
		updateFunctionCalls: function() {
			var functionCalls = new Array();
			for (var currentCall = 0; currentCall < this.currentLines.length; ++currentCall) {
				var currentLine = this.currentLines[currentCall];
				if (! functionCalls[currentLine]) {
					functionCalls[currentLine] = new Array();
				}
				functionCalls[currentLine].push(currentCall);
			}

			this.editor.renderer.setFunctionCalls(functionCalls, this.currentLines.length - 1);
		},
		
		pushCurrentLine: function(line) {
			try {
				this.editor.renderer.removeGutterDecoration(this.currentLines[this.currentLines.length - 1], "current_line");
			} catch (e) {
			}
			
			this.currentLines.push(line);
			this.updateFunctionCalls();
		},
		
		popCurrentLine: function() {
			var line = this.currentLines.pop();
			try {
				this.editor.renderer.removeGutterDecoration(line, "current_line");
			} catch (e) {
			}
			this.updateFunctionCalls();
		},
		
		initCurrentLines: function() {
			try {
				this.editor.renderer.removeGutterDecoration(this.currentLines[this.currentLines.length - 1], "current_line");
			} catch (e) {
			}
			this.currentLines = new Array();
			this.updateFunctionCalls();
		},
		
		setUseWorker: function(useWorker) {
			this.editor.getSession().setUseWorker(useWorker);
		},
		
		onDocumentChange: function() {
			
		}
	});

	return undefined;
}); // end define

