"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";
import { authenticate } from "@/lib/actions";
import { useFormState } from "react-dom";
import { useSession, signIn } from "next-auth/react";
import styles from "@/styles/sign-in.module.css";

export default function Form() {
  const [error, dispatch] = useFormState(authenticate, '');
  const session = useSession();
  console.log(session)

  return (
    <form action={dispatch} className={styles.form}>
      <div>
        <label>Email</label>
        <Input type="text" placeholder="Enter Email" name="email" />
        <p style={{ color: "red" }}>{error ? error[0] : ""}</p>
      </div>
      <div>
        <label>Enter Password</label>
        <Input type="password" placeholder="Enter Password" name="password" />
        <p style={{ color: "red" }}>{error ? error[1] : ""}</p>
      </div>

      <Link href="/">Forgot Password?</Link>

      <Button>Sign In</Button>
    </form>
  );
}
