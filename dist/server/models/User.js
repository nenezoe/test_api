'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema; /* eslint-disable no-useless-escape */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-useless-escape */

var UserSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  gender: {
    type: String, enum: ['female', 'male']
  },
  date_of_birth: {
    type: Date
  }
});

var User = _mongoose2.default.model('User', UserSchema);

exports.default = User;