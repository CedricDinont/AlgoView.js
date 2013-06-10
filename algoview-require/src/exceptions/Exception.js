/**
 * class Exception
 * @author michael
 */

define("Exception",
        [],
        function() {
            var Exception = function() {
            };

            Exception.prototype.toString = function() {
                return "Exception";
            }

            Error.prototype.getWrappedException = function() {
                return this.wrappedException;
            }

            return Exception;
});
