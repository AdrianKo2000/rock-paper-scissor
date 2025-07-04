console.log("Hello World");

const btns = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const showRound = document.querySelector(".showRound");
const botChoice = document.querySelector(".botChoice");
const showResult = document.querySelector(".showResult");
const button = document.querySelector(".buttons");

let humanScore = 0;
let computerScore = 0;
let rounds = 1;
showRound.textContent = `Round ${rounds}`;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let rps = btn.textContent.toLowerCase();
    let humanChoice = rps;
    let computerChoice = getComputerChoice();

    botChoice.textContent =
      computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1).toLowerCase();

    result.textContent = "";
    result.append(playRound(humanChoice, computerChoice));

    rounds++;
    showRound.textContent = `Round ${rounds}`;

    if (rounds > 5) {
      if (humanScore > computerScore) {
        showRound.textContent = "Congratulation! You are the winner.";
      } else if (computerScore > humanScore) {
        showRound.textContent = "You lose the game Loser! Hahahaha";
      } else {
        showRound.textContent = "It's a tie! You still sucks.";
      }
      showResult.innerHTML = "";
      const replayBtn = document.createElement("button");
      replayBtn.textContent = "Play Again";
      button.innerHTML = "";
      button.append(replayBtn);

      replayBtn.addEventListener("click", () => {
        location.reload();
      })
    }
  });
});

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
