const express = require('express');
const {userRouter} = require('./routes/user');
const {CourseRouter} = require('./routes/course');
const {adminRouter} = require('./routes/admin');

const app = express();


app.use('/user' , userRouter);
app.use('/course' , CourseRouter);
app.use('/admin' ,adminRouter);

// userRoutes(app);
// CourseRoutes(app);





app.listen(8000);