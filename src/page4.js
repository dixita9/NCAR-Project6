import React from 'react';
import ProgressBar from './ProgressBar';
import Hiking from './hiking';
import Header3 from './Header3';
import StudentExercise3 from './StudentExercises3';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Button from './Button';

const Page3 = () => {
  const completed = 33.33;
  const navigate = useNavigate();

  function handleOnClick(event) {
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
        <Header3 />
        <ProgressBar bgcolor="#36545d" completed={completed} />
        <StudentExercise3 /> <br></br>

      {/*<button type="button" onClick={handleOnClick} style={{ marginLeft: '40px' }}>
      Back
      </button>
      <button type="button" onClick={handleOnClick2} style={{ marginLeft: '100px' }}>
      Back to Home
  </button> */}

    <Button text = "Back" onClick={handleOnClick} style = {{ padding: "10px 28px" , marginTop: "20px"}} />
    <Button text = "Home" onClick={handleOnClick2} style = {{ padding: "10px 28px" , marginTop: "20px"}}/>

      </div>
      
    </div>
  );
};

export default Page3;
