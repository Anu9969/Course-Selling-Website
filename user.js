

function userRoutes(app){


app.post('/user/signup', (req,res) =>{
    res.json({
        message: "signup endpoint"
    })
})
app.post('/user/login' ,function(req,re) {
    res.json({
        message: "login endpoint"
    })
})



app.get('/user/purchases', (req,res) => {
    res.json({
        message: "user purchased courses"
    })
})

}

module.exports = userRoutes;