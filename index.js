const express = require('express');
const {userRouter} = require('./routes/user');
const {CourseRouter} = require('./routes/course');

const app = express();


app.use('/user' , userRouter);
app.use('/course' , CourseRouter);

// userRoutes(app);
// CourseRoutes(app);





app.listen(8000);