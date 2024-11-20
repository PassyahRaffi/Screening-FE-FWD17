function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

function submitEmail() {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const errorMessage = document.querySelector(".error-message");
  const successMessage = document.querySelector(".success-message");

  const isEmailInvalid = !validateEmail(emailInput.value) || emailInput.value === "harry@potter.com";
  emailInput.classList.toggle("error", isEmailInvalid);
  errorMessage.style.display = isEmailInvalid ? "block" : "none";
  successMessage.style.display = isEmailInvalid ? "none" : "block";

  window.errorTimeout = setTimeout(() => {
    emailInput.classList.remove("error");
    errorMessage.style.display = "none";
    successMessage.style.display = "none";
  }, 5000);
}
