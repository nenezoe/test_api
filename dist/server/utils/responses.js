"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var responses = {
  // success function
  success: function success(statusCode, message, data) {
    var successMessage = {
      error: false,
      statusCode: statusCode,
      message: message,
      data: data
    };
    // function returns the success object
    return successMessage;
  },

  // error function
  error: function error(statusCode, message) {
    var errorMessage = {
      error: true,
      statusCode: statusCode,
      message: message
    };
    // function returns the error object
    return errorMessage;
  }
};

exports.default = responses;