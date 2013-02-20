var AlgoUtils = {
	
	//tree = algoViewApp.programRunner.getProgramTree();
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
	,
	printTreeByLevel : function(tree){
	
			var queue = [];
			
			queue.push( tree );
			tree.visited = true;
			tree.level = 1;
			
			while( queue.length > 0 ){

				
				var node = queue[0];
				queue.splice(0,1);
				
				var nbChildren = node.getChildCount();
				

				console.log( node.level + " - " + node.constructor.name);

	
				
				for(var i=0; i<nbChildren; i++){
					
					var child = node.getChild(i);	
					
					if( !child.visited ){
						child.visited = true;
						child.level = node.level + 1;
						queue.push( child );
					}
					
				}			
				
				
			
			
			}
		
	}
	
	
}
