var express = require('express');
var router = express.Router();
require('../models/connection');
const fetch = require('node-fetch');
const Cart = require('../models/carts')
const Trip = require('../models/trips')
const Booking = require('../models/bookings')
var moment = require('moment');
//save search to cart if not exists

router.post('/adding', (req, res) => {
    // Check if the city has not already been added
    Cart.findOne({idTrip: req.body.idTrip}).then(findInCart => {
      if (!findInCart) {
            const newTrip = new Cart({
              idTrip: req.body.idTrip,

            });
            // Finally save in database
            newTrip.save().then(newTripSaved => {
              res.json({ result: true, NewRegistration: newTripSaved })
            })
          }
       else {
        // City already exists in database
        res.json({ result: false, error: 'Trip already added to the cart' })
      }
    })
})


//récupération du panier

router.get('/', (req, res) => {
    Cart.find().populate('idTrip').then(data => {	
        if (data){
            res.json({tripsCart: data })
        }
        else{ res.json({ result: false, tripsCart: 'Cart is empty' })}
    })
})

router.delete('/pay', (req, res) => {
    const newBooking = new Booking({
        idTrip: req.body.idTrip,
      });
      // Finally save in database
      newBooking.save().then(
    Cart.deleteMany().then(deleletingWork => { 
        if(deleletingWork.deletedCount > 0){
            res.json({ result: true});
        }
        else {  
            res.json({ result: false, error: 'Trip not found' });
          }}))})


//

module.exports = router;
