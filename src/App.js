import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
