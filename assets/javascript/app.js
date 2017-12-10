
var userGuess = [0,0,0,0,0,0,0,0,0,0];
var correctGuesses;
var wrongGuess;



//====================================================
$("input[type='submit']").click(function(event){
    userGuess[0] = $('input[name ="optradio1"]:checked').val()
    userGuess[1] = $('input[name ="optradio2"]:checked').val()
    checker();
});

function checker() {
    if(userGuess[0] === "4") {
        console.log("correct");
        userGuess
        correctGuesses
    } else if (userGuess === "0") {
        console.log("incomplete");
    } else {
        console.log("incorrect");
    }
}
