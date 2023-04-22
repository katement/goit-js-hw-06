const form = document.querySelector("form.login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  const emailInput = form.elements.email;

  const passwordInput = form.elements.password;

  if (!(emailInput.value.trim() && passwordInput.value.trim())) {
    alert("Усі поля мають бути заповнені");
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  console.log(formData);

  form.reset();
}
