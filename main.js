let playerSelection = prompt("Choose rock, paper or scissors.");
playerSelection = playerSelection.toLowerCase();


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



function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

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





function playGame() {
  let userScore = 0;
  let compScore = 0;

  for (let i = 1; i <= 5; i++) {
    let roundResult = playRound();

    if (roundResult.includes("win")) {
      userScore ++;
      console.log("You win this round!");

    } else if (roundResult.includes("lose")) {
      compScore ++;
      console.log("You lose this round.");
    } else {
      userScore ++;
      compScore ++;
      console.log("It's a tie.")


    }
  }

  if (userScore > compScore) {
    console.log("You won the game!");
  } else {
    console.log("You lost the game.");
  }
}
