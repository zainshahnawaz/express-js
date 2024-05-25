const {Model, DataTypes}=require("sequelize")
const sequelize=require("../../bin/dbConnection")

class users extends Model{}

users.init({
    userId :{
        primaryKey:true,
        type: DataTypes.STRING(255),
    },
    userName:{
        unique : true,
        allownull :false,
        type:DataTypes.STRING(34),
    },
    password:{
        allownull :false,
        type:DataTypes.STRING(1000),
    }
},
{
    timestamps: true,
    paranoid:true,
    tableName:"users",
    sequelize,
})
module.exports=users;