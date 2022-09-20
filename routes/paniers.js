var express = require('express');
var router = express.Router();
require('../models/connection');
const fetch = require('node-fetch');
const Cart = require('../models/carts')
const Trip = require('../models/carts')
const Booking = require('../models/bookings')

//save search to cart if not exists

router.post('/carts/adding', (req, res) => {
    // Check if the city has not already been added
    Trip.findbyId({id}).then(findInCart => {
      if (!findInCart) {
            const newTrip = new Cart({
              departure: departure,
              arrival: arrival,
              date: date,
              price : price,
              payed : false,
            });
            // Finally save in database
            newTrip.save().then(newTripSaved => {
              res.json({ result: true, NewRegistration: newTripSaved })
            })
          }
       else {
        // City already exists in database
        res.json({ result: false, error: 'City already exists in cart' })
      }
    })
})


//récupération du panier

router.get('/carts', (req, res) => {
    Cart.find({}).then(data => {	
        if (data){
            res.json({ result: true, tripsCart: data })
        }
        else{ res.json({ result: false, tripsCart: 'Cart is empty' })}
    })
})

router.delete('carts/pay', (req, res) => {
    const newBooking = new Booking({
        departure: departure,
        arrival: arrival,
        date: date,
        price : price,
        payed : false,
      });
      // Finally save in database
      newBooking.save().then(
        res.json({ result: true, NewRegistration: newTripSaved }).then(
    Cart.delete({}).then(deleletingWork => { 
        if(deleletingWork.deletedCount > 0){
            res.json({ result: true, weather: data });
        }
        else {
            res.json({ result: false, error: 'City not found' });
          }})))

    })


//

module.exports = router;
