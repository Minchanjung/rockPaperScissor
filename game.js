//lets the game know who won each round
let score;

//the function for the ai
function computerPlay() {
    let rps = ["Rock", "Paper", "Scissor"];
    let random = Math.floor(Math.random() * rps.length);
    return rps[random];
}
let test = computerPlay()
console.log(test)

//function to play a single round of rps
function playRound(playerSelection, computerSelection) {
    let playerSelect = playerSelection.toLowerCase();
    if (playerSelect === "rock" && computerSelection === "Rock") {
        return "It was a tie!";
        score = null;
    } else if (playerSelect === "rock" && computerSelection === "Paper") {
        return "You lose, paper beats rock!";
        score = false;
    } else if (playerSelect === "rock" && computerSelection === "Scissor") {
        return "You win, rock beats scissor!";
        score = true;
    } else if (playerSelect === "paper" && computerSelection === "Rock") {
        return "You win, paper beats rock!";
        score = true;
    } else if (playerSelect === "paper" && computerSelection === "Paper") {
        return "It was a tie!";
        score = null;
    } else if (playerSelect === "paper" && computerSelection === "Scissor") {
        return "You lose, scissor beats paper!";
        score = false;
    } else if (playerSelect === "scissor" && computerSelection === "Rock") {
        return "You lose, rock beats scissor!";
        score = false
    } else if (playerSelect === "scissor" && computerSelection === "Paper") {
        return "You win, scissor beats paper!";
        score = true;
    } else {
        return "It was a tie!";
        score = null;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        if (score === true) {
            playerScore += 1;
            console.log("Player wins this round!");
        } else if  (score === false) {
            computerScore += 1;
            console.log("Computer wins this round!");
        } else {
            console.log("This round is a tie");
        }
    }
    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else {
        console.log("Computer wins!")
    }
}

let playerSelection = prompt("play Rock, Paper, or Scissor:")
const computerSelection = computerPlay()
console.log(game(playerSelection, computerSelection))