const joi=require("joi");

const loginSchema=joi.object().keys({
    userName: joi.string().email().required(),
    password: joi.string().min(6).max(30).required()
});

module.exports={
    login:async (req,res)=>{
        try{
            const validate=await loginSchema.validateAsync(req.body);
            console.log(validate);
            return res.send({
                message: "logged in",
                data: validate
            })
        }catch(error){
            return res.send({
                message: error.message
            })
        }
    },
    logout:(req,res) =>{
        try{
            return res.send({
                message:"logged out",
                data:req.body
            })
        }catch(error){
            return res.send({
                message:error.message
            })
        }
    }
}