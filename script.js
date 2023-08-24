/*Add your JavaScript here*/

var spongebobScore = 0; //spongebob scoring
var patrickScore = 0; //patrick scoring

var questionCount = 0; // number of answers clicked on

var result = document.getElementById("result");

var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

//clicks
q1a1.addEventListener("click", spongebob);
q1a2.addEventListener("click", patrick);

q2a1.addEventListener("click", patrick);
q2a2.addEventListener("click", spongebob);

q3a1.addEventListener("click", patrick);
q3a2.addEventListener("click", spongebob);

q4a1.addEventListener("click", spongebob);
q4a2.addEventListener("click", patrick);

q5a1.addEventListener("click", patrick);
q5a2.addEventListener("click", spongebob);

reveal.addEventListener("click", display)

//restart button
restart.addEventListener("click", restartQuiz)

//tracking 
function spongebob() {
  spongebobScore += 1;
  questionCount += 1; 

  console.log("questionCount = " + questionCount + "\t" + "spongebobScore = " + spongebobScore);

  if (questionCount == 5) {
    console.log("The Quiz Is Done") 
    updateResult();
  }
  
}

function patrick() {
  patrickScore += 1; 
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "patrickScore = " + patrickScore);

   if (questionCount == 5) {
    console.log("The Quiz Is Done") 
    updateResult();
   }
}

//Quiz Results

function display() {
  if (questionCount =5) {
   if (spongebobScore >= 3 ) { 
     result.innerHTML = "You are SPONGEBOB SQUAREPANTS!";
    console.log("You are SPONGEBOB SQUAREPANTS!"); 
    }else if (patrickScore >= 3) {
      result.innerHTML = "You are PATRICK STAR!";
    console.log("You are PATRICK STAR!");
    }
  }
}
 
//Restart Quiz
function restartQuiz(){
  result.innerHTML = "You are ...";
  questionCount = 0;
  spongebobScore = 0;
  patrickScore = 0;
  console.log("questionCount =" + questionCount + "\t" + "spongebobScore = " + spongebobScore + "patrickScore =" + patrickScore);
  document.getElementsByTagName("button").disabled = false

  document.getElementById("q1a1").disabled = false;
    document.getElementById("q1a2").disabled = false;document.getElementById("q2a1").disabled = false;
    document.getElementById("q2a2").disabled = false;document.getElementById("q3a1").disabled = false;
    document.getElementById("q3a2").disabled = false;document.getElementById("q4a1").disabled = false;
    document.getElementById("q4a2").disabled = false;document.getElementById("q5a1").disabled = false;
    document.getElementById("q5a2").disabled = false;
}

//disable
function disable1(){
  if (questionCount=1){
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a2").disabled = true;
  }
}
function disable2(){
  if (questionCount=1){
    document.getElementById("q2a1").disabled = true;
    document.getElementById("q2a2").disabled = true;
  }
}
function disable3(){
  if (questionCount=1){
    document.getElementById("q3a1").disabled = true;
    document.getElementById("q3a2").disabled = true;
  }
}
function disable4(){
  if (questionCount=1){
    document.getElementById("q4a1").disabled = true;
    document.getElementById("q4a2").disabled = true;
  }
}
function disable5(){
  if (questionCount=1){
    document.getElementById("q5a1").disabled = true;
    document.getElementById("q5a2").disabled = true;
  }
}
