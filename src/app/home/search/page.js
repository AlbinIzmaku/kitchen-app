import LeftArrow from "@/svg/leftArrow";
import styles from "@/styles/search.module.css";
import TwistButton from "@/components/twistButton";
import Search from "@/components/search";
import Image from "next/image";
import searchImage from "/public/searchImage.png";
import StarIcon from "@/svg/starIcon";
import SearchCard from "@/components/searchCard";

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
      <h5>Recent Search</h5>
      <div className={styles.cardsContainer}>
        <SearchCard />
        <SearchCard />
      </div>
      
    </main>
  );
}
