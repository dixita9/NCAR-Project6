import React, { useState } from 'react';

function StudentExercise2() {
  const [showOptions2, setShowOptions2] = useState(false);
  const [PointResult, setPointResult] = useState("")
  const [result, setResult] = useState('');
  const [answer, setAnswer] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [answer5, setAnswer5] = useState('');

  const handleShowAdditionalQues = (event) => {
    const selectedValue = event.target.value;
    setShowOptions2(selectedValue === 'yes');
  };

  const calculatePoints = () => {
    let newTotalPoints = 0;
    let allOptionsSelected = true; // Flag to track if all options are selected

    if (
      answer &&
      ((answer === 'yes' &&
        (answer2 === 'yes' || answer2 === 'no')) ||
        answer === 'no') &&
      (answer3 === 'yes' || answer3 === 'no') &&
      (answer4 === 'yes' || answer4 === 'no') &&
      (answer5 === 'yes' || answer5 === 'no')
    ) {
      if (answer === 'yes') {
        newTotalPoints += 0;

        if (answer2 === 'yes') {
          newTotalPoints += 1;
        } else if (answer2 === 'no') {
          newTotalPoints += 3;
        }
      } else if (answer === 'no') {
        newTotalPoints += 4;
      }

      if (answer3 === 'yes') {
        newTotalPoints += 1;
      } else if (answer3 === 'no') {
        newTotalPoints += 7;
      }

      if (answer4 === 'yes') {
        newTotalPoints += 1;
      } else if (answer4 === 'no') {
        newTotalPoints += 7;
      }

      if (answer5 === 'yes') {
        newTotalPoints += 1;
      } else if (answer5 === 'no') {
        newTotalPoints += 7;
      }
    } else {
      allOptionsSelected = false; // Set the flag to false if any option is not selected
    }

    setPointResult(`Total Points: ${newTotalPoints}`)

    if (0 < newTotalPoints && newTotalPoints <= 10) {
      setResult("Easy Peezy! It is going to be very easy to make your application GPU enabled.");
    } else if (10 < newTotalPoints && newTotalPoints <= 15) {
      setResult("Not too hard! It is going to take some work to make your application GPU enabled.");
    } else if (15 < newTotalPoints && newTotalPoints <= 25) {
      setResult("Difficult! It is going to be very hard to make your application GPU enabled.");
    } else {
      setResult("");
    }

    if (!allOptionsSelected) {
      alert('Please select all options before calculating points.');
    }

    
  };

  const handleCalculatePoints = () => {
    calculatePoints(); // Call calculatePoints without any arguments
  };

  const clearOptions = () => {
    setAnswer('');
    setAnswer2('');
    setAnswer3('');
    setAnswer4('');
    setAnswer5('');
    setPointResult("");
    setResult("")
  };

  const handleClearOptions = () => {
    setShowOptions2(false);
    clearOptions();
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <ol>
        <li>Does a GPU version of your code already exist?</li>
        <br />
        <label>
          <input
            type="radio"
            name="answer"
            value="yes"
            onClick={handleShowAdditionalQues}
            checked={answer === 'yes'}
            onChange={(e) => setAnswer(e.target.value)}
          />{' '}
          Yes [0 points]
        </label>
        <label>
          <input
            type="radio"
            name="answer"
            value="no"
            onClick={handleShowAdditionalQues}
            checked={answer === 'no'}
            onChange={(e) => setAnswer(e.target.value)}
          />{' '}
          No [4 points]
        </label>
        <br />

        {showOptions2 && (
          <div id="options2">
            <li>Are the desired physics packaged GPU-enabled?</li>
            <br />
            <label>
              <input
                type="radio"
                name="answer2"
                value="yes"
                checked={answer2 === 'yes'}
                onChange={(e) => setAnswer2(e.target.value)}
              />{' '}
              Yes [1 point]
            </label>
            <label>
              <input
                type="radio"
                name="answer2"
                value="no"
                checked={answer2 === 'no'}
                onChange={(e) => setAnswer2(e.target.value)}
              />{' '}
              No [3 points]
            </label>
            <br />
          </div>
        )}
        <br />

        <li>Is the code written in such a way that it is GPU-ready?</li>
        <br />
        <ul>
          <li>Is full parallelism available at the loop level?</li>
          <br />
          <ul>
            <label>
              <input
                type="radio"
                name="answer3"
                value="yes"
                checked={answer3 === 'yes'}
                onChange={(e) => setAnswer3(e.target.value)}
              />{' '}
              Yes [1 point]
            </label>
            <label>
              <input
                type="radio"
                name="answer3"
                value="no"
                checked={answer3 === 'no'}
                onChange={(e) => setAnswer3(e.target.value)}
              />{' '}
              No [7 points]
            </label>
          </ul>
          <br />
          <li>Does a threaded version of the code exist?</li>
          <br />
          <ul>
            <label>
              <input
                type="radio"
                name="answer4"
                value="yes"
                checked={answer4 === 'yes'}
                onChange={(e) => setAnswer4(e.target.value)}
              />{' '}
              Yes [1 point]
            </label>
            <label>
              <input
                type="radio"
                name="answer4"
                value="no"
                checked={answer4 === 'no'}
                onChange={(e) => setAnswer4(e.target.value)}
              />{' '}
              No [7 points]
            </label>
          </ul>
          <br />
          <li>Does the code have some form of verification?</li>
          <br />
          <ul>
            <label>
              <input
                type="radio"
                name="answer5"
                value="yes"
                checked={answer5 === 'yes'}
                onChange={(e) => setAnswer5(e.target.value)}
              />{' '}
              Yes [1 point]
            </label>
            <label>
              <input
                type="radio"
                name="answer5"
                value="no"
                checked={answer5 === 'no'}
                onChange={(e) => setAnswer5(e.target.value)}
              />{' '}
              No [7 points]
            </label>
            <br />
          </ul>
        </ul>
        <br />
        <br />

        <button onClick={handleCalculatePoints}>Submit</button>{""}
        <button onClick={handleClearOptions} style={{ marginLeft: '40px' }}>
          Clear
        </button>
        <br />
        <br /><br></br>
        <p>{PointResult}</p>
        <p id >{result}</p>
      </ol>
    </div>
  );


}

export default StudentExercise2;


