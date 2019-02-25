"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _a = _interopRequireDefault(require("./a.json"));

Object.defineProperty(global, '__stack', {
  get: function get() {
    var orig = Error.prepareStackTrace;

    Error.prepareStackTrace = function (_, stack) {
      return stack;
    };

    var err = new Error();
    Error.captureStackTrace(err, arguments.callee);
    var stack = err.stack;
    Error.prepareStackTrace = orig;
    return stack;
  }
});
Object.defineProperty(global, '__line', {
  get: function get() {
    return __stack[1].getLineNumber();
  }
});

var example = require('./example');

example();