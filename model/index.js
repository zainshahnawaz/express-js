const sequelize=require("../bin/dbConnection")
const users=require("../model/definitions/users")

const models ={users}
const db ={}
db.sequelize=sequelize
sequelize.models=models
module.exports = {db, models}