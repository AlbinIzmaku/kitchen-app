import styles from "@/styles/input.module.css";

export default function Input({ type, placeholder, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      required
      className={styles.input}
    />
  );
}
