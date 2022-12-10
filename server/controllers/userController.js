/* eslint-disable no-underscore-dangle */
/* eslint-disable require-jsdoc */
/* eslint-disable camelcase */

import tracelogger from '../logger/tracelogger';
import responses from '../utils/responses';
import User from '../models/User';

/**
 * @description Defines the actions for the profile endpoints
 * @class userController
 */

class userController {
  /**
   *@description Update seller Profile
   *@static
   *@param  {Object} req - request
   *@param  {object} res - response
   *@returns {object} - status code, message and response
   *@memberof userController
   */

  static async createUser(req, res,) {
    const { username, first_name, last_name, date_of_birth, gender } = req.body
    try {
      const user = await User.findOne({ username });
    console.log(user);


      if (user) {
        return res
          .status(400)
          .json(responses.error(400, 'Sorry, user has been created'));
      }

    //   const updatedUser = await Olist_order_items_dataset.findOneAndUpdate(
    //     { _id: user._id },
    //     req.body,
    //     { new: true }
    //   );

    const createdUser = await User.create(req.body);

      if (createdUser) {
        return res
          .status(200)
          .json(responses.success(200, 'User created successfully ', createdUser));
      }
    } catch (error) {
      tracelogger(error);
      return res.status(500).json(responses.error(500, error));
    }
  }




  
    /**
     *@description get user
     *@static
     *@param  {Object} req - request
     *@param  {object} res - response
     *@returns {object} - status code, message and response
     *@memberof userController
     */
  
    static async getUser(req, res,) {
        const { first_name, last_name } = req.body;
      const {  filter_field, filter_value, sort, page , limit   } = req.query
      let user;
      try {
        if (!filter_field ){
          user = await User.find().sort({ _id: sort ==='asc' ? 1 : -1  }) .limit(limit * 1).skip(( page - 1 )  * limit).exec();
        }
        else {
          user = await User.find().where(filter_field).equals(filter_value).sort({ _id: sort ==='asc' ? 1 : -1  }) .limit(limit * 1).skip(( page - 1 )  * limit).exec();
        }
        
  
        if (!user) {
          return res
            .status(400)
            .json(responses.error(400, 'Sorry, user does not exist'));
        }
        if (user) {
            return res
            .status(200)
            .json(responses.success(200, 'User gotten  successfully ', user))
        }
  
      //   const updatedUser = await Olist_order_items_dataset.findOneAndUpdate(
      //     { _id: user._id },
      //     req.body,
      //     { new: true }
      //   );
  
      const createdUser = await User.create(req.body);
  
        if (createdUser) {
          return res
            .status(200)
            .json(responses.success(200, 'User created successfully ', createdUser));
        }
      } catch (error) {
        tracelogger(error);
        return res.status(500).json(responses.error(500, error));
      }
    }




     /**
     *@description get params
     *@static
     *@param  {Object} req - request
     *@param  {object} res - response
     *@returns {object} - status code, message and response
     *@memberof userController
     */
  
     static async getUserId(req, res,) {
    const { id  } = req.params;
    
    try {
      const user = await User.findOne({ _id: id });
     
      if(!user) {
        return res
        .status(404)
        .json(responses.error(404, 'User not found'));
      }

      return res
      .status(200)
      .json(responses.success(200, 'User retrieved successfully', user));
    
    } catch (error) {
      console.log()
      tracelogger(error);
      return res.status(500).json(responses.error(500, error));
    }
  }



   /**
     *@description put user
     *@static
     *@param  {Object} req - request
     *@param  {object} res - response
     *@returns {object} - status code, message and response
     *@memberof userController
     */
  
     static async editUser(req, res,) {
      const { id  } = req.params;
      
      try {
        const user = await User.findOne({ _id: id });
       
        if (!user) {
          return res
            .status(400)
            .json(responses.error(400, 'Sorry, user does not exist'));
        }

        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id },
          req.body,
          { new: true }
        );
  
        if (updatedUser) {
          return res
            .status(200)
            .json(responses.success(200, 'User details has been updated', updatedUser));
        }
      
      } catch (error) {
        console.log()
        tracelogger(error);
        return res.status(500).json(responses.error(500, error));
      }
    }


    /**
     *@description delete user
     *@static
     *@param  {Object} req - request
     *@param  {object} res - response
     *@returns {object} - status code, message and response
     *@memberof userController
     */
  
     static async deleteUser(req, res,) {
      const { id  } = req.params;
      
      try {
        const user = await User.findOne({ _id: id });
       
        if (!user) {
          return res
            .status(400)
            .json(responses.error(400, 'Sorry, user does not exist'));
        }

        const deleteUser = await User.findOneAndRemove(
          { _id: user._id },
        );
  
        if (deleteUser) {
          return res
            .status(200)
            .json(responses.success(200, 'User deleted successfully', deleteUser));
        }
      
      } catch (error) {
        tracelogger(error);
        return res.status(500).json(responses.error(500, error));
      }
    }
}


export default userController;
