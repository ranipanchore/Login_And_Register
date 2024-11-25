import user_model from "../Model/user.model.js"

const Getall = (req,res) =>{
    res.send("Get all data of user")
}
const Signup = async (req,res) =>{
    const {username,email,mobile,password} = req.body;

    const newUser = new user_model({username,email,mobile,password});
   await newUser.save()
    res.send(newUser);

}

const Login = async(req, res) =>{
    const {username,password} = req.body
    const loginUser = await user_model.findOne({username,password})
    res.send({message:"user logged in",loginUser});
}
export {Getall , Signup, Login}