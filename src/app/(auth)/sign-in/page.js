import Link from "next/link";
import Input from "@/components/input";
import Button from "@/components/button";
import FacebookIcon from "@/svg/facebookIcon";
import GoogleIcon from "@/svg/googleIcon";
import styles from "@/styles/sign-in.module.css";

export default function SignIn() {
  return (
    <main className={styles.main}>
      <div className={styles.hello}>
        <h2>Hello,</h2>
        <h3 className="regular">Welcom Back!</h3>
      </div>
      <form className={styles.form}>
        <div>
          <label>Email</label>
          <Input type="email" placeholder="Enter Email" />
        </div>
        <div>
          <label>Enter Password</label>
          <Input type="password" placeholder="Enter Password" />
        </div>
        <Link href="/">Forgot Password?</Link>
        <Button>Sign In</Button>
      </form>
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
