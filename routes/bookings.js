var express = require('express');
var router = express.Router();
require('../models/connection');
const fetch = require('node-fetch');
const Booking = require('../models/bookings');

router.get('/', (req, res) => {
    Booking.find().populate('idTrip').then(data => {	
        if (data){
            res.json({bookings: data })
        }
        else{ res.json({ result: false, tripsCart: 'No travel booked' })}
    })
})

module.exports = router;
