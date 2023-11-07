const EventEmitter = require('events');
class CustomEventEmitter extends EventEmitter {}
const emitC = new CustomEventEmitter();
module.exports = emitC;