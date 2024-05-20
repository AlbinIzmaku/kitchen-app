import LeftArrow from "@/svg/leftArrow";
import styles from "@/styles/search.module.css";
import TwistButton from "@/components/twistButton";
import Search from "@/components/search";
import SearchCard from "@/components/searchCard";
import search from "@/data/search";

export default function SearchPage() {
  return (
    <main className={styles.main}>
      <div className={styles.text}>
        <LeftArrow />
        <h4>Search recipes</h4>
      </div>
      <div className={styles.searchContainer}>
        <Search />
        <TwistButton />
      </div>
      <div className={styles.results}>
        <h5>Recent Search</h5>
        <p>255 results</p>
      </div>

      {/* title,
  creator,
  rating,
  src,
  time,
  widthI,
  heightI, */}
      <div className={styles.cardsContainer}>
        {search.map((item) => (
          <SearchCard
            key={item.id}
            title={item.title}
            creator={item.creator}
            rating={item.rating}
            src={item.src}
            widthI={150}
            heightI={150}
          />
        ))}
      </div>
    </main>
  );
}
