const settingsBtn = document.querySelector(".settings-btn");
const difficulty = document.querySelector(".difficulty");
const scoreEl = document.querySelector(".score");
const timeEl = document.querySelector(".time");
const word = document.querySelector(".word");
const text = document.querySelector(".text");
const settings = document.querySelector(".settings");
const container = document.querySelector(".container");

const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
];
let randomWord;
let score = 0;
let time = 10;
difficulty.value = "medium";

settingsBtn.addEventListener("click", () => settings.classList.toggle("hide"));
difficulty.addEventListener("change", (e) => {
  difficulty.value = e.target.value;
});

const getRandomWord = () => {
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.textContent = randomWord;
};

const updateScore = () => {
  score++;
  scoreEl.innerHTML = score;
};

const updateTime = () => {
  time--;
  timeEl.innerHTML = time + "s";
  if (time === 0) {
    clearInterval();
    gameOver();
  }
};

text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    updateScore();
    e.target.value = "";

    if (difficulty.value === "hard") {
      time += 2;
    } else if (difficulty.value === "medium") {
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
    getRandomWord();
  }
});

setInterval(() => {
  updateTime();
}, 1000);

gameOver = () => {
  container.innerHTML = `
        <div class="gameover">
        <h1>Time ran out</h1>
        <p>Your final score is <span class="finalscore">${score}</span></p>
      </div>
  `;
};

getRandomWord();
