"use client";

import arrow from "/public/rightArrow.svg";
import Image from "next/image";
import styles from "@/styles/button.module.css";
import { useFormStatus } from "react-dom";
import Submitting from "./submitting";

export default function Button({ children, onClick }) {
  const { pending } = useFormStatus();
  if (pending) {
    return <Submitting />
  } else {
    return (
      <button type="submit" className={styles.button} onClick={onClick}>
        {children} <Image src={arrow} alt="RightArrow" />
      </button>
    );
  }
}
