const validateName = (name) => {
  const text = /^[A-Za-z\s]+$/;

  return text.test(name);
};
const validateEmail = (email) => {
  const hasat = /@/;

  return hasat.test(email);
};

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

const doubleCheckPassword = (password, confirmPasswrd) => {
  if (confirmPasswrd === password) {
    return true;
  } else {
    return false;
  }
};

const validateConditions = (conditions) => {
  if (conditions === "on") {
    return true;
  } else {
    return false;
  }
};

export {
  validateEmail,
  validatePassword,
  validateName,
  doubleCheckPassword,
  validateConditions,
};
