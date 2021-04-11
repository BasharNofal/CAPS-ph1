'use strict';

const myEvents = require('./events.js');

setTimeout(() => {
    myEvents.on('Pickup', (event) => {
        console.log('DRIVER:',`Picked up ${event.orderId}`);
        setTimeout(() => {
            myEvents.emit('In-transit', event)
        }, 2000);
    });
}, 1000);


