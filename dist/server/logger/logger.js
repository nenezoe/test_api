'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

require('winston-daily-rotate-file');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLogger = _winston2.default.createLogger,
    transports = _winston2.default.transports,
    format = _winston2.default.format;


var logPath = 'ErrorLogs';

var combine = format.combine,
    timestamp = format.timestamp,
    label = format.label,
    printf = format.printf;


var myFormat = printf(function (info) {
  return info.timestamp + ' [' + info.label + '] ' + info.level + ': ' + info.message;
}); /* eslint-disable-line */

if (!_fs2.default.existsSync(logPath)) {
  _fs2.default.mkdirSync(logPath);
}

var NODE_ENV = process.env.NODE_ENV;


var dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: logPath + '/%DATE%-results.log',
  datePattern: 'YYYY-MM-DD'
});

var logger = createLogger({
  level: NODE_ENV === 'development' ? 'verbose' : 'info',
  format: combine(label({ label: 'Logs!' }), timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
  }), myFormat),
  transports: [new transports.Console({
    level: 'info',
    format: format.combine(format.colorize(), myFormat)
  }), dailyRotateFileTransport]
});

exports.default = logger;