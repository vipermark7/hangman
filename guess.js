var nameList = require('./nameList.js')
var _ = require('lodash')
var guesses, wins, losses = 0;
var usedLetters = []
var playing = true;
var wordtoGuess = _.sample(nameList)

document.addEventListener(onkeydown, () => {

})
function userWon() {
    return document.getElementById("wordToGuess") === wordtoGuess 
    && usedLetters.length() < 8
}

while (playing) {
    if (usedLetters.length() === 8) {
        playing = false
        losses += 1
        // clear everything and tell the user they lost 
        // for a few seconds, then start the next game
        // by replacing the guessed word with the dashes
        // from the next word
    }  
    if (userWon()) {
        wins += 1
        // clear everything and tell the user they won
        // for three seconds, then start the next game
    } 
    
    // handle what happens when the user does a keypress

}