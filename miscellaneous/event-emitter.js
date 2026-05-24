const EventEmitter = require('events');
//
// // Initializing event emitter instances
let eventEmitter = new EventEmitter();
//
// // Registering to myEvent
// eventEmitter.on('myEvent', (msg, arg2) => {
//    console.log(msg, arg2);
// });
//
// // Triggering myEvent
// eventEmitter.emit('myEvent', "First event", '2nd');

const obj = {
   name: 'qwe',
   age:12,
};

function createEmitter(actionName, callback) {
   // eventEmitter.on(actionName, callback);
   eventEmitter.on(actionName, (arg) => {
      try {
         // Try to parse the argument as JSON
         const parsed = JSON.parse(arg);
         callback(parsed);
      } catch (error) {
         // If parsing fails, call callback with undefined
         callback(undefined);
      }
   });
}

createEmitter('myEvent', console.log);
eventEmitter.emit('myEvent', JSON.stringify(obj));
eventEmitter.emit('myEvent', 'abc');