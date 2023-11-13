import {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBookingById,
  deleteBookingById,
} from '../controllers/bookingC.js'; // Make sure this path is correct
import express from "express";


const router = express.Router();

// Create a new flight booking
router.post('/', createBooking);

// Get all flight bookings
router.get('/flight-bookings', getAllBookings);

// Get a specific flight booking by ID
router.get('/flight-bookings/:id', getBookingById);

// Update a flight booking by ID
router.put('/flight-bookings/:id', updateBookingById);

// Delete a flight booking by ID
router.delete('/flight-bookings/:id', deleteBookingById);

export default router;
