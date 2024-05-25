const {Model, DataTypes}=require("sequelize")
const sequelize=require("../../bin/dbConnection")

class userHastasks extends Model{}

userHastasks.init({
    userHastasksId :{
        primaryKey:true,
        type: DataTypes.STRING(255),
    },
    
},
{
    timestamps: true,
    paranoid:true,
    tableName:"userHasTasks",
    sequelize,
})
module.exports= userHastasks;