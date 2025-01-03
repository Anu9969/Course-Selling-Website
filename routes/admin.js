const {Router} = require('express');
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config");
const adminRouter = Router();
const {adminModel, courseModel} = require("../db")
const {adminMiddleware} = require("../middlewares/admin")


adminRouter.post('/signup' , async (req,res)=>{
    const {email,password, firstName, lastName} = req.body;

    await adminModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })
    res.json({
        message: "admin signup endpoint"
    })
})

adminRouter.post('/login' , async (req,res)=>{
    const {email, password} = req.body;

    const admin = await adminModel.findOne({
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
        const token = JsonWebTokenError.sign({
            id:user._id
        }, JWT_ADMIN_PASSWORD);    //YE JWT NHI SAMJHA BUT SAB SAMJHNA H IS PROJEDT SE RELATED SAATH SAATH

        //aise token auth kro ya can use cookie logic

        res.json({
            token:token
        })
 

})

adminRouter.post('/allCources' ,adminMiddleware, async (req,res)=>{
    const adminId = req.userId;

    const {title, description, imageUrl, price } = req.body;

    const course = await courseModel.create({
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
        creatorId:adminId

    })

    res.json({
        message: "course created",
        courseId:course.id
    })
})

adminRouter.put('/edit', adminMiddleware , async (req,res)=>{
     const adminId = req.userId;

     const {title, description, imageUrl, price, courseId} = req.body;

     const course = await xourseModel.updateOne({
        _id : courseId,
        creatorId: adminId
     },
     {
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price
     }
    )

    res.json({
        message: "course updated"
    })
})

adminRouter.get('/coursesBulk' ,adminMiddleware, async (req,res)=>{
    const adminId = req.userId;

    const course = await courseModel.find({
        creatorId:adminId
    })
    res.json({
        message: "admin bulk endpoint"
    })
})

module.exports = { adminRouter: adminRouter };