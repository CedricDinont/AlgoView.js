var Conversion = function(inputType1, inputType2, outputType) {
	this.inputType1 = inputType1;
	this.inputType2 = inputType2;
	this.outputType = outputType;
}

var MemoryValuesConversionManager = function() {
	this.conversions = new Array();
		
	this.addConversion = function(conversion) {
		this.conversions.push(conversion);
	}

	this.addConversion(new Conversion(MemoryValue.BOOLEAN, MemoryValue.BOOLEAN, MemoryValue.BOOLEAN));
	this.addConversion(new Conversion(MemoryValue.CHARACTER, MemoryValue.CHARACTER, MemoryValue.CHARACTER));
	this.addConversion(new Conversion(MemoryValue.INTEGER, MemoryValue.INTEGER, MemoryValue.INTEGER));
	this.addConversion(new Conversion(MemoryValue.FLOAT, MemoryValue.FLOAT, MemoryValue.FLOAT));
		
	this.addConversion(new Conversion(MemoryValue.FLOAT, MemoryValue.INTEGER, MemoryValue.FLOAT));
	this.addConversion(new Conversion(MemoryValue.INTEGER, MemoryValue.FLOAT, MemoryValue.FLOAT));
		
	this.addConversion(new Conversion(MemoryValue.BOOLEAN, MemoryValue.INTEGER, MemoryValue.INTEGER));
	this.addConversion(new Conversion(MemoryValue.INTEGER, MemoryValue.BOOLEAN, MemoryValue.INTEGER));

}

