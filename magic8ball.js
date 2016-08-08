// test
var answers = ["Go for it, buddy!", "Are you joking?????", "I guess so.", "What would Dwayne 'The Rock' Johnson do?", "Go to hell, you hamster!"];

var userInput;

var randomIndex = Math.floor(Math.random() * (5 - 0 + 0)+ 0);

$(document).ready(function() {

$("#button").on("click", function() {
  userInput = $("#userQuestion").val();
  if (userInput != "STOP"){
    randomIndex = Math.floor(Math.random() * (5 - 0 + 0)+ 0);
  }
  $("#magicAnswer").text(answers[randomIndex]);
  $("#magicAnswer").toggle();

});


}) // end document ready
