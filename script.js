let stickPile = 21;
let playerOne;
let playerTwo;

let sticksDiv = document.querySelector('.sticks-div');
sticksDiv.innerHTML = stickPile;

const takeSticks = (number) => {
  let removeSticks = (stickPile -= number);
  sticksDiv.innerHTML = removeSticks;
};
