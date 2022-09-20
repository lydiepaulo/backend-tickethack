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
        //formater la date
        // const departureDate = req.body.date;
        // day = parseInt(moment(departureDate).format('DD'));
        // console.log(day)
        // month = moment(departureDate).format('MM');
        // year = moment(departureDate).format('YYYY');

        //la comparer date à celle de la base de données

        Trip.find({ departure: req.body.departure, arrival: req.body.arrival, date: req.body.date })
            .then(tripsData => {
                res.json({ tripsData });
            });
    }
});

module.exports = router;
