
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

function printResults(computerCurrentScore, playerCurrentScore){
    if (computerCurrentScore===5 && playerCurrentScore===5) return 'tie'
        else if (computerCurrentScore===5) return 'computer won!'
            else if (playerCurrentScore===5) return 'You won!'
                else return 'play on!'
}

//function to actionsForASingleRound()
function actionsForASingleRound(buttonValue){
    roundResult = singleRound('rock');
    computerCurrentScore += roundResult.computerScore;
    playerCurrentScore += roundResult.playerScore;
    console.log(roundResult.msg, computerCurrentScore, playerCurrentScore)
    console.log(printResults(computerCurrentScore,playerCurrentScore));
    if (printResults(computerCurrentScore,playerCurrentScore) != 'play on!'){
        console.log('New game! lets reset. Go');
        computerCurrentScore = 0;
        playerCurrentScore = 0;
    }
}

//when a button is clicked, check if scores are less than 5
  
rockButton.addEventListener('click', () => 
    actionsForASingleRound('rock'));

paperButton.addEventListener('click', () => 
    actionsForASingleRound('paper'));

scissorsButton.addEventListener('click', () => 
    actionsForASingleRound('scissors'));

/*

}

console.log(printResults(computerCurrentScore, playerCurrentScore));
           
*/
