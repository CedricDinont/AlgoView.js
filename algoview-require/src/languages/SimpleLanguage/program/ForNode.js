define("ForNode",
["MemoryValue", "Node", "ArithmeticExpressionNode", "AssignNode", 
"TestNode", "InvalidExpressionException", "InternalError"],
function(MemoryValue, Node, ArithmeticExpressionNode, AssignNode, 
TestNode, InvalidExpressionException, InternalError) {

	function ForNode(tokenType, token) {	
		Node.call(this, tokenType, token);
	}

	// Prototype based inheritance
	ForNode.prototype = new Node();
	ForNode.prototype.constructor = ForNode;

	ForNode.prototype.getVariable = function() {
		return this.children[0];
	}

	ForNode.prototype.getBeginExpression = function() {
		return this.children[1];
	}

	ForNode.prototype.getEndExpression = function() {
		return this.children[2];
	}

	ForNode.prototype.getStepExpression = function() {
		return this.children[3];
	}

	ForNode.prototype.getInstructions = function() {
		return this.children[4];
	}

	ForNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		// console.log("ForNode", nodeContext.currentChild);
		if (nodeContext.currentChild == 0) {
			// Affectation de la valeur initiale à la variable de boucle
			var assignInitValueNode = new AssignNode(undefined, undefined);
			assignInitValueNode.addChild(this.getVariable());
			assignInitValueNode.addChild(this.getBeginExpression());
			nodeContext.assignInitValueNodeContext = nodeStack.push(assignInitValueNode);

			nodeContext.currentChild++;
			return false;
			
		} else if (nodeContext.currentChild == 1) {
			// Evaluation du pas (nécessaire pour choisir le sens du test)
			nodeContext.stepExpressionContext = nodeStack.push(this.getStepExpression());
			nodeContext.currentChild++;
			return false;
			
		} else if (nodeContext.currentChild == 2) {
			// Création et empilement du test de fin de boucle
			var testNode = new TestNode(undefined, undefined);
			testNode.addChild(this.getVariable());
			testNode.addChild(this.getEndExpression());
			
			// Mise à jour du sens du test...
			
			var stepMemoryValue = nodeContext.stepExpressionContext.getValue();
			// On convertir en entier juste pour récupérer le signe
			// Si ce n'est pas convertible en entier, c'est que ce n'est pas un pas valide
			var stepMemoryValueAsInteger;
			
			try {
				stepMemoryValueAsInteger = stepMemoryValue.convertTo(MemoryValue.INTEGER);
			} catch (e) {
				throw new InvalidExpressionException();
			}
			
			var stepValue = stepMemoryValueAsInteger.getPrimitiveValue();
			if (stepValue >= 0) {
				testNode.setOperator("GT");
			} else {
				testNode.setOperator("LT");
			}
			nodeContext.testNodeContext = nodeStack.push(testNode);
			nodeContext.currentChild++;
			return false;
			
		} else if (nodeContext.currentChild == 3) {
			// Evaluation du test de fin de boucle
			var endLoopTestMemoryValue = nodeContext.testNodeContext.getValue();
			var endLoopTestValueAsBoolean;
			
			try {
				endLoopTestValueAsBoolean = endLoopTestMemoryValue.convertTo(MemoryValue.BOOLEAN);
			} catch (e) {
				// Ca ne devrait jamais arriver car le test doit toujours être un booléen
				throw new InternalError();
			}
			
			if (endLoopTestValueAsBoolean.getPrimitiveValue() == true) {
				// On est arrivé à la fin de la boucle
				nodeStack.pop();
				return false;
			} else {
				// On doit encore boucler
				// Empilement des instructions
				nodeStack.push(this.getInstructions());
				nodeContext.currentChild++;
				return false;
			}
			
		} else if (nodeContext.currentChild == 4) {
			// On reste sur ce noeud pour afficher correctement le numéro de ligne 
			// avant l'incrémentation de la variable de boucle
			nodeContext.currentChild++;
			return true;
			
		} else if (nodeContext.currentChild == 5) { 
			// Après les instructions  : Lancement de l'incrémentation de la variable de boucle
			var assignNewValue = new AssignNode(undefined, undefined);
			assignNewValue.addChild(this.getVariable());
			
			var plusNode = new ArithmeticExpressionNode(undefined, undefined);
			plusNode.setOperator("+");
			plusNode.addChild(this.getVariable());
			plusNode.addChild(this.getStepExpression()); // Attention, le step n'est pas réévalué
			assignNewValue.addChild(plusNode);
			nodeStack.push(assignNewValue);
				
			// Au retour, on retourne à l'évaluation du test de fin de boucle
			nodeContext.currentChild = 2;
			return false;
		}
	}
	
	return ForNode;
});
