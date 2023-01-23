// Directions***********************
// This was a challenge where I had to create a multiple choice, 
// timed code quiz.  It had to run in the browser. It needed to 
// feature dynamically updated HTML and CSS, powered by JavaScript 
// code.  There needed to be clean, polished, and responsive user 
//interface.

// The functions that it needed were:
// 1) When the start button is clicked, the timer starts 
// when presented with a question.
// 2) Points subtracted when there is a wrong answer.
// 3) When either all questions are answered or when the timer 
// reaches 0, the game is over.
// 4) When the game is over, initials and score are saved. 

// var
var ques= document.getElementById('ques');
var quizContainer= document.getElementById('container');
var choice0= document.getElementById('choice0');
var choice1= document.getElementById('choice1');
var choice2= document.getElementById('choice2');
var choice3= document.getElementById('choice3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var scoreResults= document.getElementById('scoreResults');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

// Q & A
var dataArray= [
  {
    ques : ' Which of these is NOT a coding language?',
    option : ['HTML','Code+','Python','JavaScript',],
    ans : 'Code+'
},
{
    ques : ' What 2 possible values does Boolean have?',
    option : ['a and b', 'Yes and no', 'True and false', 'Right and wrong',],
    ans : 'True and false'
},
{
    ques : ' What does HTML stand for?',
    option : ['HyperType Made Language', 'Hex Text Made Language', 'Hex Type Made Language', 'HyperText Markup Language',],
    ans : 'HyperText Markup Language'
},
{
    ques : ' What does CSS stand for?',
    option : ['Copy Syntax Server','Copy Server Syntax','Cascading Style Server','Cascading Style Sheets',],
    ans : 'Cascading Style Sheets'
},
{
    ques : ' Responsive design means to make a website look…',
    option : ['good on any device and screen size.','good with added features and buttons.','clean and organized on the user interface.','function well, using a variety of different computer languages.',],
    ans : 'good on any device and screen size.'
}
]

// NOT WORKING----------------------------------------
// var startBtn = document.querySelector("#start-btn");

// THIS MAKE THE START BUTTON WORK!
startBtn.addEventListener('click', ()=>{
  alert('Clicked!')
  startTimer()

  console.log("startTimer .addEvent")
})

// Timer code ------------------------------------------
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left!";

    if(secondsLeft === 0) {
      // Stops it
      clearInterval(timerInterval);
    }
  }, 1000);
}
setTime();

//function to display questions
function displayQuestion(){
  for(var a=0;a<span.length;a++){
      span[a].style.background='none';
  }
  ques.innerHTML= (i+1)+')'+dataArray[i].ques;
  option0.innerHTML= dataArray[i].option[0];
  option1.innerHTML= dataArray[i].option[1];
  option2.innerHTML= dataArray[i].option[2];
  option3.innerHTML= dataArray[i].option[3];
  stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+dataArray.length;
}
// calculates scores
function calcScore(e){
  if(e.innerHTML===dataArray[i].ans && score<dataArray.length)
  {
      score= score+1;
      document.getElementById(e.id).style.background= 'green';
  }
  else{
      document.getElementById(e.id).style.background= 'red';
  }
  setTimeout(nextQuestion,300);
}

// display next question
function nextQuestion(){
  if(i<dataArray.length-1)
  {
      i=i+1;
      displayQuestion();
  }
  else{
      points.innerHTML= score+ '/'+ dataArray.length;
      quizContainer.style.display= 'none';
      scoreboard.style.display= 'block'
  }
}

// Click events to next button
next.addEventListener('click',nextQuestion);

// Button event, returns to quiz
function backToQuiz(){
  location.reload();
}

// Checks answers
function checkAnswer(){
  var answerBank= document.getElementById('answerBank');
  var answers= document.getElementById('answers');
  answerBank.style.display= 'block';
  scoreboard.style.display= 'none';
  for(var a=0;a<dataArray.length;a++)
  {
      var list= document.createElement('li');
      list.innerHTML= dataArray[a].ans;
      answers.appendChild(list);
  }
}


displayQuestion();
