// let url = 'https://mylogger.io/log';

// function log(message){
//     //sends and HTTP request
//     console.log(message);
// }

// module.exports.log = log;


// var url = 'https://mylogger.io/log';

// function log(message){
//     //sends and HTTP request
//     console.log(message);
// }

// log('hello is it me youre looking for?');

// module.exports.log = log;
// module.exports.url = url;

// loading a module
// var logger = require('./modules');
// console.log(logger);

// logger.log('Hello is it me youre looking for?');

var log = require('./modules');
function path(){
    console.log(__filename);
    console.log(__dirname);
    console.log('Loading modules....');
}

function logs(){
    console.log('Loading Logger'); 
}
module.exports.logs = logs;
module.exports.path = path; 
module.exports; 


