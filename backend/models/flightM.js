import mongoose from "mongoose";

const FlightSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  airline: {
    type: String,
    required: true,
  },
  flightLogo: {
    type: String, // Store the path or URL to the flight logo.
  },
  departureAirport: {
    type: String,
    required: true,
  },
  arrivalAirport: {
    type: String,
    required: true,
  },
  departureTime: {
    type: Date,
    required: true,
  },
  arrivalTime: {
    type: Date,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  flightClass: {
    type: String,
    enum: ["economy", "business", "first"],
    required: true,
  },
  isDelayed: {
    type: Boolean,
    default: false,
  },
 
  // Add more properties specific to flights if needed
}, { timestamps: true });

export default mongoose.model("Flight", FlightSchema);
