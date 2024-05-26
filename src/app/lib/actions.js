"use server";
import { validateEmail, validatePassword } from "../(auth)/signIn";

export async function authenticate(prevState, formData) {
  let emailMessage = "";
  let passwordMessage = "";
  const email = formData.get("email");
  if (!validateEmail(email)) {
    emailMessage = "@ is missing";
  }
  const password = formData.get("password");

  if (!validatePassword(password)) {
    passwordMessage = "Wrong password";
  }

  return [emailMessage, passwordMessage];
}
