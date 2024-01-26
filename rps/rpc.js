const choice = ["rock", "paper", "scissors"]

      function getComputerChoice() {
        return choice[Math.floor(Math.random() * 3)]
      };
      
      function getUserChoice() {
        let playerChoice = prompt("What is your choice?").toLowerCase()
        if (!choice.includes(playerChoice)) {
          return false
        } else {
          return playerChoice
        }
      };

      function playRound(playerSelection, computerSelection) {

        if (playerSelection === false) {
          console.log("Incorrect choice. Try again")
        } else if (playerSelection === computerSelection) {
          console.log(`Both users selected ${playerSelection}. It's a tie!`);
        } else if (playerSelection === "rock") {
          if (computerSelection === "scissors") {
            console.log("Rock smashes scissors!. You win!");
            userScore++;
          } else {
            console.log("Paper covers rock!. You lose");
            computerScore++;
          }
        } else if (playerSelection === "paper") {
          if (computerSelection === "rock") {
            console.log("Paper covers rock! You win.");
            userScore++;
          } else {
            console.log("Scissors cuts paper! You lose.");
            computerScore++;
          }
        } else if (playerSelection === "scissors") {
          if (computerSelection === "paper") {
            console.log("Scissors cuts paper! You win")
            userScore++;
          } else {
            console.log("Rock smashes scissors! You lose.");
            computerScore++;
          }
        }
      };

      function game(rounds) {
        for (let i = 0; i < rounds; i++) {
          let computerSelection = getComputerChoice()
          let userSelection = getUserChoice()

          playRound(userSelection, computerSelection)
        };
        if (userScore === 0 && computerScore == 0) {
          console.log("Noone scored any points, incorrec choice or ties only...") 
        } else if (userScore === computerScore) {
          console.log("It's a TIE!!!") 
        } 
        else if (computerScore > userScore) {
          console.log(`COMPUTER WINS! Computer score: ${computerScore} user score: ${userScore}`)
        } else {
          console.log(`CONGRATS!!! YOU WON!!! Computer score: ${computerScore} user score: ${userScore}`)
        }
      };

      
      let userScore = 0
      let computerScore = 0
      let rounds = parseInt(prompt("Rounds? "))
      game(rounds)