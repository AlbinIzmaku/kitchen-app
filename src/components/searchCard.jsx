import StarIcon from "@/svg/starIcon";
import Image from "next/image";
import styles from "@/styles/searchCard.module.css";
import TimeIcon from "@/svg/timeIcon";
import BookMarkIcon from "@/svg/bookMarkIcon";

export default function SearchCard({
  title,
  creator,
  rating,
  src,
  time,
  widthI,
  heightI,
}) {
  return (
    <div className={styles.card}>
      <div style={{ width: widthI, height: heightI }}>
        <Image
          src={src}
          alt="Search Image"
          fill
          style={{ objectFit: "cover", borderRadius: '10px' }}
        />
      </div>
      <p className={styles.foodTitle}>{title}</p>

      <p className={styles.creator}>By {creator}</p>

      {time && (
        <div className={styles.timeSave}>
          <div className={styles.time}>
            <TimeIcon />
            <p>{time} min</p>
          </div>
          <div className={styles.book}>
            <BookMarkIcon />
          </div>
        </div>
      )}

      <div className={styles.rating}>
        <StarIcon />
        <p>{rating}</p>
      </div>
    </div>
  );
}
