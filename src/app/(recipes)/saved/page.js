import savedImage from "/public/savedImage.png";
import SearchCard from "@/components/searchCard";
import search from "@/data/search";
import styles from "@/styles/saved.module.css";

export default function Saved() {
  return (
    <section className={styles.main}>
      <h4>Saved Page</h4>
      <div className={styles.recipes}>
        {search.map((item) => (
          <SearchCard
            key={item.id}
            title={item.title}
            creator={item.creator}
            rating={item.rating}
            src={savedImage}
            time={item.time}
            widthI={315}
            heightI={150}
          />
        ))}
      </div>
    </section>
  );
}
