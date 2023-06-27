'use strict';

/* Selecting Elements */
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
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

});
