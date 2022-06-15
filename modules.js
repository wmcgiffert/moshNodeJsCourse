// console.log(module);
// var x =;
//creating a module; 
var url = 'https//mylogger.io/log';
function log(message){
    console.log(message)
}

//packages functions/variables for export and makes them global
// module.exports.log = log;
//Can change the name of the export. Does not have to match the var or function it exports
// module.exports.endPoint = url;
module.exports = log;