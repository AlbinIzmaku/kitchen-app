"use client";

import StarIcon from "@/svg/starIcon";
import Image from "next/image";
import styles from "@/styles/searchCard.module.css";
import TimeIcon from "@/svg/timeIcon";
import BookMarkIcon from "@/svg/bookMarkIcon";
import { useRouter } from "next/navigation";

export default function SearchCard({
  id,
  title,
  image,
  time,
  rating,
  widthI,
  heightI,
}) {
  const router = useRouter();
  function handleClick() {
    router.push(`/saved/${id}`);
  }
  return (
    <div className={styles.card} onClick={() => router.push(`/saved/${id}`)}>
      <div
        style={{
          width: widthI,
          height: heightI,
          position: "relative",
        }}
      >
        <Image
          // src={
          //   image.startsWith("http")
          //     ? image
          //     : `https://img.spoonacular.com/recipes/${image}`
          // }
          src={`https://img.spoonacular.com/recipes/${image}`}
          alt="Search Image"
          fill
          style={{ objectFit: "cover", borderRadius: "10px" }}
          priority
        />
      </div>
      <p className={styles.foodTitle}>{title}</p>

      {/* <p className={styles.creator}>By {creator}</p> */}

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
