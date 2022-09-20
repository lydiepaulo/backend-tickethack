var express = require('express');
var router = express.Router();
require('../models/connection');
const fetch = require('node-fetch');

router.post('/', (req, res) => {
    //if all fields are completed
    if (!req.body.departure || !req.body.arrival || !req.body.date) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return;
    }

    // else {
    //     Trip.find({ departure: req.body.departure, arrival: req.body.arrival, date: req.body.date })
    //         .then(data => {
    //             console.log(data);
    //         });
    // }
});

module.exports = router;
