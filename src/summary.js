// Importing react and necessary dependencies 
import {React, useState} from 'react';

const Summary = () => {
  // Retrieving data from local storage
  const resultMessage = localStorage.getItem("resultMessage")
  const resultMessage2 = localStorage.getItem("resultMessage2")
  const resultMessage3 = localStorage.getItem("resultMessage3")
  const resultMessage4 = localStorage.getItem("resultMessage4")
  
  return (
    <div style={{marginLeft : "40px", whiteSpace: 'pre-line' }}>
      {/* Displaying the results from different pages */}
      {resultMessage && <p>  Page 0 result: <br></br>{resultMessage}</p>}
      {resultMessage2 && <p> Page 1 result: <br></br>{resultMessage2}</p>}
      {resultMessage3 && <p> Page 2 result: <br></br>{resultMessage3}</p>}
      {resultMessage4 && <p> Page 3 result: <br></br>{resultMessage4}</p>}
     

    </div>
  );
};

export default Summary;
