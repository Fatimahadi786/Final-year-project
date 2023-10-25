import React, {useState} from "react";
import { Container, Typography, TextField, Select, MenuItem, Button } from '@mui/material';
import { FormControl, InputLabel } from '@mui/material';

//imported Icons ===============>
 import {HiOutlineLocationMarker } from 'react-icons/hi';
 import {RiAccountPinCircleLine } from 'react-icons/ri';
 import {RxCalendar} from 'react-icons/rx';

const Search = () => {
  
  const [openoption, setopenoption] =useState(false);
  const [flyingFrom, setFlyingFrom] = useState('');
  const [flyingTo, setFlyingTo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

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

  return (
    <div className='search container section'>
       <div className="sectionContainer grid">

            <div className="searchInputs flex">
            {/* <FormControl className="input-field">
          <InputLabel htmlFor="booking-type">Booking Type</InputLabel>
          <Select
            id="booking-type"
            label="Booking Type"
            defaultValue="oneway"
          >
            <MenuItem value="oneway">One Way</MenuItem>
            <MenuItem value="roundtrip">Round Trip</MenuItem>
            <MenuItem value="multicity">Multi-City</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="input-field">
          <InputLabel htmlFor="flight-class">Flight Class</InputLabel>
          <Select
            id="flight-class"
            label="Flight Class"
            defaultValue="economy"
          >
            <MenuItem value="economy">Economy</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="first">First Class</MenuItem>
          </Select>
        </FormControl> */}

            <div className="singleInput flex">
                <div className="iconDiv">
                  < HiOutlineLocationMarker className="icon" />
                </div>
                <div className="texts">
                  <h4>Flying From</h4>
                  <input
                       type="text"  placeholder='Where do you want to go?'
                       value={flyingFrom}
                       onChange={(e) => setFlyingFrom(e.target.value)}
                     />
                </div>
              </div>
            <div className="singleInput flex">
                <div className="iconDiv">
                  < HiOutlineLocationMarker className="icon" />
                </div>
                <div className="texts">
                  <h4>Flying To</h4>
                  <input
                    type="text"  placeholder='Where do you want to go?'
                    value={flyingTo}
                    onChange={(e) => setFlyingTo(e.target.value)}
                  />
                
                </div>
            </div>
              <div className="singleInput flex">
                <div className="iconDiv">
                  < RxCalendar className="icon" />
                </div>
                <div className="texts">
                  <h4>Check In</h4>
                  <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
                </div>
              </div>
              <div className="singleInput flex">
                <div className="iconDiv">
                  < RxCalendar className="icon" />
                </div>
                <div className="texts">
                  <h4>Check In</h4>
                  <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
                </div>
              </div>
              <div className="singleInput flex">
                <div className="iconDiv">
                  < RiAccountPinCircleLine className="icon"
                   />
               
                </div>
                <div className="texts">
                  <h4>Add travelers</h4>
                  <input
                 type="text"  placeholder='adult 1, children 0, inflant 0'
                onClick={()=> setopenoption(!openoption)}  
                   />
                </div>
               {openoption  && <div className="guest-form">
      
      <div className="guest-type">
        <span>Adults:</span>
        <div className="counter">
          <button onClick={() => handleAdultChange(-1)}>-</button>
          <span>{adults}</span>
          <button onClick={() => handleAdultChange(1)}>+</button>
        </div>
      </div>
      <div className="guest-type">
        <span>Children:</span>
        <div className="counter">
          <button onClick={() => handleChildrenChange(-1)}>-</button>
          <span>{children}</span>
          <button onClick={() => handleChildrenChange(1)}>+</button>
        </div>
      </div>
      <div className="guest-type">
        <span>Infants:</span>
        <div className="counter">
          <button onClick={() => handleInfantChange(-1)}>-</button>
          <span>{infants}</span>
          <button onClick={() => handleInfantChange(1)}>+</button>
         
        </div>
      </div>
                </div>}
              </div>
              <button className='btn btnBlock flex'>Search Flight</button>
           
            </div>
            </div>
       </div>
  )
}

export default Search
