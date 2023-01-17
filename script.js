var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var quizEl = document.createElement("div");
var textEl = document.createElement("div");
var questionEl = document.createElement("div");
// Ordered list
var listEl = document.createElement("ol");
// List items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

var level = 0
var quizArray = [ {
  q: "question 1",
  a: ["a", "b", "c", "d"], 
  answer: "b"
  
},
 {
  q: "question 2",
  a: ["a", "b", "c", "d"], 
  answer: "b"
  
},
 {
  q: "question 3",
  a: ["a", "b", "c", "d"], 
  answer: "b"
  
},

]
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
