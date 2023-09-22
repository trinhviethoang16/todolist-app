document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const signInButton = document.getElementById("btn-login");
  
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    function validateInput(input, regex, errorMessage) {
      const errorSpan = input.nextElementSibling;
      if (!regex.test(input.value)) {
        errorSpan.textContent = errorMessage;
        return false;
      }
      errorSpan.textContent = "";
      return true;
    }
  
    function validateForm() {
      const isValidEmail = validateInput(
        emailInput,
        emailRegex,
        "Please enter a valid email address."
      );

      const isValidPassword = validateInput(
        passwordInput,
        passwordRegex,
        "Password must be at least 8 characters long and include at least one letter and one number."
      );

      if (isValidEmail && isValidPassword) {
        const storedData = localStorage.getItem(emailInput.value);
        if (storedData) {
          const userData = JSON.parse(storedData);
          if (passwordInput.value === userData.password) {
            alert("Login success!");
          } else {
            alert("Wrong password. Please try again.");
          }
        } else {
          alert("Email does not exist.");
        }
      }
    }
  
    signInButton.addEventListener("click", function (event) {
      if (!validateForm()) {
        event.preventDefault();
      }
    });
  });
  