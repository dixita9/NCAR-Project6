
//Calculation for student exercise 1 
//the function divides two numbers given as an input
function CalcOne (){
    var x = document.getElementById("inputone").value;
    var y = document.getElementById("inputtwo").value;

    var division = x / y

    var outputElement = document.getElementById("output");
    outputElement.innerHTML = "# grid-points per {node,GPU} :" + division;

    return division

}

//Submit button for student exercise 1 
//This function submits all the chosen options and displays what was chosen
function Submit(){
    var answer = document.querySelector('input[name="answer"]:checked');
    var answer2 = document.querySelector('input[name="answer2"]:checked');

    var divisionresult = CalcOne() //reference from CalcOne() function

    if (answer && answer2) {
        //this line of code displays the answers chosen by the user
        document.getElementById("ans").innerHTML = "Your Answers: " + divisionresult + ", " + answer.value + " and " + answer2.value
      } else {
        //this line of code alerts the user if all the answers are not selected
        alert("Please answer all questions.");
      }

    var result2Element = document.getElementById("result2");
     
    var radios1 = document.getElementsByName("answer")
    var radios2 = document.getElementsByName("answer2")

    //if the division result is less than 50 AND Yes is checked in 2nd question AND Rate is checked in 3rd question, 
    // the following message is displayed:
    if ((divisionresult <= 50 ) && (radios1[0].checked) && (radios2[0].checked)) {
        result2Element.innerHTML = "Your application is a good match for GPU enabled computing!";
    //if the division result is more than 50 AND No is checked in 2nd question AND Throughput is checked in 3rd question, 
    // the following message is displayed:
    } else if ((divisionresult > 50 ) && (radios1[1].checked) && (radios2[1].checked)) {
        result2Element.innerHTML = "Your application is a poor match for GPU enabled computing :(";
    } else {

        //In all other combination of scenarios, the following message is displayed:

        result2Element.innerHTML = "Your application is a poor match for GPU enabled computing :("

    }


}
//Clear Options button for student exercise 1 
//This function clears all the chosen options and resets the form
function ClearOptions(){

    var radios1 = document.getElementsByName("answer")
    var radios2 = document.getElementsByName("answer2")

    for ( var i = 0; i < radios1.length; i++){
        radios1[i].checked = false;
    }

    for ( var i = 0; i < radios2.length; i++){
        radios2[i].checked = false;
    }
    
    document.getElementById("ans").innerHTML = ""

}

//this function displays the nested question for student exercise 2
function ShowAdditionalQues(){

    var radios1 = document.getElementsByName("answer");

    if ( radios1[0].checked == true){

        document.getElementById("options2").style.display = "block";

    } else {
        document.getElementById("options2").style.display = "none"; 
    }

}


// Function for calculating Total Points for exercise 2

function CalculatePoints(){

    var radios1 = document.getElementsByName("answer");
    var radios2 = document.getElementsByName("answer2");
    var radios3 = document.getElementsByName("answer3");
    var radios4 = document.getElementsByName("answer4");
    var radios5 = document.getElementsByName("answer5");

    
  
    var TotalPoints = 0
    if (// this block of code checks whether all the radios are checked or not
        (radios1[0].checked || radios1[1].checked) &&
        ((radios1[0].checked && (radios2[0].checked || radios2[1].checked)) ||
        radios1[1].checked) &&
        (radios3[0].checked || radios3[1].checked) &&
        (radios4[0].checked || radios4[1].checked) &&
        (radios5[0].checked || radios5[1].checked)
      ) {

    //question 1:Does a GPU version of your code already exist?
    
    if ( radios1[0].checked == true){
        
        TotalPoints += 0

        //question 2:Are the desired physics packaged GPU-enabled?

        if ( radios2[0].checked == true){
        
            TotalPoints += 1


        } else if (radios2[1].checked) {
        
            TotalPoints += 3
        }
    


    } else if (radios1[1].checked){
        
        TotalPoints += 4
        
    }

    

    // question 3: Is full parallelism is available at loop level?

    if ( radios3[0].checked == true){
        
        TotalPoints += 1


    } else if (radios3[1].checked)  {
        
        TotalPoints += 7
    }

    // question 4: Does a threaded version of the code exist?

    if ( radios4[0].checked == true){
        
        TotalPoints += 1


    } else if (radios4[1].checked) {
        
        TotalPoints += 7
    }

    //question 5: Does the code have some form of verification?

    if ( radios5[0].checked == true){
        
        TotalPoints += 1


    } else if (radios5[1].checked)  {
        
        TotalPoints += 7
    }
    //this line displays the Total Points Calculated in an HTML element. 
    document.getElementById("TotalPoints").textContent = "Total Points:" + TotalPoints 

    //this variable is getting reference from "result" : a <p> HTML element
    var resultElement = document.getElementById("result");
      
    if (0 < TotalPoints && TotalPoints <= 10) {
        //if Total points is between 0 to 10, the following message is displayed:
        resultElement.innerHTML = "Easy Peezy! It is going to be very easy to make your application GPU enabled.";
    } else if (10 < TotalPoints && TotalPoints <= 15) {
        //if Total points is between 10 to 15, the following message is displayed:
        resultElement.innerHTML = "Not too hard! It is going to take some work to make your application GPU enabled.";
    } else if (15 < TotalPoints && TotalPoints <= 25) {
        
        //if Total points is between 15 to 25, the following message is displayed:
        resultElement.innerHTML = "Difficult! It is going to be very hard to make your application GPU enabled.";
    }
    
    
    
    } else {
    // Alert if any options are missing
    alert("Please select all options before calculating points.");
  }   

  
    


} 

//Fuction that clears all the options in exercise 2

function ClearOptions2(){

    var radios1 = document.getElementsByName("answer")
    var radios2 = document.getElementsByName("answer2")
    var radios3 = document.getElementsByName("answer3");
    var radios4 = document.getElementsByName("answer4");
    var radios5 = document.getElementsByName("answer5");

    for ( var i = 0; i < radios1.length; i++){
        radios1[i].checked = false;
    }

    for ( var i = 0; i < radios2.length; i++){
        radios2[i].checked = false;
    }

    for ( var i = 0; i < radios3.length; i++){
        radios3[i].checked = false;
    }

    for ( var i = 0; i < radios4.length; i++){
        radios4[i].checked = false;
    }

    for ( var i = 0; i < radios5.length; i++){
        radios5[i].checked = false;
    }
    

    var answer = document.querySelector('input[name="answer"]:checked');
    var answer2 = document.querySelector('input[name="answer2"]:checked');

    
    document.getElementById("TotalPoints").innerHTML = "" //this line clears the Total Points displayed in the screen


    
}

function Submit3(){
    document.getElementById("question2").style.display = "block";
}

