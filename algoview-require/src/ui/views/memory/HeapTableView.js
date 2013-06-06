/**
 * class HeapTableView implements View
 * HTML tableView of the Heap
 * @param containerId : identifier of the HTML element that will contain the HeapView 
 * @param showDebugInfos (optionnal) : indicates to show the type and the size of variables
 * @param showIntermediateCells (optionnal) : asks for a detailed view of memory units (expliciting unused memory units)  
 * @author michael
 */
 
 define("HeapTableView",
["View", "PointerDataType", "PointerMemoryValue"],
function(View, PointerDataType, PointerMemoryValue) {
	
var HeapTableView = function(containerId, showDebugInfos, showIntermediateCells, extComponent) {

	View.call(this);		// View implementation
	
	var containerElement = document.getElementById(containerId);

	this.extComponent = extComponent;

	// @Override
	this.update = function(memory) {
		var d1 = new Date();		
		this.updateHeap(memory);
		var d2 = new Date();
		this.log("heap view refresh: " + (d2 - d1));
	}
	
	var buildDataString = function(value, dataType, dataSize) {
		dataString = value.toString();
		
		if (showDebugInfos) {
			if(dataType != undefined) {
				dataString = dataType.getName() + "/" + dataSize + " (" + dataString + ")";	
			}
		}

		return dataString;		
	}
	
	this.updateHeap = function(memory) {
		var heap = memory.getHeap();
		
		if(heap != undefined) {
			var heapTableHTML = "<table id='heapHTMLTable' border='1' class='flattenMemoryTable'>";
			heapTableHTML += "<col class='heapTableAddressColumn'/>";
			heapTableHTML += "<col class='heapTableValueColumn'/>";
			heapTableHTML += "<tr><th colspan='4'>Heap</th>";
			heapTableHTML += "<tr><th>Address</th><th>Value</th></tr>";
			
			var startAddress = heap.getStartAddress();
			var endAddress = heap.getEndAddress();
			 
			var rowSpan = 1;
			
			var dataType;
			var dataAddress;
			var dataString;
			var dataSize;
			var value;
			var pointers;
			
			for (var i = startAddress ; i<= endAddress; i++) {			
				heapTableHTML += "<tr> <td> " + i + " </td>";
				
				if (rowSpan > 1) {
					rowSpan--;
				} else {
					var unit = heap.getUnit(i);

					if (unit != undefined) {
						dataAddress = unit.getAddress();
						value = memory.getValue(i);

						if (unit.isComposedDataType()) {
							dataType = unit.getChild(i).getDataType();
						} else {
							dataType = unit.getDataType();
						}

						dataSize = dataType.getSize();					
						dataString = buildDataString(value, dataType, dataSize);
						
						if (!showIntermediateCells) {
							rowSpan = dataSize;
						}
						
						var typeClassName;
						
						var backgroundClassName = value.hasChanged() ? "changed" : "";	
						
						// special case of POINTER
						if (dataType instanceof PointerDataType) {
							typeClassName = "address";
							
							// le pointeur NIL n'est pas invalide
							if( value != PointerMemoryValue.NIL.getPrimitiveValue() && memory.getUnit( value ) == undefined  ){
								backgroundClassName = "invalid";
							}
											
						} else {
							typeClassName = "value";				
						}
						
											
						heapTableHTML += "<td rowspan= '" + rowSpan + "' class='" + typeClassName + " " + backgroundClassName + "'> " + dataString + " </td>"; 		
					} else {
						var value = heap.getMemory().getValue(i, true);
						dataString = buildDataString(value);
						
						var backgroundClassName = value.hasChanged() ? "changed" : "";		
						heapTableHTML += "<td class='" + backgroundClassName + "'> " + dataString + " </td>"; 
					}
				}
				heapTableHTML += "</tr>";
			}
			heapTableHTML += "</table>";	
			containerElement.innerHTML = heapTableHTML;
		}
		
		if (extComponent != undefined) {
			extComponent.doLayout();
		}
	}
	
}

    return HeapTableView;

});
