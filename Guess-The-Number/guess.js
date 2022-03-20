let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let high = 0;
console.log(document.querySelector(".check").textContent);
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".input").value);

  if (guess === secretNumber) {
    document.querySelector(".guess").textContent = "WTH! You guessed it right!";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "green";
    document.querySelector(".secret").textContent = secretNumber;

    if (score > high) {
      high = score;
      document.querySelector("#high").textContent = high;
    }
  } else {
    score--;
    document.querySelector("#score").textContent = score;

    document.querySelector(".guess").textContent =
      guess > secretNumber ? "Too High" : "Too Low";
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".guess").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("body").style.color = "rgb(127, 199, 127)";
  document.querySelector(".secret").textContent = "?";
  score = 20;
  document.querySelector("#score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
