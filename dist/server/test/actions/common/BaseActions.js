'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
/* eslint-disable max-len */

var supertest = require('supertest');
require('dotenv').config();
var headers = require('../../testData/DefaultHeaders').myHeaders;

var username = '3442f8959a84dea7ee197c632cb2df15';
var password = '13023';
var token = username + ':' + password;
var encodedToken = Buffer.from(token).toString('base64');
/** This getBaseUrl will help you in dynamically assigning the baseurl and baseurl extension to the ENVIRONMENT and ENVEXT variable
        for more information about env var read the Readme file * */

exports.getBaseURL = function () {
  var baseURL = '';
  var baseURLExt = '';
  try {
    baseURL = process.env.ENVIRONMENT;
    baseURLExt = process.env.ENVEXT;
    console.log('BaseURL : ' + baseURL);
  } catch (err) {
    throw new Error('BASE URL is not Defined, Please Specify the BASE URL : ' + process.env.ENVIRONMENT);
  }
  var BaseURLSpecifications = {
    BASE_URL: baseURL, // baseUrl(Ex:'https://27.158.126.894/')
    BASE_URL_EXTENSION: baseURLExt // baseUrl_ext(Ex:'api/v1/')
  };
  return BaseURLSpecifications.BASE_URL + BaseURLSpecifications.BASE_URL_EXTENSION;
};

/** This sendPOSTRequest can be used when you dont need to pass a token while performing a POST operation * */

exports.sendPOSTRequest = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(baseUrl, apiEndPoint, requestBody) {
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return supertest(baseUrl).post(apiEndPoint).retry(2).set(headers.ACCEPT_JSON).set(headers.APPLICATION_JSON).send(requestBody);

          case 3:
            res = _context.sent;
            return _context.abrupt('return', res);

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            console.log('Error in sending POST Request: ', _context.t0);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 7]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/** This sendPOSTRequest1 can be used when you will be passing a token and body params while performing a POST operation * */

exports.sendPOSTRequest1 = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(baseUrl, apiEndPoint, requestBody) {
    var res;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            console.log(token);
            console.log(baseUrl + apiEndPoint);
            _context2.next = 5;
            return supertest('').post(baseUrl + apiEndPoint).retry(2).set(headers.ACCEPT_JSON).set(headers.APPLICATION_JSON).set('Authorization', 'Basic ' + encodedToken).send(requestBody);

          case 5:
            res = _context2.sent;
            return _context2.abrupt('return', res);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2['catch'](0);

            console.log('Error in sending POST Request: ', _context2.t0);

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 9]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

/** This sendGETRequest can be used when you will be passing a token while performing a GET operation * */

exports.sendGETRequest = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(baseUrl, apiEndPoint) {
    var res;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return supertest(baseUrl).get(apiEndPoint).retry(2).set(headers.ACCEPT_JSON).set('Authorization', 'Basic ' + encodedToken).set(headers.APPLICATION_JSON);

          case 3:
            res = _context3.sent;
            return _context3.abrupt('return', res);

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](0);

            console.log('Error in sending GET Request: ', _context3.t0);

          case 10:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 7]]);
  }));

  return function (_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

/** This sendPUTRequest can be used when you will be passing a token and body params while performing a PUT operation * */

exports.sendPUTRequest = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(baseUrl, apiEndPoint, requestBody) {
    var res;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return supertest(baseUrl).put(apiEndPoint).retry(2).set(headers.ACCEPT_JSON).set(headers.APPLICATION_JSON).set('Authorization', 'Basic ' + encodedToken).send(requestBody);

          case 3:
            res = _context4.sent;
            return _context4.abrupt('return', res);

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4['catch'](0);

            console.log('Error in sending PUT Request: ', _context4.t0);

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 7]]);
  }));

  return function (_x9, _x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}();

/** This sendDELETERequest can be used when you will be passing a token while performing a DELETE operation * */

exports.sendDELETERequest = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(baseUrl, apiEndPoint) {
    var res;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return supertest(baseUrl).delete(apiEndPoint).retry(2).set(headers.ACCEPT_JSON).set(headers.APPLICATION_JSON).set('Authorization', 'Basic ' + encodedToken);

          case 3:
            res = _context5.sent;
            return _context5.abrupt('return', res);

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5['catch'](0);

            console.log('Error in sending DELETE Request: ', _context5.t0);

          case 10:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[0, 7]]);
  }));

  return function (_x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}();