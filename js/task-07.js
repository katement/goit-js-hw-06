const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");
inputEl.addEventListener("input", changeTextEl);
function changeTextEl(event) {
  textEl.style.fontSize = event.target.value + "px";
}
