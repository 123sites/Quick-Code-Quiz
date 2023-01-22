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
// in/out of time & countdown
var inTime = document.querySelector(".inTime");
var outOfTime = document.querySelector(".outOfTime");
var timeEl = document.querySelector("#seconds");

// starts the timer
// LEAVE #start-btn as named.
var startBtn = document.querySelector("#start-btn");
var startOver = document.querySelector(".startOver");
var count = 3;
var seconds = document.getElementById('seconds')
// seconds.textContent = count;
// var next = document.querySelector(".next-btn");
var timerElement = document.querySelector(".count");

// var start = document.querySelector(".start");
// var outOfTime Counter = 0;
// var inTimeCounter = 0;
var inTime = false;

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


// Array of possible answers the user will guess
var question = "Question?";
var answerChoice = ["a","b", "c", "d"];

var counter = document.querySelector("#counter");
var subPts = document.querySelector("#subtract");
var countEl = document.querySelector("#count");
//var count = localStorage.getItem("count");
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

// //move forward the quiz
// function startTimer() {
//   startTimer.addEventListener('click', () => {
//     let answerChoice = getSelected();
//     if (answer) {
//       if (ans == myQuestions[index].right) {
//         score++;
//       }
//     }
//     index++;
//     if (index < myQuestions.length) {
//       getquiz();
//     } else {
//       alert('score :' + score);
//       location.reload();
//     }
//   });
// }







// function startTimer(questions, quizContainer, resultsContainer, submitButton){

// 	function showQuestions(questions, quizContainer){
// 		// code will go here
// 	}

// 	function showResults(questions, quizContainer, resultsContainer){
// 		// code will go here
// 	}

// 	// show the questions
// 	showQuestions(questions, quizContainer);

// 	// when user clicks submit, show results
// 	submitButton.onclick = function(){
// 		showResults(questions, quizContainer, resultsContainer);
// 	}
// }

// function eventHandler(event) {
//   if (event.type === 'myQuestions') {
//     /* handle a full screen toggle */
//   } else /* fullscreenerror */ {
//     /* handle a full screen toggle error */
//   }
// }


// function startBtn(){
//   console.log('startBtn')
// }
// THIS MAKE THE START BUTTON WORK!
startBtn.addEventListener('click', ()=>{
  alert('Clicked!')
  startTimer()

  console.log("startTimer .addEvent")
})




// document.body.appendChild(button)

// subtTime.addEventListener("click", function() {
//   if (count > 0) {
  
// NEED THE FCN STARTTIMER
function startTimer() {
  console.log('start timer')
  
  // Sets timer
  var timeInterval = setInterval(function() {
    count--;

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





// DO BELOW INSTEAD?????
// Starts and stops the game.  It triggers win/lose
// function startTimer() {
//   // Sets timer
//   time = setInterval(function() {
//     secondsLeft--;
//     timeEl.seconds + " seconds left until the time is up!";

//     if (seconds === 0) {
//       // Tests if won
//       if (isWin && count > 0) {
//         // Stops timer & clears interval
//         clearInterval(time);
//         winGame();
//       }
//     }
//     // Time out?
//     if (count === 0) {
//       // Clears it
//       clearInterval(time);
//       loseGame();
//     }
//   }, 1000);
// }




// function showQuestions(questions, myQuestions){
//   var output = [];
//   var answerChoice;

//   for(var i=0; i,questions.length; i++){
//     answerChoice=[];
//     for(letter in questions[i].answerChoice){
//       answerChoice.push(
//         '<label>'
//         + '<input type="radio" name="question'+i+'" value="'+letter+'">'
//         + letter + ':'
//         + questions[i].answerChoice[letter]
//         +'<label>'
//       );
//     }
    
//   output.push(myQuestions);
//   }
//  }  

// let currentQuestion = 0;
// var score = 0;
// 
var myQuestions = [ {

    question: " 1) Which of these is NOT a coding language? ",
    answerChoice: ["HTML", "code5", "Python", "JavaScript"],
    right: '1'
},
// {
//   question: "2) What 2 possible values does Boolean have?",
//   answerChoice: [ "a and b", "Yes and no", "True and false", "Right and wrong"],
//   right: '2',
// },
//  {
//   question: "3) What does HTML stand for?",
//   answerChoice: ["HyperType Made Language", "Hex Text Made Language", " Hex Type Made Language", "HyperText Markup Language"], 
//   right: '3',
  
// },

// {
//   question: "4) What does CSS stand for?",
//   answerChoice: ["Copy Syntax Server", "Copy Server Syntax", "Cascading Style Server", "Cascading Style Sheets"], 
//   right: '3',
  
// },

// {
//   question: "5) Responsive design means to make a website look...",
//   answerChoice: ["good on any device and screen size.", "good with added features and buttons.", "clean and organized on the user interface."], 
//   right: '0',

// },

]
  
// This displays the question & answer in the Console...IT WORKS!
for (const element of myQuestions) {
  console.log(element);
}
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


// Below was part of function start() did not seem to do anything.
//  inTime = false;
//   count = 60;
// Disables start button after game starts
  //  startButton.disabled = true;

  // window.confirm
  // if (confirm("Click Start to begin the quiz.")) {
  //   txt = "Begin the quiz!";
  // } 
 
  // let indexNumber = 0;

  function start() {
  startTimer()
  currentQuestion = 0;
  showQuestion(myQuestions[level])
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
function inTime() {
  wordBlank.textContent = "🤩 YOU FINISHED IN-TIME! 🤩";
  winCounter++
  //startTimer.disabled = false;
  setWins()
}

// Shows they lost when the timer is 0.
function outOfTime() {
  wordBlank.textContent = "🙁 OUT OF TIME! 🙁";
  loseCounter++
  //startTimer.disabled = false;
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
  outOfTime.textContent = outOfTimeCounter;
  localStorage.setItem("loseCount", outOfTimeCounter);
}

function setStatusClass(element, right) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('right')
  } else {
    element.classList.add('wrong')
  }
}

  //  const = myQuestions.querySelectorAll();

  //   // set onclick attribute to all available options
  //   for(i=0; i < option.length; i++){
  //       option[i].setAttribute("onclick", "optionSelected(this)");
  //   }


// if startQuiz button clicked
// questions show in the console with the
start_btn = ()=>{
  info_box.classList.add("activeInfo"); //show info box
}

// Added "myQuestions. Below 3 functions work, show questions in console & no errors.
function generateQuiz(myQuestions, questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(myQuestions, questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// showQuestions(questions, quizContainer);
	// submitButton.onclick = function(){
	// 	showResults(questions, quizContainer, resultsContainer);
	// }
}

generateQuiz(myQuestions, question, answerChoice, submitButton);

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







let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for when all questions being answered
function handleEndGame() {
  let remark = null
  let remarkColor = null

  // condition check for player remark and remark color
  if (playerScore <= 3) {
      remark = "Bad Grades, Keep Practicing."
      remarkColor = "red"
  }
  else if (playerScore >= 4 && playerScore < 7) {
      remark = "Average Grades, You can do better."
      remarkColor = "orange"
  }
  else if (playerScore >= 7) {
      remark = "Excellent, Keep the good work going."
      remarkColor = "green"
  }
  const playerGrade = (playerScore / 5) * 100

      //data to display to score board
      document.getElementById('remarks').innerHTML = remark
      document.getElementById('remarks').style.color = remarkColor
      document.getElementById('grade-percentage').innerHTML = playerGrade
      document.getElementById('wrong-answers').innerHTML = wrongAttempt
      document.getElementById('right-answers').innerHTML = playerScore
      document.getElementById('score-modal').style.display = "flex"
  
  }
  
  //closes score modal, resets game and reshuffles questions
  function closeScoreModal() {
      questionNumber = 1
      playerScore = 0
      wrongAttempt = 0
      indexNumber = 0
      shuffledQuestions = []
      NextQuestion(indexNumber)
      document.getElementById('score-modal').style.display = "none"
  }
  
  //function to close warning modal
  function closeOptionModal() {
      document.getElementById('option-modal').style.display = "none"
  }

//startTimer();



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
  
//   countdownEl.innerHTML = '${minutes}: ${seconds}'; }


    
  

  // Updates count on page
// function setCounterText() {
//   countEl.textContent = count;
// }


//function startTimer() {
  //startTimer('hide')
  //shuffledQuestions = questions.sort(() => Math.random() - .5)
  //currentQuestionIndex = 0
  //questionContainerElement.classList.remove('hide')
  //setNextQuestion()
//}
    
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