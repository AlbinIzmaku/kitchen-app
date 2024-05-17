import SearchIcon from "@/svg/searchIcon";
import styles from "@/styles/search.module.css";

export default function Search() {
  return (
    <div className={styles.input}>
      <input type="text" placeholder="Search recipe" />
      <SearchIcon />
    </div>
  );
}
