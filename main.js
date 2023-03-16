// import "./style.css";
const moles = document.querySelectorAll(".mole");
const scores = document.querySelector(".score");
const holes = document.querySelectorAll(".hole");

let lastIndex = -1;
let timeNotEnd = true;
let score = 0;

function time() {
  return Math.floor(Math.random() * 200 + 1000);
}
//200 + 400);
function generateNumber(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  if (index === lastIndex) {
    generateNumber(holes);
  }
  lastIndex = index;
  return hole;
}

function jump() {
  let timeBetween = time();
  let randomHole = generateNumber(holes);
  randomHole.classList.add("up");
  setTimeout(() => {
    randomHole.classList.remove("up");
    console.log(timeNotEnd);
    if (timeNotEnd) jump();
  }, timeBetween);
}

function end() {
  jump();
  setTimeout(() => (timeNotEnd = false), 10000);
}

function startGame() {
  scores.textContent = 0;
  end();
}

function scoreAddition(e) {
  console.log(e);
  if (!e.isTrusted) return;
  score++;
  scores.textContent = score;
  // console.log(score);
}
moles.forEach(mole => mole.addEventListener("click", scoreAddition));
