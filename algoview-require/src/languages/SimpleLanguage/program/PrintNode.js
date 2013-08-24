define("PrintNode",
["Node", "ProgramRunnerEvent", "StringNode"],
function(Node, ProgramRunnerEvent, StringNode) {
	
	function PrintNode(tokenType, token, newLine) {	
		Node.call(this, tokenType, token); 

		this.newLine = newLine;
	}

	// prototype based inheritance
	PrintNode.prototype = new Node();
	PrintNode.prototype.constructor = PrintNode;

	PrintNode.prototype.getMessage = function()  {
		var quotedText = this.getParameter().getText();
		return quotedText.substring(1, quotedText.length - 1);
	}

	PrintNode.prototype.getParameter = function() {
		return this.children[0];
	}

	PrintNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.parameterContext = this.getParameter().createContext();
			nodeStack.push(this.getParameter(), nodeContext.parameterContext);
			nodeContext.currentChild++;
		} else {
			nodeContext.currentChild = 0;
			
			var parameter = this.getParameter();
			var outputText;
			if (parameter instanceof StringNode) {
				var quotedText = parameter.getText();
				outputText = quotedText.substring(1, quotedText.length - 1);
			} else {
				outputText = "" + nodeContext.parameterContext.getValue().toString(); // On force la conversion en chaîne de caractères
			}
			
			if (this.newLine == true) {
				outputText += "\n";
			}
			
			var event = new ProgramRunnerEvent(programRunner, "OUTPUT_TEXT", outputText);
			programRunner.notifyListeners(event);
			nodeStack.pop();
		}
		
		return false;
	}
	
	return PrintNode;
});
