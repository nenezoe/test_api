'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = require('dotenv');

var dotenv = _interopRequireWildcard(_dotenv);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

dotenv.config();

var config = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  username: process.env.username,
  password: process.env.password,
  secretOrKey: process.env.ACCESS_TOKEN_PRIVATE_KEY
};

exports.default = config;