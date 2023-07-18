import React, { useState } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Button from './Button';


const StudentExercise3 = () => {
  const [selectedNumber, setSelectedNumber] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');
  const [numVar, setNumVar] = useState('');
  const [wordSize, setWordSize] = useState('');
  const [resultMessage4, setResultMessage4] = useState('');
  const navigate = useNavigate();

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

    if(!numVar || !wordSize || !selectedNumber){
      alert("Please fill out all the feilds")
      return;

    }

    if (isNaN(parseInt(numVar)) || isNaN(parseInt(wordSize))) {
      alert("Word size and number of variables must be integers.");
      return;
    }

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

        localStorage.setItem('product', product);


        let wss = product * parseInt(numVar) * parseInt(wordSize)


        let result = ""
        const string1 = "Next let us discuss both the return on the investment (ROI) converting your computational infrastructure to GPU-based computing and the difficulty with achieving this ROI."

        const string2 = `a. Let's first talk about Return on Investment.  You indicated that the extent of loop bodies is approximately ${product}.  You also indicated that a common loop body contains ${numVar}, ${wordSize} bytes variables. This suggests that inner loops access ${wss} bytes of variables.`

        const wss1 = `    1. Because  ${wss} wss is significantly larger than the typical last level cache size. Your problem should achieve a ROI of approximately 3 to 4 due to the differences in main memory bandwidth between CPU and GPU. Would a reduction in the time to perform your science of 3 to 4 have a significant impact on your ability to perform your science?`

        const wss2 = `    1. Because ${wss} wss is significantly smaller than the typical last level cache size.  Your code is likely already running pretty efficiently on a CPU-based platform. GPU-enablement will yield a very modest ROI. `

        result = string1 + "\n" + string2

        if (wss > 75){

          result += "\n" + wss1



        } else {

          result += "\n" + wss2


        }


        setResultMessage4 (result);//This statement assigns "result" variable to the "ResultMessage3" variable
        localStorage.setItem('resultMessage4', result);
        navigate('/page4'); // This line of code is used to navigate to page 4




      } else {
        alert("Please enter valid numbers separated by commas.");
      }
    } else {
        if (selectedOptionNum == 1){
        alert("Please enter a number")}
        else if (selectedNumber){
        alert(`Please enter ${selectedOptionNum} numbers separated by commas.`)
        }

      }

     

  
};

  

  const handleClear = () => {

    setSelectedNumber('');
    setMessage("");
    setInputValue("");
    setResult("");
    setResultMessage4 ("");
    document.getElementById("question2").style.display = "none";

};

function handleOnClick3(event) {
  navigate('/page4');
}



  return (
    <div >

      <div style={{ marginLeft: '40px' }}>
        <ol>
          <li>How many levels of nesting are there?</li><br></br>

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
      
          {/*<p style = {{marginTop:"40px"}}>What kind of Return on Investment (ROI) would you expect?</p>*/}
      
          </div><br></br>
        <div>
        <li>How many variables are typically found in a loopbody expressions ? </li> <br></br>
        <input
          type="text"
          value={numVar}
          placeholder="Enter Here"
          onChange={(e) => setNumVar(e.target.value)}
          
        /></div><br></br>
     
        <li>Are you using 4 byte or 8 bytes floating point values ? </li><br></br>
      
          <label>
              <input
                type="radio"
                name="wordsize"
                value="4"
                  
                onChange={(e) => setWordSize(e.target.value)}
              />
                4 Bytes
          </label>

  
          <label style={{ marginLeft: '70px' }}>
              <input
                type="radio"
                name="wordsize"
                value="8"
                  
                onChange={(e) => setWordSize(e.target.value)}
                />
              8 Bytes
          </label>
         




        </ol>

                
        <div style = {{marginLeft:"-40px" , marginTop:"20px"}}> <br></br>
            <Button text = "Submit" onClick = {handleSubmit} />

          
            <Button text = "Clear" onClick = {handleClear} style = {{ padding: "10px 28px"}}/>
            
          </div> <br></br>
        <Button text = "Get Results" onClick = {handleOnClick3} style = {{ padding: "10px 28px"}}/>
      </div>




      
      

      {/*<p>What kind of Return on Investment (ROI) would you expect?</p>*/}

      
    </div>
  );
};

export default StudentExercise3;
