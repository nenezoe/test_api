'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _userController = require('../controllers/userController');

var _userController2 = _interopRequireDefault(_userController);

var _authMiddleware = require('../middlewares/authMiddleware');

var _authMiddleware2 = _interopRequireDefault(_authMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)(); /* eslint-disable no-unused-vars */

var createUser = _userController2.default.createUser,
    getUser = _userController2.default.getUser,
    getUserId = _userController2.default.getUserId,
    editUser = _userController2.default.editUser,
    deleteUser = _userController2.default.deleteUser;


router.post('/create', createUser);
router.get('/get', getUser);
router.get('/get_1/:id', getUserId);
router.put('/edit/:id', editUser);
router.delete('/delete/:id', deleteUser);

exports.default = router;