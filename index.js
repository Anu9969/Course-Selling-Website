const express = require('express');
const port = 8000;
const app = express();

app.get('/', (req,res) => {
    res.send('Feched Courses');
})

app.get('/courses', (req,res) => {
    res.send('purchased courses list')
})
app.post('/', (req,res)=>{
    res.send('Course purchased as user submitted info')
})

app.put('/', (req,res) =>{

})

app.delete('/',(req,res) =>{

})


app.listen(port, () => {
    console.log(`Course selling app listening on port ${port}`)
});