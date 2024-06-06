"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { signUpActions } from "@/lib/signUp-actions";
import styles from "@/styles/sign-up.module.css";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";

export default function SignUpForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [error, formAction] = useFormState(signUpActions, undefined);

  useEffect(() => {
    if (error && Object.keys(error).length === 0) {
      redirect("/home");
    }
  }, [error]);

  return (
    <form action={formAction} className={styles.form}>
      <div>
        <label>Name</label>
        <Input type="text" placeholder="Enter Name" name="name" />
        <p style={{ color: "red" }}>{error?.name}</p>
      </div>
      <div>
        <label>Email</label>
        <Input type="text" placeholder="Enter Email" name="email" />
        <p style={{ color: "red" }}>{error?.email}</p>
      </div>
      <div>
        <label>Password</label>
        <Input type="password" placeholder="Enter Password" name="password" />
        <p style={{ color: "red" }}>{error?.password}</p>
      </div>
      <div>
        <label>Confirm Password</label>
        <Input
          type="password"
          placeholder="Retype Password"
          name="confirmPassword"
        />
        <p style={{ color: "red" }}>{error?.confirmPassword}</p>
      </div>
      <div className={styles.terms}>
        <input
          type="checkbox"
          defaultChecked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
          name="conditions"
          required
        />
        <label>Accept terms & Conditions</label>
        <p style={{ color: "red" }}>{error?.conditions}</p>
      </div>
      <Button>Sign Up</Button>
    </form>
  );
}
