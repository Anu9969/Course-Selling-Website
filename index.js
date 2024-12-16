const express = require('express');
const userRoutes = require('./user');
const CourseRoutes = require('./course');

const app = express();


userRoutes(app);
CourseRoutes(app);





app.listen(8000);