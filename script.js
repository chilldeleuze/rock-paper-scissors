function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else if (num === 3) {
        return "scissors"
    }
}

/* initialise score */

let humanScore = 0;
let computerScore = 0;

/* add the event listeners */

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => {playRound("rock")});
paperButton.addEventListener("click", () => {playRound("paper")});
scissorsButton.addEventListener("click", () => {playRound("scissors")});

/* get DOM-Elements for results and score */

const resultsParagraph = document.querySelector("p.results")
const humanScoreDisplay = document.querySelector("div.score--bar.human-score");
const computerScoreDisplay = document.querySelector("div.score--bar.computer-score");

function displayRoundResults(result) {
    resultsParagraph.textContent = result;
}

/* update score */

function renderScoreDisplay() {
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);

    humanScoreDisplay.style.background = `linear-gradient(120deg, green, green ${(5 - computerScore) * 20}%, red ${(5 - computerScore) * 20}%, red)`
    computerScoreDisplay.style.background = `linear-gradient(120deg, red, red ${100 - ((5 - humanScore) * 20)}%, green ${100 - ((5 - humanScore) * 20)}%, green)`
}




/* main game logics */


function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    console.log("Human Choice was: " + humanChoice)
    console.log("Computer Choice was: " + computerChoice)
    
    if (computerChoice === humanChoice) {
        displayRoundResults(`Match. Both chose ${computerChoice}`);
        return;
    }

    if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            displayRoundResults("Human wins. Paper beats rock");
            humanScore++;
            renderScoreDisplay();
            return;
        } else {
            displayRoundResults("Computer wins. Rock beats scissors");
            computerScore++;
            renderScoreDisplay();
            return;
        }
    }
    
    if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            displayRoundResults("Computer wins. Paper beats rock");
            computerScore++;
            renderScoreDisplay();
            return;
        } else {
            displayRoundResults("Human wins. Scissors beat paper");
            humanScore++;
            renderScoreDisplay();
            return;
        }
    }

    if (computerChoice === "scissors") {
        if (humanChoice === "paper") {
            displayRoundResults("Computer wins. Scissors beats paper");
            computerScore++;
            renderScoreDisplay();
            return;
        } else {
            displayRoundResults("Human wins. Rock beats scissors");
            humanScore++;
            renderScoreDisplay();
            return;
        }

    }
}



/*
function playGame() {
    

    console.log(`### Total Score ###
        Human: ${humanScore}
        Computer: ${computerScore}
        `);
    if (humanScore > computerScore) {
        console.log("Human wins!")
    } else if (humanScore < computerScore) {
        console.log("Computer wins!")
    } else {
        console.log("It's a tie!")
    }
        
    
}

*/