// Purpose: runs id check function and returns errors messages in an array
// Signature: String -> Array
// Examples:
// idCheck("") -> ["Valid: False, reason: User ID too short. [User ID must be at least 6 characters]"]
// idCheck("!") -> ["Valid: False, reason: User ID too short. [User ID must be at least 6 characters]",
//                  "Valid: False, reason: User ID cannot contain '!', '#' or '$'."]

var count = 0;
var count2 = 0;

function userIdCheck(userId) {
  var errorMessages = [];
  if (userId.length >=6 && !userId.includes("!") && !userId.includes("#") && !userId.includes("$")){
    $("#outPut").text("Valid: True");
  }
  if (!(userId.length >= 6)) {
    errorMessages.push("Valid: False, reason: User ID too short. [User ID must be at least 6 characters]");
    $("#userNameBox").val("");
  }
  if (userId.includes("!") || userId.includes("#") || userId.includes("$")){
    errorMessages.push("Valid: False, reason: User ID cannot contain '!', '#' or '$'.");
    $("#userNameBox").val("");

  };
  return errorMessages;
}

function pwCheck(pw) {
  var errorMessages  = [];

  if (!(pw.length >= 6)) {
    errorMessages.push("Valid: False, reason: Password too short. [Password must be at least 6 characters]");
    $("#passwordBox").val("");
  }
  if (!(pw.includes("!") || pw.includes("#") || pw.includes("$"))) {
    errorMessages.push( "Valid: False, reason: Password must include '!', '#' or '$'.");
    $("#passwordBox").val("");
  }
  if (!(pw.includes("1") || pw.includes("2") || pw.includes("3") || pw.includes("4") ||    pw.includes("5") || pw.includes("6") || pw.includes("7") || pw.includes("8") || pw.includes("9")
  || pw.includes("0"))) {
    errorMessages.push("Valid: False, reason: Password must include at least one number.");
    $("#passwordBox").val("");
  }
  if (pw == pw.toUpperCase() || pw == pw.toLowerCase()){
    errorMessages.push("Valid: False, reason: Password must include at least one upper case letter and at least one lower case letter.");
    $("#passwordBox").val("");
  }


  if ((pw.length >= 6) && (pw.includes("!") || pw.includes("#") || pw.includes("$")) && (pw.includes("1") || pw.includes("2") || pw.includes("3") || pw.includes("4") || pw.includes("5") || pw.includes("6") || pw.includes("7") || pw.includes("8") || pw.includes("9")
  || pw.includes("0")) && (!(pw == pw.toUpperCase() || pw == pw.toLowerCase())))
  {
    $("#outPut").text("Valid: True");
  }
  return errorMessages;
}

$(document).ready(function(){

  $("#idButton").on(
    "click",
    function() {
      $("#outPut").text("");
      count ++;
      var userId = $("#userNameBox").val();
      var errorMessagesArray =userIdCheck(userId);
      errorMessagesArray.forEach(function(errorMessage) {
        $("#outPut").append(errorMessage);
        if (count >= 4) {
          $("#idButton").off(
            "click",
          $("#outPut").text("You are out of tries.")
          )
        }
      });
  }); // end idButton click listener



$('#passButton').on(
  "click",
function(){
  $("#outPut").text("");
  count2 ++;
  var userPass = $("#passwordBox").val();
  var errorMessagesArray = pwCheck(userPass);
  errorMessagesArray.forEach(function(errorMessage){
    $("#outPut").append(errorMessage);
    if (count2 >= 4) {
      $("#passButton").off(
        "click",
      $("#outPut").text("You are out of tries.")
    )}
  });
});

}); //end of document ready
