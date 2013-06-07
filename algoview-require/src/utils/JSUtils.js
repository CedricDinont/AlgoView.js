/**
 * Some JS Tools
 * @author michael
 */
define("JSUtils",
[],
function() {
	var JSUtils = {
		
		throwException : function() {
			if (arguments.length >= 1) {
				var exceptionName = arguments[0];
				var exceptionConstructor = eval(exceptionName);
				var exceptionConstructorArguments = Array.prototype.slice.call(arguments, 1);	// on retire le premier argument
				
				var exception = new exceptionConstructor();
				exceptionConstructor.apply(exception, exceptionConstructorArguments);
	
				var error = new Error(exceptionName);		
				error.wrappedException = exception;
				throw error;
			}
		},
		
		getUrlVars : function() {
			var vars = [], hash;
			var args = window.location.href.slice(window.location.href.indexOf('?') + 1);
			var index = args.indexOf('#');
			if (index != -1) {
			args = args.slice(0, index);
			}
			var hashes = args.split('&');
			for(var i = 0; i < hashes.length; i++)
			{
			  hash = hashes[i].split('=');
			  vars.push(hash[0]);
			  vars[hash[0]] = hash[1];
			}
			return vars;
		},
		  
		getUrlVar : function(name) {
			return this.getUrlVars()[name];
		}			
		
	};
	
	
	return JSUtils;
});
	 
