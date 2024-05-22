const {Model, DataTypes}=require("sequelize")
const sequelize=require("../../bin/dbConnection")

class tasksHasUsers extends Model{}

tasksHasUsers.init({
    tasksHasUsersId :{
        primaryKey:true,
        type: DataTypes.STRING(255),
    },
    
},
{
    timestamps: true,
    paranoid:true,
    tableName:"tasksHasUsers",
    sequelize,
})
module.exports=tasksHasUsers;