'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-unused-vars */
var notFound = exports.notFound = function notFound(req, res, next) {
  res.status(404).json({
    message: 'Page not found'
  });
  next();
};

var errorHandler = exports.errorHandler = function errorHandler(error, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message,
    error: process.env.NODE_ENV === 'production' ? {} : error.stack
  });
  next();
};