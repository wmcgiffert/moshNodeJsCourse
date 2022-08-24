const config = require('config');
const express = require('express');
const Joi = require('joi');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const logger = morgan('combined');
const auth = require('./auth');
const { required } = require('joi');
const startUpDebugger = require('debug')('app:startup');
const DbDebugger = require('debug')('app:db');

const app = express();

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`); //not set will return undefined
// app.get('env');
// console.log(`app: ${app.get('env')}`);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(auth.authentication); 
app.use(helmet());



console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
// console.log('Mail Password: ' + config.get('mail.password')); //will display the password for the mail server

//only logs in the dev env
if(app.get('env') === 'development'){
    app.use(logger);
    startUpDebugger('Morgan enabled...');
}

//Db work.....
DbDebugger('Connected to the database');


//PORT
const portNum = process.env.PORT || 3000;
app.listen(portNum, ()=> console.log(`Listening on port ${portNum}...`));


const courses = [
    {
        id: 1,
        name: 'Information Sciences'
    },
    {
        id: 2,
        name: 'Enterprise Application Development'
    },
    {
        id: 3,
        name: 'Accounting'
    },
]

//Get Routes
//home api
app.get('/', (req,res) => {
    res.send('<h1>Welcome to Garrett\'s Node.js project</h1> <h2>Here are my projects:</h2><ol><li>www.thesocialbook.com</li></ol');
});


//get all the courses
app.get('/api/courses', (req, res) => {
    res.send(courses);
})
//get a singel course
app.get('/api/courses/:id', (req,res) => {
    let course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given id was not found');
    res.send(course);
})

//Post Routes
//create a new course 
app.post('/api/courses', (req,res) => {
    //validates the schema
    const { error } = validateCourse(req.body);    
    if(error) return res.status(400).send(result.error.message);
    
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
//Edit an existing course
app.put('/api/courses/:id', (req,res) => {
    //Look up the course
    let course = courses.find(c=> c.id === parseInt(req.params.id));

    //If not existing, return 404
    if(!course) return res.status(404).send('The course with the given id was not found');

    //Validate
    const { error } = validateCourse(req.body);
    if(error) return res.status(400).send('Invalid Course please input valid course'); 

    //Update course
    course.name = req.body.name;

    //Return the updated course
    res.send(courses);
})

//Delete Route
//Delete a Course
app.delete('/api/courses/:id', (req,res) => {
    //Look up the course if doesnt exist return 404
    const course = courses.find(c => c.id === parseInt(req.params.id)); 
    if(!course) return res.status(404).send('The course with the given ID was not found');
    
    //find index of the course
    const index = courses.indexOf(course);

    //Delete course from the Array
    courses.splice(index,1);

    //Send new course array back to user
    res.send(courses); 
})


//Schemas 

//Course needs a name thats at least 3 letters long and is required
function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return result = schema.validate(course);
}
