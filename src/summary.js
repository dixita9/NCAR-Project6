import {React, useState} from 'react';

const Summary = () => {
  const divisionResult = localStorage.getItem('divisionResult');
  const IOfrequency = localStorage.getItem('IOFrequency');
  const IOVolume = localStorage.getItem('IOVolume');
  const RateThroughput = localStorage.getItem('RateThroughput');
  const TotalPoints = localStorage.getItem('TotalPoints');
  const Product = localStorage.getItem('product');
  const Result = localStorage.getItem('result');
  const resultMessage = localStorage.getItem("resultMessage")
  const resultMessage2 = localStorage.getItem("resultMessage2")
  const iofreq = localStorage.getItem("iofreq")





  return (
    <div style={{marginLeft : "40px", whiteSpace: 'pre-line' }}>
      {divisionResult && <p>Division Result: {divisionResult}</p>}
      {IOfrequency && <p> IOfrequency: {IOfrequency}</p>}
      {IOVolume && <p> IOVolume: {IOVolume}</p>}
      {RateThroughput && <p> Rate/Throughput: {RateThroughput}</p>}
      {TotalPoints && <p> Total Points: {TotalPoints}</p>} 
      {Product && <p> Product: {Product}</p>} 
      {Result && <p> ROI: {Result}</p>} 
      {iofreq && <p>iofreq: {iofreq}</p>}
      {resultMessage && <p> Page 0 result: <br></br>{resultMessage}</p>}
      {resultMessage2 && <p> Page 1 result: <br></br>{resultMessage2}</p>}
     

    </div>
  );
};

export default Summary;
