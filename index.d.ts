export enum ErrorType {
  BaseError = 0,
  AssertionError = 1,
  RangeError = 2,
  ReferenceError = 3,
  SyntaxError = 4,
  TypeError = 5,
  NativeAssertionError = 6
}

export function immediateError(message?: string, errorType?: ErrorType | Function): void