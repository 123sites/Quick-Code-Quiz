
var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var choice0= document.getElementById('choice0');
var choice1= document.getElementById('choice1');
var choice2= document.getElementById('choice2');
var choice3= document.getElementById('choice3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

// Q & A
var dataArray= [
  {
    question : 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
    option : ['Asia','Africa','Europe','Australia'],
    ans : 'Africa'
},
{
    question : 'Garampani sanctuary is located at',
    option : ['Junagarh, Gujarat','Diphu, Assam','Kohima, Nagaland','Gangtok, Sikkim'],
    ans : 'Diphu, Assam'
},
{
    question : 'For which of the following disciplines is Nobel Prize awarded?',
    option : ['Physics and Chemistry','Physiology or Medicine','Literature, Peace and Economics','All of the above'],
    ans : 'All of the above'
},
{
    question : 'Hitler party which came into power in 1933 is known as',
    option : ['Labour Party','Nazi Party','Ku-Klux-Klan','Democratic Party'],
    ans : 'Nazi Party'
},
{
    question : 'First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in',
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
  question.innerHTML= 'Q.'+(i+1)+' '+dataArray[i].question;
  option0.innerHTML= dataArray[i].option[0];
  option1.innerHTML= dataArray[i].option[1];
  option2.innerHTML= dataArray[i].option[2];
  option3.innerHTML= dataArray[i].option[3];
  stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+dataArray.length;
}

//function to calculate scores
function calcScore(e){
  if(e.innerHTML===dataArray[i].answer && score<dataArray.length)
  {
      score= score+1;
      document.getElementById(e.id).style.background= 'limegreen';
  }
  else{
      document.getElementById(e.id).style.background= 'tomato';
  }
  setTimeout(nextQuestion,300);
}

//function to display next question
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

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
  location.reload();
}

//function to check Answers
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
