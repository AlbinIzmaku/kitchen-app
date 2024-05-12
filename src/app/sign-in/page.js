import styles from "@/styles/sign-in.module.css";
import googleIcon from "/public/googleIcon.svg";
import facebookIcon from "/public/facebookIcon.svg";
import Link from "next/link";
import Image from "next/image";
import Input from "@/components/input";
import Label from "@/components/label";
import Button from "@/components/button";
import rightArrow from "/public/rightArrow.svg";

export default function SignIn() {
  return (
    <main className={styles.main}>
      <div className={styles.hello}>
        <h1>Hello,</h1>
        <h3>Welcom Back!</h3>
      </div>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <Label>Email</Label>
          <Input type="email" placeholder="Enter Email" />
        </div>
        <div className={styles.inputContainer}>
          <Label>Enter Password</Label>
          <Input type="password" placeholder="Enter Password" />
        </div>
        <Link href="/">Forgot Password?</Link>
        <br />
        <Button>
          Sign In <Image src={rightArrow} alt="Arrow"></Image>{" "}
        </Button>
      </form>
      <div>
        <p>Or Sign in With</p>
      </div>

      {/* <div>
        <Image src={googleIcon} alt="Google Icon" />
        <Image src={facebookIcon} alt="Facebook Icon" />
      </div>
      <div>
        <p>
          Do not have an account? <Link href="">Sign up</Link>
        </p>
      </div> */}
    </main>
  );
}
