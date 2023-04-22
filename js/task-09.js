const refs = {
  backgroundColorBtn: document.querySelector(".change-color"),
  colorValue: document.querySelector(".color"),
};
refs.backgroundColorBtn.addEventListener("click", changeColorBody);

function changeColorBody() {
  const color = getRandomHexColor();
  document.body.style.background = color;
  refs.colorValue.textContent = color;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
