// Importing necessary dependencies and components
import React, { useState, useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Button from './Button';
import CustomBox from './Box';

function StudentExercise2() {
   // State variables
  const [showOptions2, setShowOptions2] = useState(false);
  const [PointResult, setPointResult] = useState("")
  const [result, setResult] = useState('');
  const [answer, setAnswer] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [answer5, setAnswer5] = useState('');
  const [resultMessage3, setResultMessage3] = useState('');
  const navigate = useNavigate();
  const smallBrStyle = { marginBottom: '0.2em' }; 
  const product = localStorage.getItem("product")
  const NumGP = localStorage.getItem("divisionResult")

   // Function to show the second part of question 1 when user selects "yes"
  const handleShowAdditionalQues = (event) => {
    const selectedValue = event.target.value;
    setShowOptions2(selectedValue === 'yes');
    localStorage.setItem('showOptions2', selectedValue === 'yes' ? 'true' : 'false');
  };

  // Function to caculate points

  const calculatePoints = () => {
    let newTotalPoints = 0; //variable to keep track of calculated points
    let allOptionsSelected = true; // Flag to track if all options are selected

    if ( //condition to check if all questions have been answered
      answer &&
      ((answer === 'yes' &&
        (answer2 === 'yes' || answer2 === 'no')) ||
        answer === 'no') &&
      (answer3 === 'yes' || answer3 === 'no') &&
      (answer4 === 'yes' || answer4 === 'no') &&
      (answer5 === 'yes' || answer5 === 'no')
    ) {
      if (answer === 'yes') { 
        newTotalPoints += 0; //if first answer is yes, 0 points are added to newTotalPoints

        if (answer2 === 'yes') {
          newTotalPoints += 1; //if second answer is yes, 1 point is added to newTotalPoints
        } else if (answer2 === 'no') {
          newTotalPoints += 3; //if second answer is no, 3 points are added to newTotalPoints
        }
      } else if (answer === 'no') {
        newTotalPoints += 4;  //if first answer is no, 4 points are added to newTotalPoints
      }

      if (answer3 === 'yes') {  
        newTotalPoints += 1; //if third answer is yes, 1 point is added to newTotalPoints
      } else if (answer3 === 'no') {
        newTotalPoints += 7; //if third answer is no, 7 points are added to newTotalPoints
      }

      if (answer4 === 'yes') { 
        newTotalPoints += 1; //if fourth answer is yes, 1 point is added to newTotalPoints
      } else if (answer4 === 'no') {
        newTotalPoints += 7; //if fourth answer is no, 7 points are added to newTotalPoints
      }

      if (answer5 === 'yes') {
        newTotalPoints += 1; //if fifth answer is yes, 1 point is added to newTotalPoints
      } else if (answer5 === 'no') {
        newTotalPoints += 7; //if fifth answer is no, 7 points are added to newTotalPoints
      }


    setPointResult("TotalPoints" , newTotalPoints) //This statement assigns "newTotalPoints" variable to the "Total Points" variable
    localStorage.setItem("TotalPoints", newTotalPoints); //This line stores "newTotalPoints" in local storage so it can be retrieved and displayed in the summary page. 

    let result2 = "" //An empty string name "reslut2" is initialized which is later used to output the result message.
    let num = 0 //This variables is used to create an ordered list for the output. 
    //num increments as the number of "No"s chosen by the user go up
    const start = "Let’s now discuss the difficulty of achieving the ROI."  //this string is added at the start of "result2" string

    result2 += start // "start"  string is concatenated at the beginning of the "result2" string

    //Below string is concatenated to "result2" string if "newTotalPoints" is greater less than 25
    const string1 = " Based on your answers, it appears that your code is ready to start the process of GPU-enablement. Let us try and figure out how much work it might take."

    //Below string is concatenated to the "result2" string if the user answers "yes" to question 1
    const ques1yes = "It is great news that a version of your application has already been GPU-enabled. \n\t    This considerably reduces the difficulty." 
    
    //Below string is concatenated to the "result2" string if the user answers "no" to question 1
    const ques1no = "It looks like your science objective is not currently GPU-enabled. \n\t    Based on your answers we can estimate effort to achieve GPU-enablement."

    //Below string is concatenated to the "result2" string if the user answers "yes" to question 2
    const ques2yes = "Also great news that the necessary physics packages are supported on GPU. It \n\t    sounds like you just need to learn how to submit jobs to a GPU-based platform"

    //Below string is concatenated to the "result2" string if the user answers "no" to question 2
    const ques2no = "Unfortunately  not all of the code necessary for your science objective is GPU-enabled. \n\t    The amount of work necessary to GPU-enable your science objective"

    //Below string is concatenated to the "result2" string if the user answers "yes" to question 3
    const ques3yes = `It appears that the number of grid points per GPU or node [${NumGP}] is approximately \n\t    equal to the number of iterations in loop bodies [${product}]. This greatly simplifies \n\t    GPU-enablement because all the parallelism is exposed in one place. \n\t    Congratulations, it appears that your code is GPU-ready.\n\t\t i. The next step is to decide on the programming approach to achieve GPU-\n\t\t    enablement. Several programming options are available including: \n\t\t\ta. Language based approaches using C++ productivity frameworks \n\t\t\tb. Writing in an explicitly GPU based language like CUDA, CUDA Fortran\n\t\t\t     or HIP\n\t\t\tc. Directive based approaches \n\t\tii.The choice of programming language approach is based on your goals\n\t\t\ta. Do you want to maintain portability across multiple compute platforms → \n\t\t\t    productivity framework or directive based approach \n\t\t\tb. Not concerned about portability → consider explicitly GPU based \n\t\t\t    languages \n`
    //Below string is concatenated to the "result2" string if the user answers "yes" to question 3
    const ques3no = `Because the total number of grid points per GPU or node [${NumGP}] is significantly larger \n\t    than the number of iterations [${product}] this looks like some code transformation is \n\t    necessary. Unfortunately this is quite common and can take a significant amount of \n\t    effort to adequately expose the parallelism necessary`


    if (newTotalPoints < 25){
      result2 += string1 //if newTotalPoints is less than 25, string is concatentaed at the beginning of the "result2" string
    }

    if(answer == "yes"){
      //if first answer is "yes", num is incrementated and concatenated to the "result2" string along with "ques1yes" string
      num += 1
      result2 += "\n\t"+ num + ". " + ques1yes
    }else{
       //if first answer is "no", num is incrementated and concatenated to the "result2" string along with "ques1no" string
      num += 1
      result2 += "\n\t"+ num + ". " + ques1no
    }

    if(answer2 == "yes"){
       //if second answer is "yes" num is incrementated and concatenated to the "result2" string along with "ques2yes" string
      num += 1
      result2 += "\n\t"+ num + ". " + ques2yes
    }else{
       //if second answer is "no" num is incrementated and concatenated to the "result2" string along with "ques2no" string
      num += 1
      result2 += "\n\t"+ num + ". " + ques2no
    }

    if(answer3 == "yes"){
       //if third answer is "yes" num is incrementated and concatenated to the "result2" string along with "ques3yes" string
      num += 1
      result2 += "\n\t"+ num + ". " + ques3yes
    }else{
       //if third answer is "no" num is incrementated and concatenated to the "result2" string along with "ques3no" string
      num += 1
      result2 += "\n\t"+ num + ". " +  ques3no
    }

    setResultMessage3 (result2);//This statement assigns "result2" variable to the "ResultMessage3" variable
    localStorage.setItem('resultMessage3', result2); //This line stores "result2" variable in local storage so it can be retrieved and displayed in the summary page. 
    navigate('/page3'); // This line of code is used to navigate to page 3
    } else {
      allOptionsSelected = false; // Set the flag to false if any option is not selected
    }

    if (!allOptionsSelected) {
      alert('Please select all options before calculating points.');//display this message is all options are not selected
    } 
  };

  const handleCalculatePoints = () => {
    calculatePoints(); // Call calculatePoints 
    localStorage.setItem('answer', answer);
    localStorage.setItem('answer2', answer2);
    localStorage.setItem('answer3', answer3);
    localStorage.setItem('answer4', answer4);
    localStorage.setItem('answer5', answer5);
  };

  

  // Function to clear options and reset the form
  const clearOptions = () => {
    setAnswer('');
    setAnswer2('');
    setAnswer3('');
    setAnswer4('');
    setAnswer5('');
    setPointResult("");
    setResult("")
    setResultMessage3 ("");
  };

  function handleOnClick2(event) {
    navigate('/page1'); // Navigate to '/page1' when the button is clicked
    
  };



//This function hides the second question and calls the clearOptions function. 
  const handleClearOptions = () => {
    setShowOptions2(false);
    clearOptions();
  };

  useEffect(() => {
    const storedShowOptions2 = localStorage.getItem('showOptions2');
    if (storedShowOptions2) {
    setShowOptions2(storedShowOptions2 === 'true');
    }
    const storedAnswer = localStorage.getItem('answer');
    if (storedAnswer) setAnswer(storedAnswer);

    const storedAnswer2 = localStorage.getItem('answer2');
    if (storedAnswer2) setAnswer2(storedAnswer2);

    const storedAnswer3 = localStorage.getItem('answer3');
    if (storedAnswer3) setAnswer3(storedAnswer3);

    const storedAnswer4 = localStorage.getItem('answer4');
    if (storedAnswer4) setAnswer4(storedAnswer4);

    const storedAnswer5 = localStorage.getItem('answer5');
    if (storedAnswer5) setAnswer5(storedAnswer5);
  }, []);

  return (
    <div >
      <div>
      <CustomBox width ="500px" height= "550px">
      <ol>
        {/*Question 1 */}
        <div style = {{marginBottom: "18px"}}>
        <li>Does a GPU version of your code already exist?</li>
        </div>
        <label>
          <input
            type="radio"
            name="answer"
            value="yes"
            onClick={handleShowAdditionalQues}
            checked={answer === 'yes'}
            onChange={(e) => setAnswer(e.target.value)}
          />{' '}
          Yes 
        </label>
        <label style = {{marginLeft: "60px"}}>
          <input
            type="radio"
            name="answer"
            value="no"
            onClick={handleShowAdditionalQues}
            checked={answer === 'no'}
            onChange={(e) => setAnswer(e.target.value)}
          />{' '}
          No 
        </label>
      

        {showOptions2 && (
          <div id="options2">
            <div style = {{marginBottom: "18px", marginTop: "20px"}} >
            {/*Question 1a - shown when user choses "yes" for question 1*/}
            <li>Are the desired physics packaged GPU-enabled?</li>
            </div>
            <label>
              <input
                type="radio"
                name="answer2"
                value="yes"
                checked={answer2 === 'yes'}
                onChange={(e) => setAnswer2(e.target.value)}
              />{' '}
              Yes 
            </label>
            <label style = {{marginLeft: "60px"}}>
              <input
                type="radio"
                name="answer2"
                value="no"
                checked={answer2 === 'no'}
                onChange={(e) => setAnswer2(e.target.value)}
              />{' '}
              No 
            </label>
          </div>
        )}
        <div style = {{marginBottom: "18px", marginTop: "20px"}}>
          {/*Question 2 */}
        <li>Is the code written in such a way that it is GPU-ready?</li>
        </div>
        <ol start = "a.">
          {/*Question 2a */}
          <div style = {{marginBottom: "18px", marginTop: "20px"}}>
          <li>Is full parallelism available at the loop level?</li>
          </div>
          
            <label>
              <input
                type="radio"
                name="answer3"
                value="yes"
                checked={answer3 === 'yes'}
                onChange={(e) => setAnswer3(e.target.value)}
              />{' '}
              Yes 
            </label>
            <label style = {{marginLeft: "60px"}}>
              <input
                type="radio"
                name="answer3"
                value="no"
                checked={answer3 === 'no'}
                onChange={(e) => setAnswer3(e.target.value)}
              />{' '}
              No 
            </label>
        
          <div style = {{marginBottom: "18px", marginTop: "20px"}}>
          {/*Question 2b */}
          <li>Does a threaded version of the code exist?</li>
          </div>
          
            <label>
              <input
                type="radio"
                name="answer4"
                value="yes"
                checked={answer4 === 'yes'}
                onChange={(e) => setAnswer4(e.target.value)}
              />{' '}
              Yes 
            </label>
            <label style = {{marginLeft: "60px"}}>
              <input
                type="radio"
                name="answer4"
                value="no"
                checked={answer4 === 'no'}
                onChange={(e) => setAnswer4(e.target.value)}
              />{' '}
              No 
            </label>
        
          <div style = {{marginBottom: "18px", marginTop: "20px"}}>
          {/*Question 2c */}
          <li>Does the code have some form of verification?</li>
          </div>
          
            <label>
              <input
                type="radio"
                name="answer5"
                value="yes"
                checked={answer5 === 'yes'}
                onChange={(e) => setAnswer5(e.target.value)}
              />{' '}
              Yes 
            </label>
            <label style = {{marginLeft: "60px"}}>
              <input
                type="radio"
                name="answer5"
                value="no"
                checked={answer5 === 'no'}
                onChange={(e) => setAnswer5(e.target.value)}
              />{' '}
              No 
            </label>
            <br />
      
        </ol>
       

      </ol>
      </CustomBox>
      {/*Submit Button*/}

      </div>
      
      <div style = {{marginLeft: "253.5px", marginBottom: "100px"}}>
      <Button text = "Back" onClick = {handleOnClick2}></Button>
      <Button text = "Clear" onClick = {handleClearOptions} style ={{ marginLeft : "10px" , marginRight:"10px"}}/>
      <Button text = "Next" onClick = {handleCalculatePoints}  />
      </div>
    </div>
  );


}

export default StudentExercise2;


