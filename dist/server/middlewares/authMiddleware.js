'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
var auth = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var authheader, err, auth_new, username, password, user, _err, passwordValidate, _err2;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            authheader = req.headers.authorization;

            if (authheader) {
              _context.next = 6;
              break;
            }

            err = new Error('You are not authenticated!');

            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            return _context.abrupt('return', next(err));

          case 6:
            auth_new = new Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
            username = auth_new[0];
            password = auth_new[1];
            _context.next = 11;
            return _User2.default.findOne({ username: username });

          case 11:
            user = _context.sent;

            if (user) {
              _context.next = 17;
              break;
            }

            _err = new Error('You are not authenticated!');

            res.setHeader('WWW-Authenticate', 'Basic');
            _err.status = 401;
            return _context.abrupt('return', next(_err));

          case 17:
            _context.next = 19;
            return _bcrypt2.default.compare(password, hash);

          case 19:
            passwordValidate = _context.sent;

            if (!(user === user.username && password === passwordValidate)) {
              _context.next = 25;
              break;
            }

            // If Authorized user
            req.user = user;

            next();
            _context.next = 29;
            break;

          case 25:
            _err2 = new Error('You are not authenticated!');

            res.setHeader('WWW-Authenticate', 'Basic');
            _err2.status = 401;
            return _context.abrupt('return', next(_err2));

          case 29:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function auth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.default = auth;