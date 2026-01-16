let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        computerChoice = "rock";
    } else if (number === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice
}

function playRound(humanChoice, computerChoice) {
    const round_result = document.getElementById("score");
    if (humanChoice === computerChoice) {
        round_result.textContent = "It's a tie!";
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore += 1
            round_result.textContent = "You win! Rock beats Scissors.";
        } else if (computerChoice === "paper") {
            computerScore += 1
            round_result.textContent = "You lose! Paper beats Rock.";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore += 1
            round_result.textContent = "You win! Paper beats Rock.";
        } else if (computerChoice === "scissors") {
            computerScore += 1
            round_result.textContent = "You lose! Scissors beat paper.";
        }
    } else {
        if (computerChoice === "paper") {
            humanScore += 1
            round_result.textContent = "You win! Scissors beat paper.";
        } else if (computerChoice === "rock") {
            computerScore += 1
            round_result.textContent = "You lose! Rock beats Scissors.";
        }
    }
    const total_result = document.getElementById("result");
    total_result.textContent = `Player score: ${humanScore} Computer score: ${computerScore}`;
    const final_result = document.getElementById("final_result");
    if (humanScore == 5) {
        const human_winner = document.createElement("p");
        human_winner.textContent = "You win!!";
        final_result.appendChild(human_winner);
        document.querySelectorAll('#container button').forEach(btn => {
            btn.disabled = true;
        });


    } else if (computerScore == 5) {
        const computer_winner = document.createElement("p");
        computer_winner.textContent = "Computer wins!!";
        final_result.appendChild(computer_winner);
        document.querySelectorAll('#container button').forEach(btn => {
            btn.disabled = true;
        });
    }

};



const container1 = document.getElementById("container");
const buttons = ["Rock", "Paper", "Scissors"];
buttons.forEach(i => {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.id = i.toLowerCase();
    btn.addEventListener("click", () => {
        let humanChoice = btn.id.toLowerCase();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
    container1.appendChild(btn);
})