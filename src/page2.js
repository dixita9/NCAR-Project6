import React from 'react';
import ProgressBar from './ProgressBar';
import Hiking from './hiking';
import Header2 from './header2';
import StudentExercise2 from './StudentExercises2';
import Page3 from './page3';

import {Route, Routes, useNavigate} from 'react-router-dom';

const Page2 = () => {
  const completed = 33.33; // Set the initial completed value here
  const navigate = useNavigate();


  function handleOnClick(event) {
    navigate('/page3');
  }

  function handleOnClick2(event) {
    navigate('/');
  }

  return (
    <div className="container">
      <div className="background-image">
        <Hiking />
      </div>
      <div className="content">
        <Header2 />
        <ProgressBar bgcolor="#36545d" completed={completed} />

        <Routes>
          <Route path="/*" element={<StudentExercise2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>

        <button type="button" onClick={handleOnClick} style={{ marginLeft: '40px' }}>
          Next Page
        </button>

        <button type="button" onClick={handleOnClick2} style={{ marginLeft: '150px' }}>
          Back
        </button>

      </div>
    </div>
  );
};

export default Page2;
