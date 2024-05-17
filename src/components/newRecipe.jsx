import StarIcon from "@/svg/starIcon";
import TimeIcon from "@/svg/timeIcon";
import Image from "next/image";
import steak from "/public/steak.png";
import styles from "@/styles/newRecipe.module.css";

export default function NewRecipe({ title, src, creator, time }) {
  return (
    <div className={styles.card}>
      <div className={styles.whiteContainer} />
      <Image src={steak} alt="Steak" />
      <div className={styles.description}>
        <h6 className={styles.title}>{title}</h6>
        <div className={styles.rating}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <div className={styles.info}>
          <div className={styles.creator}>
            <Image src={src} alt="Creator" width={26} height={25} />
            <p>By {creator}</p>
          </div>
          <div className={styles.time}>
            <TimeIcon />
            <p>{time} mins</p>
          </div>
        </div>
      </div>
    </div>
  );
}
