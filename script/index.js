
const decisionArr = ["rock", "paper", "scissors"];

let computePlay = () => {

    let decisionPosition = parseInt(Math.random() * 3);

    return decisionArr[decisionPosition];
}

let score = 0;
let playerScore = 0;
let computerScore = 0;

function resetComputerSelection(){

    let selection = null;

    decisionArr.forEach(curr => {
        selection = document.querySelector(`.${curr}`);
        selection.classList.remove("remove-background-image");
    });
}


function setComputerSelection(computerSelection){
    
    decisionArr.forEach(curr => {
        if(curr === computerSelection){
            return;
        }
        
        selection = document.querySelector(`.${curr}`);
        selection.classList.add("remove-background-image");
        
    });

}

function determineWinner(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        result = `Tie <br> You: <span class = "you">${playerSelection}</span>`;
        result += ` - Computer: <span class = "computer">${computerSelection}</span>`;
    }else if(playerSelection === decisionArr[0] && computerSelection == decisionArr[1]){
        result = `You Lose <br> You:  <span class = "you">${playerSelection}</span>`;
        result += ` - Computer: <span class = "computer">${computerSelection}</span>`;
        computerScore++;
    }else if (playerSelection === decisionArr[0] && computerSelection == decisionArr[2]){
        result = `You Win <br> You:  <span class = "you">${playerSelection}</span>`;
        result += ` - Computer: <span class = "computer">${computerSelection}</span>`;
        playerScore++;
    }else if (playerSelection === decisionArr[1] && computerSelection == decisionArr[2]){
        result = `You Lose <br> You:  <span class = "you">${playerSelection}</span>`;
        result += ` - Computer: <span class = "computer">${computerSelection}</span>`;
        computerScore++;
    }else if (playerSelection === decisionArr[1] && computerSelection == decisionArr[0]){
        result = `You Win <br> You:  <span class = "you">${playerSelection}</span>`;
        result += ` - Computer: <span class = "computer">${computerSelection}</span>`;
        playerScore++;
    }else if (playerSelection === decisionArr[2] && computerSelection == decisionArr[0]){
        result = `You Lose <br> You:  <span class = "you">${playerSelection}</span>`;
        result += ` - Computer: <span class = "computer">${computerSelection}</span>`;
        computerScore++;
    }else if (playerSelection === decisionArr[2] && computerSelection == decisionArr[1]){
        result = `You Win <br> You:  <span class = "you">${playerSelection}</span>`;
        result += ` - Computer: <span class = "computer">${computerSelection}</span>`;
        playerScore++;
    }else{
        result = "Invalid input";
    }

    return result;
}

function playRound(playerSelection, computerSelection){
    
    resetComputerSelection();
    setComputerSelection(computerSelection);

    let result = null;
    let overallWinner = null;
    playerSelection = playerSelection.toLowerCase();

    if(playerScore > 4 || computerScore > 4){
        playerScore = computerScore = 0;
        document.querySelector("#text-feedback-container").classList.remove("reduce-font");
    }

    result = determineWinner(playerSelection, computerSelection);
    result = `<span class = "text-feedback">${result}</span>`;

    if(playerScore > 4 || computerScore > 4){
        if(playerScore > 4){
            overallWinner = `You win the Tournament`
        }else if(computerScore > 4){
            overallWinner = `Computer wins the Tournament`
        }

        result += `<span class = "text-feedback"> ${overallWinner}<span>`;
        document.querySelector("#text-feedback-container").classList.add("reduce-font");
    }

    document.querySelector("#you-score").textContent = playerScore;
    document.querySelector("#computer-score").textContent = computerScore;
    
    return result;
    
}

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {

    button.addEventListener("click", function(){

        let computerSelection = computePlay();
        let score = document.querySelector("#text-feedback-container");
        let result = playRound(this.getAttribute("id"), computerSelection);

        score.innerHTML = result;
    });
});


