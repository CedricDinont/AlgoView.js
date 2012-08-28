var InstructionListNode = function(tokenType, token) {	
	Node.call(this, tokenType, token); 
}

// Prototype based inheritance
InstructionListNode.prototype = new Node();

InstructionListNode.prototype.execute = function(memory, nodeStack, programRunner) {
	//	console.log("Execute instruction list node", this, this.currentChild);

	if (this.currentChild < this.children.length) {
		nodeStack.push(this.children[this.currentChild]);
		
		/**
		 *  Si on ne nous demande pas de revenir sur la même ligne en fin d'exécution,
		 * au prochain tour de boucle, on empilera la prochaine instruction.
		 **/
		if (! programRunner.stopAfterInstructionExecution) {
			++this.currentChild;
		} else {
			/**
			 * Si on ne nous demande pas de revenir sur la même ligne en fin d'exécution,
			 * on ne passe au prochain fils que quand on a vu un fils pour la seconde fois,
			 * une fois qu'il est exécuté.
			 **/
			if (this.children[this.currentChild].isExecuted()) {
				++this.currentChild;
			}
		}
		
	//	nodeStack.print();
		
		return true;
	} else {
		this.currentChild = 0;
		nodeStack.pop();
	}
	
//	nodeStack.print();
	
	return false;
}
