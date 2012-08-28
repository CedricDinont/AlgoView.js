/**
 * Extensions of JS types
 * @author michael
 */
 
/** 
 * Adds all the elements in the
 * specified arrays to this array. 
 **/
Array.prototype.addAll = function(other) {

	for (var i = 0;  i < other.length;  i++) {
		this.push(other[i]);
	}
  
}
 
