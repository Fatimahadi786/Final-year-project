import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import DestinationList from './Components/webpages/Destinations';
import Registration from './Components/webpages/SignUp';
import Loginform from './Components/webpages/Login';
import AboutPage from './Components/webpages/About';
import Search from './Components/Search/Search';

const App = () => {
  return (
    <div>
    <div>
   
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="About" element={<AboutPage/>} />
        <Route path="destinations" element={<DestinationList />} />
        <Route path="Login" element={<Loginform />} />
        <Route path="signUp" element={<Registration />} />
      </Routes>
    </Router>
    </div>
    <Search/>
         </div>
  );
};

export default App;
