import express from 'express';
import {
  createFlight,
  getAllFlights,
  getFlightByFlightNumber,
  updateFlightByFlightNumber,
  deleteFlightByFlightNumber,
} from '../controllers/flightC.js'; // Replace with the actual path to your controller file

const router = express.Router();

// Create a new flight
router.post('/flights', createFlight);

// Get all flights
router.get('/flights', getAllFlights);

// Get a specific flight by flight number
router.get('/flights/:flightNumber', getFlightByFlightNumber);

// Update a flight by flight number
router.put('/flights/:flightNumber', updateFlightByFlightNumber);

// Delete a flight by flight number
router.delete('/flights/:flightNumber', deleteFlightByFlightNumber);

export default router;
