function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();

    //Checking for input validity
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Input invalid! Please enter rock, paper or scissors!')
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function determineWinner(userChoice, computerChoice) {
    //tie
    if (userChoice === computerChoice) {
        return console.log('Game is a tie!');
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return console.log('The Computer has won!');
        } else {
            return console.log('The user has won!');
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return console.log('The Computer has won!');
        } else {
            return console.log('The user has won!');
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return console.log('The Computer has won!');
        } else {
            return console.log('The user has won!');
        }
    }
}

function playGame() {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();