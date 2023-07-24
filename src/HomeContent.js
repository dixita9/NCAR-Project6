// Import required modules from 'react' and 'react-router-dom'
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CustomBox from './Box';
// Import custom components
import Button from './Button';
import { Box } from '@mui/material';
import StudentExercise0 from './StudentExercise0';
// Page0 component
const HomeContent = () => {
  const navigate = useNavigate();




  // Function to handle button click and navigate to page1
  function handleClick(event) {
    navigate('/page0');
    {/*localStorage.clear();*/}

  }





  return (
    <div  >
      <CustomBox><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </CustomBox>
      
      
      <Button
        text="Start Evaluation"
        onClick={handleClick}
        style={{  marginLeft :"320px"}}
      />
      
    </div>
    

  );
};

export default HomeContent;
