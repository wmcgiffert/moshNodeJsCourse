const http = require('http');
const webServer = http.createServer();


const portNumer = 3000;
webServer.listen(portNumer);
console.log(`LISTENING ON PORT:${portNumer}`);
