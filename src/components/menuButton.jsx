import styles from "@/styles/menuButton.module.css";

export default function MenuButton({ item, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {item}
    </button>
  );
}
