var events= require('events');
var eventEmitter= new events.EventEmitter();

var myEventHandler=function(){
    console.log('you got me rght');
}

eventEmitter.on('scream',myEventHandler);

eventEmitter.emit('scream');