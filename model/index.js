const sequelize=require("../bin/dbConnection")
const users=require("../model/definitions/users")
const tasksHasUsers = require("./definitions/tasksHasUsers");
const tasks = require("./definitions/tasks");
const userHasTasks = require("./definitions/userHasTasks");

const models ={users, tasks, tasksHasUsers, userHasTasks};
const db ={}
db.sequelize=sequelize
sequelize.models=models
module.exports = {db, models}