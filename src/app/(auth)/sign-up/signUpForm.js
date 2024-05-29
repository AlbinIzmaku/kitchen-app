import Button from "@/components/button";
import Input from "@/components/input";
// import { signUpActions } from "@/lib/signUp-actions";
import styles from "@/styles/sign-up.module.css";

export default function SignUpForm() {
  async function signUpActions(formData) {
    "use server";
    
    console.log(formData);
  }

  return (
    <form action={signUpActions} className={styles.form}>
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
  );
}
