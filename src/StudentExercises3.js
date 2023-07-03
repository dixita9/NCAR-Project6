import React, { useState } from 'react';
import Button from './Button';

const StudentExercise3 = () => {
  const [selectedNumber, setSelectedNumber] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedNumber(selectedOption);

    if (selectedOption !== "") {
      document.getElementById("question2").style.display = "block";
      if (selectedOption === "1") {
        setMessage("Please enter a number");
      } else {
        setMessage(`Please enter ${selectedOption} numbers separated by commas.`);
      }
    } else {
      document.getElementById("question2").style.display = "none";
      setMessage("");
    }
  };

  const handleSubmit = () => {
    const numbersInput = document.getElementById("nums").value;
    const numbersArray = numbersInput.split(",").map((num) => num.trim());
    const selectedOptionNum = parseInt(selectedNumber);

    if (numbersArray.length === selectedOptionNum) {
      let validInputs = true;

      for (let i = 0; i < numbersArray.length; i++) {
        const number = parseInt(numbersArray[i]);
        if (isNaN(number)) {
          validInputs = false;
          break;
        }
      }

      if (validInputs) {
        let product = 1;

        for (let i = 0; i < numbersArray.length; i++) {
          const number = parseInt(numbersArray[i]);
          product *= number;
        }

        if (product <= 500) {
          setResult(
            <p>
              The ROI is 3x. <br /><br />
              Would a 3x ROI have a meaningful impact on your science?
            </p>
          );
        } else {
          setResult(
            <p>
              The ROI is 5x. <br /><br />
              Would a 5x ROI have a meaningful impact on your science?
            </p>
          );
        }
      } else {
        alert("Please enter valid numbers separated by commas.");
      }
    } else {
        if (selectedOptionNum === 1){
        alert("Please enter a number")}
        else{
        alert(`Please enter ${selectedOptionNum} numbers separated by commas.`);
        }
    }
  };

  

  const handleClear = () => {
    const radios1 = document.getElementsByName("answer");
    const radios2 = document.getElementsByName("answer2");
    const radios3 = document.getElementsByName("answer3");
    const radios4 = document.getElementsByName("answer4");
    const radios5 = document.getElementsByName("answer5");

    for (let i = 0; i < radios1.length; i++) {
      radios1[i].checked = false;
    }

    for (let i = 0; i < radios2.length; i++) {
      radios2[i].checked = false;
    }

    for (let i = 0; i < radios3.length; i++) {
      radios3[i].checked = false;
    }

    for (let i = 0; i < radios4.length; i++) {
      radios4[i].checked = false;
    }

    for (let i = 0; i < radios5.length; i++) {
      radios5[i].checked = false;
    }

    setSelectedNumber('');
    setMessage("");
    setInputValue("");
    setResult("");
    document.getElementById("question2").style.display = "none";

};




  return (
    <div >

      <div style={{ marginLeft: '40px' }}>
        <p>How many levels of nesting are there?</p>

        <select id="mySelect" value={selectedNumber} onChange={handleChange}>
          <option disabled selected value="">
            Choose a number
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <br />

        <div id="question2" style={{ display: 'none' }}>
          <p id="message2">{message}</p>
          <input
            type="text"
            id="nums"
            placeholder="Enter Here"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          /> 
        <div style = {{marginLeft:"-40px" , marginTop:"20px"}}> <br></br>
          <Button text = "Submit" onClick = {handleSubmit} />

        
          <Button text = "Clear" onClick = {handleClear} style = {{ padding: "10px 28px"}}/>
          
        </div>
          <br />
          <br />
        <p style = {{marginTop:"40px"}}>What kind of Return on Investment (ROI) would you expect?</p>
        <p id="result" >{result}</p>
        </div>
      </div>




      
      

      {/*<p>What kind of Return on Investment (ROI) would you expect?</p>*/}

      
    </div>
  );
};

export default StudentExercise3;
