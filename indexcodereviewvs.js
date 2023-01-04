const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");
// const btnHome1El = document.getElementById("btn-home-1");
// const btnHome2El = document.getElementById("btn-home-2");
// const btnHome3El = document.getElementById("btn-home-3");
// const btnGuest1El = document.getElementById("btn-guest-1");
// const btnGuest2El = document.getElementById("btn-guest-2");
// const btnGuest3El = document.getElementById("btn-guest-3");
const newGameBtnEl = document.getElementById("new-game-btn");

let homeScore = 0;
let guestScore = 0;

function addToHome(points) {
  homeScore += points;
  homeScoreEl.textContent = homeScore;
}

function addToGuest(points) {
  guestScore += points;
  guestScoreEl.textContent = guestScore;
}

// btnHome1El.addEventListener("click", () => {
//   homeScore += 1;
//   homeScoreEl.textContent = homeScore;
// });

// btnHome2El.addEventListener("click", () => {
//   homeScore += 2;
//   homeScoreEl.textContent = homeScore;
// });

// btnHome3El.addEventListener("click", () => {
//   homeScore += 3;
//   homeScoreEl.textContent = homeScore;
// });

// btnGuest1El.addEventListener("click", () => {
//   guestScore += 1;
//   guestScoreEl.textContent = guestScore;
// });

// btnGuest2El.addEventListener("click", () => {
//   guestScore += 2;
//   guestScoreEl.textContent = guestScore;
// });

// btnGuest3El.addEventListener("click", () => {
//   guestScore += 3;
//   guestScoreEl.textContent = guestScore;
// });

newGameBtnEl.addEventListener("click", () => {
  homeScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScore = 0;
  guestScoreEl.textContent = guestScore;
});
