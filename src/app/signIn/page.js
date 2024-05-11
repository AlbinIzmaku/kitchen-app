import styles from "@/styles/signIn.module.css";
import googleIcon from "/public/googleIcon.svg";
import facebookIcon from "/public/facebookIcon.svg";
import Link from "next/link";
import Image from "next/image";

export default function SignIn() {
  return (
    <main className={styles.main}>
      <div className={styles.hello}>
        <h1>Hello,</h1>
        <h3>Welcom Back!</h3>
      </div>
      <form className={styles.form}>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Enter Email" />
        </div>
        <div>
          <label>Enter Password</label>
          <input type="password" placeholder="Enter Password" />
        </div>
        <Link href="/">Forgot Password</Link>
        <button>Login</button>
      </form>
      <div>
        <p>Or Sign in With</p>
      </div>
      <div>
        <Image src={googleIcon} alt="Google Icon" />
        <Image src={facebookIcon} alt="Facebook Icon" />
      </div>
      <div>
        <p>
          Do not have an account? <Link href="">Sign up</Link>
        </p>
      </div>
    </main>
  );
}
