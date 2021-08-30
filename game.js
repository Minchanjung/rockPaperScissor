//lets the game know who won each round
let score;

//the function for the ai
function computerPlay() {
    let rps = ["Rock", "Paper", "Scissor"];
    let random = Math.floor(Math.random() * rps.length);
    return rps[random];
}

const computerSelection = computerPlay();
console.log(computerSelection)

//function to play a single round of rps
function playRound(playerSelection, computerSelection) {
    let playerSelect = playerSelection.toLowerCase();
    if (playerSelect === "rock" && computerSelection === "Rock") {
        score = 0;
        return "It was a tie!";
    } else if (playerSelect === "rock" && computerSelection === "Paper") {
        score = false;
        return "You lose, paper beats rock!";
        
    } else if (playerSelect === "rock" && computerSelection === "Scissor") {
        score = true;
        return "You win, rock beats scissor!";
        
    } else if (playerSelect === "paper" && computerSelection === "Rock") {
        score = true;
        return "You win, paper beats rock!";
        
    } else if (playerSelect === "paper" && computerSelection === "Paper") {
        score = 0;
        return "It was a tie!";
        
    } else if (playerSelect === "paper" && computerSelection === "Scissor") {
        score = false;
        return "You lose, scissor beats paper!";
        
    } else if (playerSelect === "scissor" && computerSelection === "Rock") {
        score = false
        return "You lose, rock beats scissor!";
        
    } else if (playerSelect === "scissor" && computerSelection === "Paper") {
        score = true;
        return "You win, scissor beats paper!";
        
    } else {
        score = 0;
        return "It was a tie!";
        
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    const rockBtn = document.querySelector('button');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissor');

    rockBtn.addEventListener('click', function() {
        console.log(playRound('rock', computerSelection));
    });
    paperBtn.addEventListener('click', function() {
        console.log(playRound('paper', computerSelection));
    });
    scissorBtn.addEventListener('click', function() {
        console.log(playRound('scissor', computerSelection));
    });
}

game()