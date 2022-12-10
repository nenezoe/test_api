/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-useless-escape */
import mongoose from 'mongoose';


const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    gender: {
      type: String, enum: ['female', 'male']
    },
    date_of_birth: {
      type: Date,
    },
  },
);


const User = mongoose.model('User', UserSchema);

export default User;
