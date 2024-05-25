module.exports ={
    login:(req,res) => {
       return res.send({
            message:"login sucessfully",
        });
    },
    logout:(req,res) => {
       return res.send({
            message:"logout sucessfully",
        })
    }
}