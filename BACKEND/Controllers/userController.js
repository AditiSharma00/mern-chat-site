const userModel = require('../Models/userModel').default
const registerUser =  (req,res)=>{
    req.send("Registered!!")
}

module.exports = registerUser
