

// Step 1 Logic for get the computer choice


function getRandomInt (max) {
    return Math.floor(Math.random() * max)
}



function getComputerChoice() {
   let number = getRandomInt(3);
   let computerChoice;


   if (number === 0) {
    computerChoice = "paper"
   }
    else if (number === 1) {
    computerChoice = "rock"

   }

   else if (number === 2) {
    computerChoice = "scissors"
   }
   

   console.log(computerChoice);
   return computerChoice;

}




    








// Step 3 Declare the players score variable







// Step 4 Logic to play a single round


function playRound(humanChoice, computerChoice){
    if (humanChoice === "paperBtn" && computerChoice === "rock") {
        console.log("You win! Paper beats rock");
        return "human";
    }
    else if (humanChoice === "paperBtn" && computerChoice === "scissors") {
        console.log("You lose! scissors beats paper ");
        return "computer";

    }

    if (humanChoice === "rockBtn" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors");
        return "human";
    }
    else if (humanChoice === "rockBtn" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock ");
        return "computer";

    }

    if (humanChoice === "scissorsBtn" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper");
        return "human";
    }
    else if (humanChoice === "scissorsBtn" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors ");
        return "computer";

    }


}


// Button references

const buttons = document.querySelectorAll('button');


buttons.forEach(button =>  {    

button.addEventListener('click', (event) => {

playRound(event.target.id, getComputerChoice() );
}); 
});



