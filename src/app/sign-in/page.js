import styles from "@/styles/sign-in.module.css";
import googleIcon from "/public/googleIcon.svg";
import facebookIcon from "/public/facebookIcon.svg";
import Link from "next/link";
import Image from "next/image";
import Input from "@/components/input";
import Label from "@/components/label";
import Button from "@/components/button";
import rightArrow from "/public/rightArrow.svg";
import SocialIcon from "@/components/socialIcon";

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
        <Button>
          Sign In <Image src={rightArrow} alt="Arrow"></Image>
        </Button>
      </form>
      <p className={styles.sideways}>
        <span>Or Sign in With</span>
      </p>
      <div className={styles.icons}>
        <SocialIcon>
          <Link href="/">
            <Image src={googleIcon} alt="Google Icon" />
          </Link>
        </SocialIcon>
        <SocialIcon>
          <Link href="/">
            <Image src={facebookIcon} alt="Facebook Icon" />
          </Link>
        </SocialIcon>
      </div>
      <div className={styles.signUp}>
        <p>
          Do not have an account? <Link href="/">Sign up</Link>
        </p>
      </div>
    </main>
  );
}
