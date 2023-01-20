
//This allows for 5 rounds of play
 for (let i = 1; i <= 5; i++) {
//

const playerSelection = prompt("rock, paper, scissors!")  


function getComputerChoice(){
  if((Math.round(Math.random() * 3) + 1) === 1){
    return "rock";
  } if((Math.round(Math.random() * 3) + 1) === 2){
    return "paper";
  } if((Math.round(Math.random() * 3) + 1) === 3){
    return "scissors";
  } if(((Math.round(Math.random() * 3) + 1) === "undefined" || 4 || 0)){
    return getComputerChoice()
  }
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection){
    return "draw";
  } if (playerSelection === "rock" && computerSelection === "paper"){
    return "u lose, paper beats rock";
  } if (playerSelection === "rock" && computerSelection === "scissors"){
    return "u win! rock beats scissors";
  } if (playerSelection === "paper" && computerSelection === "scissors"){
    return "u lose, scissors cut paper";
  } if (playerSelection === "paper" && computerSelection === "rock"){
    return "u win! paper covers rock";
  } if (playerSelection === "scissors" && computerSelection === "rock"){
    return "u lose, rock crushed scissors";
  } if (playerSelection === "scissors" && computerSelection === "paper"){
    return "u win! scissors cut paper";
  } 
}

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

 }
