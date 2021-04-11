'use strict';

const myEvents = require('./events.js');

myEvents.on('Pickup', (event) => {
    console.log('EVENT: Pickup',event);
});

myEvents.on('In-transit', (event) => {
    console.log('EVENT: In Transit',event);
});

myEvents.on('Delivered', (event) => {
    console.log('EVENT: Delivered',event.message);
    console.log('=================================================');
});
