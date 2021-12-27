
const decisionArr = ["rock", "paper", "scissors"];

let computePlay = () => {

    let decisionPosition = parseInt(Math.random() * 3);

    return decisionArr[decisionPosition];
}

let score = 0;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    
    let result = null;
    let overallWinner = null;
    playerSelection = playerSelection.toLowerCase();
    
    if(playerSelection === computerSelection){
        result = `Tie: You - ${playerSelection} : Computer - ${computerSelection} <br>
        You: ${playerScore} - ${ computerScore } :Computer`;
    }else if(playerSelection === decisionArr[0] && computerSelection == decisionArr[1]){
        result = `You Lose: You - ${playerSelection} : Computer - ${computerSelection} <br>
        You: ${playerScore} - ${ ++computerScore } :Computer`;
    }else if (playerSelection === decisionArr[0] && computerSelection == decisionArr[2]){
        result = `You Win: You - ${playerSelection} : Computer - ${computerSelection} <br>
        You: ${ ++playerScore } - ${ computerScore } :Computer`;
    }else if (playerSelection === decisionArr[1] && computerSelection == decisionArr[2]){
        result = `You Lose: You - ${playerSelection} : Computer - ${computerSelection} <br>
        You: ${playerScore} - ${ ++computerScore } :Computer`;
    }else if (playerSelection === decisionArr[1] && computerSelection == decisionArr[0]){
        result = `You Win: You - ${playerSelection} : Computer - ${computerSelection} <br>
        You: ${ ++playerScore } - ${ computerScore } :Computer`;
    }else if (playerSelection === decisionArr[2] && computerSelection == decisionArr[0]){
        result = `You Lose: You - ${playerSelection} : Computer - ${computerSelection} <br>
        You: ${playerScore} - ${ ++computerScore } :Computer`;
    }else if (playerSelection === decisionArr[2] && computerSelection == decisionArr[1]){
        result = `You Win: You - ${playerSelection} : Computer - ${computerSelection} <br>
        You: ${ ++playerScore } - ${ computerScore } :Computer`;
    }else{
        result = "Invalid input";
    }

    if(playerScore > 4 || computerScore > 4){
        if(playerScore > 4){
            overallWinner = `You win the Tournament`
        }else if(computerScore > 4){
            overallWinner = `Computer wins the Tournament`
        }

        result += `<br> ${overallWinner}`;
    }
    
    return result;
    
}

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", function(){

        let computerSelection = computePlay();
        let score = document.querySelector("#score");
        let result = playRound(this.getAttribute("id"), computerSelection);

        score.innerHTML = result;
    });
});


