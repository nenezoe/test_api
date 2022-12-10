'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _tracelogger = require('../logger/tracelogger');

var _tracelogger2 = _interopRequireDefault(_tracelogger);

var _responses = require('../utils/responses');

var _responses2 = _interopRequireDefault(_responses);

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description Defines the actions for the profile endpoints
 * @class userController
 */

var userController = function () {
  function userController() {
    (0, _classCallCheck3.default)(this, userController);
  }

  (0, _createClass3.default)(userController, null, [{
    key: 'createUser',

    /**
     *@description Update seller Profile
     *@static
     *@param  {Object} req - request
     *@param  {object} res - response
     *@returns {object} - status code, message and response
     *@memberof userController
     */

    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var _req$body, username, first_name, last_name, date_of_birth, gender, user, createdUser;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, username = _req$body.username, first_name = _req$body.first_name, last_name = _req$body.last_name, date_of_birth = _req$body.date_of_birth, gender = _req$body.gender;
                _context.prev = 1;
                _context.next = 4;
                return _User2.default.findOne({ username: username });

              case 4:
                user = _context.sent;

                console.log(user);

                if (!user) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt('return', res.status(400).json(_responses2.default.error(400, 'Sorry, user has been created')));

              case 8:
                _context.next = 10;
                return _User2.default.create(req.body);

              case 10:
                createdUser = _context.sent;

                if (!createdUser) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt('return', res.status(200).json(_responses2.default.success(200, 'User created successfully ', createdUser)));

              case 13:
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context['catch'](1);

                (0, _tracelogger2.default)(_context.t0);
                return _context.abrupt('return', res.status(500).json(_responses2.default.error(500, _context.t0)));

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 15]]);
      }));

      function createUser(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return createUser;
    }()

    /**
     *@description get user
     *@static
     *@param  {Object} req - request
     *@param  {object} res - response
     *@returns {object} - status code, message and response
     *@memberof userController
     */

  }, {
    key: 'getUser',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var _req$body2, first_name, last_name, _req$query, filter_field, filter_value, sort, page, limit, user, createdUser;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _req$body2 = req.body, first_name = _req$body2.first_name, last_name = _req$body2.last_name;
                _req$query = req.query, filter_field = _req$query.filter_field, filter_value = _req$query.filter_value, sort = _req$query.sort, page = _req$query.page, limit = _req$query.limit;
                user = void 0;
                _context2.prev = 3;

                if (filter_field) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 7;
                return _User2.default.find().sort({ _id: sort === 'asc' ? 1 : -1 }).limit(limit * 1).skip((page - 1) * limit).exec();

              case 7:
                user = _context2.sent;
                _context2.next = 13;
                break;

              case 10:
                _context2.next = 12;
                return _User2.default.find().where(filter_field).equals(filter_value).sort({ _id: sort === 'asc' ? 1 : -1 }).limit(limit * 1).skip((page - 1) * limit).exec();

              case 12:
                user = _context2.sent;

              case 13:
                if (user) {
                  _context2.next = 15;
                  break;
                }

                return _context2.abrupt('return', res.status(400).json(_responses2.default.error(400, 'Sorry, user does not exist')));

              case 15:
                if (!user) {
                  _context2.next = 17;
                  break;
                }

                return _context2.abrupt('return', res.status(200).json(_responses2.default.success(200, 'User updated  successfully ', user)));

              case 17:
                _context2.next = 19;
                return _User2.default.create(req.body);

              case 19:
                createdUser = _context2.sent;

                if (!createdUser) {
                  _context2.next = 22;
                  break;
                }

                return _context2.abrupt('return', res.status(200).json(_responses2.default.success(200, 'User created successfully ', createdUser)));

              case 22:
                _context2.next = 28;
                break;

              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2['catch'](3);

                (0, _tracelogger2.default)(_context2.t0);
                return _context2.abrupt('return', res.status(500).json(_responses2.default.error(500, _context2.t0)));

              case 28:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 24]]);
      }));

      function getUser(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return getUser;
    }()

    /**
    *@description get params
    *@static
    *@param  {Object} req - request
    *@param  {object} res - response
    *@returns {object} - status code, message and response
    *@memberof userController
    */

  }, {
    key: 'getUserId',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var id, user;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = req.params.id;
                _context3.prev = 1;
                _context3.next = 4;
                return _User2.default.findOne({ _id: id });

              case 4:
                user = _context3.sent;

                if (user) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt('return', res.status(404).json(_responses2.default.error(404, 'User not found')));

              case 7:
                return _context3.abrupt('return', res.status(200).json(_responses2.default.success(200, 'User retrieved successfully', user)));

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3['catch'](1);

                console.log();
                (0, _tracelogger2.default)(_context3.t0);
                return _context3.abrupt('return', res.status(500).json(_responses2.default.error(500, _context3.t0)));

              case 15:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 10]]);
      }));

      function getUserId(_x5, _x6) {
        return _ref3.apply(this, arguments);
      }

      return getUserId;
    }()

    /**
      *@description put user
      *@static
      *@param  {Object} req - request
      *@param  {object} res - response
      *@returns {object} - status code, message and response
      *@memberof userController
      */

  }, {
    key: 'editUser',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
        var id, user, updatedUser;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;
                _context4.prev = 1;
                _context4.next = 4;
                return _User2.default.findOne({ _id: id });

              case 4:
                user = _context4.sent;

                if (user) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt('return', res.status(400).json(_responses2.default.error(400, 'Sorry, user does not exist')));

              case 7:
                _context4.next = 9;
                return _User2.default.findOneAndUpdate({ _id: user._id }, req.body, { new: true });

              case 9:
                updatedUser = _context4.sent;

                if (!updatedUser) {
                  _context4.next = 12;
                  break;
                }

                return _context4.abrupt('return', res.status(200).json(_responses2.default.success(200, 'User details has been updated', updatedUser)));

              case 12:
                _context4.next = 19;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4['catch'](1);

                console.log();
                (0, _tracelogger2.default)(_context4.t0);
                return _context4.abrupt('return', res.status(500).json(_responses2.default.error(500, _context4.t0)));

              case 19:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 14]]);
      }));

      function editUser(_x7, _x8) {
        return _ref4.apply(this, arguments);
      }

      return editUser;
    }()

    /**
     *@description delete user
     *@static
     *@param  {Object} req - request
     *@param  {object} res - response
     *@returns {object} - status code, message and response
     *@memberof userController
     */

  }, {
    key: 'deleteUser',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
        var id, user, _deleteUser;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;
                _context5.prev = 1;
                _context5.next = 4;
                return _User2.default.findOne({ _id: id });

              case 4:
                user = _context5.sent;

                if (user) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt('return', res.status(400).json(_responses2.default.error(400, 'Sorry, user does not exist')));

              case 7:
                _context5.next = 9;
                return _User2.default.findOneAndRemove({ _id: user._id });

              case 9:
                _deleteUser = _context5.sent;

                if (!_deleteUser) {
                  _context5.next = 12;
                  break;
                }

                return _context5.abrupt('return', res.status(200).json(_responses2.default.success(200, 'User deleted successfully', _deleteUser)));

              case 12:
                _context5.next = 18;
                break;

              case 14:
                _context5.prev = 14;
                _context5.t0 = _context5['catch'](1);

                (0, _tracelogger2.default)(_context5.t0);
                return _context5.abrupt('return', res.status(500).json(_responses2.default.error(500, _context5.t0)));

              case 18:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 14]]);
      }));

      function deleteUser(_x9, _x10) {
        return _ref5.apply(this, arguments);
      }

      return deleteUser;
    }()
  }]);
  return userController;
}(); /* eslint-disable no-underscore-dangle */
/* eslint-disable require-jsdoc */
/* eslint-disable camelcase */

exports.default = userController;