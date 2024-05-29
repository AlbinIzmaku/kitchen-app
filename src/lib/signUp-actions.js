"use server";

export async function signUpActions(formData) {
  const name = formData.get("name");
  console.log(formData);
}
