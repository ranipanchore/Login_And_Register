import express from "express"
import dotenv from "dotenv"
import mongoConnect from "./Config/Connectdb.js"
import bodyParser from "body-parser"
import router from "./Routes/user.router.js"

dotenv.config()
const DB_URL = process.env.DB_URL
const PORT = process.env.PORT

mongoConnect(DB_URL)
// initialized
const app = express()

// middleware
app.use(bodyParser.json())
app.use("/user",router)


// server port use 
app.listen(PORT, (req,res)=>{
    console.log(`server started on http://localhost:${PORT}`)
})

