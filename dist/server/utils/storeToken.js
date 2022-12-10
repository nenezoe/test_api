'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeRegToken = exports.signToken = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsonwebtoken = require('jsonwebtoken');

var _index = require('../config/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */

var Encryp = _index2.default.secretOrKey;
var genToken = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
    var token;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = void 0;
            // generate new jwt token for registeration

            token = (0, _jsonwebtoken.sign)((0, _extends3.default)({}, data), Encryp, {
              expiresIn: '7d'
            });
            return _context.abrupt('return', token);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function genToken(_x) {
    return _ref.apply(this, arguments);
  };
}();

var signToken = exports.signToken = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(data) {
    var token;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return genToken((0, _extends3.default)({}, data));

          case 2:
            token = _context2.sent;
            return _context2.abrupt('return', token);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function signToken(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var decodeRegToken = exports.decodeRegToken = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res, next) {
    var token;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            token = req.headers['x-access-token'];

            if (token) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt('return', res.status(403).send({ auth: false, message: 'No token provided.' }));

          case 3:
            _context3.next = 5;
            return (0, _jsonwebtoken.verify)(token, _index2.default.secretOrKey, function (err, decoded) {
              if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

              // if everything good, save to request for use in other routes
              req.userId = decoded.id;
              next();
            });

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function decodeRegToken(_x3, _x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();