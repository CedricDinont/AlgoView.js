/**
 * class MemoryGraphicalView implements View
 * Graphical view of a memory
 * This view uses the Raphael library (it aggregates a Raphael drawing context)  
 * @param containerId : identifier of the HTML element that will contain the GraphicalMemoryView
 * @author michael
 */

  define("MemoryGraphicalView",
["MathUtils", "View", "MemoryUnitView", "LinkView", "PointerMemoryValue", "raphael"],
function(MathUtils, View, MemoryUnitView, LinkView, PointerMemoryValue, Raphael) {
	
var MemoryGraphicalView = function(containerId) {

	View.call(this);		// View implementation
	
	var containerElement = document.getElementById(containerId);
	
	this.maxY = undefined;
	
	this.linkViews = {}; // associative array "from-" + address -> linkView
	
	this.heapUnitCounter = 0;	// provisoire: sert au profiling
	this.stackUnitCounter = 0;		
	this.linkCounter = 0;
	
	this.updateDimension = function() {
		this.width = containerElement.clientWidth;
		this.height = containerElement.clientHeight;
		if (this.ctx) {
			this.ctx.setSize(this.width, this.height);
		}
	}
	
	this.updateDimension();
	
	this.ctx = Raphael(containerId, this.width, this.height);
	
	this.initLayoutManager = function() {
		// sert au layout manager : coordonnées des prochaines unités construites
		this.newStackUnitCoordinates = { x: MemoryGraphicalView.STACK_UNIT_MIN_X, y: MemoryGraphicalView.UNIT_BORDER_MARGIN};
		this.newHeapUnitCoordinates = { x: MemoryGraphicalView.HEAP_UNIT_MIN_X, y: MemoryGraphicalView.UNIT_BORDER_MARGIN};	
	}
	
	this.initLayoutManager();
	
	// @Override	
	this.update = function(memory) {	
		var d1 = new Date();	
		
		this.updateDimension();

		if (memory.isEmpty()) {	
			this.log("Clear graphical memory view");
			this.ctx.clear();
			this.initLayoutManager();
		} else {
			// a two-phase approach is necessary to refresh views :
			// 1. unit views
			// 2. link views
			// All units views must be created before establishing links
			
			var oldHeapUnitCounter = this.heapUnitCounter;
			var oldStackUnitCounter = this.stackUnitCounter;
			var oldLinkCounter = this.linkCounter;	
			
			this.heapUnitCounter = this.updateUnits( memory, memory.getHeap(), this.heapUnitCounter, this.newHeapUnitCoordinates );
			this.stackUnitCounter = this.updateUnits( memory, memory.getStack(), this.stackUnitCounter, this.newStackUnitCoordinates );
			
			this.linkCounter = this.updateLinks( memory, memory.getHeap(), this.linkCounter );	
			this.linkCounter = this.updateLinks( memory, memory.getStack(), this.linkCounter );
		}
		
		var d2 = new Date();
		
		this.log("graphical view refresh: " + (d2 - d1) + " (" + 
			+ ( this.heapUnitCounter - oldHeapUnitCounter ) + " heap(s), "
			+ ( this.stackUnitCounter - oldStackUnitCounter) + " stack(s), "
			+ ( this.linkCounter - oldLinkCounter) + " link(s) "
			+ "views created)" 
		);		
	}
	
	this.updateLinks = function(memory, segment, linkCounter) {
		// updating link views
		for (var unitAddress in segment.memoryUnits) {
			var unit = segment.memoryUnits[unitAddress];
			
			if (unit != undefined) {	
				if (! unit.isComposedDataType()) {
					if (this.updateLinkView(memory, unit)) {
						linkCounter++;
					}	
				} else {				
					var children = unit.getChildren();
					
					//console.log(unitAddress + " - " + children);
					
					for (var childrenKey in children) {						
						if (this.updateLinkView(memory, children[childrenKey])) {
							linkCounter++;
						}											
					}				
				}
			}
		}	
		
		return linkCounter;	
	}
	
	this.increaseCoordinates = function(coordinates, view) {
		var newX = coordinates.x;
		var newY = coordinates.y + view.height + MemoryGraphicalView.NEW_UNIT_DY;
		
		if (newY > this.height - MemoryGraphicalView.UNIT_BORDER_MARGIN) {
			this.maxY = newY;
			newY = MemoryGraphicalView.UNIT_BORDER_MARGIN;
			newX = newX + MemoryGraphicalView.NEW_UNIT_DX; 
		}
		
		coordinates.x = newX;
		coordinates.y = newY;
	}
	
	this.decreaseCoordinates = function(coordinates, view) {
		coordinates.x = view.x;
		coordinates.y = view.y; /*- view.height - MemoryGraphicalView.NEW_UNIT_DY;
		
		if( newY < MemoryGraphicalView.UNIT_BORDER_MARGIN){
			newY = this.maxY - MemoryGraphicalView.NEW_UNIT_DY;
			newX = newX - MemoryGraphicalView.NEW_UNIT_DX; 
		}
		
		coordinates.x = newX;
		coordinates.y = newY;*/
	}	
	
	this.updateUnits = function(memory, segment, unitCounter, coordinates) {
		// updating unit views
		// we consider only the allocated units
		for (var unitAddressKey in segment.memoryUnits) {
			var address = MathUtils.getAddressFromKey(unitAddressKey);
			var unit = segment.memoryUnits[unitAddressKey];
			
			if (unit != undefined && unit.matchKey(unitAddressKey)) {
				//console.log(unitAddressKey);

				var dataType = unit.getDataType();
				var dataString = memory.getValue(address).toString();
					
				if (this.updateMemoryUnitView(unit, coordinates.x, coordinates.y)) {
					unitCounter++;
					this.increaseCoordinates(coordinates, unit.getView());				
				}
					
				var children = unit.getChildren();
				for (var childrenKey in children) {
					this.updateMemoryUnitView(children[childrenKey]);						
				}	
			}
		}	
		return unitCounter;
	}

	this.removeLinkView = function(address) {
		var linkViewKey = "from-" + address;
		var linkView = this.linkViews[linkViewKey];
		
		if (linkView != undefined) {
			linkView.clear();
			delete this.linkViews[linkViewKey];
		}	
	}

	this.updateLinkView = function(memory, unit) {
		var linkCreated = false;
			
		// special case of a POINTER
		if (unit.getValue() instanceof PointerMemoryValue) {
			
			var pointeeAddress = unit.getPrimitiveValue();
			var pointeeUnit = memory.getUnit( pointeeAddress );
			
			// allows pointing inside a composed data type
			if (pointeeUnit != undefined && pointeeUnit.isComposedDataType()) {
				pointeeUnit = pointeeUnit.getChild( pointeeAddress );
			}
			
			var linkViewKey = "from-" + unit.getAddress();
			var linkView = this.linkViews[linkViewKey];	
			
			// we remove and regenerate the link if the destination unit has changed
			if (linkView != undefined && linkView.getDestUnit() != pointeeUnit) {
				linkView.clear();
				delete this.linkViews[linkViewKey];
				linkView = undefined;
			}						
			
			if (linkView == undefined && pointeeUnit != undefined) { // no link and valid address
				this.linkViews[linkViewKey] = new LinkView(this.ctx, unit, pointeeUnit);
				linkCreated = true;
				//console.log(unit.getAddress() + "->" + pointeeAddress);
			}
		}

		return linkCreated;		
	}

	// renvoie true si une vue a été créée
	this.updateMemoryUnitView = function(unit, x, y) {
		var existingView = unit.getView();
		var memoryUnitView;
		var unitViewCreated = false;
		
		if (existingView) {
			memoryUnitView = existingView;	// avoids regenerating a MemoryUnitView
		} else if (x != undefined && y != undefined) {
			if (unit.viewX != undefined) {
				x = unit.viewX;
			}
			if (unit.viewY != undefined) {
				y = unit.viewY;
			}
			
			memoryUnitView = new MemoryUnitView(this, unit, x, y);			
			unitViewCreated = true;
		}
		
		if (memoryUnitView != undefined) {
			memoryUnitView.update();	
		}
		
		return unitViewCreated;
	}
	
	
	// event handling
	
	var storeCurrentCoordinates = function(raphaelObject) {
		
		// particular case for NIL lines
		if( raphaelObject.xstart != undefined){
			raphaelObject.oxstart = raphaelObject.xstart;
			raphaelObject.oystart = raphaelObject.ystart;
			raphaelObject.oxend = raphaelObject.xend;
			raphaelObject.oyend = raphaelObject.yend;
		}
		else{
				
			raphaelObject.ox = raphaelObject.attr("x");
			raphaelObject.oy = raphaelObject.attr("y");	
		}
	}

    this.unitMouseDrag = function(memoryUnitView) {
		var memoryUnitBoxObject = memoryUnitView.getBoxObject();
		storeCurrentCoordinates(memoryUnitBoxObject);
		
		var linkedObjects = memoryUnitView.getLinkedObjects();
		for (var i = 0; i < linkedObjects.length; i++) {
			storeCurrentCoordinates(linkedObjects[i]);	
		}
		
		// recursive all in child views
		
		var childViews = memoryUnitView.getChildViews();
		for(var i = 0; i < childViews.length; i++){
			this.unitMouseDrag(childViews[i]);
		}
		

				
    };
	
	var translateObject = function(raphaelObject, dx, dy) {
		
		// particular case for NIL pointers
		if( raphaelObject.oxstart != undefined){		
			raphaelObject.xstart = raphaelObject.oxstart + dx;
			raphaelObject.ystart = raphaelObject.oystart + dy;
			
			raphaelObject.xend = raphaelObject.oxend + dx;		
			raphaelObject.yend = raphaelObject.oyend + dy;

							
			raphaelObject.attr({path: "M"+ raphaelObject.xstart + " " + raphaelObject.ystart + "L" + raphaelObject.xend + " " + raphaelObject.yend});
		}
		else{
				
			raphaelObject.attr( {x: raphaelObject.ox + dx, y: raphaelObject.oy + dy});
		}
	}
	
	this.unitMouseMove = function(memoryUnitView, dx, dy) {	
		var memoryUnitBoxObject = memoryUnitView.getBoxObject();	
	
		translateObject(memoryUnitBoxObject, dx, dy);
		
        memoryUnitView.x = memoryUnitBoxObject.attr("x");
        memoryUnitView.y = memoryUnitBoxObject.attr("y");			

		// updating linked objects
		var linkedObjects = memoryUnitView.getLinkedObjects();
		for (var i = 0; i < linkedObjects.length; i++) {
			translateObject(linkedObjects[i], dx, dy);	
		}
		
		// undating edges
		for (var linkViewKey in this.linkViews) {
			this.linkViews[linkViewKey].update();
		}
		
		// recursive all in child views
		
		var childViews = memoryUnitView.getChildViews();
		for(var i = 0; i < childViews.length; i++){
			this.unitMouseMove(childViews[i], dx, dy);
		}
				
		

		
		//this.ctx.safari();
	};

	// for debug and demos
	this.setPosition = function(memory, address, x, y) {		
		var unit = memory.getUnit(address);
		
		if (unit == undefined) {
			return;
		}
		
		var unitView = unit.getView();
		console.log(unitView);	
		if (unitView  != undefined) {	
			unitView.setX(x);
			unitView.setY(y);
		} else {
			unit.viewX = x;
			unit.viewY = y;
		}
	}
	
	this.clear = function() {
		this.ctx.clear();
	}

}

// static variables
MemoryGraphicalView.UNIT_BORDER_MARGIN = 50;
MemoryGraphicalView.NEW_UNIT_DX = 100;
MemoryGraphicalView.NEW_UNIT_DY = 20;
MemoryGraphicalView.STACK_UNIT_MIN_X = 50;   
MemoryGraphicalView.HEAP_UNIT_MIN_X = 400;

// Prototype based inheritance
MemoryGraphicalView.prototype = new View();

return MemoryGraphicalView;

});
