const express = require('express');
const userRoutes = require('./user');
const CourseRoutes = require('./course');
const port = 8000;
const app = express();


userRoutes(app);
CourseRoutes(app);





app.listen(port, () => {
    console.log(`Course selling app listening on port ${port}`)
});