function CourseRoutes(app){


    app.get('/course/purchase', (req,res) => {
        //you expect user to pay
        res.json({
            message: "signup endpoint"
        })
    })
    
    app.get('/courses', (req,res) => {
        res.json({
            message: "courses list"
        })
    })
    
}

module.exports = CourseRoutes;