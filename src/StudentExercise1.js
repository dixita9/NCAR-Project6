import React, { useState, useEffect } from 'react';
import CustomTooltip from './ToolTip';
import Button from './Button';
import Summary from './summary';
import {Route, Routes, useNavigate} from 'react-router-dom';


const StudentExercise1 = () => {
  const [answer2, setAnswer2] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [resultMessage2, setResultMessage2] = useState('');
  const [volume, setVolume] = useState('');
  const [frequency, setFrequency] = useState('');
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [divisionResult, setDivisionResult] = useState('');
  const threshold = 50;
  const navigate = useNavigate();
 

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

      if (inputOne && inputTwo && volume && frequency && answer2) {
        setSubmitted(true);

        let result = ""

        const start1 = `Based on your input, it appears that your science objective is amenable to GPU-based computing.  This assessment is based on several of your answers:`
        const True1 = `The number of grid points of ${divisionResult} per GPU or node is sufficient.  Typically, a GPU based computing solution requires in excessive of ${threshold} grid points per GPU`

        const True2 = `GPU’s are designed for computationally heavy problems.  You indicated that you perform approximately ${volume} Mbytes of disk I/O every ${frequency} seconds.It sounds like a significant percentage of time for your application is spent performing computations. This is necessary but not sufficient condition for the efficient use of GPU-based computing.`
        const start2 = `Based on your input, it does not appear that your science objective is amenable to GPU-based computing.  This assessment is based on several of your answers`
        const False1 = `The number of grid points per GPU or node is rather low ${divisionResult}.Typically, a GPU based computing solution requires in excess of ${threshold} grid points per GPU.
        i. What can I do about this?  
          1. Is the size of your problem sufficient to address your science objective or is it a limitation of your existing compute solution. If it is sufficient to address your science objective, then there does not appear to be an advantage of GPU-based solution versus a CPU-based solution.  If it is not sufficient, then a GPU-based solution may enable improvement of the fidelity of your simulations.`
        
        const False2 = `GPU’s are designed for computationally heavy problems.  You indicated that you perform approximately ${volume} Mbytes of disk I/O every ${frequency} seconds. A significant percentage of time for your application will likely be spent moving data from the GPU memory to the disk subsystem.
        What can I do about this?
        Can you reduce the amount of I/O that your application performs`
        const False3 = `You indicated that your problem has a [[strong, moderate, weak} ${answer2} limitation. While GPU-based computing can successfully be used for both rate and throughput computing tasks, it frequently does better for throughput based computing.`

      
        if ( divisionResult > threshold){
          result = start1 + " " 
        }
        else{
          result += start2 + " "
        }

        setResultMessage2 (result);
        localStorage.setItem('resultMessage', result);
        navigate('/page2');
        
      } else{
        
        alert('Please answer all questions.');
      }
    
    e.preventDefault();
  };



  const clearOptions = (e) => {
    e.preventDefault();
    setAnswer2('');
    setDivisionResult("");
    setResultMessage2 ("");
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
            <li><div style={{ display: 'flex', alignItems: 'center' }}>
                What is the volume and frequency of I/O?
                <CustomTooltip title="Best explanation you can find for I/O frequency and Volume" placement="right" />
              </div></li>
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
                <CustomTooltip title="A really good explanation of rate and throughput" placement="right" />
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
      
    </div>
  );
};

export default StudentExercise1;
