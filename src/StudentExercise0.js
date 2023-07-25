// Importing necessary dependencies and components
import React, { useState, useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import CustomTooltip from './ToolTip';
import Button from './Button';
import Summary from './summary';
import CustomBox from './Box';
import { Box } from '@mui/material';
import HomeContent from './HomeContent';





const StudentExercise0 = () => {
  // State variables
  const [answer, setAnswer] = useState(localStorage.getItem('answer') || '');
  const [answer2, setAnswer2] = useState(localStorage.getItem('answer2') || '');
  const [answer3, setAnswer3] = useState(localStorage.getItem('answer3') || '');
  const [answer4, setAnswer4] = useState(localStorage.getItem('answer4') || '');
  const [submitted, setSubmitted] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [showAnswers, setShowAnswers] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnswer(localStorage.getItem('answer') || '');
    setAnswer2(localStorage.getItem('answer2') || '');
    setAnswer3(localStorage.getItem('answer3') || '');
    setAnswer4(localStorage.getItem('answer4') || '');
  }, []);
  
  

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'answer') {
      setAnswer(value);
    } else if (name === 'answer2') {
      setAnswer2(value);
    } else if (name === 'answer3') {
      setAnswer3(value);
    } else if (name === 'answer4') {
      setAnswer4(value);
    }
    // Store the updated values in local storage
    localStorage.setItem(name, value);
  };


  
 

  // Function to handle form submission
  //This function outputs answers based on the user's yes/no answers
  const handleSubmit = (e) => {
    e.preventDefault();

    if (answer && answer2 && answer3 && answer4 ) {
      setSubmitted(true);
      const start = `Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.In particular the following steps should be done first:`; //This string is shown if user chooses one or more "No"s 
      const string1 = 'Create a Makefile'; //This string is displayed if the user chooses No for Question 1
      const string2 = 'Add the ability to flexibly execute the code by other users'; //This string is displayed if the user chooses No for Question 2
      const string3 = 'Add your code  into revision control system like Git'; //This string is displayed if the user chooses No for Question 3
      const string4 = `Develop a verification framework that allows the identification of non-bit-for-bit \n\t    answer changes from software bugs` ; //This string is displayed if the user chooses No for Question 4
      let num = 0 //This variables is used to create an ordered list for the output. 
      //num increments as the number of "No"s chosen by the user go 
      
      
  

      let result = "" ; //An empty string is initialized which is later used to output the result message.


      if (answer == "yes" && answer2 == "yes" && answer3 == "yes" && answer4 == "yes"){ 
        result = 'Your application is a good match for GPU enabled computing! :)' //When user choses all "Yes"s, this string is displayed
      }
      else {
        result = start //If the user choose one or more "No"s, the "start" string is set to the empty "result" string
      }

      if(answer == "no"){
        num += 1 //Since the answer is no, num is incremented and concatenated to the first string
        result += '\n\t' + num + ". " + string1 //If the first answer is no, then string1  is concatenated to the "result" string
      }

      if(answer2 == "no"){
        num += 1 //Since the answer is no, num is incremented and concatenated to the second string
        result += "\n\t"+ num + ". " + string2 //If the second answer is no, then string2 is concatenated to the "result" string
      }
      if(answer3 == "no"){
        num += 1 //Since the answer is no, num is incremented and concatenated to the first string
        result += "\n\t"+ num + ". " + string3 //If the third answer is no, then string3 is concatenated to the "result" string
      }

      if(answer4 == "no"){
        num += 1 //Since the answer is no, num is incremented and concatenated to the first string
        result += "\n\t"+ num + ". " + string4
        
         //If the second answer is no, then string4 is concatenated to the "result" string
      }
      
      setResultMessage (result); //This statement assigns "result" variable to the "ResultMessage" variable
      localStorage.setItem('resultMessage', result); //This line stores result in local storage so it can be retrieved and displayed in the summary page. 
      navigate('/page1'); // This line of code is used to navigate to page 1
     
    } else {
      alert('Please answer all questions.'); //This message is shown when the user does not answer all the questions
    }
  };

  // Function to clear options and reset the form
  const clearOptions = (e) => {
    e.preventDefault();
    setAnswer('');
    setAnswer2('');
    setAnswer3('');
    setAnswer4('');
    setResultMessage ("");
    setShowAnswers(false);
  };

  function handleOnClick2(event) {
    navigate('/'); // Function to navigate back to the home page
  };

  return (
    <div >
      <form onSubmit={handleSubmit} style = {{ alignment: "center"}}>
        <CustomBox width ="500px" height= "550px">
        <div>
          <ol>
            <br></br>
            <li><div style={{ display: 'flex', alignItems: 'center' }}>
              {/* Question 1 - MakeFile */}
              Do you have a Makefile created for your code?
                <CustomTooltip title="This is the best way to explain make file" placement="right" />
              </div></li><br></br>
            
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
              <label style = {{marginLeft: "60px"}}>
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
            {/* Question 2 - Flexibility*/}
            <li>Do you have the ability to flexibly execute your code by other users?</li><br></br>
            <div id="options2">
          
              <label>
                <input
                  type="radio"
                  name="answer2"
                  value="yes"
                  checked={answer2 === 'yes'}
                  onChange={handleInputChange}
                />{' '}
                Yes
              </label>
              <label style = {{marginLeft: "60px"}}>
                <input
                  type="radio"
                  name="answer2"
                  value="no"
                  checked={answer2 === 'no'}
                  onChange={handleInputChange}
                />{' '}
                No
              </label>
            </div><br></br>
            {/* Question 3 - Git */}
            <li>Is your code in a revision control system like Git?</li><br></br>
            <div id="options3">
              <label>
                <input
                  type="radio"
                  name="answer3"
                  value="yes"
                  checked={answer3 === 'yes'}
                  onChange={handleInputChange}
                />{' '}
                Yes
              </label>
              <label style = {{marginLeft: "60px"}}>
                <input
                  type="radio"
                  name="answer3"
                  value="no"
                  checked={answer3 === 'no'}
                  onChange={handleInputChange}
                />{' '}
                No
              </label>
            </div><br></br>
            {/* Question 4 - non-bit-for-bit*/}
            <li>Do you have a way to determine non-bit-for-bit answer changes from software bugs? </li><br></br>
            <div id="options4">
              <label>
                <input
                  type="radio"
                  name="answer4"
                  value="yes"
                  checked={answer4 === 'yes'}
                  onChange={handleInputChange}
                />{' '}
                Yes
              </label>
              <label style = {{marginLeft: "60px"}}>
                <input
                  type="radio"
                  name="answer4"
                  value="no"
                  checked={answer4 === 'no'}
                  onChange={handleInputChange}
                />{' '}
                No
              </label>
            </div><br></br>
                
          </ol>
        </div><br></br>
        </CustomBox>
        {/*<Box sx={{ width: '60px', height: '40px', border: '1px solid black', marginLeft:"623px" }}></Box>*/}

      
        <div style = {{marginLeft: "253.5px", marginBottom: "100px"}}>
        <Button text=" Back " onClick={handleOnClick2}/>
        <Button text="Clear" onClick={clearOptions} style ={{ marginLeft : "10px" , marginRight:"10px"}}/>{/*Clear Button*/}
        <Button text="Next" style = {{ }}/> {/*Submit Button*/}
        
        
        
       
        </div>
        
      </form><br></br>
  
    </div>
  );
};

export default StudentExercise0;  


