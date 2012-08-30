/**
 * class MemoryTableView implements View
 * HTML tableView of the Memory
 * @param containerId : identifier of the HTML element that will contain the HeapView 
 * @author michael
 */
var MemoryTableView = function(containerId){

	View.call(this);		// View implementation
	
	var containerElement = document.getElementById(containerId);

	var buildPointersString = function(value){
		
		var pointersString = " [ ";

		pointers = value.getPointers();	
		
		for(var pointerKey in pointers){
			
			pointersString += pointers[pointerKey].getAddress() + " ";
		}
		
		pointersString += "]";
	
		return pointersString;
		
	}


		
	// @Override	
	this.update = function(memory){
	
		var d1 = new Date();		



		
		if(memory != undefined){
			var memoryTableHTML = "<table id='memoryHTMLTable' border='1' class='flattenMemoryTable'>";

			memoryTableHTML += "<tr><th>Address</th><th>Value</th></tr>";
						
			var startAddress = 1;
			var endAddress = memory.getSize();
			
			
			
			 
			
			for(var i= startAddress ; i<= endAddress; i++){
			
				memoryTableHTML += "<tr> <td> " + i + " </td>";
				 

				var value = memory.getValue(i, true); // true = internal access ; allow to access to parts of memory values
				var pointersString = buildPointersString( value );
				var className = value.hasChanged() ? "changed" : "unchanged";
				var stackAccessString = value.isAccessibleFromStack() ? "*" : "";
				memoryTableHTML += "<td class='"+ className + "'> " + value.toString() + stackAccessString + pointersString + " </td>"; 		

				
				
				memoryTableHTML += "</tr>";
			

			}
			
			memoryTableHTML += "</table>";
			
			containerElement.innerHTML = memoryTableHTML;
		}
		else{
			containerElement.innerHTML = "";
		}
		
		var d2 = new Date();
		this.log("memory view refresh: " + (d2 - d1));		
	
	}
	

	

}
