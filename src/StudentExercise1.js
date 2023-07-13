import React, { useState, useEffect } from 'react';
import CustomTooltip from './ToolTip';
import Button from './Button';
import Summary from './summary';


const StudentExercise1 = () => {
  const [answer, setAnswer] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [volume, setVolume] = useState('');
  const [frequency, setFrequency] = useState('');
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [divisionResult, setDivisionResult] = useState('');
 

  const handleCalculation = () => {
    const x = parseFloat(inputOne);
    const y = parseFloat(inputTwo);

    if (!isNaN(x) && !isNaN(y)) {
      const division = x / y;
      setDivisionResult(division);
      localStorage.setItem('divisionResult', division);
    }
};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'volume') {
      setVolume(value);
      localStorage.setItem('IOVolume', value);
    } else if (name === 'frequency') {
      setFrequency(value);
      localStorage.setItem('IOFrequency', value);
    } else if (name === 'answer2') {
      setAnswer2(value);
      localStorage.setItem('RateThroughput', value);
    }
  };



  const handleSubmit = (e) => {
    handleCalculation()
    if (divisionResult){
      if (volume && frequency && answer2) {
        setSubmitted(true);
        if (
          divisionResult <= 50 &&
          answer === 'yes' &&
          answer2 === 'rate'
        ) {
          setResultMessage(
            'Your application is a good match for GPU enabled computing! :)'
          );
        } else {
          setResultMessage(
            'Your application is a poor match for GPU enabled computing :('
          );
        }
        
      } else {
        alert('Please answer all questions.');
    }
  }
    e.preventDefault();
  };



  const clearOptions = (e) => {
    e.preventDefault();
    setAnswer2('');
    setDivisionResult("");
    setResultMessage ("");
    setInputOne("")
    setInputTwo("")
    setVolume("")
    setFrequency("")

  };



  return (
    <div>
      <div>
      <ol>
        <li>Determine the following:</li>
        
       
      </ol>
    </div>
      <form onSubmit={handleSubmit}>
        <div>
          
          <ol start={2}>
          <label>Total number of independent grid-points: <br></br>
        <input
          type="text"
          value={inputOne}
          onChange={(e) => setInputOne(e.target.value)}
          
        /></label>
        <br />
        <br />
        <label>Number of &#123;node, GPU&#125;: per run: <br></br>
        <input
          type="text"
          value={inputTwo}
          onChange={(e) => setInputTwo(e.target.value)}
        /></label>
        <br />
        <br />
            <li>What is the volume and frequency of I/O?</li><br></br>
           
              <label>Volume:<br></br>
              <input
                type="text"
                name="volume"
                value={volume}
                onChange={handleInputChange}
              /> <br></br><br></br>
              </label>
       

            <label>
              Frequency:<br></br>
              <input
                type="text"
                name="frequency"
                value={frequency}
                onChange={handleInputChange}
              />
            </label>
            <br></br>
            <li><div style={{ display: 'flex', alignItems: 'center' }}>
                Do you have rate or throughput limitations?
                <CustomTooltip />
              </div></li> 
            <br></br>
            <div id="options2">
              <label>
                <input
                  type="radio"
                  name="answer2"
                  value="rate"
                  checked={answer2 === 'rate'}
                  onChange={handleInputChange}
                />{' '}
                Rate
              </label>
              <label>
                <input
                  type="radio"
                  name="answer2"
                  value="throughput"
                  checked={answer2 === 'throughput'}
                  onChange={handleInputChange}
                />{' '}
                Throughput
              </label> 
              <br></br>
            </div>
          </ol>
        </div><br></br>

       
        <Button text="Submit"/>
        <Button text = "Clear" onClick = {clearOptions} />
        </form><br></br>
        {/*<button type="button" style={{ marginLeft: '100px' }} onClick={clearOptions}>
          Clear
  </button>
     
      {showAnswers && (
        <div style={{ marginLeft: '40px' }}>
          <div id="ans">
            Your Answers:
            <br />
            
            <p>{divisionResult},{answer}, {answer2}</p>
          </div>
         
          <div id="result2">{resultMessage}</div><br></br>
      </div>*/}
      
    </div>
  );
};

export default StudentExercise1;
