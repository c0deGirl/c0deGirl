const buttons = document.querySelectorAll('.choice');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        console.log(playerChoice);

let choice = Math.floor(Math.random()*3);

function getComputerChoice () {
    if (choice === 0) {
        return 'paper';
    }
    else if (choice === 1) {
        return 'rock'
    }
    else if (choice === 2) {
        return 'scissors'
    }
}
const computerSelection = getComputerChoice();

function playRound (playerChoice, computerSelection) {
    if (playerChoice === computerSelection) {
        return `It's a tie!`;
    } else if (playerChoice === 'rock' && computerSelection === 'paper') {
        return 'You lost!';
    } else if (playerChoice === 'paper' && computerSelection === 'rock') {
        return 'You won!';
    } else if (playerChoice === 'paper' && computerSelection === 'scissors') {
        return 'You lost!';
    } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
    return 'You won!';
    } else if (playerChoice === 'rock' && computerSelection === 'scissors') {
        return 'You won!';
    } else if (playerChoice === 'scissors' && computerSelection === 'rock') {
        return 'You lost!';
    } else {
        return 'Something went wrog!';
    }

}

console.log(computerSelection);
console.log(playRound());
        
    });

});


// function getComputersChoice randomly chooses rock, paper or scissors

/* If choice = 0 choose rock
If choice = 1 choose paper
If choice = 2 choose scissors
values should be random from 0 to 2 */


// checking who wins by comparing playerSeleciton to computerSelection
// rock beats scissors
// paper beats rock
// scissors beat paper









