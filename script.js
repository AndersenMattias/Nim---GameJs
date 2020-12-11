let stickPile = 21;
let activePlayer = 'player1';
let playing = true;

const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');

let sticksDiv = document.querySelector('.sticks-div');
sticksDiv.innerHTML = stickPile;

const switchPlayer = () => {
  activePlayer = activePlayer === 'player1' ? 'player1' : 'player2';
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

const takeSticks = (number) => {
  let removeSticks = (sticksDiv.innerHTML -= number);
  if (removeSticks <= 0) {
    alert(`Game over! ${activePlayer} lost!`);
    sticksDiv.innerHTML = 0;
    playing = false;
    disableTakeSticks();
  }
  switchPlayer();
};

const disableTakeSticks = () => {
  document.getElementById('btn-1').disabled = true;
  document.getElementById('btn-2').disabled = true;
  document.getElementById('btn-3').disabled = true;
};
