"use server";
import { validateEmail, validatePassword } from "../app/(auth)/signIn";

export async function authenticate(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {
    email: "",
    password: "",
  };

  if (!validateEmail(email)) {
    errors.email = "@ is missing";
  }

  if (!validatePassword(password)) {
    errors.password = "Wrong password";
  }

  return Object.fromEntries(
    Object.entries(errors).filter(([key, value]) => value)
  );
}
