const mongoose = require('mongoose');

const bookingsSchema = mongoose.Schema({
	idTrip : { type: mongoose.Schema.Types.ObjectId, ref: 'trips' }
});

const Booking = mongoose.model('bookings', bookingsSchema);

module.exports = Booking;