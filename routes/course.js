const {Router} =  require('express');
const CourseRouter = Router();

    CourseRouter.get('/purchase', (req,res) => {
        //you expect user to pay
        res.json({
            message: "signup endpoint"
        })
    })
    
    CourseRouter.get('/preview', (req,res) => {
        res.json({
            message: "courses list"
        })
    })
    

module.exports = { CourseRouter: CourseRouter };