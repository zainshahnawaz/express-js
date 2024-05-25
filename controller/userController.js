const joi = require("joi");
const userService = require('../service/userService');
const { response } = require("../app");
const createUserSchema = joi.object().keys({
    userName: joi.string().email().required(),
    password: joi.string().min(6).max(30).required()
});



module.exports = input = {
    createUser: async (req, res) => {
        try {
            const validate = await createUserSchema.validateAsync(req.body);
        

            const user = userService.createuser(validate);//call ki takey services ko validate bhej sakey for filter/logic purposer 

            if(user.error){
                return res.send({
                    error: user.error
                })
            }
            return res.send( {
                response: user.response
            })
            
            // return res.send({
            //     message: "user created",
            //     data: validate
            // })
        } catch (error) {
            return res.send({
                message: error.message
            })
        }
    },
    updateUser: async (req, res) => {
        try {
            const validate = await createUserSchema.validateAsync(req.body);
            return res.send({
                old: user1,
                message: "updated user",
                data: validate
            });
        } catch (error) {
            return res.send({
                message: error.message
            });
        }
    }
}
