//lets the game know who won each round
let score;

//the function for the ai
function computerPlay() {
    let rps = ["Rock", "Paper", "Scissor"];
    let random = Math.floor(Math.random() * rps.length);
    return rps[random];
}

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
    for (let i = 0; i < 5; i++) {
        let playerSelection  = prompt("Play Rock, Paper, or Scissor:");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        if (score === true) {
            playerScore += 1;
            console.log("Player wins this round!");
        } else if  (score === false) {
            computerScore += 1;
            console.log("Computer wins this round!");
        } else if (score === 0) {
            console.log("This round is a tie");
        }
        console.log("Player score is: " + playerScore)
        console.log("Computer score is: " + computerScore)
    }
    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else {
        console.log("Computer wins!")
    }
}

game()