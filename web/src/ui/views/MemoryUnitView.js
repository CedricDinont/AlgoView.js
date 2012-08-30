/**
 * class MemoryUnitView : rounded rectangle-based representation of a memory unit
 * This view uses the Raphael library (it aggregates Raphael Objects) 
 * @param heapGraphicalView : reference on a HeapGraphicalView instance (used to retreive the context and events handlers)
 * @param memoryUnit : the memory unit model
 * @param x : the x-position of the MemoryUnitView
 * @param y : the y-position of the MemoryUnitView 
 * @param fieldName (optionnal) : name of the field (in a structure, or cell index in an array)
 * @param nested (optionnal) : is the memory unit a part of another one ? (cell of an array, field of a structure)
 * @param hideLocationLabel (optionnal and 2D-array specific) : boolean allowing hiding labels in the case of a "matrix" display 
 * @author michael  
 */
var MemoryUnitView = function(heapGraphicalView, memoryUnit, x, y, fieldName, nested, hideLocationLabel){	// throws IllegalArgumentException


	this.x = x; this.y = y;
	this.heapGraphicalView = heapGraphicalView;
	this.memoryUnit = memoryUnit;
	this.memory = this.memoryUnit.getMemory();
	this.dataType = this.memoryUnit.getDataType();
	this.dataSize = this.dataType.getSize();
	this.composedType = this.memoryUnit.isComposedDataType();
	this.address = this.memoryUnit.getAddress();
	this.isField = false;
	this.validAddress = true;
	this.name = this.memoryUnit instanceof Variable ? this.memoryUnit.getName() : undefined;
	this.childViews = [];	// child views for composed data types
	
	if( fieldName != undefined ){
		
		this.isField = true;
	}

	
	this.memoryUnit.view = this;	


	this.heapGraphicalView = heapGraphicalView;
	this.ctx = heapGraphicalView.ctx;

	this.padding = this.composedType ? MemoryUnitView.COMPOSED_TYPE_PADDING : {x : 0, y : 0}; 
	this.width = MemoryUnitView.PIXELS_PER_BYTE * this.dataSize + 2 * this.padding.x;
	this.height = MemoryUnitView.BOX_HEIGHT;	
	
	var self = this;
	
	this.linkedObjects = [];
	
	
	// special case of 2-D arrays
	if( this.dataType instanceof ArrayDataType && this.dataType.getDimensions() == 2 && !nested){

		var nbRows = this.dataType.getLength();
		var nbCols = (this.dataType.getElementsDataType().getSize())/(this.dataType.getElementsDataType().getElementsDataType().getSize());
		
		this.width = MemoryUnitView.PIXELS_PER_BYTE * this.dataType.getElementsSize() + 2 * this.padding.x + this.padding.y;
			
		var cumulatedHeight = this.build2DArrayFields(nbRows, nbCols);
			
		this.height = MemoryUnitView.BOX_HEIGHT * nbRows + this.padding.y;			
	}
	else{
		
		if( !this.composedType ){
			this.buildTicks();
			this.buildValueLabel(this.x, this.y);
		}
		else{
			var cumulatedHeight = this.buildFields();
			
			this.height = cumulatedHeight + this.padding.y;
			
		}
	
	}
	
	if( !hideLocationLabel ){
		this.buildLocationLabel(this.x, this.y, fieldName);
	}
	
	this.buildNameLabel(this.x, this.y, { x: MemoryUnitView.VARIABLE_NAME_TEXT_BIAS.x, y: this.height/2 } );
	



	
	this.boxObject = this.ctx.rect( x, y, this.width, this.height, MemoryUnitView.BOX_BORDER_RADIUS );	

	if( this.isField ){	// drawing a field
		this.boxObject.attr( MemoryUnitView.INTERNAL_BOX_ATTRIBUTES );
	}
	else{
		this.boxObject.attr( MemoryUnitView.BOX_ATTRIBUTES );
	}
	
			
	if( fieldName == undefined){	// on n'ajoute pas d'écouteurs individuels aux champs


		this.boxObject.drag(	function(dx, dy){ heapGraphicalView.unitMouseMove(self, dx, dy) }, 
								function(){ heapGraphicalView.unitMouseDrag(self) }, 
								function(){ } );
	}
	
	//this.update();	

	
}

MemoryUnitView.prototype.getMemoryUnitValueString = function(){
	
	var memoryUnitValueString = this.memoryUnit.hasValue() ? this.memoryUnit.getValue().toString() : MemoryUnitView.UNINITIALIZED_UNIT_STRING;	
	
	if( this.memoryUnit.isBoolean() ){
		memoryUnitValueString = memoryUnitValueString.substring(0, 1).toUpperCase();
	}
	
	return memoryUnitValueString;
}

MemoryUnitView.prototype.buildValueLabel = function(x, y){
	
	var value = this.memory.getValue( this.address );
	var memoryUnitValueString = this.getMemoryUnitValueString();
	this.valueStringObject = this.ctx.text(x+this.width/2, y+this.height/2, memoryUnitValueString );
	
	if( value instanceof PointerMemoryValue ){
		this.valueStringObject.attr( MemoryUnitView.ADDRESS_PRIMARY_TEXT_ATTRIBUTES );
	}
	else{
		this.valueStringObject.attr( MemoryUnitView.VALUE_TEXT_ATTRIBUTES );
	}
	
	this.linkedObjects.push( this.valueStringObject );	
}

MemoryUnitView.prototype.buildNameLabel = function(x, y, bias){
	
	if(this.memoryUnit instanceof Variable){
		var nameLabel = this.ctx.text(x + bias.x, y + bias.y, this.name );
		nameLabel.attr( MemoryUnitView.VARIABLE_NAME_TEXT_ATTRIBUTES );
		this.linkedObjects.push( nameLabel );	
	
	}
		
}
	
MemoryUnitView.prototype.buildLocationLabel = function(x, y, fieldName){
	
	var memoryUnitLocationString;
	var textAttributes;
	
	if(fieldName != undefined){
		memoryUnitLocationString = fieldName;
		textAttributes = MemoryUnitView.FIELD_TEXT_ATTRIBUTES;
		bias = { x:this.width/2, y : MemoryUnitView.FIELD_NAME_TEXT_BIAS.y };
	}
	else{
		memoryUnitLocationString = this.address;
		textAttributes = MemoryUnitView.ADDRESS_SECONDARY_TEXT_ATTRIBUTES;
		bias = MemoryUnitView.ADDRESS_TEXT_BIAS;
	}
	
	var descriptionLabel = this.ctx.text(x + bias.x, y + bias.y, memoryUnitLocationString );
	descriptionLabel.attr( textAttributes );
	this.linkedObjects.push( descriptionLabel );	
	
}

MemoryUnitView.prototype.clear = function(){

		this.boxObject.remove();
		
		for(var i=0; i< this.linkedObjects.length; i++){
			this.linkedObjects[i].remove();
		}
		
		// variable de la pile
		if(this.memoryUnit instanceof Variable){
			this.heapGraphicalView.stackUnitCounter--;
			this.heapGraphicalView.decreaseCoordinates(this.heapGraphicalView.newStackUnitCoordinates, this.memoryUnit.getView() );
		}
		else{ // variable du tas
			this.heapGraphicalView.heapUnitCounter--;
			
			// on ne tient compte que de la structure de plus haut niveau pour le layout
			if(this.memoryUnit.getParent() == undefined){
				
				// on ne met à jour la coordonnée de la prochaine unité du tas QUE s'il s'agit de la dernière variable (on ne remplit pas les "trous")
				if( this.memoryUnit.getView().y + this.memoryUnit.getView().height + MemoryGraphicalView.NEW_UNIT_DY >= this.heapGraphicalView.newHeapUnitCoordinates.y){
					this.heapGraphicalView.decreaseCoordinates(this.heapGraphicalView.newHeapUnitCoordinates, this.memoryUnit.getView() );
				}
			}
			
			
		}
		
		// remove the linkViews towards this memoryUnitView

		var value = this.memoryUnit.getValue();
		var pointers = value.getPointers();
		
		
		for(var pointerKey in pointers){
			
			var address = MathUtils.getAddressFromKey(pointerKey);
			this.heapGraphicalView.removeLinkView(address);
		}	
		
		// remove the linkView from this memoryUnitView	
		this.heapGraphicalView.removeLinkView( this.memoryUnit.getAddress() );
			


}
	

MemoryUnitView.prototype.update = function(){
	
	if( !this.isField ){
		// cell unaccessible from stack
		if( !this.memoryUnit.isAccessibleFromStack() ){
		
			this.boxObject.attr( {stroke: MemoryUnitView.UNACCESSIBLE_NODE_STROKE_COLOR } );
		}
		else{
			this.boxObject.attr( {stroke: MemoryUnitView.ACCESSIBLE_NODE_STROKE_COLOR } );
		}

	}
			
	if( !this.composedType ){
		
		var memoryUnitValueString = this.getMemoryUnitValueString();	
		
		this.valueStringObject.attr( {"text" : memoryUnitValueString } );

		var fillOpacity = 0;
		
		/** 
		 * TODO: A revoir avec Michaël pour validation.
		 * 
		 * Permet de voir les modifications apportées durant une transaction.
		 * Bug à corriger : les tableaux 2D et les structures imbriquées ne se mettent pas bien à jour.
		 **/
		if (this.memoryUnit.hasChanged()) {
			this.boxObject.attr( {fill: MemoryUnitView.NODE_CHANGED_FILL_COLOR } );
			fillOpacity = MemoryUnitView.CHANGED_OPACITY;
		}

		// special case of a POINTER
		if( this.memoryUnit.getValue() instanceof PointerMemoryValue ){
			
		
			if( !this.memoryUnit.isValidPointer()  ){
				this.validAddress = false;
				this.boxObject.attr( {fill:MemoryUnitView.NODE_INVALID_ADDRESS_FILL_COLOR } );
				fillOpacity = MemoryUnitView.INVALID_ADDRESS_OPACITY;
			}
			else{
				
				this.validAddress = true;
			}


		}
		
		this.boxObject.attr( {"fill-opacity": fillOpacity } );	
	}
	
		
	// mise à jour des vues filles
	for(var i=0; i<this.childViews.length; i++){
		this.childViews[i].update();
	}	


}	



MemoryUnitView.prototype.build2DArrayFields = function(nbRows, nbCols){
	
	var rowChildren = this.memoryUnit.getChildren();
	var dataElementSize = this.memoryUnit.getDataType().getElementsDataType().getElementsDataType().getSize();
	
	var currentRow = 0;
	var currentCol = 0;
	var hideLocationLabel = false;
	var bias = MemoryUnitView.FIELD_NAME_TEXT_BIAS;
	var textAttributes = MemoryUnitView.FIELD_TEXT_ATTRIBUTES;
	
	
	for(var rowChildKey in rowChildren){
	
		var rowChildUnit = rowChildren[rowChildKey];
		var colChildren = rowChildUnit.getChildren();
		
		var descriptionLabel = this.ctx.text(this.x + bias.x, this.y + this.padding.y + currentRow * MemoryUnitView.BOX_HEIGHT + MemoryUnitView.BOX_HEIGHT/2, currentRow );
		
		descriptionLabel.attr( textAttributes );
		
		this.linkedObjects.push( descriptionLabel );	
			
		
		for(var colChildKey in colChildren){

			var cellUnit = rowChildUnit = colChildren[ colChildKey ];
			
			var graphicalOffset = this.padding.y + currentCol * MemoryUnitView.PIXELS_PER_BYTE * dataElementSize + this.padding.x;
			

						
			var fieldView = new MemoryUnitView(this.heapGraphicalView, cellUnit, this.x + graphicalOffset , this.y + this.padding.y + currentRow * MemoryUnitView.BOX_HEIGHT, currentCol, true, hideLocationLabel);
			
			this.linkedObjects.addAll( fieldView.getAllObjects() );	
			
			currentCol++;
						
			if(currentCol >= nbCols){
				
				currentCol = 0;
				currentRow++;
				hideLocationLabel = true;
			}		
			
			this.childViews.push( fieldView );
		
		}
		
		
		
	}
	
	return 42;
	
}

MemoryUnitView.prototype.buildFields = function(){
	
	var cumulatedHeight = 0;
	var graphicalOffset = this.padding.x;
	
	
	if( this.memoryUnit.isComposedDataType() ){

		var isStructure = this.memoryUnit.isStructure();
		var fields;
		
		if(isStructure){
			fields = this.memoryUnit.getDataType().getStructureDeclarationNode().getFieldDeclarationList().getChildren();
		}
		
		var children = this.memoryUnit.getChildren();
		var i = 0;
		var fieldName;

			
					
		for(var childKey in children){
		
			var childUnit = children[childKey];
			var childSize = childUnit.getSize();
			
			
			if(isStructure){
				fieldName = fields[i].getVariableName();
			}
			else{
				fieldName = i;
			}

			var fieldView = new MemoryUnitView(this.heapGraphicalView, childUnit, this.x + graphicalOffset , this.y + this.padding.y, fieldName, true, false);
			cumulatedHeight = fieldView.height;
			graphicalOffset += MemoryUnitView.PIXELS_PER_BYTE * childSize;
			
			i++;
			
			this.linkedObjects.addAll( fieldView.getAllObjects() );	
			this.childViews.push( fieldView );
			
		}
	}
	
	return cumulatedHeight;
	
}

MemoryUnitView.prototype.buildTicks = function(){
		
	var tickHeight = this.height / MemoryUnitView.TICK_HEIGHT_RATIO;
	var step = MemoryUnitView.PIXELS_PER_BYTE;
		
	for(var i=1; i< this.dataSize; i++){
	
		var xi = this.x + i * step;
		
		var topTick = this.ctx.rect( xi, this.y, MemoryUnitView.TICK_WIDTH, tickHeight);
		topTick.attr( MemoryUnitView.TICK_ATTRIBUTES );
		this.linkedObjects.push( topTick );
				
		var buttomTick = this.ctx.rect( xi, this.y + this.height - tickHeight, MemoryUnitView.TICK_WIDTH, tickHeight);
		buttomTick.attr( MemoryUnitView.TICK_ATTRIBUTES );		
		this.linkedObjects.push( buttomTick );		
		
	
	}		
		
}
			
MemoryUnitView.prototype.getBoxObject = function(){
	return this.boxObject;
}
	
MemoryUnitView.prototype.getLinkedObjects = function(){
	return this.linkedObjects;
}
	
MemoryUnitView.prototype.getX = function(){
	return this.boxObject.attr("x");
}
	
MemoryUnitView.prototype.getY = function(){
	return this.boxObject.attr("y");
}	

MemoryUnitView.prototype.setX = function(x){
	this.heapGraphicalView.unitMouseDrag(this);
	this.heapGraphicalView.unitMouseMove(this, x - this.getX(), 0);
}
	
MemoryUnitView.prototype.setY = function(y){
	this.heapGraphicalView.unitMouseDrag(this);
	this.heapGraphicalView.unitMouseMove(this, 0, y - this.getY());	
}	

MemoryUnitView.prototype.getAllObjects = function(){
	
	var objects = [];
	
	objects.push( this.boxObject );	

	objects.addAll( this.linkedObjects );
	
	return objects;
		
}	
	


// static variables
MemoryUnitView.COMPOSED_TYPE_PADDING = {x : 0, y : 25 }; // in px
MemoryUnitView.UNINITIALIZED_UNIT_STRING = "?";
MemoryUnitView.TICK_HEIGHT_RATIO = 10;	// tick height = box height / tick height ratio
MemoryUnitView.TICK_WIDTH = 1;			// in px
MemoryUnitView.TICK_COLOR = "gray";	
MemoryUnitView.FIELD_STROKE_COLOR = MemoryUnitView.TICK_COLOR;	
MemoryUnitView.PIXELS_PER_BYTE = 10;
MemoryUnitView.BOX_HEIGHT = 25;
MemoryUnitView.BOX_BORDER_RADIUS = 1;	// in px
MemoryUnitView.NODE_LINE_WIDTH = 1;	// in px
MemoryUnitView.ACCESSIBLE_NODE_STROKE_COLOR = "black";
MemoryUnitView.VARIABLE_NAME_STROKE_COLOR = MemoryUnitView.ACCESSIBLE_NODE_STROKE_COLOR;		
MemoryUnitView.UNACCESSIBLE_NODE_STROKE_COLOR = "red";	
MemoryUnitView.INVALID_ADDRESS_OPACITY = 0.2;
MemoryUnitView.NODE_INVALID_ADDRESS_FILL_COLOR = "red";
MemoryUnitView.CHANGED_OPACITY = 0.2;
MemoryUnitView.NODE_CHANGED_FILL_COLOR = "rgb(0, 90, 255)";
MemoryUnitView.TICK_ATTRIBUTES = {stroke: MemoryUnitView.TICK_COLOR};
MemoryUnitView.BOX_ATTRIBUTES = {fill: MemoryUnitView.NODE_INVALID_ADDRESS_FILL_COLOR, stroke: MemoryUnitView.ACCESSIBLE_NODE_STROKE_COLOR, "fill-opacity": 0, "stroke-width": MemoryUnitView.NODE_LINE_WIDTH, cursor: "move"};
MemoryUnitView.INTERNAL_BOX_ATTRIBUTES = {fill: MemoryUnitView.NODE_INVALID_ADDRESS_FILL_COLOR, stroke: MemoryUnitView.FIELD_STROKE_COLOR, "fill-opacity": 0, "stroke-width": MemoryUnitView.NODE_LINE_WIDTH, cursor: "move"};
MemoryUnitView.ADDRESS_COLOR = "blue";
MemoryUnitView.ADDRESS_PRIMARY_TEXT_ATTRIBUTES = {font: "14px Fontin-Sans, Arial", "font-style": "italic", fill: MemoryUnitView.ADDRESS_COLOR, "text-anchor": "middle"};	
MemoryUnitView.ADDRESS_SECONDARY_TEXT_ATTRIBUTES = {font: "12px Fontin-Sans, Arial", "font-style": "italic", fill: MemoryUnitView.ADDRESS_COLOR, "text-anchor": "start"};
MemoryUnitView.FIELD_TEXT_ATTRIBUTES = {font: "12px Fontin-Sans, Arial", fill: MemoryUnitView.FIELD_STROKE_COLOR, "text-anchor": "middle"};		
MemoryUnitView.VARIABLE_NAME_TEXT_ATTRIBUTES = {font: "12px Fontin-Sans, Arial", fill: MemoryUnitView.VARIABLE_NAME_STROKE_COLOR, "text-anchor": "end"};		
MemoryUnitView.VALUE_TEXT_ATTRIBUTES = {font: "14px Fontin-Sans, Arial", fill: MemoryUnitView.ACCESSIBLE_NODE_STROKE_COLOR, "text-anchor": "middle"};	
MemoryUnitView.ADDRESS_TEXT_BIAS = {x:0, y:-10};
MemoryUnitView.FIELD_NAME_TEXT_BIAS = {x:10, y:-10};
MemoryUnitView.VARIABLE_NAME_TEXT_BIAS = {x:-5};

