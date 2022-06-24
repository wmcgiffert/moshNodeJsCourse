const http = require('http');
const webServer = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('<p>New Connection Started.</p>');
        res.write('<p>Connecting.</p>');
        res.write('<p>Connecting...</p>\n');
        res.write('<p>Connecting.....</p>');
        res.write('<p>CONNECTED!</p>\n');
        res.write('<p>Hello World</p>');
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3,4,5,6,7,8,9,0]));
        res.end();
    }
});

console.log(webServer); 
const portNumer = 3000;

// Very low level not used anymore
// webServer.on('connection', (socket) => {
//     console.log('New connection....');
// });

webServer.listen(portNumer);
console.log(`LISTENING ON PORT:${portNumer}`);