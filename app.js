const os = require('os');

var osObj = os.totalmem();
var osObj2 = os.freemem();
console.log(`Total Memory: ${osObj} \n Free Memory: ${osObj2}`);


// const path = require('path');

// var pathObj = path.parse(__filename); 
// console.log(pathObj);

// var modules = require('./modules');
// console.log(modules);
// modules('used log function'); 