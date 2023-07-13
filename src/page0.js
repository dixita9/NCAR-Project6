import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import ProgressBar from './ProgressBar';
import Hiking from './hiking';
import Header4 from './header4';
import Page1 from './page1';
import StudentExercise0 from './StudentExercise0';


const Page0 = () => {
  const completed = 33.33; // Set the initial completed value here
  const navigate = useNavigate();

  function handleClick(event) {
    navigate('/page1');
  }

  return (
    <div className="container">
      <div className="background-image">
        <Hiking />
      </div>
      <div className="content">
        <Header4 />
        <ProgressBar bgcolor="#36545d" completed={completed} />

        <Routes>
          <Route path="/*" element={<StudentExercise0 />} />
          <Route path="/page1" element={<Page1 />} />

        </Routes>

        <button type="button" onClick={handleClick} style={{ marginLeft: '40px' }}>
          Next Page
        </button>
    
      </div>
    </div>
  );
};

export default Page0;
