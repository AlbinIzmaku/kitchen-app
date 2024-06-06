import TwistIcon from "@/svg/twistIcon";
import styles from '@/styles/twistButton.module.css'

export default function TwistButton() {
  return (
    <button className={styles.button}>
      <TwistIcon />
    </button>
  );
}
