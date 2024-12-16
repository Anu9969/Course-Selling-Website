const express = require('express');
const port = 8000;
const app = express();


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

app.get('/course/purchase', (req,res) => {
    //you expect user to pay
    res.json({
        message: "signup endpoint"
    })
})

app.get('/user/purchases', (req,res) => {
    res.json({
        message: "user purchased courses"
    })
})

app.get('/courses', (req,res) => {
    res.json({
        message: "courses list"
    })
})





app.listen(port, () => {
    console.log(`Course selling app listening on port ${port}`)
});