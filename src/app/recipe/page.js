import LeftArrow from "@/svg/leftArrow";
import ThreeDots from "@/svg/threeDots";
import recipe from "/public/recipe.png";
import Image from "next/image";
import StarIcon from "@/svg/starIcon";
import TimeIcon from "@/svg/timeIcon";
import BookMarkIcon from "@/svg/bookMarkIcon";
import styles from "@/styles/recipe.module.css";
import LocationIcon from "@/svg/locationIcon";
import ServeIcon from "@/svg/serveIcon";
import ingrident from "@/data/ingrident";
import Ingrident from "@/components/ingrident";

export default function Recipe() {
  return (
    <main className={styles.main}>
      <div className={styles.icons}>
        <LeftArrow />
        <ThreeDots />
      </div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src={recipe} alt="Recipe" />
          <div className={styles.rating}>
            <StarIcon />
            <p>4.0</p>
          </div>
          <div className={styles.timeBook}>
            <div className={styles.time}>
              <TimeIcon />
              <p>20 min</p>
            </div>
            <div className={styles.book}>
              <BookMarkIcon />
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <h6>Spicy chicken burger with French fries</h6>
          <p>(13k Reviews)</p>
        </div>
      </div>

      <div className={styles.creatorProfile}>
        <div className={styles.creator}>
          <div className={styles.profile}>
            <h2>L</h2>
          </div>
          <div className={styles.info}>
            <p>Laura Wilson</p>
            <div className={styles.location}>
              <LocationIcon />
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <button className={styles.button}>
          <p>Follow</p>
        </button>
      </div>

      <div className={styles.buttons}>
        <button className={styles.secondButton}>
          <p>Ingrident</p>
        </button>
        <button className={styles.secondButton}>
          <p>Procedure</p>
        </button>
      </div>

      <div className={styles.serveItems}>
        <div className={styles.serveIcon}>
          <ServeIcon />
          <p>1 serve</p>
        </div>

        <p>10 items</p>
      </div>

      <article className={styles.ingridents}>
        {ingrident.map((item) => (
          <Ingrident
            key={item.id}
            vegetable={item.vegetable}
            quantity={item.quantity}
          />
        ))}
      </article>
    </main>
  );
}
