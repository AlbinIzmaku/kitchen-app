import ThreeDots from "@/svg/threeDots";
import Link from "next/link";
import styles from "@/styles/profile.module.css";
import search from "@/data/search";
import SearchCard from "@/components/searchCard";
import savedImage from "/public/savedImage.png";

export default function Profile() {
  return (
    <main className={styles.main}>
      <h4 className={styles.text}>Profile</h4>
      <div className={styles.icon}>
        <ThreeDots />
      </div>

      <section className={styles.profile}>
        <div className={styles.profileImage}>
          <h1>A</h1>
        </div>
        <div className={styles.recipe}>
          <p>Recipe</p>
          <h3>4</h3>
        </div>
        <div className={styles.recipe}>
          <p>Followers</p>
          <h3>2.5M</h3>
        </div>
        <div className={styles.recipe}>
          <p>Following</p>
          <h3>259</h3>
        </div>
      </section>
      <section className={styles.bio}>
        <h5>Afuwape Abiodun</h5>
        <p>Chef</p>
        <p>Private Chef Passionate about food and life.</p>
      </section>
      <div className={styles.link}>
        <Link href="/notification">Recipe</Link>
        <Link href="/">Videos</Link>
        <Link href="/">Tag</Link>
      </div>

      <section className={styles.recipes}>
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
      </section>
    </main>
  );
}
