var express = require('express');
var router = express.Router();
require('../models/connection');
const fetch = require('node-fetch');
const Trip = require('../models/trips');
var moment = require('moment');


router.get('/', (req, res) => {
    //format date
    const departureDate = req.body.date;
    m = moment(departureDate).format('HH-MM'); // '20/09/2022'
    m = moment("2022-09-20T09:39:16.414+00:00").format('HH-MM'); // '20/09/2022'
    console.log(m);

    //if all fields aren't completed
    if (!req.body.departure || !req.body.arrival || !req.body.date) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return;
    }

    //if completed
    else {
        Trip.find({ departure: req.body.departure, arrival: req.body.arrival, date: req.body.date })
            .then(tripsData => {
                res.json({ result: true, tripsData });
            });
    }

    //res.json({ m })
});

module.exports = router;
