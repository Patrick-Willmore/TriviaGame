var userGuess = [0, 0, 0, 0, 0];
var correctGuesses = 0;
var wrongGuess = 0;
// var timer;
// var minutes;
// var seconds;
// var intervalID = setInterval(timeOut(), 10000);
// var timeRemain = 200000;

// var timerId = setTimeout(function () {

//     }, 1000)
// timer function
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
    // else if (input[type='submit')
    // }
  }, 1000);
}

window.onload = function() {
  var tenMinutes = 60 * 10,
    display = document.querySelector("#time");
  startTimer(tenMinutes, display);
};
//====================================================
// function initializeGame() {
// intervalID;
// clearInterval(intervalId);
//   	clearTimeout(timerID);
//     timeRemain = setTimeout(timerID(), 1000000);

//     console.log(timerID);
// }

$("input[type='submit']").click(function(event) {
  userGuess[0] = $('input[name ="optradio1"]:checked').val();
  userGuess[1] = $('input[name ="optradio2"]:checked').val();
  userGuess[2] = $('input[name ="optradio3"]:checked').val();
  userGuess[3] = $('input[name ="optradio4"]:checked').val();
  userGuess[4] = $('input[name ="optradio5"]:checked').val();
//   userGuess[5] = $('input[name ="optradio2"]:checked').val();
  checker();
  submit();
  // myStopFunction();
});

function checker() {
  if (userGuess[0] === "4") {
    console.log("correct");
    userGuess[0].push;
    console.log.userGuess;
    correctGuesses++;
  } else if (userGuess === "0") {
    console.log("incomplete");
  } else {
    console.log("incorrect");
    wrongGuess++;
  }
    if (userGuess[1] === "7") {
      console.log("correct");
      userGuess[1].push;
      console.log.userGuess;
      correctGuesses++;
    } else if (userGuess === "0") {
      console.log("incomplete");
    } else {
      console.log("incorrect");
      wrongGuess++;
    }
    if (userGuess[2] === "12") {
      console.log("correct");
      userGuess[2].push;
      console.log.userGuess;
      correctGuesses++;
    } else if (userGuess === "0") {
      console.log("incomplete");
    } else {
      console.log("incorrect");
      wrongGuess++;
  }
    if (userGuess[3] === "13") {
      console.log("correct");
      userGuess[3].push;
      console.log.userGuess;
      correctGuesses++;
    } else if (userGuess === "0") {
      console.log("incomplete");
    } else {
      console.log("incorrect");
      wrongGuess++;
  }
    if (userGuess[4] === "20") {
      console.log("correct");
      userGuess[4].push;
      console.log.userGuess;
      correctGuesses++;
    } else if (userGuess === "0") {
      console.log("incomplete");
    } else {
      console.log("incorrect");
      wrongGuess++;
  }
}
// function myStopFunction() {
//   clearInterval(minutes);
//   clearInterval(seconds);
//   clearTimeout(timer);
// }
// function timeOut() {
//   alert("time is up!");
// }

function submit(){
    $("#main").html("<div id = 'newdiv1' class = 'jumbotron'>Submitted</div>");
    $('html,body').scrollTop(0);
    $('p').html("<p></p>");
    var percentCorrect = correctGuesses / 5;
    console.log(percentCorrect);
    $('#main').append(`<div class = "score">${percentCorrect*100 }%</div>`);
}
