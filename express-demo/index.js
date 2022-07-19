const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json()); 

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

//Get Routes
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

//Post Routes
app.post('/api/courses', (req,res) => {

    //creates the schema
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    
    //assign schema
    const result = schema.validate(req.body);
    
    //validates the schema
    if(result.error){
        res.status(400).send(result.error.message);
        return;
    }
    
    //create new course
    const course = {
        id: courses.length + 1, 
        name: req.body.name
    };

    //add to array and send array to the front-end. 
    courses.push(course);
    res.send(courses); 
})

//Put Routes
app.put('/api/courses/:id', (req,res) => {
    //Look up the course
    let course = courses.find(c=> c.id === parseInt(req.params.id));
    //If not existing, return 404
    if(!course) res.status(404).send('The course with the given id was not found');

    //Validate
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })
    const result = schema.validate(req.body);
    
    //If invalid, return 400 - Bad Request
    if(result.error){
        res.status(400).send('Invalid Course please input valid course'); 
        return;
    }

    //Update course
    course.name = req.body.name;

    //Return the updated course
    res.send(courses);
})

//PORT
const portNum = process.env.PORT || 3000;
app.listen(portNum, ()=> console.log(`Listening on port ${portNum}...`));
