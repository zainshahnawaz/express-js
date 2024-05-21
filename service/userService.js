// const {hash} = require("bcryptjs");
// const userModel = require('../model/userModel');
// module.exports={
//     createuser : async (body) =>{
//         try{
//             body.password = await hash(body.password,10);
//             delete body.password;
            
//             const user = await userModel.createUser(body);
              


//         }
//     }
// }