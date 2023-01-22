
//Question bank
var questionBank= [
  {
      question : ['1) Which of these is NOT a coding language?'],
      option : ["HTML", "code+", "Python", "JavaScript"],
      answer : 'code+'
  },
  {
      question : 'Garampani sanctuary is located at',
      option : ['Junagarh, Gujarat','Diphu, Assam','Kohima, Nagaland','Gangtok, Sikkim'],
      answer : 'Diphu, Assam'
  },
  {
      question : 'For which of the following disciplines is Nobel Prize awarded?',
      option : ['Physics and Chemistry','Physiology or Medicine','Literature, Peace and Economics','All of the above'],
      answer : 'All of the above'
  },
  {
      question : 'Hitler party which came into power in 1933 is known as',
      option : ['Labour Party','Nazi Party','Ku-Klux-Klan','Democratic Party'],
      answer : 'Nazi Party'
  },
  {
      question : 'First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in',
      option : ['1967','1968','1958','1922'],
      answer : '1967'
  }
]



var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
  for(var a=0;a<span.length;a++){
      span[a].style.background='none';
  }
  question.innerHTML= +' '+questionBank[i].question;
  option0.innerHTML= questionBank[i].option[0];
  option1.innerHTML= questionBank[i].option[1];
  option2.innerHTML= questionBank[i].option[2];
  option3.innerHTML= questionBank[i].option[3];
  stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

function startCountdown(seconds) {
  let counter = seconds;
    
  const interval = setInterval(() => {
    console.log(counter);
    counter--;
  }, 1000);
}

//function to calculate scores
function calcScore(e){
  if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
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
  if(i<questionBank.length-1)
  {
      i=i+1;
      displayQuestion();
  }
  else{
      points.innerHTML= score+ '/'+ questionBank.length;
      quizContainer.style.display= 'none';
      scoreboard.style.display= 'flex'
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
  answerBank.style.display= 'flex';
  scoreboard.style.display= 'none';
  for(var a=0;a<questionBank.length;a++)
  {
      var list= document.createElement('li');
      list.innerHTML= questionBank[a].answer;
      answers.appendChild(list);
  }
}


displayQuestion();