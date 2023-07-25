// Importing react and necessary dependencies 
import React, { useState } from 'react';
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
        <img src={HikingImage} style={{ width: "500px", height: "500px", borderRadius: "50%", marginTop: "30px", marginBottom: "80px", border: "20px solid #fff" }} />
      </div>
      <div style={{ marginBottom: "40px" }}>
        <CustomBox bgcolor="white" color="black" padding="50px" font="22px" style={{ margin: 'auto' }}>
          {resultMessage && <p style={{ margin: "0px" }}>Page 0 result: <br></br>{resultMessage}</p>}
        </CustomBox>
      </div>
      <div style={{ marginBottom: "40px" }}>
        <CustomBox bgcolor="white" color="black" padding="50px" font="22px" style={{ margin: 'auto' }}>
          {resultMessage2 && <p>Page 1 result: <br></br>{resultMessage2}</p>}
        </CustomBox>
      </div>
      <div style={{ marginBottom: "40px" }}>
      <CustomBox bgcolor="white" color="black" padding="50px" font="22px" style={{ margin: 'auto' }}>
        {resultMessage3 && <p>Page 2 result: <br></br>{resultMessage3}</p>}
      </CustomBox>
      </div>
      <div style={{ marginBottom: "60px" }}>
      <CustomBox bgcolor="white" color="black" padding="50px" font="22px" style={{ margin: 'auto' }}>
        {resultMessage4 && <p>Page 3 result: <br></br>{resultMessage4}</p>}
      </CustomBox>
      </div>
    </div>
  );
};

export default Summary;
