var questions = [
  {
    prompt: "What color are apples?\n(a) Red/Green\n\
    (b) Purple\n(c) Orange",
    answer: "a"
  },
  {
    prompt: "What color are bananas?\n(a) Red/Green\n\
    (b) Purple\n(c) yellow",
    answer: "c"
  }, 
]
 
var questions = []
var score = 0;
for(var i=0; i < questions.length; i++){
var response = window.prompt(questions[i].prompt);
if(response == questions[i].answer){
  score++;
  alert("Right!");
}
  else {
    alert("Wrong!");
  }
}
alert(" You have " + score + "/" + questions.length);


