var AlgoUtils = {
	
	getTreeLevelsString : function(tree){
	
			var queue = [];
			var levels = [];
			
			queue.push( tree );
			tree.visited = true;
			tree.level = 0;
			
			while( queue.length > 0 ){

				
				var node = queue[0];
				queue.splice(0,1);
				
				var nbChildren = node.getChildCount();
				
				if ( levels[ node.level ] == undefined ){
					levels[ node.level ] = node.level + " - ";
				}
				
				levels[ node.level ] += node.constructor.name + " ";

	
				
				for(var i=0; i<nbChildren; i++){
					
					var child = node.getChild(i);	
					
					if( !child.visited ){
						child.visited = true;
						child.level = node.level + 1;
						queue.push( child );
					}
					
				}			
				
				
			
			
			}
			
			var levelsStringRepresentation = "";
			
			for(var i=0; i<levels.length; i++){
					levelsStringRepresentation += levels[i];
					levelsStringRepresentation += "\n";
			}
			
			return levelsStringRepresentation;
		
	}
	
	
}
