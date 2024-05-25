const { hash } = require("bcryptjs");
const {v4:uuid}=require("uuid")
const userModel = require("../models/userModel");
module.exports = {
  createUser: async (body) => {
    try {
      body.password = await hash(body.password, 10);
      delete body.confirmPassword;

      
      const isUser = await userModel.getUser(false, body.userName);
      if (isUser.error ||isUser.response) {
        return {
          error: isUser.error,
        };
      }
body.password = await hash(body.password, 10);
body.userId = uuid();

      const user = await userModel.createUser(body);

      if (user.error) {
        return {
          error: user.error,
        };
      }

      delete user.response.password;

      return {
        response: user.response, // Set response message correctly
      };
    } catch (error) {
      return {
        error: error.messgae,
      };
    }
  },
};