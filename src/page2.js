// Import required modules from 'react' and 'react-router-dom'
import React from 'react';
// Import custom components
import ProgressBar from './ProgressBar'; 
import Hiking from './hiking'; 
import StudentExercise2 from './StudentExercises2'; 
import Page3 from './page3'; 
import Button from './Button';
import Header from './header'; 
import {Route, Routes, useNavigate} from 'react-router-dom'; // Importing required components from react-router-dom

//Page 2 Component
const Page2 = () => {
  const completed = 0; // Set the initial completed value here
  const navigate = useNavigate(); // Using the useNavigate hook from react-router-dom

  function handleOnClick(event) {
    navigate('/page3'); // Navigate to '/page3' when the button is clicked
  }

  function handleOnClick2(event) {
    navigate('/page1'); // Navigate to '/page1' when the button is clicked
  }

  return (
    <div className="container">
      <div className="background-image">
        <Hiking /> {/*Render the Hiking component*/}
      </div>
      <div className="content">
        <Header title="STUDENT EXERCISE 2" subtitle="13 MINUTES" /> {/*Render the Header component with title and subtitle*/}
        <ProgressBar bgcolor="#36545d" completed={completed} /> {/*Render the ProgressBar component with bgcolor and completed prop */}

        <Routes>
          <Route path="/*" element={<StudentExercise2 />} /> {/*Render the StudentExercise2 component for all paths*/}
          <Route path="/page3" element={<Page3 />} /> {/*Render the Page3 component for '/page3' path*/}
        </Routes>

        <div style={{ marginLeft: "40px", margin: "20px" }}>
          <Button text=" Back " onClick={handleOnClick2} style={{ padding: "10px 28px", marginTop: "20px" }} /> {/* Render the Button component with text and onClick event handler */}
          <button type="button" onClick={handleOnClick} style={{ marginLeft: '40px', marginTop: "25px" }}>
            Next Page
          </button> {/* Render a regular button with onClick event handler */}
        </div> 
      </div>
    </div>
  );
};

export default Page2;
