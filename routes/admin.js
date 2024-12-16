const {Router} = require('express');

const adminRouter = Router();
const {adminModel} = require("../db")


adminRouter.post('/signup' , (req,res)=>{
    res.json({
        message: "admin signup endpoint"
    })
})

adminRouter.post('/signin' , (req,res)=>{
    res.json({
        message: "admin signin endpoint"
    })
})

adminRouter.post('/allCources' , (req,res)=>{
    res.json({
        message: "admin all courses endpoint"
    })
})

adminRouter.put('/edit' , (req,res)=>{
    res.json({
        message: "admin edit courses endpoint"
    })
})

adminRouter.get('/coursesBulk' , (req,res)=>{
    res.json({
        message: "admin bulk endpoint"
    })
})

module.exports = { adminRouter: adminRouter };