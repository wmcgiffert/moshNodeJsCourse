const Logger = require('./modules');
const logger = new Logger();


//Register a listener *Register must come first* if it was after the Signaler would have signaled to nothing  
logger.on('messageLogged', (arg)=>{
    console.log(arg);
});

logger.log('message'); 






//Signalling that an event has happened
//Raised an event but has to have a emitter to listen
// emitter.emit('messageLogged', { id: 1, url: 'http://' });



