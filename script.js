// References

const buttons = document.querySelectorAll('button');

const results = document.querySelector('#results')




// Logic for get the computer choice


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
   

   results.textContent = `Computer choice is ${computerChoice}.` 
   return computerChoice;

}



// Logic to play a single round


function playRound(humanChoice, computerChoice){

   




    if (humanChoice === "paperBtn" && computerChoice === "rock") {
        results.textContent += "\nYou win! Paper beats rock";
        return "human";
    }
    else if (humanChoice === "paperBtn" && computerChoice === "scissors") {
        results.textContent += "\nYou lose! scissors beats paper ";
        return "computer";

    }

    if (humanChoice === "rockBtn" && computerChoice === "scissors") {
        results.textContent += "\nYou win! Rock beats scissors"
        return "human";
    }
    else if (humanChoice === "rockBtn" && computerChoice === "paper") {
        results.textContent += "\nYou lose! Paper beats rock ";
        return "computer";

    }

    if (humanChoice === "scissorsBtn" && computerChoice === "paper") {
        results.textContent += "\nYou win! Scissors beats paper"
        return "human";
    }
    else if (humanChoice === "scissorsBtn" && computerChoice === "rock") {
        results.textContent += "\nYou lose! Rock beats scissors ";
        return "computer";

    }

    else {
        results.textContent += "\nIts a tie ";
}
}

// Button references






function playGame() {
let roundsPlayed = 0;
let humanScore = 0;
let computerScore = 0;



    // Add event listener to each button
    buttons.forEach(button =>  {    
        button.addEventListener('click', (event) => {


        if (roundsPlayed < 5 ) { 
        
            result = playRound(event.target.id, getComputerChoice() );
            roundsPlayed++;
        

            //check the result
            if (result === "human") {
                humanScore++;
            }

            else if (result === "computer") {
                computerScore++;

            }

        // Update the displayed scores 
        results.textContent += `\nHuman score: ${humanScore} Computer score: ${computerScore}`;

        if (roundsPlayed === 5) {

            if (computerScore > humanScore) {
                results.textContent = `Game over and you lose! Final score - Human: ${humanScore}, Computer: ${computerScore}`;


            }

            else if (humanScore > computerScore) {
                results.textContent = `Game over and you win! Final score - Human: ${humanScore}, Computer: ${computerScore}`;

            }



            
        }

        }

         
        }); 
        });

       

       

        






}

playGame();


