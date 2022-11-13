// Create getComputerChoice
// the function randomly returns either 'Rock', 'Paper' or 'Scissors'.
// create an array inside the function that contains the possible return values.
// Use random number function to select a random index between 0 and 2

function getComputerChoice() {
   const gameOptions = ["Rock", "Paper", "Scissors"];
   let option = Math.floor(Math.random() * gameOptions.length)
   return gameOptions[option]
}
console.log(getComputerChoice())
