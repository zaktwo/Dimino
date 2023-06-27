'use strict';

/* Selecting Elements */
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScorre0 = document.getElementById('current--0');
const currentScorre1 = document.getElementById('current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const active = document.querySelector('.player--active');
const currentPlayer = document.querySelector('.player');
//variables 
// you can create an init function that have all the variables initilazed in it
/*
let scores, currentScore, activePlayer, playing;
const init = function(){
scores = [0, 0];
currentScore = 0;
activePlayer = 0;
playing = true;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

}
declare it outside 
init();
and use it inside the new game button
*/
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};
//Rolling dice functionallity
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    // 2. diplay dice
    diceEl.classList.remove('hidden');
    /*****************************************************************************
   you need to enclose these varaiable in backtick not normal tick """" ALTGR + 7
  *****************************************************************************/
    diceEl.src = `dice-${dice}.png`;
    //   console.log(diceEl.src);
    //   console.log(dice);
    //3. Check for rolled 1: if true; switch to next player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to active player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // add current user to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // check if player's score is >=100
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScorre0.textContent = 0;
  currentScorre1.textContent = 0;
  if (
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.contains('player--winner')
  ) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
  }
  player1.classList.add('player--active');
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
});
