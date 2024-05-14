import arrow from "/public/rightArrow.svg";
import Image from "next/image";
import styles from "@/styles/button.module.css";

export default function Button({ children }) {
  return (
    <button className={styles.button}>
      {children} <Image src={arrow} alt="RightArrow" />
    </button>
  );
}
