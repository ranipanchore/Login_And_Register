import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    mobile:{type:String},
    password:{type:String}
})

const user_model = mongoose.model("user",user_schema)

export default user_model