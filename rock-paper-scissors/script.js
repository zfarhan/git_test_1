console.log('Hello from the script tag!');
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
//choice = getComputerChoice()
//console.log(choice);

function getHumanChoice() {
    const userInput = prompt("Enter your choice: rock, paper, or scissors");
    return userInput;
}

// console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
    }
    else if (
        ((humanChoice === "rock") && (computerChoice === "scissors"))||
        ((humanChoice === "paper") && (computerChoice === "rock"))||
        ((humanChoice === "scissors") && (computerChoice === "paper"))
    ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

console.log(playRound());