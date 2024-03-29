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
var correctAns = 0;
var questionNum = 0;
var questionIndex = 0;
// Time
var noTime = document.getElementById("noTime");
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
// Beginning
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");
var info = document.getElementById("info");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var mainContent = document.getElementById("mainContent");
// Questions
var qDiv = document.getElementById("qDiv");
var qTitle = document.getElementById("qTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var ansCheck = document.getElementById("aCheck");
// Scoring & returning
var goBack = document.getElementById("goBack");
var viewScores = document.getElementById("viewScores");
var highScore = document.getElementById("highScore");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var listOfHighScores = document.getElementById("listOfHighScores");

 // Questions and answers
 const questions = [
  {
      question: "Which of these is NOT a coding language?",
      options: ['HTML','Code+','Python','JavaScript',],
      answer: "Code+"
  },
  {
      question: "What 2 possible values does Boolean have?",
      options: ['a and b', 'Yes and no', 'True and false', 'Right and wrong',],
      answer: "True and false"
  },
  {
      question: "What does HTML stand for?'",
      options: ['HyperType Made Language', 'Hex Text Made Language', 'Hex Type Made Language', 'HyperText Markup Language',],
      answer: "HyperText Markup Language"
  },
  {
      question:  "What does CSS stand for?'",
      options: ['Copy Syntax Server','Copy Server Syntax','Cascading Style Server','Cascading Style Sheets',],
      answer: "Cascading Style Sheets"
  },
  {
      question: "Responsive design means to make a website look…",
      options: ['good on any device and screen size.','good with added features and buttons.','clean and organized on the user interface.','function well, using a variety of different computer languages.',],
      answer: "good on any device and screen size."
  },
];

// Timer
var Time = 20;
function newQuiz() {
  questionIndex = 0;
  Time = 19;
  timeLeft.textContent = Time;
  initialInput.textContent = "";

  startDiv.style.display = "none";
  qDiv.style.display = "block";
  timer.style.display = "block";
  noTime.style.display = "none";

  var startTimer = setInterval(function() {
      Time--;
      timeLeft.textContent = Time;
      if(Time <= 0) {
          clearInterval(startTimer);
          if (questionIndex < questions.length - 1) {
              gameOver();
          }
      }
  },1000);

  showQuiz();
};

// nextQuestion
function showQuiz() {
  nextQuestion();
}

function nextQuestion() {
  qTitle.textContent = questions[questionIndex].question;
  choiceA.textContent = questions[questionIndex].options[0];
  choiceB.textContent = questions[questionIndex].options[1];
  choiceC.textContent = questions[questionIndex].options[2];
  choiceD.textContent = questions[questionIndex].options[3];
}

// Right or wrong
function checkAnswer(answer) {

  var lineBreak = document.getElementById("lineBreak");
  lineBreak.style.display = "block";
  aCheck.style.display = "block";

  if (questions[questionIndex].answer === questions[questionIndex].options[answer]) {
      // correct +1
      correctAns++;
      console.log(correctAns);
      aCheck.textContent = "Correct!";
  } else {
      // Wrong -5 on the time
      Time -= 5;
      timeLeft.textContent = Time;
      aCheck.textContent = "Sorry, that's not correct! The answer is: " + questions[questionIndex].answer;
  }

  questionIndex++;
  if (questionIndex < questions.length) {
      nextQuestion();
  } else {
      gameOver();
  }
}

function chooseA() { checkAnswer(0); }
function chooseB() { checkAnswer(1); }
function chooseC() { checkAnswer(2); }
function chooseD() { checkAnswer(3); }

// Determines when the game is over.
function gameOver() {
  info.style.display = "block";
  qDiv.style.display = "none";
  startDiv.style.display = "none";
  timer.style.display = "none";
  noTime.style.display = "block";

  // Shows score
  finalScore.textContent = correctAns;
}

// Enter initials
// Stores highscore in local storage
function storeHighScores(event) {
  event.preventDefault();

  // Stops if initial is blank
  if (initialInput.value === "") {
      alert("Please enter your initials!");
      return;
  } 

  startDiv.style.display = "none";
  timer.style.display = "none";
  noTime.style.display = "none";
  info.style.display = "none";
  highScore.style.display = "block";   

  // Score into localStorage
  var savedHighScores = localStorage.getItem("high scores");
  var scoresArray;

  if (savedHighScores === null) {
      scoresArray = [];
  } else {
      scoresArray = JSON.parse(savedHighScores)
  }

  var userScore = {
      initials: initialInput.value,
      score: finalScore.textContent
  };

  console.log(userScore);
  scoresArray.push(userScore);

  var scoresArrayString = JSON.stringify(scoresArray);
  window.localStorage.setItem("high scores", scoresArrayString);
  
  // Show current highscores
  showHighScores();
}

// Shows high scores
var i = 0;
function showHighScores() {

  startDiv.style.display = "none";
  timer.style.display = "none";
  qDiv.style.display = "none";
  noTime.style.display = "none";
  info.style.display = "none";
  highScore.style.display = "block";

  var savedHighScores = localStorage.getItem("high scores");

  // localStorage check
  if (savedHighScores === null) {
      return;
  }
  console.log(savedHighScores);

  var storedHighScores = JSON.parse(savedHighScores);

  for (; i < storedHighScores.length; i++) {
      var eachNewHighScore = document.createElement("p");
      eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
      listOfHighScores.appendChild(eachNewHighScore);
  }
}

// EventListeners
startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitInitialBtn.addEventListener("click", function(event){ 
  storeHighScores(event);
});

viewScores.addEventListener("click", function(event) { 
  showHighScores(event);
});

goBack.addEventListener("click", function() {
  startDiv.style.display = "block";
  highScore.style.display = "none";
});

clearHighScoreBtn.addEventListener("click", function(){
  window.localStorage.removeItem("high scores");
  listOfHighScores.innerHTML = "High Scores Cleared!";
  listOfHighScores.setAttribute("style", "font-family: 'monospace', sans-serif; font-style: italic;")
});