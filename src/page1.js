// Import required modules from 'react' and 'react-router-dom'
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// Import custom components
import ProgressBar from './ProgressBar';
import Hiking from './hiking';
import Header from './header';
import Page2 from './page2';
import StudentExercise1 from './StudentExercise1';
import Button from './Button';

// Page 1 Component
const Page1 = () => {
  const completed = 0; // Set the initial completed value for the progress bar
  const navigate = useNavigate();

  function handleClick(event) {
    navigate('/page2'); // Function to navigate to page2
  }

  function handleOnClick2(event) {
    navigate('/'); // Function to navigate back to the home page
  }

  return (
    <div className="container">
      <div className="background-image">
        <Hiking /> {/* Render the Hiking component */}
      </div>
      <div className="content">
        <Header title="STUDENT EXERCISE 1" subtitle="5 MINUTES" /> {/* Render the Header component with title and subtitle */}
        <ProgressBar bgcolor="#36545d" completed={completed} /> {/* Render the ProgressBar component with specified background color and completion percentage */}
        
        {/* Define the routes for the nested components */}
        <Routes>
          <Route path="/*" element={<StudentExercise1 />} /> {/* Render the StudentExercise1 component */}
          <Route path="/page2" element={<Page2 />} /> {/* Render the Page2 component */}
        </Routes>

        {/* Button to navigate to the next page */}
        <button type="button" onClick={handleClick} style={{ marginLeft: '40px' }}>
          Next Page
        </button>
        
        {/* Button to navigate back to the home page */}
        <Button text=" Back " onClick={handleOnClick2} style={{ padding: "10px 28px", marginTop: "20px" }} />
      </div>
    </div>
  );
};

export default Page1;
