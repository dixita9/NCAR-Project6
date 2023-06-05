function CalcOne (){
    var x = document.getElementById("igp").value;
    var y = document.getElementById("npr").value;

    var sum = x / y

    var outputElement = document.getElementById("output");
    outputElement.innerHTML = "# grid-points per {node,GPU} :" + sum;

}

function Submit(){
    var answer = document.querySelector('input[name="answer"]:checked');
    var answer2 = document.querySelector('input[name="answer2"]:checked');

    if (answer && answer2) {

        document.getElementById("ans").innerHTML = "Your Answers: " + answer.value + " and " + answer2.value
      } else {
        alert("Please answer all questions.");
      }
}

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

function ShowAdditionalQues(){

    var radios1 = document.getElementsByName("answer");

    if ( radios1[0].checked == true){

        document.getElementById("options2").style.display = "block";

    } else {
        document.getElementById("options2").style.display = "none"; 
    }

}

function CalculatePoints(){

    var radios1 = document.getElementsByName("answer");
    var radios2 = document.getElementsByName("answer2");
    var radios3 = document.getElementsByName("answer3");
    var radios4 = document.getElementsByName("answer4");
    var radios5 = document.getElementsByName("answer5");

    
  
    var TotalPoints = 0
    if (
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

    

    // question 3 

    if ( radios3[0].checked == true){
        
        TotalPoints += 1


    } else if (radios3[1].checked)  {
        
        TotalPoints += 7
    }

    // question 4

    if ( radios4[0].checked == true){
        
        TotalPoints += 1


    } else if (radios4[1].checked) {
        
        TotalPoints += 7
    }

    // question 5

    if ( radios5[0].checked == true){
        
        TotalPoints += 1


    } else if (radios5[1].checked)  {
        
        TotalPoints += 7
    }
    
    document.getElementById("TotalPoints").textContent = "Total Points:" + TotalPoints
    } else {
    // Alert if any options are missing
    alert("Please select all options before calculating points.");
  }   
    


} 



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

    
    document.getElementById("TotalPoints").innerHTML = ""

}

function isAllChecked(radioGroup) {
    var radios = document.getElementsByName(radioGroup);
    for (var i = 0; i < radios.length; i++) {
        if (!radios[i].checked) {
            return false;
        }
    }
    return true;
}

