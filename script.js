

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




    


// Step 2 Logic to get the human choice


function getHumanChoice() {
    let finalHumanChoice;
    let firstHumanChoice;
    firstHumanChoice = prompt("Choose one: paper, rock, scissors");

    finalHumanChoice = firstHumanChoice.toLowerCase();
       
        

    console.log(finalHumanChoice);
    return finalHumanChoice;





}





// Step 3 Declare the players score variable







// Step 4 Logic to play a single round

function playRound(humanChoice, computerChoice){
    if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock");
        return "human";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! scissors beats paper ");
        return "computer";

    }

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors");
        return "human";
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock ");
        return "computer";

    }

    if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper");
        return "human";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors ");
        return "computer";

    }

    if (humanChoice === computerChoice) {

        console.log("Its a tie!!")
    }
}







// Step 5 Logic to play the entire game

function playGame() {
let roundsPlayed = 0
let humanScore = 0;
let computerScore = 0;

while ( roundsPlayed < 5) {
    let result = playRound(getHumanChoice(), getComputerChoice());
    if (result === "human") humanScore++;
    else if (result === "computer") computerScore++; 
    roundsPlayed++;

   




}

if (humanScore > computerScore) {
    console.log("You have won the game!!");
    
}

else if (humanScore < computerScore) {
    console.log("You have lost the game!")


}

else {
    console.log("Its a tie!")
}


}

 playGame();
