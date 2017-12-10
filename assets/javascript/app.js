
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
//==================================================

// console.log(userGuess);
// console.log(userGuess);
// function checkClicked() {
//   if (selected.length > 0) {
//     userGuess = selected.val();
//     console.log(selected.value);
    
//   }

// }
// console.log(selected.val());

// parseInt(selected.value);




// var value = radioValue;

// userGuess.unshift(value);

console.log(userGuess);
  

// (checkClicked());
// console.log(selected);
// checkClicked();


// userGuess.push(passToArray);
// console.log(selected.value);



// after storing selected as global variable, this checks data
// if ($.data(temp1) == $.data(temp2)){alert("true2")}