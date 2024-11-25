import mongoose from "mongoose";


function mongoConnect(DB_URL){

    mongoose.connect(DB_URL).then((req,res)=>{
        console.log("Database Connection successfully!")
    }).catch((err)=>{
        console.log(err);
    })

}
export default mongoConnect;