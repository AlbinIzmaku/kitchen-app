import Button from "@/components/button";
import Input from "@/components/input";
import styles from "@/styles/sign-up.module.css";
import FacebookIcon from "@/svg/facebookIcon";
import GoogleIcon from "@/svg/googleIcon";
import Link from "next/link";

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
      <form className={styles.form}>
        <div>
          <label>Name</label>
          <Input type="text" placeholder="Enter Name" />
        </div>
        <div>
          <label>Email</label>
          <Input type="email" placeholder="Enter Email" />
        </div>
        <div>
          <label>Password</label>
          <Input type="password" placeholder="Enter Password" />
        </div>
        <div>
          <label>Confirm Password</label>
          <Input type="password" placeholder="Retype Password" />
        </div>
        <div className={styles.terms}>
          <input type="checkbox" value="" />
          <label>Accept terms & Conditions</label>
        </div>
        <Button>Sign Up</Button>
      </form>
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
