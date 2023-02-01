
let userScore = 0;
let endTime = 1;

// Import Elements
let restartClass = document.querySelector(".restartClass");
let startAddSingle = document.getElementById("startAddSingle");
let firstDigitClass = document.querySelector("#firstDigitClass");
let secondDigitClass = document.querySelector(".secondDigitClass");
let questionClass = document.querySelector(".questionClass");
let questionClassP = document.querySelector(".questionClassP");
let answerClass = document.querySelector(".answerClass");
let resultClass = document.querySelector(".resultClass");
let resultClassP = document.querySelector(".resultClassP");
let scoreClass = document.querySelector(".scoreClass");



// checkValue function was in SubmitAddButton event listener
// addEventListener
window.addEventListener("load", windowLoadFunction);
startAddSingle.addEventListener("click", showSingleDigits );

  
  
// Function

// This is for Single Digit Addition only
function showSingleDigits(){
    startAddSingle.style.display = "none";
    questionClassP.style.display = "block";
    restartClass.style.display = "block";
    resultClass.style.display = "block";

    answerClass.value = "";
    answerClass.focus();
    let firstDigit = Math.floor(Math.random() * 10);
    let secondDigit = Math.floor(Math.random() * 10);
    firstDigitClass.innerHTML = firstDigit;
    secondDigitClass.innerHTML = secondDigit;
    scoreClass.innerHTML = userScore;
 
}

// Time interval of 5 seconds and refresh page

setInterval(function() {
    if(endTime < 10){
        checkValue();
        showSingleDigits();
        endTime++;
    }
    else{
        windowLoadFunction();
    }
    
  }, 3000);




// window load function
function windowLoadFunction(){
    questionClassP.style.display = "none";
    startAddSingle.style.display = "block";
    restartClass.style.display = "none";
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


  