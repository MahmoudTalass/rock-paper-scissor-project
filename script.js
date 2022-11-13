// Create getComputerChoice
// the function randomly returns either 'Rock', 'Paper' or 'Scissors'.
// create an array inside the function that contains the possible return values.
// Use random number function to select a random index between 0 and 2
// Return the value of the random index

function getComputerChoice() {
   const gameOptions = ["Rock", "Paper", "Scissors"];
   let option = Math.floor(Math.random() * gameOptions.length);
   return gameOptions[option];
}

// Create the playRound function that plays a single round of Rock Paper Scissors.
// The function should take two parameters, playerSelection and computerSelection.
// Make sure that the playerSelection parameter is case-insensitve
// The function should return a string that declares the winnder of the round

function playRound(playerSelection, computerSelection) {
   playerSelection = playerSelection.toLowerCase();
   computerSelection = computerSelection.toLowerCase();

   if (playerSelection == "rock" && computerSelection == "paper") {
      return "You Lose! Paper beats Rock";
   } else if (playerSelection == "rock" && computerSelection == "scissors") {
      return "You Win! Rock beats Scissors";
   } else if (playerSelection == "paper" && computerSelection == "rock") {
      return "You Win! Paper beats Rock";
   } else if (playerSelection == "paper" && computerSelection == "scissors") {
      return "You Lose! Scissors beats Paper ";
   } else if (playerSelection == "scissors" && computerSelection == "rock") {
      return "You Lose! Rock beats Scissors";
   } else if (playerSelection == "scissors" && computerSelection == "paper") {
      return "You Win! Scissors beats Paper";
   } else {
    return "Its a draw!"
   }
}
