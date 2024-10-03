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

/* get DOM-Elements for results */

const resultsParagraph = document.querySelector("p.results")

function displayRoundResults(result) {
    resultsParagraph.textContent = result;
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
            return;
        } else {
            displayRoundResults("Computer wins. Rock beats scissors");
            computerScore++;
            return;
        }
    }
    
    if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            displayRoundResults("Computer wins. Paper beats rock");
            computerScore++;
            return;
        } else {
            displayRoundResults("Human wins. Scissors beat paper");
            humanScore++;
            return;
        }
    }

    if (computerChoice === "scissors") {
        if (humanChoice === "paper") {
            displayRoundResults("Computer wins. Scissors beats paper");
            computerScore++;
            return;
        } else {
            displayRoundResults("Human wins. Rock beats scissors");
            humanScore++;
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