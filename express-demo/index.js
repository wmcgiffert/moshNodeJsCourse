const express = require('express');
const app = express();
const courses = [
    {
        id: 1,
        name: 'Information Sciences'
    },
    {
        id: 2,
        name: 'MAcc'
    },
    {
        id: 3,
        name: 'Accounting'
    },
]

app.get('/', (req,res) => {
    res.send('Hello World!!!!!!!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
})

app.get('/api/courses/:id', (req,res) => {
    let course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given id was not found');
    res.send(course);
})


// app.post();
// app.delete();
// app.put();

//PORT
const portNum = process.env.PORT || 3000;
app.listen(portNum, ()=> console.log(`Listening on port ${portNum}...`));
