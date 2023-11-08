
//the function to get computer choice
function getComputerChoice(){
    min = 1;
    max = 4;
    number = Math.floor(Math.random()*(3))+1;
    if (number === 1){
        return "rock"
    }else if( number === 2){
        return "scissors"
    }else if (number === 3){
        return "paper"
    }
}  

//the function to play one round
function singleRound(choice){
    let playerSelection = choice;
    let computerSection = getComputerChoice();

    if (computerSection === playerSelection){
        return{ msg: "its a tie", playerScore: 0, computerScore: 0};
    } else if (computerSection === "rock" && playerSelection === "paper"){
        return{ msg: "You win! Paper beats Rock!", playerScore: 1, computerScore: 0};       
    } else if (computerSection === "rock" && playerSelection === "scissors"){
        return{ msg: "You lose! Rock beats scissors!", playerScore: 0, computerScore: 1};    
    } else if (computerSection === "paper" && playerSelection === "scissors"){
        return{ msg: "You win! Scissors beats Paper!", playerScore: 1, computerScore: 0};
    } else if (computerSection === "paper" && playerSelection === "rock"){
        return{ msg: "You lose! Paper beats Rock", playerScore: 0, computerScore: 1};
    } else if (computerSection === "scissors" && playerSelection === "paper"){
        return{ msg: "You lose! Scissors beats Paper!", playerScore: 0, computerScore: 1};
    } else if (computerSection === "scissors" && playerSelection === "rock"){
        return{ msg: "You Win!  Rock beats Scissors!", playerScore: 1, computerScore: 0};
    }
}
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
let computerCurrentScore = 0;
let playerCurrentScore = 0;
//listen for buttons with if statements
//when a button is clicked, check if scores are less than 5
//if less than 5 call singleRound and tall the scores
//tell the player if they won or lose
//display current score.
//Maybe create checkCurrentScore function
function checkCurrentScore(computerCurrentScore,playerCurrentScore){

    if (computerCurrentScore===5 && playerCurrentScore===5) return 'tie'
        else if (computerCurrentScore===5) return 'computer'
            else if (playerCurrentScore===5) return 'player'
                else return 'no winner'
}

rockButton.addEventListener('click', () => 
    //let roundResult = singleRound('rock');
    console.log(singleRound('rock').msg, computerCurrentScore, playerCurrentScore));


paperButton.addEventListener('click', () => 
    //let roundResult = singleRound('rock');
    console.log(singleRound('paper').msg, computerCurrentScore, playerCurrentScore));


scissorsButton.addEventListener('click', () => 
    //let roundResult = singleRound('rock');
    console.log(singleRound('scissors').msg, computerCurrentScore, playerCurrentScore));