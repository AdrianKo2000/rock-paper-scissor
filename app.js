const resultEl = document.querySelector(".result");
const showRoundEl = document.querySelector(".showRound");
const botChoiceEl = document.querySelector(".botChoice");
const showResultEl = document.querySelector(".showResult");
const buttonsContainer = document.querySelector(".buttons");

let humanScore = 0;
let computerScore = 0;
let rounds = 1;

function initGame() {
    updateRoundText();
    addEventListeners();
}

function addEventListeners() {
    buttonsContainer.addEventListener('click', handleButtonClick);
}

function handleButtonClick(e) {
    if (e.target.classList.contains('btn')) {
        const choice = e.target.textContent.toLowerCase();
        if (choice === 'play again') {
            resetGame();
        } else {
            playGame(choice);
        }
    }
}

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    botChoiceEl.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase();
    resultEl.textContent = playRound(humanChoice, computerChoice);
    rounds++;

    if (rounds > 5) {
        endGame();
    } else {
        updateRoundText();
    }
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `Draw! You both play ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You Win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  }
}

function endGame() {
  if (humanScore > computerScore) {
    showRoundEl.textContent = "Congratulations! You are the winner.";
  } else if (computerScore > humanScore) {
    showRoundEl.textContent = "You lose the game, Loser! Hahahaha";
  } else {
    showRoundEl.textContent = "It's a tie! You still suck.";
  }

  showResultEl.style.display = 'none';
  buttonsContainer.innerHTML = `<button class="btn">Play Again</button>`;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  rounds = 1;

  updateRoundText();
  botChoiceEl.textContent = "";
  resultEl.textContent = "";
  showResultEl.style.display = 'flex';

  buttonsContainer.innerHTML = `
    <button class="btn">Rock</button>
    <button class="btn">Paper</button>
    <button class="btn">Scissors</button>
  `;
}

function updateRoundText() {
  showRoundEl.textContent = `Round ${rounds}`;
}

initGame();