const router=require("express").Router();
const {login,logout}=require("../controllers/authcontroller")

router.get("/login",login)

router.get("/logout",logout)

module.exports=router;