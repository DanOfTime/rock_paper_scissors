function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);
  if (compChoice === 0) {
    return "rock";
  } else if (compChoice === 1) {
    return "paper";
  } else if (compChoice === 2) {
    return "scissors";
  }
  }

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Choose rock, paper or scissors.");
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose. Paper beats Rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose. Scissors beats Paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose. Rock beats scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Rock.";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}








  


  
