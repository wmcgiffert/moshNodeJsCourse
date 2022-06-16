const { EventEmitter } = require('events');



var url = 'https//mylogger.io/log';

class Logger extends EventEmitter {  
    log(message) {
        //Send an HTTP request
        console.log(message);

        //Raise and event
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }  
}


module.exports = Logger;

// // console.log(module);
// var x =;
// //creating a module; 
// var url = 'https//mylogger.io/log';
// function log(message){
//     console.log(message)
// }

// //packages functions/variables for export and makes them global
// // module.exports.log = log;
// //Can change the name of the export. Does not have to match the var or function it exports
// // module.exports.endPoint = url;