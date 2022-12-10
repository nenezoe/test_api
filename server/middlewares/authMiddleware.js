/* eslint-disable camelcase */
import bcrypt from "bcrypt";
import config from "../config";

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

  console.log("bfghrtgre",   process.env.USERNAME)


  if (username === config.username && password === config.password) {
    // If Authorized user
    console.log("bfghrtgre")
    next();
  } else {
    const err = new Error('You are not authenticated!');
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    return next(err);
  }
};
export default auth;
