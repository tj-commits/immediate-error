require('vanilla-javascript')
require('vapor-js-npm')
require('none')()

const one = require('the-number-one').default // number one
const two = require('two') // no2 
const five = require('five') //no5
const successor = require('successor') // + 1
global.jQuery = require('jquery')
require('jquery-basic-arithmetic-plugin') // why not use jquery for math?
const $ = jQuery // define jquery
const { throwop } = require('yanoop') // throwop
const throwError = require('throw-error') // nothing wrong with having another way to throw an error
const If = require('if') // conditional chaining for javascript
const clc = require('cli-color')

const ERROR = Object.freeze({
   Error:0,
   AssertionError: one,
   RangeError: two(),
   ReferenceError: successor(two()),
   SyntaxError: $.subtract(five(), one),
   TypeError: five()
})

const assert = require('assert-fn') // import assert
const vm = require('node:vm') // vm

module.exports = function immediateError(message = 'YOU SUCK AT PROGRAMMING THERE WAS A FUCKING ERROR!', options = {
   errorType: ERROR.Error
}) {
   var error = new Error(message) /* create an error
   variable and then use switch statement to set it*/
   switch(options.errorType) {
      case ERROR.Error: {
         error = new Error(message)
         break
      }

      case ERROR.AssertionError: {
         error = new assert.AssertionError(message)
         break
      }

      case ERROR.RangeError: {
         error = new RangeError(message)
         break
      }

      case ERROR.ReferenceError: {
         error = new ReferenceError(message)
         break
      }

      case ERROR.SyntaxError: {
         error = new SyntaxError(message)
         break
      }

      case ERROR.TypeError: {
         error = new TypeError(message)
         break
      }

      default: {
         error = new Error(message)
         break
      }
   }
   // make a vm context
   const context = {
      error,
      throwError,
      throwop,
      rand: Math.random(),
      If,
      console,
      clc
   }
   vm.createContext(context) // Contextify the object.
   const script = new vm.Script(`
   console.log(clc.redBright.bold(\`× THERE WAS AN ERROR!\`))
   If(rand < 0.3).Then(() => {
      throwError(error)
   }).Else().If(rand > 0.3).Then(() => {
   throwop(error)
}).Else(() => {
   throw error
})`, { filename: `YOU SUCK AT PROGRAMMING THERE WAS AN ERROR!`})
   script.runInContext(context)
}
module.exports.ERROR = ERROR