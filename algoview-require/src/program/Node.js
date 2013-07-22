/**
 * class Node : models a program node
 * @param filePosition : position infos in the source code
 * @param childNodes (optionnal) : Node... or Node[] : a variable number of child nodes
 * @author michael
 */

define("Node",
['antlr', "NodeContext"],
function(antlr, NodeContext) {
	function Node(tokenType, token) {

		if (token === undefined) {
			token = new org.antlr.runtime.CommonToken(42);
		}

		org.antlr.runtime.tree.CommonTree.call(this, token); 
		
		this.children = new Array();
	}

	org.antlr.lang.extend(Node, org.antlr.runtime.tree.CommonTree, {
	});

	// Pour l'instant, comme on n'a qu'un seul fichier, on renvoie juste la ligne
	Node.prototype.getFilePosition = function() {
		return this.token.line;
	}

	Node.prototype.setExecuted = function(executed) {
		this.executed = executed;
	}

	Node.prototype.isExecuted = function() {
		return this.executed;
	}

	Node.prototype.createContext = function() {
		return new NodeContext();
	}

	Node.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		console.log('Executing ', this);
		nodeStack.pop();
		return false;
	}

	return Node;
});
