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
    let pSelect = prompt('Rock Paper Scissors!');
    if (pSelect.toLowerCase() == cSelect().toLowerCase()) {
    console.log(++tieCount);
    return tie;
    } else if ((pSelect.toLowerCase() == 'rock' && cSelect() == 'Scissors') 
    || (pSelect.toLowerCase() == 'paper' && cSelect() == 'Rock') 
    || (pSelect.toLowerCase() == 'scissors' && cSelect() == 'Paper')) {
    console.log(++pScore);
    return win;
    } else {
    console.log(++cScore);
    return lose;
}
}

function game() {
const winner = ('Winner!');
const loser = ('Loser!');
const draw = ('Draw!');
if (pScore > cScore) {
console.log(winner);
return winner;
}else if (pScore < cScore) {
console.log(loser);
return loser; 
}else {
console.log(draw);
return draw;
}
}

alert(game());

const body = document.getElementsByTagName('body');

const select = document.createElement('div');
document.body.appendChild(select);

const rock = document.createElement('button');
rock.textContent = "Rock";
rock.addEventListener("click", playRound);

select.appendChild(rock);

const paper = document.createElement('button');
paper.textContent = "paper";
paper.addEventListener("click", playRound);

select.appendChild(paper);

const scissors = document.createElement('button');
scissors.textContent = "scissors";
scissors.addEventListener("click", playRound);

select.appendChild(scissors);






  
     
    





