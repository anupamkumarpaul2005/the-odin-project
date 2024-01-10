const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;
const ROUNDS = 5;

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random()*CHOICES.length)];
}

function getPlayerChoice() {
    let choice = "";
    do {
        choice = prompt("Enter your turn:").toUpperCase()
    } while(!CHOICES.includes(choice));
    return choice;
}

function playRound(computerChoice, playerChoice) {
    if(computerChoice===playerChoice)
        return -1;
    else if((computerChoice===CHOICES[0] && playerChoice===CHOICES[1]) || (computerChoice===CHOICES[1] && playerChoice===CHOICES[2]) || (computerChoice===CHOICES[2] && playerChoice===CHOICES[0]))
        return 1;
    else
        return 0;
}

function game() {
    let i=0;
    while(i<ROUNDS) {
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        result = playRound(computerChoice,playerChoice);
        console.log(`You have played ${playerChoice}\nComputer has played ${computerChoice}`);
        if(result==1){
            playerScore++;
            console.log(`Player has won.\nPlayer:\t${playerScore}\nComputer:\t${computerScore}`);
            i++;
        }
        else if(result==0) {
            computerScore++;
            console.log(`Computer has won.\nPlayer:\t${playerScore}\nComputer:\t${computerScore}`);
            i++;
        }
        else
            console.log("It's a draw.")
    }

    if(playerScore>computerScore)
        console.log("Congrats! You have won the game!!!!");
    else
        console.log("You lost! Better luck next time.");
}