// exclusive module of NODEJS

const EventEmitter = require('events');

class Logger extends EventEmitter {
    execute(cb) {
        console.log('Before');
        this.emit('start');
        cb();
        this.emit('finish');
        console.log('After');
    }
}

const logger = new Logger();

// every time it do 'start' will do another thing
logger.on('start', () => console.log('Starting'));
logger.on('finish', () => console.log('Finish'));
logger.on('finish', () => console.log('It is done'));

logger.execute(() => console.log('Hello world'));