require('vanilla-javascript')
require('none')()

const ERROR = Object.freeze({
   Error: 0,
   AssertionError: 1,
   RangeError: 2,
   ReferenceError: 3,
   SyntaxError: 4,
   TypeError: 5
})

const assert = require('assert-fn')
var _____test_no_gray_out = assert
_____test_no_gray_out = _____test_no_gray_out

module.exports = function immediateError(message = 'You asked for it', options = {
   errorType: ERROR.Error
}) {
   _____test_no_gray_out = options
   var str
   switch(options.errorType) {
      case ERROR.Error: {
         str = 'throw new Error(message)'
         break
      }

      case ERROR.AssertionError: {
         str = "throw new assert.AssertionError(message)"
         break
      }

      case ERROR.RangeError: {
         str = "throw new RangeError(message)"
         break
      }

      case ERROR.ReferenceError: {
         str = "throw new ReferenceError(message)"
         break
      }

      case ERROR.SyntaxError: {
         str = "throw new SyntaxError(message)"
         break
      }

      case ERROR.TypeError: {
         str = "throw new TypeError(message)"
         break
      }

      default: {
         error = Error
         break
      }
   }

   eval(str)
}

module.exports.ERROR = ERROR