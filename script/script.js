
let userScore = 0;
let endTime = 0;

// Import Elements
let restartClass = document.querySelector(".restartClass");
let submitAddButton = document.getElementById("submitAddButton");
let startAddSingle = document.getElementById("startAddSingle");
let firstDigitClass = document.querySelector("#firstDigitClass");
let secondDigitClass = document.querySelector(".secondDigitClass");
let questionClass = document.querySelector(".questionClass");
let questionClassP = document.querySelector(".questionClassP");
let answerClass = document.querySelector(".answerClass");
let resultClass = document.querySelector(".resultClass");
let resultClassP = document.querySelector(".resultClassP");
let scoreClass = document.querySelector(".scoreClass");




// addEventListener
window.addEventListener("load", windowLoadFunction);
submitAddButton.addEventListener("click", checkValue);
startAddSingle.addEventListener("click", showSingleDigits );
document.querySelector("input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        submitAddButton.addEventListener("click", checkValue);
    }
  });
  
  
// Function

// This is for Single Digit Addition only
function showSingleDigits(){
    startAddSingle.style.display = "none";
    questionClassP.style.display = "block";
    restartClass.style.display = "block";
    submitAddButton.style.display = "block";
    resultClass.style.display = "block";

    answerClass.value = "";
    answerClass.focus();
    let firstDigit = Math.floor(Math.random() * 10);
    let secondDigit = Math.floor(Math.random() * 10);
    firstDigitClass.innerHTML = firstDigit;
    secondDigitClass.innerHTML = secondDigit;
    scoreClass.innerHTML = userScore;
    endTime++;

 
}

// Time interval of 5 seconds and refresh page
setInterval(function() {
    if(endTime < 11){
        showSingleDigits();
    }
    else{
        
        windowLoadFunction();
    }
    
  }, 5000);



// window load function
function windowLoadFunction(){
    questionClassP.style.display = "none";
    startAddSingle.style.display = "block";
    restartClass.style.display = "none";
    submitAddButton.style.display = "none";
    resultClass.style.display = "block";

    userScore = 0;
}

// Restart Button
restartClass.addEventListener("click", windowLoadFunction);

// Checking input value with correct answer
function checkValue(){
    let firstDigit = parseInt(firstDigitClass.innerHTML);
    let secondDigit = parseInt(secondDigitClass.innerHTML);
    let correctAnswer = firstDigit + secondDigit;
    let userAnswer = parseInt(answerClass.value);
    if(userAnswer === correctAnswer){
        resultClassP.innerHTML = "Correct Answer";
        scoreClass.innerHTML = userScore++;
        showSingleDigits();
    }else{
        resultClassP.innerHTML = "Wrong Answer";
        showSingleDigits();
    }
}


  