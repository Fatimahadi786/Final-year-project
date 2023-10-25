import React, { useState } from "react";
import { Paper,} from '@mui/material';
import { Grid, TextField, Typography, Button,MenuItem,Select } from "@mui/material";
import { useFormikContext, Field, ErrorMessage } from "formik";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from '@mui/material/Box';
import './BookingInfo.css';

import {CiCircleRemove} from 'react-icons/ci'


// import images'
import EASYPAISA from '../../../Images/easypaisa.png'
import BANK from '../../../Images/bnk.png'



const BookingInfo = () => {
  const formik = useFormikContext();
  const [oneWayTrip, setOneWayTrip] = useState(true);
  const [cities, setCities] = useState([{ to: "", from: "", departureDate: "" }]);
  const [flightType, setFlightType] = useState("oneWay");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  // const [openoption, setopenoption] =useState
  const [openOption, setOpenOption] = useState(false);
  const [flightClass, setFlightClass] = useState('Economy');
  const [paymentMethod, setPaymentMethod] = useState('EasyPaisa');


  function handleFlightType(value) {
    if (value === "oneWay") {
      setOneWayTrip(true);
    } else if (value === "roundWay") {
      setOneWayTrip(false);
    } else if (value === "multicity") {
      setOneWayTrip(false);
    }
    setFlightType(value);
  }

  const handleAddCity = () => {
    setCities([...cities, { to: "", from: "", departureDate: "" }]);
  }
    const handleRemoveCity =(cityIndex) =>{
    // Define the logic to remove a city from your 'cities' state or data
    // For example, if 'cities' is an array of city objects, you can remove a city like this:
    const updatedCities = cities.filter((city, index) => index !== cityIndex);
    setCities(updatedCities);
  }
  const handleAdultChange = (value) => {
    if (adults + value >= 0) {
      setAdults(adults + value);
    }
  };

  const handleChildrenChange = (value) => {
    if (children + value >= 0) {
      setChildren(children + value);
    }
  };

  const handleInfantChange = (value) => {
    if (infants + value >= 0) {
      setInfants(infants + value);
    }
  };
  const handleInputChange = () => {
    setOpenOption(!openOption);
  };
  const handleFlightClassChange = (event) => {
    setFlightClass(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleBookingSubmit = () => {
    // Handle the form submission logic here
    console.log('Selected Add passenger:',adults,children,infants);
    console.log('Selected Flight Class:', flightClass);
    console.log('Selected Payment Method:', paymentMethod);
  };


  console.log("Booking Info", formik.values);

  return (
    <>
    <div className="booking">
    <Typography variant="h6" gutterBottom>
      Booking Details
    </Typography>
  
    <FormControl className="formcontrol">
      <RadioGroup
        row
        aria-label="row-radio-buttons-group"
        name="row-radio-buttons-group"
        onChange={(e) => {
          formik.handleChange(e);
          handleFlightType(e.target.value);
        }}
        value={formik.values["row-radio-buttons-group"]}
        className="mb-3"
      >
        <FormControlLabel
          value="oneWay"
          control={<Radio />}
          label="One Way Trip"
        />
        <FormControlLabel
          value="roundWay"
          control={<Radio />}
          label="Round Way Trip"
        />
        <FormControlLabel
          value="multicity"
          control={<Radio />}
          label="Multicity Trip"
        />
      </RadioGroup>
    </FormControl>
    <br></br>
    <hr/>
  <br></br>
  {flightType === "multicity" && cities.map((city, index) => (
  <div key={index} className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
    <Field
      name={`city${index}.to`}
      as={TextField}
      label={`To`}
      variant="outlined"
      fullWidth
    />
    <Field
      name={`city${index}.from`}
      as={TextField}
      label={`From`}
      variant="outlined"
      fullWidth
    />
    <Field
      name={`city${index}.departureDate`}
      as={TextField}
      label={`Departure Date`}
      type="date"
      variant="outlined"
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
    />
   
      <CiCircleRemove  className="IconDiv" variant="outlined" onClick={() => handleRemoveCity(index)}/>
    
  </div>
))}
{flightType === "multicity" && (
  <Button variant="outlined" onClick={handleAddCity}  className="flightbtn">
    Add Flight
  </Button>
)}

    {flightType !== "multicity" && (
      <Grid container spacing={3}>
        <Grid item xs={3} className="mb-3">
          <Field
            name="origin"
            as={TextField}
            label="From"
            variant="outlined"
            fullWidth
          />
          <ErrorMessage name="origin" component="div" className="text-danger" />
        </Grid>
        <Grid item xs={3} className="mb-3">
          <Field
            name="destination"
            as={TextField}
            label="Destination"
            variant="outlined"
            fullWidth
          />
          <ErrorMessage name="destination" component="div" className="text-danger" />
        </Grid>
        <Grid item xs={3} className="mb-3">
          <Field
            name="journeyDate"
            as={TextField}
            label="Journey Date"
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <ErrorMessage name="journeyDate" component="div" className="text-danger" />
        </Grid>
        <Grid item xs={3} className="mb-3">
          <Field
            name="returnDate"
            as={TextField}
            label="Return Date"
            type="date"
            disabled={oneWayTrip}
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <ErrorMessage name="returnDate" component="div" className="text-danger" />
        </Grid>
      </Grid>
    )}
    <br></br>
    {/* <hr/> */}
   <br></br>


   <div className="abccontainer">
 
   <FormControl className="selectContainer">
  <Select
    type="text"
    label="add passenger"
    variant="outlined"
    placeholder="add passenger"
    fullWidth
    className="select"
  >
    <MenuItem className="guestForm">
      <MenuItem className="guestType">
        <Typography>Adults:</Typography>
        <Box className="counter">
          <Button
            className="button"
            onClick={() => handleAdultChange(-1)}
          >
            -
          </Button>
          <Typography>{adults}</Typography>
          <Button
            className="button"
            onClick={() => handleAdultChange(1)}
          >
            +
          </Button>
        </Box>
      </MenuItem>
      <MenuItem className="guestType">
        <Typography>Children:</Typography>
        <Box className="counter">
          <Button
            className="button"
            onClick={() => handleChildrenChange(-1)}
          >
            -
          </Button>
          <Typography>{children}</Typography>
          <Button
            className="button"
            onClick={() => handleChildrenChange(1)}
          >
            +
          </Button>
        </Box>
      </MenuItem>
      <MenuItem className="guestType">
        <Typography>Infants:</Typography>
        <Box className="counter">
          <Button
            className="button"
            onClick={() => handleInfantChange(-1)}
          >
            -
          </Button>
          <Typography>{infants}</Typography>
          <Button
            className="button"
            onClick={() => handleInfantChange(1)}
          >
            +
          </Button>
        </Box>
      </MenuItem>
    </MenuItem>
  </Select>
</FormControl>
    <FormControl className="selectContainer">
      <Select
        type="text"
        label="Class"
        variant="outlined"
        placeholder="Flight Class"
        fullWidth
        className="select"
      >
        <MenuItem value="economy" className="menuItem">
          Economy
        </MenuItem>
        <MenuItem value="business" className="menuItem">
          Business
        </MenuItem>
        <MenuItem value="first" className="menuItem">
          First Class
        </MenuItem>
      </Select>
    </FormControl>

  
    <FormControl className="selectContainer">
      <Select
        type="text"
        label="Class"
        variant="outlined"
        placeholder="Payment Method"
        fullWidth
        className="select"
      >
        <MenuItem value="easypaisa" className="menuItem">
         <img src={ EASYPAISA} alt="view" />   Easypaisa
        </MenuItem>
        <MenuItem value="bankTransfer" className="menuItem">
        <img src={BANK} alt="view" /> Bank Transfer
        </MenuItem>
      </Select>
    </FormControl>

</div>
<br></br>
<hr></hr>
<br></br>
</div>
  <br></br>
  
 
 
  </>
  ); 
};

export default BookingInfo;
