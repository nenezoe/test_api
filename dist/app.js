'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _errorhandlers = require('./server/middlewares/errorhandlers');

var _tracelogger = require('./server/logger/tracelogger');

var _tracelogger2 = _interopRequireDefault(_tracelogger);

var _routes = require('./server/routes');

var _routes2 = _interopRequireDefault(_routes);

var _config = require('./server/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initialize express
var app = (0, _express2.default)();

// for request
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cors2.default)());
app.use((0, _morgan2.default)('dev'));

// connect to mongodb
// eslint-disable-next-line max-len
var mongoURL = _config2.default.DATABASE_URL;

_mongoose2.default.connect('mongodb+srv://gtext:1234567890@cluster0.ttlfpuh.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(function () {
  console.log("connected");

  // app.listen(5000, () => {
  // 	console.log("Server has started!")
  // })
}).catch(function (err) {
  console.log(err);
});

app.get('/', function (req, res) {
  res.json({ massage: 'Welcome to Api Test' });
});

// Routes
app.use('/api', _routes2.default);

app.use('*', _errorhandlers.notFound);
app.use(_errorhandlers.errorHandler);

process.on('unhandledRejection', function (reason) {
  (0, _tracelogger2.default)(reason);
});

process.on('uncaughtException', function (reason) {
  (0, _tracelogger2.default)(reason);
});

var PORT = process.env.PORT || 5678;
app.listen(PORT, function () {
  process.stdout.write('app is listening on port ' + PORT);
});

exports.default = app;