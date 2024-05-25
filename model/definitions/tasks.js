const {Model, DataTypes}=require("sequelize")
const sequelize=require("../../bin/dbConnection")

class tasks extends Model{}

tasks.init({
    taskId :{
        primaryKey:true,
        type: DataTypes.STRING(255),
    },
    taskName:{
        unique : true,
        allownull :false,
        type:DataTypes.STRING(34),
    },
},
{
    timestamps: true,
    paranoid:true,
    tableName:"tasks",
    sequelize,
})
module.exports=tasks;