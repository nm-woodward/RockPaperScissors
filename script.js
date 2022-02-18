console.log('test')


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

function playRound() {
    let playerChoice = solicitPlayerSelection();
    let computerChoice = computerPlay();
    console.log(playerChoice);
    console.log(computerChoice);
}

playRound();