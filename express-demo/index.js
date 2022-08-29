const config = require('config');
const express = require('express');
const { default: helmet } = require('helmet');
const courses = require('./routes/courses');
const home = require('./routes/home');
const morgan = require('morgan');
const logger = morgan('combined');
const auth = require('./middleware/auth');
const startUpDebugger = require('debug')('app:startup');
const DbDebugger = require('debug')('app:db');

const app = express();

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`); //not set will return undefined
// app.get('env');
// console.log(`app: ${app.get('env')}`);

app.set('view engine','pug');
app.set('views', './views'); //default setting means all views should be in a folder called views at the root of project

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(auth.authentication); 
app.use(helmet());
app.use('/api/courses', courses);
app.use('/', home);

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