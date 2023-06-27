import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import ProgressBar from './ProgressBar';
import Hiking from './hiking';
import Header from './header';
import Page2 from './page2';
import StudentExercise1 from './StudentExercise1';





const Page1 = () => {
  const completed = 33.33; // Set the initial completed value here
  const navigate = useNavigate();

  function handleClick(event) {
    navigate('/page2');
  }

  return (
    <div className="container">
      <div className="background-image">
        <Hiking />
      </div>
      <div className="content">
        <Header />
        <ProgressBar bgcolor="#36545d" completed={completed} />

        <Routes>
          <Route path="/*" element={<StudentExercise1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>

        <button type="button" onClick={handleClick} style={{ marginLeft: '40px' }}>
          Next Page
        </button>
    
      </div>
    </div>
  );
};

export default Page1;
