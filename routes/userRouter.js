const route=require("express").Router();
const userController=require("../controller/userController");

route.post("/createUser",userController.createUser);
route.put("/updateUser", userController.updateUser);

module.exports=route;