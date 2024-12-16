// const express = require('express');
// const userRoutes = express.Routes();

const {Router} = require('express');
const {userModel} = require('../db');
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
userRouter.post('/login' ,function(req,re) {
    res.json({
        message: "login endpoint"
    })
})



userRouter.get('/purchases', (req,res) => {
    res.json({
        message: "user purchased courses"
    })
})



module.exports = { userRouter: userRouter };