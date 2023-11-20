import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Registration from './Components/webpages/SignUp';
import Loginform from './Components/webpages/Login';
import AboutPage from './Components/webpages/About';
import ContactForm from './Components/webpages/Contact';
import AirlineBookingForm from './Components/webpages/bookingForm'
import FlightDetails from './Components/webpages/FlightList';


const App = () => {
  return (
    <div>
    <div>
   
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="About" element={<AboutPage />} />
        <Route path="flightlist" element={<FlightDetails/>} />
        <Route path="bookingForm" element={<AirlineBookingForm/>} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="Login" element={<Loginform />} />
        <Route path="signUp" element={<Registration />} />
      </Routes>
    </Router>
    </div>
    
         </div>
  );
};

export default App;