/* eslint-disable no-unused-vars */

import { Router } from 'express';
import userController from '../controllers/userController';
import auth from '../middlewares/authMiddleware';

const router = Router();

const {
  createUser, getUser, getUserId, editUser, deleteUser
} = userController;



router.post('/create', auth, createUser);
router.get('/get', getUser);
router.get('/get_1/:id', getUserId);
router.put('/edit/:id', editUser);
router.delete('/delete/:id', deleteUser);



export default router;
