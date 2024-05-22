import FilterButton from "@/components/filterButton";
import MenuButton from "@/components/menuButton";
import { time, rate, category } from "@/data/filter";
import styles from "@/styles/filter.module.css";

export default function Filter() {
  return (
    <main className={styles.main}>
      <h6 className={styles.title}>Filter Page</h6>
      <div className={styles.time}>
        <h6>Time</h6>
        <div className={styles.timebuttons}>
          {time.map((item, i) => (
            <FilterButton key={i} item={item} />
          ))}
        </div>
      </div>

      <div className={styles.rate}>
        <h6>Rate</h6>
        <div className={styles.rateButtons}>
          {rate.map((item, i) => (
            <FilterButton key={i} item={item} star />
          ))}
        </div>
      </div>

      <div className={styles.category}>
        <h6>Category</h6>
        <div className={styles.categoryButtons}>
          {category.map((item, i) => (
            <FilterButton key={i} item={item} />
          ))}
        </div>
      </div>
      <div className={styles.buttonClass}>
        <button className={styles.button}>Filter</button>
      </div>
    </main>
  );
}
