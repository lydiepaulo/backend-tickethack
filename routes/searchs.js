var express = require('express');
var router = express.Router();
require('../models/connection');
const fetch = require('node-fetch');
const Trip = require('../models/trips');
var moment = require('moment');


router.get('/', (req, res) => {
    //if all fields aren't completed
    if (!req.body.departure || !req.body.arrival || !req.body.date) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return;
    }

    //if completed
    else {
        Trip.find({ departure: req.body.departure, arrival: req.body.arrival })
            .then(tripsData => {
                const departureDate = req.body.date;
                let findDates = tripsData.filter(e => moment(e.date).format("DD/MM/YYYY") === departureDate)
                res.json({ findDates })
            });
    }
});

module.exports = router;
