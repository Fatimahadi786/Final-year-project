import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  flightBookingSystem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bookingOptions: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing(2),
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(3),
  },
  travelerOptions: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing(2),
  },
  flightClassOptions: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing(2),
  },
  flightSearchOptions: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

function FlightBookingForm() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.flightBookingSystem}>
      <Typography variant="h4">Flight Booking System</Typography>
      
      <div className={classes.bookingOptions}>
        <div className={classes.option}>
          <Radio color="primary" value="roundTrip" defaultChecked />
          <label htmlFor="round-trip">Round Trip</label>
        </div>

        <div className={classes.option}>
          <Radio color="primary" value="oneWay" />
          <label htmlFor="one-way">One Way</label>
        </div>

        <div className={classes.option}>
          <Radio color="primary" value="multipleCity" />
          <label htmlFor="multiple-city">Multiple City</label>
        </div>
      </div>

      <div className={classes.travelerOptions}>
        {/* Add traveler options here */}
      </div>

      <div className={classes.flightClassOptions}>
        {/* Add flight class options here */}
      </div>

      <div className={classes.flightSearchOptions}>
        <TextField
          id="departure-from"
          label="Departure From"
          placeholder="Enter departure airport"
        />
        <TextField
          id="your-destination"
          label="Your Destination"
          placeholder="Enter destination airport"
        />
        <TextField
          id="departure-date"
          label="Departure Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="return-date"
          label="Return Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          Search Flights
        </Button>
      </div>
    </Container>
  );
}

export default FlightBookingForm;
