// Import required modules from 'react' and 'react-router-dom'
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// Import custom components

import Hiking from './hiking';
import Page0 from './page0';
import Header from './header';
import Button from './Button';
import HomeContent from './HomeContent';


// Page0 component
const HomePage = () => {
  const navigate = useNavigate(); 

  // Function to handle button click and navigate to page1
  function handleClick(event) {
    navigate('/page0');
  }

  return (
    <div className="container">

      <div className="content">
        {/* Header component */}
        <Header title="HOME PAGE" subtitle="5 MINUTES" />
        <div className="background-image">
        <Hiking />
        </div>
        <Routes>
          {/* Route for StudentExercise0 */}
          <Route path="/" element={<HomeContent/>} />
          {/* Route for Page1 */}
          <Route path="/page0" element={<Page0 />} />
        </Routes>
        {/* Next page button */}
        <button type="button" onClick={handleClick} style={{ marginLeft: '40px' }}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default HomePage;