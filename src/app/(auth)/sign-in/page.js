import Link from "next/link";
import FacebookIcon from "@/svg/facebookIcon";
import GoogleIcon from "@/svg/googleIcon";
import styles from "@/styles/sign-in.module.css";
import Form from "./form";
import { auth } from "@/auth";

export default async function SignIn() {
  const session = await auth();
  return (
    <main className={styles.main}>
      <div className={styles.hello}>
        <h2>Hello,</h2>
        <h3 className="regular">Welcom Back!</h3>
      </div>
      <Form session={session} />
      <p className={styles.sideways}>
        <span>Or Sign in With</span>
      </p>
      <div className={styles.icons}>
        <Link href="/api/auth/signin">
          <GoogleIcon />
        </Link>
        <FacebookIcon />
      </div>
      <p className={styles.info}>
        Do not have an account? <Link href="/sign-up">Sign up</Link>
      </p>
    </main>
  );
}
