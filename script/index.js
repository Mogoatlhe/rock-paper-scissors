
let decisionArr = ["rock", "paper", "scissors"];

let computePlay = () => {

    let decisionPosition = parseInt(Math.random() * 3);

    return decisionArr[decisionPosition];
}

let playerPlay = () => {

    return prompt("Rock, Paper, or Scissors");
}


let playerSelection = playerPlay();
let computerSelection = computePlay();

let playRound = (playerSelection, computerSelection) => {

    let result = null;
    playerSelection = playerSelection.toLowerCase();
    console.log(`You: ${playerSelection} Computer: ${computerSelection}`);
    
    // readable ? lol
    result = (playerSelection === computerSelection) ? "tie" :
        (playerSelection === decisionArr[0] && computerSelection === decisionArr[1]) ?
        "You Lose! Paper beats Rock" :  
        (playerSelection === decisionArr[0] && computerSelection === decisionArr[2]) ?
        "You Win! Rock beats Scissors" :
        (playerSelection === decisionArr[1] && computerSelection === decisionArr[2]) ?
        "You Lose! Scissors beats Rock" :
        (playerSelection === decisionArr[1] && computerSelection === decisionArr[0]) ?
        "You win! Paper beats Rock" :
        (playerSelection === decisionArr[2] && computerSelection === decisionArr[0]) ?
        "You Lose! Rock beats Scissors" :
        (playerSelection === decisionArr[2] && computerSelection === decisionArr[1]) ?
        "You Win! Scissors beats Paper" : "Invalid input";

    return result;

}

console.log(playRound(playerSelection, computerSelection));
