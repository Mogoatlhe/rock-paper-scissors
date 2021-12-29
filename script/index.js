
const decisionArr = ["rock", "paper", "scissors"];

let computePlay = () => {

    let decisionPosition = parseInt(Math.random() * 3);

    return decisionArr[decisionPosition];
}

let score = 0;
let playerScore = 0;
let computerScore = 0;
let playerBtn = null;
let computerBtn = null;

function resetBtnBackgroundImage(){

    let selectionBtn = null;

    decisionArr.forEach(selection => {
        
        selectionBtn = document.querySelector(`#${selection}`);
        selectionBtn.style.backgroundImage = `url("./images/${selection}.png")`;
    });
}

function playRound(playerSelection, computerSelection){
    
    resetBtnBackgroundImage();

    let result = null;
    let overallWinner = null;
    playerSelection = playerSelection.toLowerCase();
    
    playerBtn = document.querySelector(`#${playerSelection}`);
    computerBtn = document.querySelector(`#${computerSelection}`);

    if(playerSelection !== computerSelection){
        playerBtn.style.backgroundImage = `url("./images/${playerSelection}-you.png")`;
        computerBtn.style.backgroundImage = `url("./images/${computerSelection}-computer.png")`;
    }

    if(playerSelection === computerSelection){
        result = `Tie: You - ${playerSelection} : Computer - ${computerSelection} <br>
        You: ${playerScore} - ${ computerScore } :Computer`;
        
        playerBtn.style.backgroundImage = `url("./images/${playerSelection}.png")`;
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


