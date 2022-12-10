/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */

import { sign, verify } from 'jsonwebtoken';
import config from '../config/index';

const Encryp = config.secretOrKey;
const genToken = async (data) => {
  let token;
  // generate new jwt token for registeration
  token = sign(
    {
      ...data,
    },
    Encryp,
    {
      expiresIn: '7d',
    }
  );
  return token;
};

export const signToken = async (data) => {
  const token = await genToken({
    ...data,
  });

  return token;
};

export const decodeRegToken = async (req, res, next) => {
  let token = req.headers['x-access-token'];
  if (!token) { return res.status(403).send({ auth: false, message: 'No token provided.' }); }

  await verify(token, config.secretOrKey, (err, decoded) => {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
};
