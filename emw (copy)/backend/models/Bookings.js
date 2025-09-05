
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  packageType: { type: String, required: true },
  user: {
    name: { type: String, required: true },
    email: { type: String }, // no longer required
    message: { type: String },
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);
