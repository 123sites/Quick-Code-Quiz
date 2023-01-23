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

// var code
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
    ques : '1) Which of these is NOT a coding language?',
    option : ['Asia','Africa','Europe','Australia'],
    ans : 'Africa'
},
{
    ques : '',
    option : ['Junagarh, Gujarat','Diphu, Assam','Kohima, Nagaland','Gangtok, Sikkim'],
    ans : 'Diphu, Assam'
},
{
    ques : '',
    option : ['Physics and Chemistry','Physiology or Medicine','Literature, Peace and Economics','All of the above'],
    ans : 'All of the above'
},
{
    ques : '',
    option : ['Labour Party','Nazi Party','Ku-Klux-Klan','Democratic Party'],
    ans : 'Nazi Party'
},
{
    ques : '',
    option : ['1967','1968','1958','1922'],
    ans : '1967'
}
]

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
  ques.innerHTML= 'Q.'+(i+1)+' '+dataArray[i].ques;
  option0.innerHTML= dataArray[i].option[0];
  option1.innerHTML= dataArray[i].option[1];
  option2.innerHTML= dataArray[i].option[2];
  option3.innerHTML= dataArray[i].option[3];
  stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+dataArray.length;
}
// calculates scores
function calcScore(e){
  if(e.innerHTML===dataArray[i].answer && score<dataArray.length)
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
      list.innerHTML= dataArray[a].answer;
      answers.appendChild(list);
  }
}


displayQuestion();
