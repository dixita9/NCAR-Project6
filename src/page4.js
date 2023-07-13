import React from 'react';
import ProgressBar from './ProgressBar';
import Hiking from './hiking';
import Header3 from './Header3';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Button from './Button';
import Summary from './summary';

const Page4 = () => {
    const completed = 0;
    const navigate = useNavigate();

    function handleOnClick2(event) {
        navigate('/');
    }


  return (
    <div className="container">
      {/*<div className="background-image">
        <Hiking />
  </div>*/}
      <div className="content">
        <Header3 />
        <ProgressBar bgcolor="#36545d" completed={completed} />
        <Summary />

        <Button text = "Home" onClick={handleOnClick2} style = {{ padding: "10px 28px" , marginTop: "20px"}}/>

   

      </div>
      
    </div>
  );
};

export default Page4;
