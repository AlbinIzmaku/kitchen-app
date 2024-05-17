import Image from "next/image";
import dish from "/public/dish.png";
import RingIcon from "@/svg/ringIcon";
import SaveIcon from "@/svg/bookMarkIcon";
import StarIcon from "@/svg/starIcon";
import styles from "@/styles/mainDish.module.css";

export default function MainDish({ title, src, rating, minutes }) {
  return (
    <div className={styles.card}>
      <div className={styles.space} />

      <div className={styles.dish}>
        <div className={styles.rating}>
          <StarIcon />
          <p>{rating}</p>
        </div>
        <div className={styles.image}>
          <RingIcon />
          <Image src={src} alt="Dish" width={110} height={110} />
        </div>
      </div>

      <div className={styles.description}>
        <div className={styles.foodTitle}>
          <h6>{title}</h6>
        </div>
        <div className={styles.timeSave}>
          <div className={styles.timeContainer}>
            <p className={styles.time}>Time</p>
            <p className={styles.minutes}>{minutes} Mins</p>
          </div>
          <div className={styles.bookmark}>
            <SaveIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
