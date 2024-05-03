const button = document.getElementById("btn");

const colorTokens = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function generateRandomColor() {
  let randomColor = [];
  for (let i = 1; i <= 6; i++) {
    randomColor.push(colorTokens[Math.floor(Math.random() * 15)]);
  }

  return `#${randomColor.join("")}`;
}

button.addEventListener("click", function () {
  const span = document.getElementById("color");
  const randomColor = generateRandomColor();
  document.body.style.backgroundColor = randomColor;

  span.innerText = randomColor.toUpperCase();
});

let timeout;
let interval;

function automate() {
  interval = setInterval(() => {
    button.click();
  }, 2000);
}

function resetIdleTimer() {
  if (timeout) {
    clearTimeout(timeout);
  }
  if (interval) {
    clearInterval(interval);
  }
  timeout = setTimeout(function () {
    automate();
  }, 5 * 1000);
}

document.addEventListener("mousemove", resetIdleTimer);
