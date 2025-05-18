console.log("Hello World");

// Create a function named getHumanChoice.
// Write the code that prompt the choice 1. Rock , 2. Paper, 3. Scissor and when the human type the choice it will show up on the console.

// Create a function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string value "Rock", "Paper", "Scissors".

// Create a function named showResult.
// Write the code so that showResult will compare the choices of human and computer and show who win or lose.

function getHumanChoice() {
  let choice = prompt(
    "What would you choose? \n 1. Rock 2. Paper 3. Scissors"
  ).toLowerCase();
  return choice;
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
      case "rock":
        switch (computerChoice) {
          case "rock":
            return "Draw! You both play Rock.";

          case "paper":
            computerScore++;
            return "You lose! Paper beats Rock.";

          case "scissors":
            humanScore++;
            return "You Win! Rock beats Scissors.";
        }
        break;

      case "paper":
        switch (computerChoice) {
          case "rock":
            humanScore++;
            return "You Win! Paper beats Rock.";

          case "paper":
            return "Draw! You both play Paper.";

          case "scissors":
            computerScore++;
            return "You lose! Scissors beats Paper.";
        }
        break;

      case "scissors":
        switch (computerChoice) {
          case "rock":
            computerScore++;
            return "You lose! Rock beats Scissors.";

          case "paper":
            humanScore++;
            return "You Win! Scissors beats Paper.";

          case "scissors":
            return "Draw! You both play Scissors.";
        }
    }
  }

  for (let i = 0; i < 5; i++) {
    console.log(`--- Round ${i + 1} ---`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(result);
    console.log(`Human ${humanScore}, Computer ${computerScore}`);
  }

  console.log("=== Final Result ===");

  if (humanScore > computerScore) {
    console.log("Congratulation! You are the winner.");
  } else if (computerScore > humanScore) {
    console.log("You Loser! Hahahaha");
  } else {
    console.log("It's a tie! You still sucks.");
  }
}

playGame();
