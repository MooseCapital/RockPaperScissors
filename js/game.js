let playerScore = 0;
let cPScore = 0;

let rockButton = document.querySelector(".rockButton");
let paperButton = document.querySelector(".paperButton");
let scissorsButton = document.querySelector(".scissorsButton");
let roundResult = document.querySelector(".roundResult");
let pScore = document.querySelector(".pScore");
let cScore = document.querySelector(".cScore");
let gameEnd = document.querySelector(".gameEnd");



function computerPlay() {
    let cpPick = Math.floor((Math.random()* 3) + 1);
    if (cpPick == 1) {
        return "rock";
    } else if (cpPick == 2) {
        return "paper";
    } else if (cpPick == 3) {
        return "scissors";
    } else {
        console.log("error, number was 0 or higher than 3")
        return null;
    }
}

function playRound(playerPick, computerPick) {
    const safePick = playerPick.toLowerCase();
    if (safePick == computerPick) {
        return "It is a Draw, Nobody Wins";
    } else if (safePick == "rock" && computerPick == "scissors") {
        playerScore++;
        return "You Win! rock beats scissors";
        
    } else if (safePick == "rock" && computerPick == "paper") {
        cPScore++;
        return "You Lose! paper beats rock"; 
        
    } else if (safePick == "paper" && computerPick == "rock") {
        playerScore++;
        return "You Win! paper beats rock";
        
    } else if (safePick == "paper" && computerPick == "scissors") {
        cPScore++;
        return "You Lose! scissors beats paper";
        
    } else if (safePick == "scissors" && computerPick == "paper") {
        playerScore++;
        return "You Win! scissors beats paper";
        
    } else if (safePick == "scissors" && computerPick == "rock") {
        cPScore++;
        return "You Lose! rock beats scissors";
        
    } else {
        return "error, something misspelled";
    } 
    

}


rockButton.addEventListener("click", function() {
    
    roundResult.textContent = playRound("rock", computerPlay());

    pScore.textContent = `Players Score: ${playerScore}`;
    cScore.textContent = `Computers Score: ${cPScore}`;

    roundOver(playerScore, cPScore);
})


paperButton.addEventListener("click", function() {
    
    roundResult.textContent = playRound("paper", computerPlay());

    pScore.textContent = `Players Score: ${playerScore}`;
    cScore.textContent = `Computers Score: ${cPScore}`;
    roundOver(playerScore, cPScore);

});


scissorsButton.addEventListener("click", function() {
    
    roundResult.textContent = playRound("scissors", computerPlay());

    pScore.textContent = `Players Score: ${playerScore}`;
    cScore.textContent = `Computers Score: ${cPScore}`;

    roundOver(playerScore, cPScore);
});



function roundOver(p, c) {
    if (p === 5 && c === 5) {
        gameEnd.textContent = "The game is a draw, nobody wins";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
       resetGame()
    } else if (p >= 5 && c <= 4) {
        gameEnd.textContent = "Player won the best to 5";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        resetGame()
    } else if (c >= 5 && p <= 4) {
        gameEnd.textContent = "Computer won the best to 5";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        resetGame()
    }
}





function resetGame() {
    let resetButton = document.createElement('button');
        resetButton.textContent = "Reset the game";
        container.appendChild(resetButton);
        resetButton.addEventListener("click", function () {
            roundResult.textContent = " ";
            gameEnd.textContent = " ";
            pScore.textContent = " ";
            cScore.textContent = " ";
            gameEnd.textContent = " ";
            rockButton.disabled = false;
            paperButton.disabled = false;
            scissorsButton.disabled = false;
            playerScore = 0;
            cPScore = 0;
            container.removeChild(resetButton);
            
})
}
/*function game() {
    let playerChoice = window.prompt("Pick rock, paper or scissors");
    console.log(playRound(playerChoice, computerPlay()));
    console.log(`Your score: ${playerScore}. Computer's score: ${cPScore}`);
    playerChoice = window.prompt("Pick rock, paper or scissors");
    console.log(playRound(playerChoice, computerPlay()));
    console.log(`Your score: ${playerScore}. Computer's score: ${cPScore}`);
    playerChoice = window.prompt("Pick rock, paper or scissors");
    console.log(playRound(playerChoice, computerPlay()));
    console.log(`Your score: ${playerScore}. Computer's score: ${cPScore}`);
    playerChoice = window.prompt("Pick rock, paper or scissors");
    console.log(playRound(playerChoice, computerPlay()));
    console.log(`Your score: ${playerScore}. Computer's score: ${cPScore}`);
    playerChoice = window.prompt("Pick rock, paper or scissors");
    console.log(playRound(playerChoice, computerPlay()));
    console.log(`Your score: ${playerScore}. Computer's score: ${cPScore}`);    
    

}

game();
*/
