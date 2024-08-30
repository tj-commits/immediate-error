# Immediate-error

This is a utility to throw an error.

```javascript

const immediateError = require('immediate-error')

const { ERROR } = immediateError

immediateError('Aaaaah') // this will throw an error with the message Aaaaah

immediateError('Aaaaah', { errorType: ERROR.Error }) // does the same thing as above because by default errorType is ERROR.Error

immediateError('Assertion error', { errorType: ERROR.AssertionError }) // throws an assertionerror

immediateError('Range error', { errorType: ERROR.RangeError }) // throws a rangeerror

immediateError('Reference error', { errorType: ERROR.ReferenceError }) // throws a referenceerror

immediateError('Syntax error', { errorType: ERROR.SyntaxError }) // throws a syntaxerror

immediateError('type error', { errorType: ERROR.TypeError }) // throws a typeerror

```