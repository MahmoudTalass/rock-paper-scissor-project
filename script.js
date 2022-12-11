// Select the buttons from the html
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

// Select the div that will contain the results
const results = document.querySelector("#display-results");

// create variable to keep track of player's score
// and capture the player-score div from the html
let playerScore = 0;
const displayPlayerScore = document.querySelector("#player-score");

// create a viariable to keep track of the computer's score
// and capture the computer-score div from the html
let computerScore = 0;
const displayComputerScore = document.querySelector("#computer-score");

// add event listener on the buttons that calls
// the playeRound function when clicked

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () =>
   playRound("paper", getComputerChoice())
);
scissorsBtn.addEventListener("click", () =>
   playRound("scissors", getComputerChoice())
);

// Create getComputerChoice() function
// the function randomly returns either 'Rock', 'Paper' or 'Scissors'.
// create an array inside the function that contains the possible return values.
// Use random number function to select a random index between 0 and 2
// Return the value of the random index

function getComputerChoice() {
   const gameOptions = ["rock", "paper", "scissors"];
   let option = Math.floor(Math.random() * gameOptions.length);
   console.log(gameOptions[option] + " - computer");
   return gameOptions[option];
}

// Create the playRound() function that plays a single round of Rock Paper Scissors.
// The function should take two parameters, playerSelection and computerSelection.
// Make sure that the playerSelection parameter is case-insensitve
// declare a result variable that stores the winning/losing message of the round
// if the player wins, increment score
// return the result variable

function playRound(playerSelection, computerSelection) {
   if (playerSelection === "rock" && computerSelection === "paper") {
      results.textContent = "You Lose! Paper beats Rock";
      computerScore++;
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
      results.textContent = "You Win! Rock beats Scissors";
      playerScore++;
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      results.textContent = "You Win! Paper beats Rock";
      playerScore++;
   } else if (playerSelection === "paper" && computerSelection === "scissors") {
      results.textContent = "You Lose! Scissors beats Paper";
      computerScore++;
   } else if (playerSelection === "scissors" && computerSelection === "rock") {
      results.textContent = "You Lose! Rock beats Scissors";
      computerScore++;
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      results.textContent = "You Win! Scissors beats Paper";
      playerScore++;
   } else {
      results.textContent = "Draw";
   }
   displayPlayerScore.textContent = `Your Score: ${playerScore}`;
   displayComputerScore.textContent = `Opponent Score: ${computerScore}`
   
}

//Create the function game()
//The function calls playRound() function 5 times through a forLoop
//The function keeps track of the wins in each round and declares the winner at the end of the 5 rounds

// function game() {
//    for (let i = 1; i <= 5; i++) {
//       let playerSelection = prompt("Rock, paper, or scissors?");
//       playerSelection = playerSelection.toLowerCase();
//       playRound(playerSelection, getComputerChoice());
//    }
//    if (score >= 3) {
//       console.log("congraduations, you won with a final score of " + score);
//    } else {
//       console.log("you lost :( your final score was " + score);
//    }
// }
// game();
