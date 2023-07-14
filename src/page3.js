// Import required modules from 'react' and 'react-router-dom'
import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
// Import custom components
import ProgressBar from './ProgressBar';
import Hiking from './hiking';
import StudentExercise3 from './StudentExercises3';

import Button from './Button';
import Header from './header';

//Page 3 Component
const Page3 = () => {
  const completed = 0; // Progress percentage

  const navigate = useNavigate(); // React Router hook for navigation

  function handleOnClick(event) {
    navigate('/page2'); // Navigate to '/page2' when the button is clicked
  }

  function handleOnClick2(event) {
    navigate('/'); // Navigate to the home page when the button is clicked
  }

  return (
    <div className="container">
      <div className="background-image">
        <Hiking /> {/* Render the Hiking component */}
      </div>
      <div className="content">
        <Header title="STUDENT EXERCISE 3" subtitle="5 MINUTES" /> {/* Render the Header component with title and subtitle */}
        <ProgressBar bgcolor="#36545d" completed={completed} /> {/* Render the ProgressBar component with background color and progress percentage */}
        <StudentExercise3 /> {/* Render the StudentExercise3 component */}
        <br></br>

        {/* Alternative implementation using custom Button component */}
        <Button text="Back" onClick={handleOnClick} style={{ padding: "10px 28px", marginTop: "20px" }} /> {/* Render a button with 'Back' text, handleOnClick event handler, and custom styling */}
        <Button text="Home" onClick={handleOnClick2} style={{ padding: "10px 28px", marginTop: "20px" }} /> {/* Render a button with 'Home' text, handleOnClick2 event handler, and custom styling */}

      </div>
    </div>
  );
};

export default Page3;
