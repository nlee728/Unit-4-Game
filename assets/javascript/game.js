//defines the global variables
var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guesses = 15;
var guessesSoFar = [];

//computer chooses a random letter
var computerChoice = letter[Math.floor(Math.random() * letter.length)];
//Test to see the computer choice
console.log("Correct Letter: " + computerChoice);

function reset() {
    computerChoice = letter[Math.floor(Math.random() * letter.length)];
            console.log("Correct Letter: " + computerChoice);
            guesses = 15;
            guessesSoFar = [];
}


// game begins when user presses a key (also converts upper case to lower case)
document.onkeyup = function (userClick) {
    var userGuess = userClick.key.toLowerCase();

    // game begins only if the user presses a letter key
    if (letter.includes(userGuess)) {
        guessesSoFar.push(userGuess);

        //if user guesses correctly, add a win and choose a new letter
        if (userGuess === computerChoice) {
            wins += 1;
            alert("Wow! You truly are psychic!");
            reset();
        }

    
        //if user guesses incorrectly, remove one from guesses remaining
        else {
            guesses -= 1;

            //when no more guesses are left, the user loses and choose a new letter
            if (guesses < 1){
                losses++;
                alert("Hmmm, maybe you aren't psychic after all..." );
                reset();
            }
        }
    }
    //show the counter variables in the html 
    document.getElementById("win-count").innerHTML = wins;
    document.getElementById("loss-count").innerHTML = losses;
    document.getElementById("guesses-left").innerHTML = guesses;
    document.getElementById("guesses-so-far").innerHTML = guessesSoFar;

}
