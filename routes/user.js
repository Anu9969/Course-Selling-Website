// const express = require('express');
// const userRoutes = express.Routes();

const {Router} = require('express');
const {userModel} = require('../db');
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config");


const userRouter = Router();

userRouter.post('/signup', async (req,res) =>{
    const {email,password,firstName, lastName} = req.body;

    await userModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })
    res.json({
        message: "signup endpoint"
    })
})
userRouter.post('/login' ,async function(req,res) {
    const {email, password} = req.body;

    const user = await userModel.findOne({
        email:email,
        password:password
    })

    if(user){
        const token = JsonWebTokenError.sign({
            id:user._id
        }, JWT_USER_PASSWORD);    //YE JWT NHI SAMJHA BUT SAB SAMJHNA H IS PROJEDT SE RELATED SAATH SAATH

        //aise token auth kro ya can use cookie logic

        res.json({
            token:token
        })
 
    }
    else{
        res.status(403).json({
            message: "inxorrect email or password"
        })
    }
    
})



userRouter.get('/purchases', (req,res) => {
    res.json({
        message: "user purchased courses"
    })
})



module.exports = { userRouter: userRouter };