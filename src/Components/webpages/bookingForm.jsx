import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Typography } from '@mui/material';

const FlightBookingForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    departureCity: '',
    arrivalCity: '',
    departureDate: '',
    departureTime: '',
    returnDate: '',
    returnTime: '',
    adults: 1,
    children: 0,
    infants: 0,
    flightClass: 'economy',
  });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add logic to handle the form submission, such as sending the data to a server.
    console.log('Form submitted:', formData);
  };

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Flight Booking Form</Typography>
      </Grid>

      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          {/* Departure City */}
          <FormControl fullWidth>
            <TextField
              label="Departure City"
              variant="outlined"
              name="departureCity"
              value={formData.departureCity}
              onChange={handleChange}
              required
            />
          </FormControl>
        </form>
      </Grid>

      {/* Arrival City */}
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            label="Arrival City"
            variant="outlined"
            name="arrivalCity"
            value={formData.arrivalCity}
            onChange={handleChange}
            required
          />
        </FormControl>
      </Grid>

      {/* Departure Date */}
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            label="Departure Date"
            variant="outlined"
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
        </FormControl>
      </Grid>

      {/* Departure Time */}
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            label="Departure Time"
            variant="outlined"
            type="time"
            name="departureTime"
            value={formData.departureTime}
            onChange={handleChange}
            required
          />
        </FormControl>
      </Grid>

      {/* Continue with similar components for other form fields */}

      {/* Submit Button */}
      <Grid item xs={12}>
        <FormControl fullWidth>
          <Button type="submit" variant="contained" color="primary">
            Book Flight
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default FlightBookingForm;
