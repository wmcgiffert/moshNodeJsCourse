// console.log(module);


//creating a module; 
var url = 'https//mylogger.io/log'
function log(message){
    console.log(message)
}

//packages functions/variables for export and makes them global
module.exports.log = log;
module.exports.url = url;
module.exports = log;