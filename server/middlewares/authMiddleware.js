/* eslint-disable camelcase */
import bcrypt from "bcrypt";
import User from '../models/User';

const auth = async (req, res, next) => {
  const authheader = req.headers.authorization;

  if (!authheader) {
    const err = new Error('You are not authenticated!');
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    return next(err);
  }

  const auth_new = new Buffer.from(authheader.split(' ')[1],
    'base64').toString().split(':');
  const username = auth_new[0];
  const password = auth_new[1];
  const user = await User.findOne({ username });

  if (!user) {
    const err = new Error('You are not authenticated!');
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    return next(err);
  }

  const passwordValidate = await bcrypt.compare(password, hash);
  

  if (user === user.username && password === passwordValidate) {
    // If Authorized user
    req.user = user;

    next();
  } else {
    const err = new Error('You are not authenticated!');
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    return next(err);
  }
};
export default auth;
