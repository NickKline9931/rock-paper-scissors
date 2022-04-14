let pScore = 0;

let cScore = 0;

let tieCount = 0;


const choice = ['Rock', 'Paper', 'Scissors'];
console.log(choice)

function cPick() {
    return choice[Math.floor(Math.random() * choice.length)];
    
}

const win = ('You got a point!');
const lose = ('Point for Computer!');
const tie = ('Tie!');
    
function playRound() {
    let cSelect = cPick;
    let pSelect = pChoice;
    if (pSelect.toLowerCase() == cSelect().toLowerCase()) {
    alert(tie);
    ++tieCount;
    return tie;
    } else if ((pSelect.toLowerCase() == 'rock' && cSelect() == 'Scissors') 
    || (pSelect.toLowerCase() == 'paper' && cSelect() == 'Rock') 
    || (pSelect.toLowerCase() == 'scissors' && cSelect() == 'Paper')) {
    alert(win);
    ++pScore;
    return win;
    } else {
    alert(lose);
    ++cScore;
    return lose;
}
}

const body = document.getElementsByTagName('body');

const select = document.createElement('div');
document.body.appendChild(select);

let pChoice;

const rock = document.createElement('button');
rock.textContent = "Rock";
rock.addEventListener("click", updateScore); {
    pChoice = 'rock';
}


select.appendChild(rock);

const paper = document.createElement('button');
paper.textContent = "paper";
paper.addEventListener("click", updateScore); {
    pChoice = 'paper';
}

select.appendChild(paper);

const scissors = document.createElement('button');
scissors.textContent = "scissors";
scissors.addEventListener("click", updateScore); {
    pChoice = 'scissors';
}
select.appendChild(scissors);

player.textContent = "Player Score: 0";
com.textContent = "Computer Score: 0";
ties.textContent = "Ties: 0";

function updateScore() {
    let player = document.getElementById("player");
    let com = document.getElementById("com");
    let ties = document.getElementById("ties");
    playRound();
    player.textContent = `Player Score: ${pScore}`;
    com.textContent = `Computer Score: ${cScore}`;
    ties.textContent = `Ties: ${tieCount}`;
    endMessage();
    endGame();
}

function scoreCap() {
    if (pScore == 5 || cScore == 5){
        return true;
    } else {
        return false;
    }
}

const winner = 'Winner!'
const loser = 'Loser!'

function endMessage() {
if (pScore == 5){
    alert(winner);
    return true;
}else if (cScore == 5) {
    alert(loser);
    return true;
} else {
    return false;
}
}

function endGame() {
    if (pScore == 5 || cScore == 5){
        rock.removeEventListener('click', updateScore);
        paper.removeEventListener('click', updateScore);
        scissors.removeEventListener('click', updateScore);
    }
}





    
