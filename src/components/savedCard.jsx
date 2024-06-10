"use client";

import StarIcon from "@/svg/starIcon";
import Image from "next/image";
import styles from "@/styles/searchCard.module.css";
import TimeIcon from "@/svg/timeIcon";
import BookMarkIcon from "@/svg/bookMarkIcon";

export default function SavedCard({
  id,
  title,
  image,
  time,
  rating,
  widthI,
  heightI,
  handleClick,
}) {
  console.log("hello");
  return (
    <div
      className={styles.card}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div
        style={{
          width: widthI,
          height: heightI,
          position: "relative",
        }}
      >
        <Image
          src={`https://img.spoonacular.com/recipes/${image}`}
          alt="Search Image"
          fill
          style={{ objectFit: "cover", borderRadius: "10px" }}
          priority
        />
      </div>
      <p className={styles.foodTitle}>{title}</p>

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
