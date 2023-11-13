import FlightBooking from '../models/flightM.js'; // Replace with the actual path to your model file

// Create a new flight booking
const createBooking = async (req, res) => {
  try {
    const {
      flightType,
      origin,
      destination,
      departureDate,
      returnDate,
      passengerType,
      adults,
      children,
      infants,
    } = req.body;

    const booking = new FlightBooking({
      flightType,
      origin,
      destination,
      departureDate,
      returnDate,
      passengerType,
      adults,
      children,
      infants,
    });

    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create a new booking' });
  }
};

// Get all flight bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await FlightBooking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve flight bookings' });
  }
};

// Get a specific flight booking by ID
const getBookingById = async (req, res) => {
  try {
    const booking = await FlightBooking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve the booking' });
  }
};

// Update a flight booking by ID
const updateBookingById = async (req, res) => {
  try {
    const updatedBooking = await FlightBooking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update the booking' });
  }
};

// Delete a flight booking by ID
const deleteBookingById = async (req, res) => {
  try {
    const deletedBooking = await FlightBooking.findByIdAndRemove(req.params.id);

    if (!deletedBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete the booking' });
  }
};

export {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBookingById,
  deleteBookingById,
};
