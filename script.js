const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phone_number");
const errorText = document.querySelector("#password + .error-msg");
const patternMsgEmail = document.querySelector("#email + .error-msg");
const patternMsgPhoneNumber = document.querySelector(
  "#phone_number + .error-msg"
);
const form = document.querySelector("form");

const handleFormSubmit = (e) => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    e.preventDefault();
    confirmPasswordInput.classList.add("invalid");
    errorText.style.display = "block";
  }else{
    window.location.reload();
  }
};

const checkPasswordMatch = () => {
  switch (true) {
    case passwordInput.value !== "" && confirmPasswordInput.value !== "":
      passwordInput.value !== confirmPasswordInput.value
        ? (confirmPasswordInput.classList.add("invalid"),
          (errorText.style.display = "block"))
        : (confirmPasswordInput.classList.remove("invalid"),
          (errorText.style.display = "none"));
      break;
    case passwordInput.value === "" && confirmPasswordInput.value !== "":
      confirmPasswordInput.classList.add("invalid");
      errorText.style.display = "block";
      break;
    default:
      confirmPasswordInput.classList.remove("invalid");
      errorText.style.display = "none";
      break;
  }
};

const validateEmail = () => {
  !emailInput.value
    ? (emailInput.classList.remove("invalid"),
      (patternMsgEmail.style.display = "none"))
    : !emailInput.checkValidity()
    ? (emailInput.classList.add("invalid"),
      (patternMsgEmail.style.display = "block"))
    : (emailInput.classList.remove("invalid"),
      (patternMsgEmail.style.display = "none"));
};

const validatePhoneNumber = () => {
  !phoneNumberInput.value
    ? (phoneNumberInput.classList.remove("invalid"),
      (patternMsgPhoneNumber.style.display = "none"))
    : !phoneNumberInput.checkValidity()
    ? (phoneNumberInput.classList.add("invalid"),
      (patternMsgPhoneNumber.style.display = "block"))
    : (phoneNumberInput.classList.remove("invalid"),
      (patternMsgPhoneNumber.style.display = "none"));
};

confirmPasswordInput.addEventListener("input", checkPasswordMatch);
emailInput.addEventListener("input", validateEmail);
phoneNumberInput.addEventListener("input", validatePhoneNumber);
form.addEventListener("submit", handleFormSubmit);
