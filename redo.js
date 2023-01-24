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
var count = 3;
var secondsLeft = 3;
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
// in/out of time & countdown
var inTime = document.querySelector(".inTime");
var outOfTime = document.querySelector(".outOfTime");
var timerEl = document.querySelector("#seconds");
var timerElement = document.querySelector(".count");


// Start
var startBtn = document.querySelector("#startBtn");
console.log('startBtn39') 

// THIS MAKE THE START BUTTON WORK!  ALSO, MAKES ALERT BOX WORK!
startBtn.addEventListener('click', ()=>{
  startTimer()
  quizContainer.classList.remove("hide")
  console.log("startBtn47")
  // startBtn.classList.add("hide")
  // console.log("Hide startBtn")

})

function startBtn() {
  startTimer()
  currentQuestion = 0;
  showQuestion(dataArray[level])
  startBtn.classList.add("hide");
  console.log("Hide startBtn")



// Timer code ------------------------------------------
  // Sets timer
  var timeInterval = setInterval(function() {
    count--;

    let = startTimer = 3;
    seconds.textContent = count;
    //timerElement = count;
    if (count === 0) {
      // Tests if won
      //if (isWin && count > 0) {
        // Stops timer & clears interval
        clearInterval(timeInterval);
        //winGame();
        console.log('...finished in time')
        alert('You finished in time!')
    }
 
    // Time out?
    if (count === 0) {
      // Clears it
      clearInterval(timeInterval);
      alert('You ran out of time!');
      // var stopInterval = function() {
      //   console.log('Out of time!');
      }
    
  }, 1000)
}

// function startTimer() {
//   console.log("startTimer86")
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timerEl.textContent = secondsLeft + " out of time!";
//     console.log("timer")
//     if(secondsLeft === 0) {
//       // Stops it
//       clearInterval(timerInterval);
//     }
//   }, 1000);
// }

// DO BELOW INSTEAD?????
// Starts and stops the game.  It triggers win/lose
function startTimer() {
  // Sets timer
  console.log("startTimer")
  time = setInterval(function() {
    secondsLeft--;
    timerEl.textContent=secondsLeft + " seconds left until the time is up!";

    if (secondsLeft <=0) {
      clearInterval(time);
      endGame()
      // Tests if won
    //   if (isWin && secondsLeft > 0) {
    //     // Stops timer & clears interval
    //     clearInterval(time);
    //     // winGame();
    //   }

    // // Time out?
    // else {
    //   // Clears it
    //   clearInterval(time);
    //   // loseGame();
    // }
  }
  }, 1000);
}

// let seconds = startTimer;
// function startTimer() {
//   // Sets timer
//   console.log("startTimer")
//   // time = setInterval(function() {
//     var seconds = 3;
//     var timer= setInterval(function(){
//       document.getElementById('timerDisplay').innerHTML='00:'+sec;
//       sec--;
//       if (sec < 0) {
//         clearInterval(timer);
//         alert("Out of time!")
//       }
//     )}, 1000;

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

// Q & A
console.log('dataArrayQuestions')
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

function endGame (){
console.log("endOfGame")
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
      console.log(nextQuestion);
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

// // Shows they won!
// function inTime() {
//   wordBlank.textContent = "🤩 YOU FINISHED IN-TIME! 🤩";
//   winCounter++
//   //startTimer.disabled = false;
//   setWins()
// }

// // Shows they lost when the timer is 0.
// function outOfTime() {
//   wordBlank.textContent = "🙁 OUT OF TIME! 🙁";
//   loseCounter++
//   //startTimer.disabled = false;
//   setLosses()
// }


// // Save score & intitials:
// // Add data
// localStorage.setItem('score');

// // Read data
// const score = localStorage.getItem('myScore');

// // Remove specific data
// localStorage.removeItem('myCar');

// // Remove all data
// localStorage.clear();

displayQuestion();

// const NO_OF_HIGH_SCORES = 10;
// const HIGH_SCORES = 'highScores';

// const highScoreString = localStorage.getItem(HIGH_SCORES);
// const highScores = JSON.parse(highScoreString) ?? [];

// const lowestScore = highScores[NO_OF_HIGH_SCORES — 1]?.score ?? 0

// function checkHighScore(score) {
//   const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
//   const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;
  
//   if (score > lowestScore) {
//     saveHighScore(score, highScores); // TODO
//     showHighScores(); // TODO
//   }
// }
// function gameOver() {
//   // Other game over logic.
//   checkHighScore(account.score);

//   const name = prompt(‘You got a high score! Enter name:’);

//   const newScore = { score, name };

  
// function saveHighScore(score, highScores) {
//   const name = prompt('You got a highscore! Enter name:');
//   const newScore = { score, name };
  
//   // 1. Add to list
//   highScores.push(newScore);

//   // 2. Sort the list
//   highScores.sort((a, b) => b.score - a.score);
  
//   // 3. Select new list
//   highScores.splice(NO_OF_HIGH_SCORES);
  
//   // 4. Save to local storage
//   localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
// };

// <h2>HIGH SCORES</h2>
// <ol id=”highScores”></ol>

// highScores.map((score) => `<li>${score.score} — ${score.name}`);


// const highScoreList = document.getElementById(HIGH_SCORES);

// highScoreList.innerHTML = highScores.map((score) => 
//   `<li>${score.score} - ${score.name}`
// );


// function showHighScores() {
//   const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
//   const highScoreList = document.getElementById(HIGH_SCORES);
  
//   highScoreList.innerHTML = highScores
//     .map((score) => `<li>${score.score} - ${score.name}`)
//     .join('');
// }

// }

