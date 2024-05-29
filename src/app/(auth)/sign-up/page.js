import styles from "@/styles/sign-up.module.css";
import FacebookIcon from "@/svg/facebookIcon";
import GoogleIcon from "@/svg/googleIcon";
import Link from "next/link";
import SignUpForm from "./signUpForm";

export default function SignUp() {
  return (
    <main className={styles.main}>
      <div className={styles.create}>
        <h3>Create an account</h3>
        <p className="regular">
          Let&apos;s help you set up your account,
          <br />
          it won&apos;t take long.
        </p>
      </div>
      <SignUpForm />
      <p className={styles.sideways}>
        <span>Or Sign in With</span>
      </p>
      <div className={styles.icons}>
        <GoogleIcon />
        <FacebookIcon />
      </div>
      <p className={styles.info}>
        Already a member? <Link href="/">Sign In</Link>
      </p>
    </main>
  );
}
