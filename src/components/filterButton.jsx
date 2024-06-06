import styles from "@/styles/filterButton.module.css";
import StarIcon from "@/svg/starIcon";

export default function FilterButton({ item, star }) {
  return (
    <button className={styles.button}>
      {item}
      {star && <StarIcon />}
    </button>
  );
}
