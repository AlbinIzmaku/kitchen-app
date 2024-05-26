const validateEmail = (email) => {
  const hasat = /@/;

  return hasat.test(email)
}

const validatePassword = (password) => {
  const minLength = 8;
  const hasNumber = /\d/;
  const hasUpperCase = /[A-Z]/;
  const hasLowerCase = /[a-z]/;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

  return (
    password.length >= minLength &&
    hasNumber.test(password) &&
    hasUpperCase.test(password) &&
    hasLowerCase.test(password) &&
    hasSpecialChar.test(password)
  );
};

export {validateEmail, validatePassword}


