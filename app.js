document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        playerScore: document.getElementById('player-score'),
        computerScore: document.getElementById('computer-score'),
        roundInfo: document.querySelector('.round-info'),
        playerChoiceDisplay: document.getElementById('player-choice'),
        computerChoiceDisplay: document.getElementById('computer-choice'),
        resultInfo: document.querySelector('.result-info'),
        buttonsContainer: document.querySelector('.buttons'),
        endgameModal: document.getElementById('endgame-modal'),
        endgameMessage: document.getElementById('endgame-message'),
        playAgainBtn: document.getElementById('play-again-btn'),
    };

    const choices = ['rock', 'paper', 'scissors'];
    const choiceEmojis = { rock: '✊', paper: '✋', scissors: '✌️' };

    let humanScore = 0;
    let computerScore = 0;
    let rounds = 1;
    let isProcessing = false;

    function getComputerChoice() {
        return choices[Math.floor(Math.random() * 3)];
    }

    function updateScores() {
        elements.playerScore.textContent = humanScore;
        elements.computerScore.textContent = computerScore;
    }

    function updateRoundInfo() {
        elements.roundInfo.textContent = `Round ${rounds}`;
    }

    function resetChoiceDisplays() {
        ['playerChoiceDisplay', 'computerChoiceDisplay'].forEach(key => {
            elements[key].innerHTML = '<p class="choice-placeholder">?</p>';
            elements[key].classList.remove('win', 'lose', 'draw');
        });
    }

    function handlePlayerChoice(e) {
        if (isProcessing || !e.target.closest('.btn')) return;

        isProcessing = true;
        const humanChoice = e.target.closest('.btn').dataset.choice;
        const computerChoice = getComputerChoice();

        elements.resultInfo.textContent = 'Shaking...';
        elements.playerChoiceDisplay.classList.add('shake');
        elements.computerChoiceDisplay.classList.add('shake');

        setTimeout(() => {
            elements.playerChoiceDisplay.classList.remove('shake');
            elements.computerChoiceDisplay.classList.remove('shake');

            elements.playerChoiceDisplay.textContent = choiceEmojis[humanChoice];
            elements.computerChoiceDisplay.textContent = choiceEmojis[computerChoice];

            const result = playRound(humanChoice, computerChoice);
            elements.resultInfo.textContent = result.message;

            updateScores();
            highlightWinner(result.winner);

            rounds++;
            if (rounds > 5) {
                setTimeout(endGame, 1000);
            } else {
                setTimeout(() => {
                    updateRoundInfo();
                    resetChoiceDisplays();
                    elements.resultInfo.innerHTML = '&nbsp;';
                    isProcessing = false;
                }, 2000);
            }
        }, 1000);
    }

    function playRound(human, computer) {
        if (human === computer) {
            return { winner: 'draw', message: "It's a draw!" };
        }
        if ((human === 'rock' && computer === 'scissors') ||
            (human === 'paper' && computer === 'rock') ||
            (human === 'scissors' && computer === 'paper')) {
            humanScore++;
            return { winner: 'player', message: `You win! ${human} beats ${computer}.` };
        }
        computerScore++;
        return { winner: 'computer', message: `You lose! ${computer} beats ${human}.` };
    }

    function highlightWinner(winner) {
        if (winner === 'player') {
            elements.playerChoiceDisplay.classList.add('win');
            elements.computerChoiceDisplay.classList.add('lose');
        } else if (winner === 'computer') {
            elements.playerChoiceDisplay.classList.add('lose');
            elements.computerChoiceDisplay.classList.add('win');
        } else {
            elements.playerChoiceDisplay.classList.add('draw');
            elements.computerChoiceDisplay.classList.add('draw');
        }
    }

    function endGame() {
        let message = "It's a tie!";
        if (humanScore > computerScore) message = 'Congratulations, You Won!';
        if (computerScore > humanScore) message = 'You Lost! Better luck next time.';
        
        elements.endgameMessage.textContent = message;
        elements.endgameModal.style.display = 'flex';
    }

    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        rounds = 1;
        isProcessing = false;

        updateScores();
        updateRoundInfo();
        resetChoiceDisplays();
        elements.resultInfo.innerHTML = '&nbsp;';
        elements.endgameModal.style.display = 'none';
    }

    elements.buttonsContainer.addEventListener('click', handlePlayerChoice);
    elements.playAgainBtn.addEventListener('click', resetGame);

    // Initial setup
    resetGame();
});