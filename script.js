// Code quiz
// click start and and timer starts
// Answer a question, then get another question
// If wrong, time is subtracted
// Ques ans/time reaches 0 = game over
// Save my initials to the score
// 
var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var quizEl = document.createElement("div");
var textEl = document.createElement("div");
var questionEl = document.createElement("div");
// Win/lose & countdown
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timeEl = document.querySelector("#seconds");

// starts the timer
var startTimer = document.querySelector("#start-btn");
var startOver = document.querySelector(".startOver");

// var next = document.querySelector(".next-btn");
var timerElement = document.querySelector(".count");

// var start = document.querySelector(".start");
// var winCounter = 0;
// var loseCounter = 0;
var isWin = false;
var time;

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


// Array of possible answers the user will guess
var question = "Question?";
var answerChoice = ["a","b", "c", "d"];

var counter = document.querySelector("#counter");
var subPts = document.querySelector("#subtract");
var countEl = document.querySelector("#count");
var count = localStorage.getItem("count");
// Ordered list
var listEl = document.createElement("ol");
// List items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
// Array of answers
var level = 0

// function setNextQuestion() {
//   resetState()
//   // showQuestion(shuffledQuestions[currentQuestionIndex])
// }

const questionElement = document.getElementById('question:')
const answerButtonsElement = document.getElementById('answerChoice:')

// const button = document.createElement('button')

// button.innerText = 'Start Quiz'

startTimer.addEventListener('click', () => {
  alert('Clicked!')
})

// document.body.appendChild(button)

// function startTimer(onclick) {
//   // Sets timer
//   var timerInterval = setInterval(function() {
//   // time = setInterval(function() {
//     count--;
//     timeElement = count;
//     if (count >= 0) {
//       // Tests if won
//       if (isWin && count > 0) {
//         // Stops timer & clears interval
//         clearInterval(time);
//         winGame();
//     }
//   }
//     // Time out?
//     if (count === 0) {
//       // Clears it
//       clearInterval(time);
//       loseGame();
//     }
//   }, 1000);
// }

// DO BELOW INSTEAD?????
// Starts and stops the game.  It triggers win/lose
function startTimer() {
  // Sets timer
  time = setInterval(function() {
    secondsLeft--;
    timeEl.seconds + " seconds left until the time is up!";

    if (seconds === 0) {
      // Tests if won
      if (isWin && count > 0) {
        // Stops timer & clears interval
        clearInterval(time);
        winGame();
      }
    }
    // Time out?
    if (count === 0) {
      // Clears it
      clearInterval(time);
      loseGame();
    }
  }, 1000);
}

// function startTimer (); [ {
// if (start "quizArray" )
//  }
// ]

function showQuestions(questions, quizContainer){
  var output = [];
  var answerChoice;

  for(var i=0; i,questions.length; i++){
    answerChoice=[];
    for(letter in questions[i].answerChoice){
      answerChoice.push(
        '<label>'
        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
        + letter + ':'
        + questions[i].answerChoice[letter]
        +'<label>'
      );
    }
    output.push(
      '<div class="question".'+ questions[i].questions + '</div>'
      + '<div class="answerChoice">' + answerChoice.join('') + '</div>'
    
    );
  }
    quizContainer.innerHTML = output.join('')
  }  


var myQuestions = [ {
  // question:"1) Which of these is NOT a coding language?",
  // answerChoice: ["a", "b", "c", "d"], 
  // answer: "code+"
  question: " 1) Which of these is NOT a coding language? ",
  answerChoice: {
    a: 'HTML',
    b: 'code5',
    c: 'Python',
    d: 'JavaScript'
},
  right: 'b', 
},

{
  question: "2) What 2 possible values does Boolean have?",
  answerChoice: ["a", "b", "c", "d"], 
  right: 'c'
  
},

 {
  question: "3) What does HTML stand for?",
  answerChoice: ["a", "b", "c", "d"], 
  right: 'd'
  
},

{
  question: "4) What does CSS stand for?",
  answerChoice: ["a", "b", "c", "d"], 
  right: 'd'
  
},

{
  question: "5) Responsive design means to make a website look...",
  answerChoice: ["a", "b", "c", "d"], 
  right: 'a'
  
},

]


// counter.textContent = count;

// subtTime.addEventListener("click", function() {
//   if (count > 0) {
//     count--;
//     counter.textContent = count;
//     localStorage.setItem("count", count);
//   }
// });

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
textEl.setAttribute("style", "font-size:25px; padding-left: 7px; margin-left: 5px; text-align:center; text-weight: bold; font-family:monospace,sans-serif;");
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
li1.setAttribute("style", " padding: 10px; color:white; background: darkgray; padding: 5px; margin-left: 35px;");
li2.setAttribute("style", " padding: 10px; color:white; background: slategray; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", " padding: 10px; color:white; background: cornflowerBlue; padding: 5px; margin-left: 35px;");
li4.setAttribute("style", " padding: 10px; color:white; background: dimgray; padding: 5px; margin-left: 35px;");

// USE THIS?????????????????????????????
// function getWins() {
//   // Gets stored value
//   var storedWins = localStorage.getItem("win");
//   // If stored value doesn't exist, set counter to 0
//   if (storedWins === null) {
//     winCounter = 0;
//   } else {
//     // If a value is retrieved from client storage set the winCounter to that value
//  quizArray   winCounter = storedWins;
//   }

  // //Render win count to page
  // win.textContent = winCounter;

// When the start button is clicked...
// function selectAnswer(e) {
//   const selectedButton = e.target
//   const correct = selectedButton.dataset.correct
//   setStatusClass(document.body, correct)
//   Array.from(quizArray).forEach(button => {
//     setStatusClass(button, button.dataset.right)
//   })
  // if (shuffledQuestions.length > currentQuestionIndex + 1) {
  //   nextButton.classList.remove('hide')
  // } else {
  //   startTimer.innerText = 'Restart'
  //   startTimer.classList.remove('hide')
  // }

  // USE THIS???????????????????
  // function startQuiz(questions, quizContainer, resultsContainer, startTimer)
  // function showQuestions(questions, quizContainer); {

  //   showQuestions(questions, quizContainer);

  //   startTimer.onclick = function() {
  //    showResults(questions, quizContainer, resultsContainer);
  //    }
  //   }


  function start() {
 isWin = false;
  count = 60;
// Disables start button after game starts
   startButton.disabled = true;
  startTimer()
  showQuestion(questions[level])
}

//  startButton.classList.add('hide')
//  shuffledQuestions = questions.sort(() => Math.random() - .5)
//  currentQuestionIndex = 0
//  questionContainerElement.classList.remove('hide')
//  setNextQuestion()

// function resetState() {
//   clearStatusClass(document.body)
//   nextButton.classList.add('hide')
//   while (answerButtonsElement.firstChild) {
//     answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//   }
// }

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
  startTimer.disabled = false;
  setWins()
}

// Shows they lost when the timer is 0.
function lose() {
  wordBlank.textContent = "🙁 GAME OVER 🙁";
  loseCounter++
  startTimer.disabled = false;
  setLosses()
}

function showResults(questions, quizContainer, resultsContainer){
  var answerContainers = quizContainer.querySelectorAll('.answerChoice');
  var userAnswer = '';
  var numCorrect = 0;
  for(var i=0; i<questions.length; i++){
    userAnswer = (answerContainers[i].querySelector('input[name=question', "right"));{
      if(userAnswer===questions[i].right){
      numCorrect++;
      answerContainers[i].style.color = 'green';
    }
    else{
      answerContainers[i].style.color = 'red';
    }
  }
  resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
}

// submitBtn.onclick = function(){
//   showResults(questions, quizContainer, resultsContainer);
// }


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

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	showQuestions(questions, quizContainer);
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

// showQuestions(questions, quizContainer);

function clearStatusClass(element) {
  element.classList.remove('right')
  element.classList.remove('wrong')
}

function startOver() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Win/loss is in client storage
  setWins()
  setLosses()
}

// startTimer();



// function selectAnswer(e) {
//   const selectedButton = e.target
//   const correct = selectedButton.dataset.correct
//   setStatusClass(document.body, correct)
//   Array.from(answerButtonsElement.children).forEach(button => {
//     setStatusClass(button, button.dataset.correct)
//   })
//   if (shuffledQuestions.length > currentQuestionIndex + 1) {
//     nextButton.classList.remove('hide')
//   } else {
//     startButton.innerText = 'Restart'
//     startButton.classList.remove('hide')
//   }
// }


// /////////////////////////////////////////////////////////////


// init - when the page loads
// function init() {
//   getWins();
//   getlosses();
// }

// startOverButton.addEventListener("click", startOver);

// const questions = [
  //   {
  //     ques: '1) Which of these is NOT a coding language?',
  //     ans: [
  //       { text: 'b', right: true },
  //       { text: '.....', right: false}
  //     ]
  //   },
  //   {
  //     ques: '2) What 2 possible values does Boolean have?',
  //     ans: [
  //       { text: 'c', right: true },
  //     ]
  //   },
  //   {
  //     ques: '3) What does HTML stand for?',
  //     ans: [
  //       { text: 'd', right: true },
  //     ]
  //   },
  //   {
  //     ques: '4) What does CSS stand for?',
  //     ans: [
  //       { text: 'd', right: true },
  //     ]
  //   },
  //   {
  //     ques: '5) Responsive design means to make a website look…',
  //     ans: [
  //       { text: 'a', right: true },
  //     ]
  //   },
    
  

// const startTimer = 60;
// let  = startTimer = 60;
  
// const timeEl = document.getElementById('time')
// setInterval(updateCount, 1000);
  
// function updateCount(){
//    const minutes = Math.floor(time / 60)
//    let seconds = time % 60;
  
//   // countdownEl.innerHTML = '${minutes}: ${seconds}'; }

// }
    
  // ]

  // Updates count on page
// function setCounterText() {
//   countEl.textContent = count;
// }

// function startTimer() {
//   startTimer('hide')
//   shuffledQuestions = questions.sort(() => Math.random() - .5)
//   currentQuestionIndex = 0
//   questionContainerElement.classList.remove('hide')
//   setNextQuestion()
// }
    
  // Text just before the answers.
  // questionEl.textContent = ;
  
  // function showQuestion(question) {
//   questionElement.innerText = question.ques
//   question.ans.forEach(answer => {
//     const button = document.createElement('button')
//     button.innerText = answer.text
//     button.classList.add('btn')
//     if (answer.right) {
//       button.dataset.right = answer.right
//     }
//     button.addEventListener('click', selectAnswer)
//     answerButtonsElement.appendChild(button)
//   })
// // }