import React, { useState, useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import CustomTooltip from './ToolTip';
import Button from './Button';
import Summary from './summary';


const StudentExercise0 = () => {
  const [answer, setAnswer] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [showAnswers, setShowAnswers] = useState(false);
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'answer') {
      setAnswer(value);
      localStorage.setItem('answer', value);
    } else if (name === 'answer2') {
      setAnswer2(value);
      localStorage.setItem('answer2',value);
    }else if (name === 'answer3') {
        setAnswer3(value);
        localStorage.setItem('answer3', value);
    }else if (name === 'answer4') {
        setAnswer4(value);
        localStorage.setItem('answer4', value);
    }
    
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (answer && answer2 && answer3 && answer4) {
      setSubmitted(true);
      const start = `Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.
      In particular the following steps should be done first:`;
      const string1 = 'Create a Makefile';
      const string2 = 'Add the ability to flexibly execute the code by other users';
      const string3 = 'Add your code  into revision control system like Git';
      const string4 = 'Develop a verification framework that allows the identification of non-bit-for-bit answer changes from software bugs';
      let num = 0
      let result = "" ;

      if (answer == "yes" && answer2 == "yes" && answer3 == "yes" && answer4 == "yes"){
        result = 'Your application is a good match for GPU enabled computing! :)'
      }
      else{
        result += start
      }

      if(answer == "no"){
        num += 1
        result += "\n"+ num + ". " + string1
      }

      if(answer2 == "no"){
        num += 1
        result += "\n"+ num + ". " + string2
      }
      if(answer3 == "no"){
        num += 1
        result += "\n"+ num + ". " + string3
      }
      if(answer4 == "no"){
        num += 1
        result += "\n"+ num + ". " + string4
      }
      
      
      
      setResultMessage (result);
      localStorage.setItem('resultMessage', result);
      navigate('/page1');

    } else {
      alert('Please answer all questions.');
    }
  };



  const clearOptions = (e) => {
    e.preventDefault();
    setAnswer('');
    setAnswer2('');
    setAnswer3('');
    setAnswer4('');
    setResultMessage ("");
    setShowAnswers(false);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <ol>
            <li>Do you have a Makefile created for your code?</li><br></br>
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
              <label>
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
              <label>
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
            <li>Do you have a way to determine non-bit-for-bit answer <br></br>changes from software bugs? </li><br></br>
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
              <label>
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
            
            <p>{answer}, {answer2}</p>
          </div>
         
          <div id="result2">{resultMessage}</div><br></br>
     </div>*/}
    
    </div>
  );
};

export default StudentExercise0;