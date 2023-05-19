const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const errorText = document.querySelector(".error-msg");

confirmPasswordInput.addEventListener("input", checkPasswordMatch);

function checkPasswordMatch() {
  if (passwordInput.value !== "" && confirmPasswordInput.value !== "") {
    if (passwordInput.value !== confirmPasswordInput.value) {
      errorText.style.display = "block";
    } else {
      errorText.style.display = "none";
    }
  } else {
    errorText.style.display = "none";
  }
}
