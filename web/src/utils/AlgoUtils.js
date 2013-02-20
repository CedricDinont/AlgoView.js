var AlgoUtils = {
	
	
	countNodesInTree : function(tree){
	
		return this.countNodesInTreeRec(1, tree);
	},

	countNodesInTreeRec : function(nbVisited, node){
	
		node.visited = true;
		
		var nbChildren = node.getChildCount();
		
		for(var i=0; i<nbChildren; i++){
			
			var child = node.getChild(i);
			
			if( !child.visited ){
				nbVisited = this.countNodesInTreeRec( nbVisited + 1, child );
			}
			
		}
		
		return nbVisited;
	}	
	
	
}
