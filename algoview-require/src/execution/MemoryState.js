// a kind of enum to model a memory state
define("MemoryState",
[0],
function() { 
	var MemoryState = {
		UNUSED : "Unused",
		UNDEFINED : "Undefined",
		HAS_VALUE : "Has value"
	};

	return MemoryState;
});