var modules = require('./modules')
var logger = require('./logger')

// console.log(logger); should show { log: [Function: log] } if export.modules.log or [Function: log] uf export.modules 

modules.log(modules);
modules.log('message');

modules.log(logger);


