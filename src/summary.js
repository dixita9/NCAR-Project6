// Importing react and necessary dependencies 
// import React, { useState } from 'react';
import React from 'react';
import HikingImage from './image/goal.jpg';
import CustomBox from './Box';

const Summary = () => {
  // Retrieving data from local storage
  const resultMessage = localStorage.getItem("resultMessage");
  const resultMessage2 = localStorage.getItem("resultMessage2");
  const resultMessage3 = localStorage.getItem("resultMessage3");
  const resultMessage4 = localStorage.getItem("resultMessage4");
  
  return (
    <div style={{ alignment: "center", paddingLeft: "35px", paddingRight: "60px", marginLeft: "40px", whiteSpace: 'pre-wrap' }}>
      {/* Displaying the results from different pages */}
      <div style={{ textAlign: "center" }}>
        {/*image*/}
        <img src={HikingImage} style={{ width: "500px", height: "500px", borderRadius: "50%", marginTop: "30px", marginBottom: "80px", border: "20px solid #fff" }} />
      </div>
      {/*Result from Page 0*/}
      <div style={{ marginBottom: "40px" }}>
        <CustomBox bgcolor="white" color="black" padding="50px" font="22px" style={{ margin: 'auto' }}>
          {resultMessage && <p style={{ margin: "0px" }}>{resultMessage}</p>}
        </CustomBox>
      </div>
      {/*Result from Page 1*/}
      <div style={{ marginBottom: "40px" }}>
        <CustomBox bgcolor="white" color="black" padding="50px" font="22px" style={{ margin: 'auto' }}>
          {resultMessage2 && <p>{resultMessage2}</p>}
        </CustomBox>
      </div>
      {/*Result from Page 2*/}
      <div style={{ marginBottom: "40px" }}>
      <CustomBox bgcolor="white" color="black" padding="50px" font="22px" style={{ margin: 'auto' }}>
        {resultMessage3 && <p>{resultMessage3}</p>}
      </CustomBox>
      </div>
      {/*Result from Page 3*/}
      <div style={{ marginBottom: "60px" }}>
      <CustomBox bgcolor="white" color="black" padding="50px" font="22px" style={{ margin: 'auto' }}>
        {resultMessage4 && <p>{resultMessage4}</p>}
      </CustomBox>
      </div>
    </div>
  );
};

export default Summary;
