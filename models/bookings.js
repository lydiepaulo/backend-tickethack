const mongoose = require('mongoose');

const bookingsSchema = mongoose.Schema({
	idTrip: String,
});

const Booking = mongoose.model('bookings', bookingsSchema);

module.exports = Booking;