import SearchIcon from "@/svg/searchIcon";
import styles from "@/styles/searchComponent.module.css";

export default function Search() {
  return (
    <div className={styles.input}>
      <input type="text" placeholder="Search recipe" />
      <SearchIcon />
    </div>
  );
}
