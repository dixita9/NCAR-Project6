import React, { useState, useEffect } from 'react';


const StudentExercise1 = () => {
  const [answer, setAnswer] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [divisionResult, setDivisionResult] = useState('');
  const [showAnswers, setShowAnswers] = useState(false);


  const handleCalculation = () => {
    const x = parseFloat(inputOne);
    const y = parseFloat(inputTwo);

    if (!isNaN(x) && !isNaN(y)) {
      const division = x / y;
      setDivisionResult(division);
    }
};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'answer') {
      setAnswer(value);
    } else if (name === 'answer2') {
      setAnswer2(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (answer && answer2) {
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
      setShowAnswers(true);
    } else {
      alert('Please answer all questions.');
    }
  };



  

  const clearOptions = () => {
    setAnswer('');
    setAnswer2('');
    setDivisionResult("");
    setResultMessage ("");
    setInputOne("")
    setInputTwo("")
    setShowAnswers(false);
  };



  return (
    <div>
      <div>
      <ol>
        <li>Determine the following:</li>
        <p>Total number of independent grid-points</p>
        <input
          type="text"
          value={inputOne}
          onChange={(e) => setInputOne(e.target.value)}
        />
        <br />
        <br />
        <p>Number of &#123;node, GPU&#125;: per run</p>
        <input
          type="text"
          value={inputTwo}
          onChange={(e) => setInputTwo(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleCalculation}>Calculate</button>
        <p>Number of grid-points per &#123;node, GPU&#125;: {divisionResult}</p>
      </ol>
    </div>
      <form onSubmit={handleSubmit}>
        <div>
          <ol start={2}>
            <li>Does it perform I/O frequently?</li><br></br>
            <div id="options">
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="yes"
                  checked={answer === 'yes'}
                  onChange={handleInputChange}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="no"
                  checked={answer === 'no'}
                  onChange={handleInputChange}
                />{' '}
                No
              </label>
            </div><br></br>
            <li>Do you have rate or throughput limitations?</li>
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

        <button type="submit" style={{ marginLeft: '40px' }}>Submit</button> 
        <button type="button" style={{ marginLeft: '100px' }} onClick={clearOptions}>
          Clear
        </button>
      </form><br></br>
      {showAnswers && (
        <div style={{ marginLeft: '40px' }}>
          <div id="ans">Your Answers: {divisionResult}, {answer}, {answer2}</div><br></br>
          <div id="result2">{resultMessage}</div><br></br>
        </div>
      )}
    </div>
  );
};

export default StudentExercise1;
