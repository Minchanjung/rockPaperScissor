let playerSelection;
const computerSelection = computerPlay();
let playerScore = 0;
//console.log(playerScore);
let computerScore = 0;
//console.log(computerScore);

const output = document.querySelector('#output');
output.textContext = 'Choose Rock, Paper, or Scissor';

const player = document.querySelector('#playerScore');
player.textContent = `Player Score: ${playerScore}`

const computer = document.querySelector('#computerScore');
computer.textContent = `Computer Score: ${computerScore}`

const rockBtn = document.querySelector('button');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');


rockBtn.addEventListener('click', function() {
    playerSelection = "rock";
    playGame()
    player.textContent = `Player Score: ${playerScore}`
    computer.textContent = `Computer Score: ${computerScore}`
});
paperBtn.addEventListener('click', function() {
    playerSelection = "paper";
    playGame()
    player.textContent = `Player Score: ${playerScore}`
    computer.textContent = `Computer Score: ${computerScore}`
});
scissorBtn.addEventListener('click', function() {
    playerSelection = "scissor";
    playGame()
    player.textContent = `Player Score: ${playerScore}`
    computer.textContent = `Computer Score: ${computerScore}`
});

function computerPlay() {
    let rps = ["Rock", "Paper", "Scissor"];
    let random = Math.floor(Math.random() * rps.length);
    return rps[random];
}

//function to play a single round of rps
function playRound(playerSelection, computerSelection) {
    let playerSelect = playerSelection.toLowerCase();
    if (playerSelect === "rock" && computerSelection === "Rock") {
        
        return "It was a tie!";
    } else if (playerSelect === "rock" && computerSelection === "Paper") {
        computerScore += 1;
        return "You lose, paper beats rock!";
        
    } else if (playerSelect === "rock" && computerSelection === "Scissor") {
        playerScore += 1;
        return "You win, rock beats scissor!";
        
    } else if (playerSelect === "paper" && computerSelection === "Rock") {
        playerScore += 1;
        return "You win, paper beats rock!";
        
    } else if (playerSelect === "paper" && computerSelection === "Paper") {
        
        return "It was a tie!";
        
    } else if (playerSelect === "paper" && computerSelection === "Scissor") {
        computerScore += 1;
        return "You lose, scissor beats paper!";
        
    } else if (playerSelect === "scissor" && computerSelection === "Rock") {
        computerScore += 1;
        return "You lose, rock beats scissor!";
        
    } else if (playerSelect === "scissor" && computerSelection === "Paper") {
        playerScore += 1;
        return "You win, scissor beats paper!";
        
    } else {
        
        return "It was a tie!";
        
    }
}

function playGame() {
    output.textContent = playRound(playerSelection, computerSelection);
    console.log(playerScore);
    console.log(computerScore);

    if (playerScore === 5) {
        output.textContent = "Congratulations You Have Beaten the Computer! Click to play again.";
        playerScore = 0;
        computerScore = 0;
        
    } else if (computerScore === 5) {
        output.textContent = "You Lose, The Computer Has Beaten You! Click to play again.";
        playerScore = 0;
        computerScore = 0;
    }
}
