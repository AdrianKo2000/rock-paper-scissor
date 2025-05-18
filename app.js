console.log("Hello World");



// Create a function named getHumanChoice.
// Write the code that prompt the choice 1. Rock , 2. Paper, 3. Scissor and when the human type the choice it will show up on the console.

// Create a function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string value "Rock", "Paper", "Scissors".

// Create a function named showResult.
// Write the code so that showResult will compare the choices of human and computer and show who win or lose.

let humanChoice = "";
let computerChoice = "";

function getHumanChoice() {
  let number = parseInt(
    prompt("What would you choose? \n 1. Rock 2. Paper 3. Scissors")
  );
  if (number === 1) {
    humanChoice = "Rock";
    console.log(`Human - ${humanChoice}`);
  } else if (number === 2) {
    humanChoice = "Paper";
    console.log(`Human - ${humanChoice}`);
  } else if ( number === 3 ) {
    humanChoice = "Scissors";
    console.log(`Human - ${humanChoice}`);
  } else {
    alert("Please choose the valid option(1,2 and 3).")
    return getHumanChoice();
  }
}

getHumanChoice();



function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerChoice = "Rock";
    console.log(`Computer - ${computerChoice}`);
  } else if (randomNumber === 1) {
    computerChoice = "Paper";
    console.log(`Computer - ${computerChoice}`);
  } else if (randomNumber === 2) {
    computerChoice = "Scissors";
    console.log(`Computer - ${computerChoice}`);
  }
}

getComputerChoice();

function showResult() {
    switch ( humanChoice ) {
        case "Rock":
            switch ( computerChoice ) {
                case "Rock":
                    console.log("Draw");
                    break;
                case "Paper":
                    console.log("Computer Win")
                    break;
                case "Scissors":
                    console.log("You Win")
                    break;
            }
            break;
        
        case "Paper":
            switch ( computerChoice ) {
                case "Rock":
                    console.log("You Win");
                    break;
                case "Paper":
                    console.log(("Draw"));
                    break;
                case "Scissors":
                    console.log("Computer Win");
                    break;
            }
            break;

        case "Scissors":
            switch ( computerChoice ) {
                case "Rock":
                    console.log("Computer Win");
                    break;
                case "Paper":
                    console.log("You Win");
                    break;
                case "Scissors":
                    console.log("Draw");
                    break;
            }
    }
}

showResult();



