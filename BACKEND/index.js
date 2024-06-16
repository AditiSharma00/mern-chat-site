const express = require('express')
const cors = require('cors')
const app = express()
const userRoute = require("./Routes/userRoute")
require("dotenv").config()
const mongoose = require('mongoose')
app.use(express.json())
app.use(cors())

app.use("/api/users" , userRoute)  

const port = process.env.port ||  5000
const uri = process.env.ATLAS_URI

app.listen(port , (req,res)=>{
    console.log(`Server is running on port ${port} ..`)
})

mongoose.connect(uri,{
}).then(()=>console.log("MONGO DB connection established")).catch((error)=>
    console.log("Error in connecting to MONGO DB",error)
)
