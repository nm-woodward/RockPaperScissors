// Set up scoring
let playerScore = 0;
let computerScore = 0;

const playerScoreDiv = document.querySelector('.player-score');
const computerScoreDiv = document.querySelector('.computer-score');


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function computerPlay() {
    const choices = ['rock','paper','scissors'];
    let randSelection = randomIntFromInterval(0, 2);
    return choices[randSelection];

}

function solicitPlayerSelection() {
    let playerChoice = window.prompt("Enter your choice:").toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
            return playerChoice;
    }
    else {
        alert('Not an option: please choose rock, paper, or scissors');
        return solicitPlayerSelection();
    }
}

//solicitPlayerSelection();

function playRound(playerChoice) {
    let computerChoice = computerPlay();
    console.log(playerChoice);
    console.log(computerChoice);

    let gameResultMessage;

    if (playerChoice === computerChoice) {
        gameResultMessage = `You both chose ${playerChoice}. It's a draw!`;
    }

    else {
        switch (playerChoice) {
            case 'rock':
                gameResultMessage = (computerChoice === 'scissors') ? 'You win!' : 'You lose...';
                (computerChoice === 'scissors') ? playerScore++ : computerScore ++;
                break;

            case 'paper':
                gameResultMessage = (computerChoice === 'rock') ? 'You win!' : 'You lose...';
                (computerChoice === 'rock') ? playerScore++ : computerScore ++;
                break;

            case 'scissors':
                gameResultMessage = (computerChoice === 'paper') ? 'You win!' : 'You lose...';
                (computerChoice === 'rock') ? playerScore++ : computerScore ++;
                break;
        }
    }
    console.log(gameResultMessage);
    updateScores();
    provideGameResult(gameResultMessage);
    checkForFinal();

}

function game() {
    for (let i=0; i<5; i++) {
        playRound();
        console.log(`Round ${i+1} completed.`)
        console.log(`Here\'s the updated score - You: ${playerScore}, Computer: ${computerScore}`);
    }

    console.log('With all 5 rounds complete, the winner is...');
    
    if (playerScore === computerScore) {
        console.log('Nobody! You both tied');
    }
    
    else if (playerScore > computerScore) {
        console.log('You!');
    }

    else {
        console.log('Not you! Better luck next time.');     
    }

}

//game();

const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('mousedown', (e) => {
        let playerChoice = e.toElement.textContent.toLowerCase();
        playRound(playerChoice);
    })
});

function updateScores() {
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
}

function provideGameResult(gameResultMessage) {
    const gameResultDiv = document.querySelector('.gameresult-text');
    gameResultDiv.textContent = gameResultMessage;

}

function checkForFinal() {
    if (playerScore >= 5) {
        const finalResultDiv = document.querySelector('.finalresult');
        const scoresSectionDiv = document.querySelector('.scoressection');
        
        finalResultDiv.textContent = "Congratulations! You were the first to 5 wins!";

        scoresSectionDiv.classList.toggle('winner');
        finalResultDiv.classList.toggle('winner');

        buttons.forEach((button) => button.disabled=true);
    }

    if (computerScore >= 5) {
        const finalResultDiv = document.querySelector('.finalresult');
        const scoresSectionDiv = document.querySelector('.scoressection');
        
        finalResultDiv.textContent = "Sorry, you lost the 5-round game!";

        scoresSectionDiv.classList.toggle('loser');
        finalResultDiv.classList.toggle('loser');

        buttons.forEach((button) => button.disabled=true);
    }
}