import StarIcon from "@/svg/starIcon";
import TimeIcon from "@/svg/timeIcon";
import Image from "next/image";
import steak from "/public/steak.png";
import styles from "@/styles/newRecipe.module.css";
import { truncateTitle } from "@/utils/truncateTitle";

export default function NewRecipe({
  title,
  src,
  creator,
  time,
  healthScore,
  widthI,
  heightI,
}) {
  const truncate = truncateTitle(title, 15);

  const rating = healthScore % 5;
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);
  return (
    <div className={styles.card} >
      <div className={styles.whiteContainer} />
      <Image
        // src={`https://img.spoonacular.com/recipes/${src}`}
        src={src}
        alt="Steak"
        width={70}
        height={70}
        style={{
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
      <div className={styles.description}>
        <h6 className={styles.title}>{truncate}</h6>
        <div className={styles.rating}>
          {stars.map((isFilled, index) => (
            <StarIcon key={index} fill={isFilled ? "#ffad30" : "#797979"} />
          ))}
        </div>
        <div className={styles.info}>
          {/* <div className={styles.creator}>
            <Image src={src} alt="Creator" width={26} height={25} />
            <p>By {creator}</p>
          </div> */}
          <div className={styles.time}>
            <TimeIcon />
            <p>{time} mins</p>
          </div>
        </div>
      </div>
    </div>
  );
}
