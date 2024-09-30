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

function getHumanChoice() {
    let input = prompt("Make your choice");
    if (input !== "rock" && input !== "paper" && input !== "scissors") {
        input = prompt("Try again")
    }
    return input;

}





function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (computerChoice === humanChoice) {
            console.log(`Match. Both chose ${computerChoice}`);
            return;
        }
    
        if (computerChoice === "rock") {
            if (humanChoice === "paper") {
                console.log("Human wins. Paper beats rock");
                humanScore++;
                return;
            } else {
                console.log("Computer wins. Rock beats scissors");
                computerScore++;
                return;
            }
        }
        
        if (computerChoice === "paper") {
            if (humanChoice === "rock") {
                console.log("Computer wins. Paper beats rock");
                computerScore++;
                return;
            } else {
                console.log("Human wins. Scissors beat paper");
                humanScore++;
                return;
            }
        }
    
        if (computerChoice === "scissors") {
            if (humanChoice === "paper") {
                console.log("Computer wins. Scissors beats paper");
                computerScore++;
                return;
            } else {
                console.log("Human wins. Rock beats scissors");
                humanScore++;
                return;
            }
    
        }
    }

    playRound();
    playRound();
    playRound();


    console.log(
        `Human: ${humanScore}
        Computer: ${computerScore}
        `)
    
}

playGame();