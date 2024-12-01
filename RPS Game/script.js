// Get buttons and score elements
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const computerScoreEl = document.getElementById("computer-score");
const youScoreEl = document.getElementById("you-score");
const youChooseEl = document.getElementById("you-choose");
const computerChooseEl = document.getElementById("computer-choose");
const youWinEl = document.getElementById("you-win");
const computerWinsEl = document.getElementById("computer-wins");

document.addEventListener("DOMContentLoaded", () => {
    let youScore = 0;
    let computerScore = 0;

    function checker(input) {
        const choices = ["rock", "paper", "scissor"];
        const pick = Math.floor(Math.random() * 3);
        const computerChoice = choices[pick];

        // Update the DOM with choices
        computerChooseEl.innerHTML = `Computer choose: <span>${computerChoice.toUpperCase()}</span>`;
        youChooseEl.innerHTML = `You choose: <span>${input.toUpperCase()}</span>`;

        // Reset visibility of result messages
        youWinEl.style.display = "none";
        computerWinsEl.style.display = "none";

        // Determine the result
        if (computerChoice === input) {
            youWinEl.style.display = "inline-block";
            youWinEl.textContent="It's a Tie!";
        }else if((input === "rock" && computerChoice === "scissor") ||
            (input === "paper" && computerChoice === "rock") ||
            (input === "scissor" && computerChoice === "paper")
        ){
            youWinEl.textContent="You Win";
            youWinEl.style.display = "inline-block";
            youScore++;
        }else{
            computerWinsEl.style.display = "inline-block";
            computerScore++;
        }
    youScoreEl.textContent=`You Score : ${youScore}`;
    computerScoreEl.textContent=`Computer Score : ${computerScore}`;
    }

// Event listeners
rockBtn.addEventListener("click", () => checker("rock"));
paperBtn.addEventListener("click", () => checker("paper"));
scissorBtn.addEventListener("click", () => checker("scissor"));
});
