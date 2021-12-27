
const decisionArr = ["rock", "paper", "scissors"];

let computePlay = () => {

    let decisionPosition = parseInt(Math.random() * 3);

    return decisionArr[decisionPosition];
}

let playerPlay = () => prompt("Rock, Paper, or Scissors");



let score = 0;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    
    let result = null;
    playerSelection = playerSelection.toLowerCase();
    console.log(`You: ${playerSelection} Computer: ${computerSelection}`);
    
    if(playerSelection === computerSelection){
        result = "tie";
    }else if(playerSelection === decisionArr[0] && computerSelection == decisionArr[1]){
        score--;
        result = "You Lose! Paper beats Rock";
    }else if (playerSelection === decisionArr[0] && computerSelection == decisionArr[2]){
        score++;
        result = "You Win! Rock beats Scissors";
    }else if (playerSelection === decisionArr[1] && computerSelection == decisionArr[2]){
        score--;
        result = "You Lose! Scissors beats Paper";
    }else if (playerSelection === decisionArr[1] && computerSelection == decisionArr[0]){
        score++;
        result = "You Win! Paper beats Rock";
    }else if (playerSelection === decisionArr[2] && computerSelection == decisionArr[0]){
        score--;
        result = "You Lose! Rock beats Scissors";
    }else if (playerSelection === decisionArr[2] && computerSelection == decisionArr[1]){
        score++;
        result = "You Win! Scissors beats Rock";
    }else{
        result = "Invalid input";
    }
    
    return result;
    
}

function game(){

    let rounds = 5;
    for(let i = 0; i < rounds; i++){
    // while(playerScore < 5 || computerScore < 5){
        let playerSelection = playerPlay();
        let computerSelection = computePlay();
        console.log(playRound(playerSelection, computerSelection));
    }

    console.log(`\nTournament Results`);
    console.log(`===========================`);
    
    if(score > 0){
        console.log("You win the tournament");
    }else if(score < 0){
        console.log("Computer wins the tournament");
    }else{
        console.log(`The tournament ends in a Tie`);
    }
}

game();



