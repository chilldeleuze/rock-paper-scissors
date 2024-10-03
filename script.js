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
const gameResultsParagraph = document.querySelector("p.game-results")
const humanScoreDisplay = document.querySelector("div.score--bar.human-score");
const computerScoreDisplay = document.querySelector("div.score--bar.computer-score");

function displayRoundResults(result) {
    resultsParagraph.textContent = result;
}

function displayGameResults(result) {
    gameResultsParagraph.textContent = result;
}

/* update score */

function renderScoreDisplay() {
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);

    humanScoreDisplay.style.background = `linear-gradient(120deg, green, green ${(5 - computerScore) * 20}%, red ${(5 - computerScore) * 20}%, red)`
    computerScoreDisplay.style.background = `linear-gradient(120deg, red, red ${100 - ((5 - humanScore) * 20)}%, green ${100 - ((5 - humanScore) * 20)}%, green)`
}


const humanPortrait = document.querySelector("div.portrait.portrait__human");
const computerPortrait = document.querySelector("div.portrait.portrait__computer");


/* main game logics */

function computerWins() {
    displayGameResults("Computer Wins!");
    humanPortrait.style.backgroundColor = "red";
    humanPortrait.textContent = "💀";
}

function humanWins() {
    displayGameResults("Human Wins!");
    computerPortrait.style.backgroundColor = "red";
    computerPortrait.style.transform = `rotate(180deg)`;
}

function checkForWin() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            humanWins();
        } else {
            computerWins();
        };
        humanScore = 0;
        computerScore = 0;
    }
    
}




function playRound(humanChoice) {
    gameResultsParagraph.textContent = "";
    computerPortrait.style.backgroundColor = "#5a7278";
    humanPortrait.style.backgroundColor = "#5a7278";
    humanPortrait.textContent = "🙎";
    computerPortrait.style.transform = `rotate(0deg)`;
    let computerChoice = getComputerChoice();
    console.log("Human Choice was: " + humanChoice)
    console.log("Computer Choice was: " + computerChoice)
    
    if (computerChoice === humanChoice) {
        displayRoundResults(`It's a tie. Both chose ${computerChoice}`);
        return;
    }

    if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            displayRoundResults("Human wins. Paper beats rock");
            humanScore++;
            renderScoreDisplay();
            checkForWin();
            return;
        } else {
            displayRoundResults("Computer wins. Rock beats scissors");
            computerScore++;
            renderScoreDisplay();
            checkForWin();
            return;
        }
    }
    
    if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            displayRoundResults("Computer wins. Paper beats rock");
            computerScore++;
            renderScoreDisplay();
            checkForWin();
            return;
        } else {
            displayRoundResults("Human wins. Scissors beat paper");
            humanScore++;
            renderScoreDisplay();
            checkForWin();
            return;
        }
    }

    if (computerChoice === "scissors") {
        if (humanChoice === "paper") {
            displayRoundResults("Computer wins. Scissors beats paper");
            computerScore++;
            renderScoreDisplay();
            checkForWin();
            return;
        } else {
            displayRoundResults("Human wins. Rock beats scissors");
            humanScore++;
            renderScoreDisplay();
            checkForWin();
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