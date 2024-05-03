const historyNav = document.getElementById("history");
const dialog = document.getElementsByClassName("backdrop");
const closeIcon = document.getElementById("dialog-close-icon");
const dialogBody = document.getElementById("dialog-body");

historyNav.addEventListener("click", function () {
  console.log(dialog);

  dialog[0].classList.toggle("dialog-show");
});

closeIcon.addEventListener("click", function () {
  dialog[0].classList.toggle("dialog-show");
  removeClickListenerFromBG();
});

function copyColorToClipboard() {
  navigator.clipboard.writeText(this.getAttribute("data-color"));
}

function appendToHistory() {
  dialogBody.innerHTML = "";
  colorHistory.forEach((color) => {
    const bg = document.createElement("div");
    bg.style.backgroundColor = color;
    bg.classList.add("color-showcase");
    bg.setAttribute("data-color", color);

    bg.addEventListener("click", copyColorToClipboard);

    dialogBody.appendChild(bg);
  });
}

function removeClickListenerFromBG() {
  const bgElements = dialogBody.getElementsByClassName("color-showcase");
  Array.from(bgElements).forEach((bg) => {
    bg.removeEventListener("click", copyColorToClipboard);
  });
}
