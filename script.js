const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const errorText = document.querySelector(".error-msg");

const checkPasswordMatch = () => {
  if (passwordInput.value !== "" && confirmPasswordInput.value !== "") {
    if (passwordInput.value !== confirmPasswordInput.value) {
      errorText.style.display = "block";
    } else {
      errorText.style.display = "none";
    }
  } else {
    errorText.style.display = "none";
  }
};

confirmPasswordInput.addEventListener("input", checkPasswordMatch);
