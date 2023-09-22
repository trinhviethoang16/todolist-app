document.addEventListener("DOMContentLoaded", function () {
    const fullNameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const usernameInput = document.getElementById("username");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const signUpButton = document.getElementById("btn-register");
  
    const fullnameRegex = /^[a-zA-Z\s]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^0\d{8,10}$/;
  
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
      const isValidFullName = validateInput(
        fullNameInput,
        fullnameRegex,
        "Full name must only contain letters and spaces."
      );
  
      const isValidEmail = validateInput(
        emailInput,
        emailRegex,
        "Please enter a valid email address."
      );
  
      const isValidUsername = validateInput(
        usernameInput,
        usernameRegex,
        "Full name must only contain letters and digits."
      );
  
      const isValidPhone = validateInput(
        phoneInput,
        phoneRegex,
        "Phone number must be a 10-digit number."
      );
  
      const isValidPassword = validateInput(
        passwordInput,
        passwordRegex,
        "Password must be at least 8 characters long and include at least one letter and one number."
      );
  
      if (
        isValidFullName &&
        isValidEmail &&
        isValidUsername &&
        isValidPhone &&
        isValidPassword
      ) {
        const userData = {
          fullName: fullNameInput.value,
          email: emailInput.value,
          username: usernameInput.value,
          phone: phoneInput.value,
          password: passwordInput.value,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        alert("Register successfull!")
        return true;
      }
      return false;
    }
  
    signUpButton.addEventListener("click", function (event) {
      if (!validateForm()) {
        event.preventDefault();
      }
    });
  });
  