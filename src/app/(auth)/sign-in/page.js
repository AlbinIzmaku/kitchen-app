import Link from "next/link";
import FacebookIcon from "@/svg/facebookIcon";
import GoogleIcon from "@/svg/googleIcon";
import styles from "@/styles/sign-in.module.css";
import Form from "./form";

export default function SignIn() {
  return (
    <main className={styles.main}>
      <div className={styles.hello}>
        <h2>Hello,</h2>
        <h3 className="regular">Welcom Back!</h3>
      </div>
      <Form />
      <p className={styles.sideways}>
        <span>Or Sign in With</span>
      </p>
      <div className={styles.icons}>
        <GoogleIcon />
        <FacebookIcon />
      </div>
      <p className={styles.info}>
        Do not have an account? <Link href="/">Sign up</Link>
      </p>
    </main>
  );
}
