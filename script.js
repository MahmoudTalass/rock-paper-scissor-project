// create variable to keep track of player's score
let score = 0;



// Create getComputerChoice() function
// the function randomly returns either 'Rock', 'Paper' or 'Scissors'.
// create an array inside the function that contains the possible return values.
// Use random number function to select a random index between 0 and 2
// Return the value of the random index

function getComputerChoice() {
   const gameOptions = ["rock", "paper", "scissors"];
   let option = Math.floor(Math.random() * gameOptions.length);
   console.log(gameOptions[option] + " - computer")
   return gameOptions[option];
}

// Create the playRound() function that plays a single round of Rock Paper Scissors.
// The function should take two parameters, playerSelection and computerSelection.
// Make sure that the playerSelection parameter is case-insensitve
// declare a result variable that stores the winning/losing message of the round
// if the player wins, increment score
// return the result variable

function playRound(playerSelection, computerSelection) {
   let result;
   if (playerSelection === "rock" && computerSelection === "paper") {
      result = "You Lose! Paper beats Rock";
      console.log(result)
      return result;
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
      result = "You Win! Rock beats Scissors";
      console.log(result);
      score++;
      return result;
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      result = "You Win! Paper beats Rock";
      console.log(result);
      score++
      return result;
   } else if (playerSelection === "paper" && computerSelection === "scissors") {
      result = "You Lose! Scissors beats Paper";
      console.log(result);
      return result;
   } else if (playerSelection === "scissors" && computerSelection === "rock") {
      result = "You Lose! Rock beats Scissors";
      console.log(result);
      return result;
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      result = "You Win! Scissors beats Paper";
      console.log(result);
      score++;
      return result;
   } else {
      result = "Draw";
      console.log(result);
      return result;
   }
}

//Create the function game()
//The function calls playRound() function 5 times through a forLoop
//The function keeps track of the wins in each round and declares the winner at the end of the 5 rounds

function game() {
   for (let i = 1; i <= 5; i++) {
      let playerSelection = prompt("Rock, paper, or scissors?");
      playerSelection = playerSelection.toLowerCase();
      playRound(playerSelection, getComputerChoice());
}
   if (score >= 3) {
      console.log("congraduations, you won with a score of " + score)
   } else {
      console.log("you lost :(")
   }
}
game();
