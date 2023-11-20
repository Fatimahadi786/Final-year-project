import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Flight = ({ flightInfo }) => {
  return (
    <div>
      <h2>Flight Details</h2>
      <p>Flight Number: {flightInfo.flightNumber}</p>
      <p>Airline: {flightInfo.airline}</p>
      <p>Departure Airport: {flightInfo.departureAirport}</p>
      <p>Arrival Airport: {flightInfo.arrivalAirport}</p>
      <p>Departure Time: {flightInfo.departureTime}</p>
      <p>Arrival Time: {flightInfo.arrivalTime}</p>
      <p>Duration (hours): {flightInfo.hours}</p>
      <p>Price: ${flightInfo.price}</p>
      <p>Class: {flightInfo.flightClass}</p>
      <p>Type: {flightInfo.flightType}</p>
      <hr />
    </div>
  );
};

const FlightList = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8800/api/flights/flights')
      .then(response => {
        console.log(response.data); // Check the response in the console
        setFlights(response.data);

      })
      .catch(error => {
        console.error('Error fetching flight data:', error);
      });
  }, []);

  return (
    <div>
      <h1>List of Flights</h1>
      {flights && Array.isArray(flights) && flights.map((flight, index) => (
        <Flight key={index} flightInfo={flight} />
        
      ))}
     
    </div>
    
  );
};

export default FlightList;
