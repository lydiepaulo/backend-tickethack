var express = require('express');
var router = express.Router();
var moment = require('moment');
require('../models/connection');
const fetch = require('node-fetch');
const Booking = require('../models/bookings');

router.get('/', (req, res) => {
    Booking.find().populate('idTrip').then(data => {	
        if (data){
            for (let i = 0; i < data.length; i++) {
                data = data[i].idTrip;
                let hour = moment(data.date).format("hh:mm")
                let toDeparture = moment().diff(data.date, 'hours')

                res.json({ departure: data.departure, arrival: data.arrival, hour, price: data.price, toDeparture: toDeparture })
            }
        }
        else{ res.json({ result: false, tripsCart: 'No travel booked' })}
    })
})

module.exports = router;
