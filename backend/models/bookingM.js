import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  flightType: {
    type: String,
    enum: ["one-way", "round-way", "multi-city"],
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  departureDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  passengerType: {
    type: String,
    enum: ["adult", "children", "infant"],
    required: true,
 
  adults: {
    type: Number,
    default: 0,
  },
  children: {
    type: Number,
    default: 0,
  },
  infants: {
    type: Number,
    default: 0,
  },
},
});

export default mongoose.model("FlightBooking", BookingSchema);
