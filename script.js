const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const errorText = document.querySelector(".error-msg");

confirmPasswordInput.addEventListener("input", checkPasswordMatch);

const checkPasswordMatch = () => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    errorText.style.display = "block";
  } else {
    errorText.style.display = "none";
  }
};
