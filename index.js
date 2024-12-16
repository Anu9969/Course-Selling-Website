const express = require('express');
const mongoose = require("mongoose");
const {userRouter} = require('./routes/user');
const {CourseRouter} = require('./routes/course');
const {adminRouter} = require('./routes/admin');

const app = express();
app.use(express.json()); //jb bhi user se data input kranah to use this 

app.use('/user' , userRouter);
app.use('/course' , CourseRouter);
app.use('/admin' ,adminRouter);

// userRoutes(app);
// CourseRoutes(app);

async function main(){
    await mongoose.connect("mongodb+srv://Coursera:Anu9969@cluster0.1wdgo.mongodb.net/");
    app.listen(8000);
    console.log("listening");
}



main();