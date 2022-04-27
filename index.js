"use strict";
let guessLetters = [];
let secretLetters = [];
const wordDisplay = document.querySelector(".word-display");
// / setting a word for a game
const allWords = ["apple", "computer", "car", "helicopter"];
const newWord = function () {
  secretLetters =
    allWords[Math.trunc(Math.random() * allWords.length)].split("");
  console.log(secretLetters);
};

newWord();
const letterBtn = document.querySelectorAll(".letterBtn");
const againBtn = document.querySelectorAll(".again-btn");
let lives = 6;
// create guessLetters
const newGuessWord = function () {
  for (let i = 0; i < secretLetters.length; i++) {
    guessLetters.push("");
  }
};
newGuessWord();
// display guess word and render Win if no "" left
const display = function () {
  wordDisplay.innerHTML = ``;
  for (let i = 0; i < guessLetters.length; i++) {
    wordDisplay.innerHTML += `<div class='box'>${guessLetters[i]}</div>`;
  }
  if (!guessLetters.includes(""))
    document.querySelector(".win").classList.remove("hidden");
};
display();

// log users letter guess;
for (let i = 0; i < letterBtn.length; i++)
  letterBtn[i].addEventListener("click", function () {
    renderLetter(letterBtn[i].textContent);
  });

function renderLetter(letter) {
  if (secretLetters.includes(letter) && lives > 0) {
    console.log(lives);
    document.getElementById(letter).classList.add("hidden");
    for (let i = 0; i < secretLetters.length; i++) {
      if (secretLetters[i] == letter) {
        let letterPosition = Number([i]);
        let letterSimbol = secretLetters[i];
        for (let i = 0; i < guessLetters.length; i++)
          if (letterPosition == [i]) guessLetters[i] = letterSimbol;
      }
    }
    display();
  } else {
    lives--;
    if (lives == 0) {
      console.log("game over");
      document.querySelector(".lose").classList.remove("hidden");
    }
  }
}
// Again button will reset the game
for (let i = 0; i < againBtn.length; i++) {
  againBtn[i].addEventListener("click", function () {
    console.log("again");
    if (document.querySelector(".win").classList.contains("hidden"))
      document.querySelector(".lose").classList.add("hidden");
    else document.querySelector(".win").classList.add("hidden");
    lives = 6;
    guessLetters = [];
    secretLetters = [];
    newWord();
    newGuessWord();
    display();
    for (let i = 0; i < letterBtn.length; i++)
      letterBtn[i].classList.remove("hidden");
  });
}
