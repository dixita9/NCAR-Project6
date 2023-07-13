import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import ProgressBar from './ProgressBar';
import Hiking from './hiking';
import Header from './header';
import Page2 from './page2';
import StudentExercise1 from './StudentExercise1';
import Button from './Button';

const Page1 = () => {
  const completed = 33.33; // Set the initial completed value here
  const navigate = useNavigate();

  function handleClick(event) {
    navigate('/page2');
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
        <Header />
        <ProgressBar bgcolor="#36545d" completed={completed} />

        <Routes>
          <Route path="/*" element={<StudentExercise1 />} />
          <Route path="/page2" element={<Page2 />} />

        </Routes>

        <button type="button" onClick={handleClick} style={{ marginLeft: '40px' }}>
          Next Page
        </button>
        <Button text=" Back " onClick={handleOnClick2} style = {{ padding: "10px 28px" , marginTop: "20px"}} />
    
      </div>
    </div>
  );
};

export default Page1;
