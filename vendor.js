'use strict';

const myEvents = require('./events.js');
const faker = require('faker');
require('./driver.js');
require('./caps.js')
require('dotenv').config();

setInterval(() => {
    myEvents.emit('Pickup', {
        STORE_NAME: process.env.STORE_NAME,
        orderId: faker.datatype.uuid(),
        customerName: faker.name.findName(),
        address: faker.address.streetAddress()
    });
    setTimeout(() => {
        myEvents.emit('Delivered', { message: `Thank You For Delivering the order`, });
    }, 3000);
}, 5000);
