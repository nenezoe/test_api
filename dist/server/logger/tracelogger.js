'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
var traceLogger = function traceLogger(reason) {
  _logger2.default.error(reason.stack + '\n');
};

exports.default = traceLogger;