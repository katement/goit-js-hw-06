const inputEl = document.getElementById("validation-input");
inputEl.addEventListener("blur", checkLength);

function checkLength(event) {
  const elLength = event.target.value.trim().length;
  const currentLength = Number(event.target.getAttribute("data-length"));
    const isValid = elLength === currentLength;
    event.target.classList.toggle("valid", isValid);
    event.target.classList.toggle("invalid", !isValid);

}
