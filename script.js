var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var quizEl = document.createElement("div");
var textEl = document.createElement("div");
var questionEl = document.createElement("div");
// Win/lose & countdown
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timeElement = document.querySelector(".timer");
var start = document.querySelector(".start-btn");
var next = document.querySelector(".start-btn");
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var time;
var timer;
// Array of possible answers the user will guess
var answers = ["a","b", "c", "d"];


// Ordered list
var listEl = document.createElement("ol");
// List items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
// Array of answers
var level = 0
var quizArray = [ {
  q: "1) Which of these is NOT a coding language.",
  a: ["a", "b", "c", "d"], 
  answer: "b"
  
},
 {
  q: "2) What is bolean?",
  a: ["a", "b", "c", "d"], 
  answer: "c"
  
},
 {
  q: "3) What does HTML stand for?",
  a: ["a", "b", "c", "d"], 
  answer: "d"
  
},

{
  q: "4) What does CSS stand for?",
  a: ["a", "b", "c", "d"], 
  answer: "a"
  
},

{
  q: "5) What is JSON?",
  a: ["a", "b", "c", "d"], 
  answer: "e"
  
},

]
console.log(quizArray[level].q)
level ++
console.log(quizArray[level].q)
level ++
console.log(quizArray[level].q)
level ++
console.log(quizArray[level].q)
level ++
console.log(quizArray[level].q)
level ++

// Text at the top.
h1El.textContent = "Quick Code Quiz!";
quizEl.textContent = "Can you answer all these questions before the time is up?";
textEl.textContent = "Text?";

// Text just before the answers.
questionEl.textContent = "Question 1 goes here.";
// Appended, adds to HTML
body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(quizEl);
body.appendChild(questionEl);
// Append ordered list 
questionEl.appendChild(listEl);
// Append list items to ordered list element 
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center; margin-top:25px; font-family:monospace,sans-serif;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
textEl.setAttribute("style", "font-size:25px; text-align:center; text-weight: bold; font-family:monospace,sans-serif;");
quizEl.setAttribute("style", "font-size:25px; text-align:center; text-weight: bold; font-family:monospace,sans-serif;");
questionEl.setAttribute("style", "font-size:25px; color:black; text-weight: bold; font-family:monospace,sans-serif;");

// A-D
li1.textContent = "A) ";
li2.textContent = "B) ";
li3.textContent = "C) ";
li4.textContent = "D) ";

// Styling for list elements
listEl.setAttribute("style", "background:mediumpurple; padding:20px;");
// Other styling to list items
li1.setAttribute("style", " color:white; background: darkgray; padding: 5px; margin-left: 35px;");
li2.setAttribute("style", " color:white; background: slategray; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", " color:white; background: cornflowerBlue; padding: 5px; margin-left: 35px;");
li4.setAttribute("style", " color:white; background: dimgray; padding: 5px; margin-left: 35px;");

// init - when the page loads
function init() {
  getWins();
  getlosses();
}


const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

startButton.addEventListener('click', start)
nextButton.addEventListener('click', () => {
 currentQuestionIndex++
 setNextQuestion()
})

// When the start button is clicked...
function start() {
  isWin = false;
  timer = 25;
// Disables start button after game starts
  startButton.disabled = true;
  renderBlanks()
  startTimer()
}

//  startButton.classList.add('hide')
//  shuffledQuestions = questions.sort(() => Math.random() - .5)
//  currentQuestionIndex = 0
//  questionContainerElement.classList.remove('hide')
//  setNextQuestion()

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('right')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('right')
  element.classList.remove('wrong')
}

// Shows they won!
function win() {
  wordBlank.textContent = "🤩 WINNER! 🤩";
  winCounter++
  startButton.disabled = false;
  setWins()
}

// Shows they lost when the timer is 0.
function lose() {
  wordBlank.textContent = "🙁 GAME OVER 🙁";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}

// Starts and stops the game.  It triggers win/lose
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timer--;
    timeElement.textContent = timer;
    if (timer >= 0) {
      // Tests if won
      if (isWin && timer > 0) {
        // Stops timer & clears interval
        clearInterval(timer);
        winGame();
      }
    }
    // Time out?
    if (timer === 0) {
      // Clears it
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

// Win count
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

function setStatusClass(element, right) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('right')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('right')
  element.classList.remove('wrong')
}

// Starts the game
startButton.addEventListener("click", startGame);

init();