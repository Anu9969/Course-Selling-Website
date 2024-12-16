// const express = require('express');
// const userRoutes = express.Routes();

const {Router} = require('express');

const userRouter = Router();

userRouter.post('/signup', (req,res) =>{
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