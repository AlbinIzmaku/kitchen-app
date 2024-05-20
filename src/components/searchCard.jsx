import StarIcon from "@/svg/starIcon";
import Image from "next/image";
import searchImage from "/public/searchImage.png";
import styles from "@/styles/searchCard.module.css";

export default function SearchCard() {
  return (
    <div className={styles.card}>
      <Image
        src={searchImage}
        alt="Search Image"
        style={{ objectFit: "cover" }}
      />
      <p className={styles.foodTitle}>Traditional spate ribs baked</p>
      <p className={styles.creator}>By Chef John</p>
      <div className={styles.rating}>
        <StarIcon />
        <p>4.0</p>
      </div>
    </div>
  );
}
