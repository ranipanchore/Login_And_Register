import express from "express"
import {Getall,Signup,Login} from "../Controller/user.controller.js"
const router = express.Router()

router.get("/getall",Getall)
router.post("/signup",Signup)
router.post("/login",Login)

export default router