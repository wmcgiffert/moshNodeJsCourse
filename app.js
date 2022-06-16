const { EventEmitter } = require('events');
const emitter = new EventEmitter();

//Register a listener *Register must come first* if it was after the Signaler would have signaled to nothing  
emitter.on('messageLogged', (arg)=>{
    console.log(arg);
});

//Signalling that an event has happened
//Raised an event but has to have a emitter to listen
emitter.emit('messageLogged', { id: 1, url: 'http://' });

