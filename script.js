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

// Text at the top.
h1El.textContent = "Quick Code Quiz!";
quizEl.textContent = "Can you answer all the questions before the time is up?";
textEl.textContent = "Text?";

// Text just befor the answers.
questionEl.textContent = "Question 1 goes here.";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(quizEl);
body.appendChild(questionEl);
// Append ordered list 
favoriteEl.appendChild(listEl);
// Append list items to ordered list element 
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
textEl.setAttribute("style", "font-size:25px; text-align:center;");
quizEl.setAttribute("style", "font-size:25px; text-align:center;");
questionEl.setAttribute("style", "font-size:20px;");

// Answers
li1.textContent = "Answer1 ";
li2.textContent = "Answer3 ";
li3.textContent = "Answer3 ";
li4.textContent = "Answer4 ";

// Styling for list elements
listEl.setAttribute("style", "background:gray; padding:20px;");
// Other styling to list items
li1.setAttribute("style", " color:white; background: lightblue; padding: 5px; margin-left: 35px;");
li2.setAttribute("style", " color:white; background: lightgray; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", " color:white; background: blue; padding: 5px; margin-left: 35px;");
li4.setAttribute("style", " color:white; background: gray; padding: 5px; margin-left: 35px;");
