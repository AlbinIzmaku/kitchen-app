"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";
import { authenticate } from "@/lib/actions";
import { useFormState } from "react-dom";
import styles from "@/styles/sign-in.module.css";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Form({ session }) {
  const [error, dispatch] = useFormState(authenticate, undefined);
  // const name = session.user.name;

  useEffect(() => {
    if (error && Object.keys(error).length === 0) {
      redirect("/home");
    }
  }, [error]);

  return (
    <form action={dispatch} className={styles.form}>
      <div>
        <label>Email</label>
        <Input type="text" placeholder="Enter Email" name="email" />
        <p style={{ color: "red" }}>{error?.email}</p>
      </div>
      <div>
        <label>Enter Password</label>
        <Input type="password" placeholder="Enter Password" name="password" />
        <p style={{ color: "red" }}>{error?.password}</p>
      </div>

      <Link href="">Forgot Password?</Link>

      <Button>Sign In</Button>
    </form>
  );
}
