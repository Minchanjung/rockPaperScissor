//the function for the ai
function computerPlay() {
    let rps = ["Rock", "Paper", "Scissor"];
    let random = Math.floor(Math.random() * rps.length);
    return rps[random];
}
let test = computerPlay()
console.log(test)

function playRound(playerSelection, computerSelection) {
    let playerSelect = playerSelection.toLowerCase();
    if (playerSelect === "rock" && computerSelection === "Rock") {
        return "It was a tie!";
    } else if (playerSelect === "rock" && computerSelection === "Paper") {
        return "You lose, paper beats rock!";
    } else if (playerSelect === "rock" && computerSelection === "Scissor") {
        return "You win, rock beats scissor!";
    } else if (playerSelect === "paper" && computerSelection === "Rock") {
        return "You win, paper beats rock!";
    } else if (playerSelect === "paper" && computerSelection === "Paper") {
        return "It was a tie!";
    } else if (playerSelect === "paper" && computerSelection === "Scissor") {
        return "You lose, scissor beats paper!";
    } else if (playerSelect === "scissor" && computerSelection === "Rock") {
        return "You lose, rock beats scissor!";
    } else if (playerSelect === "scissor" && computerSelection === "Paper") {
        return "You win, scissor beats paper!";
    } else {
        return "It was a tie!"
    }
}

const playerSelection = "ROCK"
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))