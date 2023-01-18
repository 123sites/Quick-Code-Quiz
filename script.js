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
var next = document.querySelector(".next-btn");
var timerElement = document.querySelector(".count");
var start = document.querySelector(".start");
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var count;
var startOver = document.querySelector(".startOver");
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
  q: "1) Which of these is NOT a coding language?",
  a: ["a", "b", "c", "d"], 
  answer: "b"
  
},
 {
  q: "2) What 2 possible values does Boolean have?",
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
  answer: "d"
  
},

{
  q: "5) Responsive design means to make a website look...",
  a: ["a", "b", "c", "d"], 
  answer: "a"
  
},

]
console.log(quizArray[0].q)
level ++
console.log(quizArray[1].q)
level ++
console.log(quizArray[level].q)
level ++
console.log(quizArray[level].q)
level ++
console.log(quizArray[level].q)
level ++

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.right) {
      button.dataset.right = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

const questions = [
  {
    ques: '1) Which of these is NOT a coding language?',
    ans: [
      { text: 'b', right: true },
    ]
  },
  {
    ques: '2) What 2 possible values does Boolean have?',
    ans: [
      { text: 'c', right: true },
    ]
  },
  {
    ques: '3) What does HTML stand for?',
    ans: [
      { text: 'd', right: true },
    ]
  },
  {
    ques: '4) What does CSS stand for?',
    ans: [
      { text: 'd', right: true },
    ]
  },
  {
    ques: '5) Responsive design means to make a website look…',
    ans: [
      { text: 'a', right: true },
    ]
  },
  
  
]


// Text just before the answers.
// questionEl.textContent = ;


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

h1El.setAttribute("style", "margin: 0px; width:50%; text-align:center; margin-top:5px; color: hsl(265, 90%, 34%); font-family:monospace,sans-serif;");
infoEl.setAttribute("style", "margin: 0px; width:50%; text-align:center;");
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

function getWins() {
  // Gets stored value
  var storedWins = localStorage.getItem("win");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }

  //Render win count to page
  win.textContent = winCounter;
}
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')


// When the start button is clicked...
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(quizArray).forEach(button => {
    setStatusClass(button, button.dataset.right)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}
function start() {
  isWin = false;
  count = 25;
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
  count = setInterval(function() {
    count--;
    timeElement.textContent = count;
    if (count >= 0) {
      // Tests if won
      if (isWin && count > 0) {
        // Stops timer & clears interval
        clearInterval(timer);
        winGame();
      }
    }
    // Time out?
    if (count === 0) {
      // Clears it
      clearInterval(timer);
      loseGame();
    }
  }, 100);
}

// Win count
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}
// lose count
function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
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
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function startOver() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Win/loss is in client storage
  setWins()
  setLosses()
}

startOverButton.addEventListener("click", startOver);