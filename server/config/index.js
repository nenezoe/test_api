import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  secretOrKey: process.env.ACCESS_TOKEN_PRIVATE_KEY,
};

export default config;
