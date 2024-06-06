"use server";

import {
  doubleCheckPassword,
  validateConditions,
  validateEmail,
  validateName,
  validatePassword,
} from "@/app/(auth)/signIn";

export async function signUpActions(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  const conditions = formData.get("conditions");

  let errors = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    conditions: "",
  };

  if (!validateName(name)) {
    errors.name = "Enter valid name";
  }
  if (!validateEmail(email)) {
    errors.email = "Enter valid email";
  }
  if (!validatePassword(password)) {
    errors.password = "Enter valid password";
  }
  if (!doubleCheckPassword(confirmPassword, password)) {
    errors.confirmPassword = "Passwords do not match";
  }
  if (!validateConditions(conditions)) {
    errors.conditions = "Accept terms and conditions";
  }

  // Only return the error messages that are not empty
  return Object.fromEntries(Object.entries(errors).filter(([key, value]) => value));
}
