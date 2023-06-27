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
const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
//Rolling dice functionallity
btnRoll.addEventListener('click', function () {
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
    if(dice !== 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        // switch to active player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer ===0 ? 1: 0;
        currentScore =0;
        player1.classList.toggle('player--active');
        player2.classList.toggle('player--active');

    }
});
