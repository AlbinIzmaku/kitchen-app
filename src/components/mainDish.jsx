import Image from "next/image";
import dish from "/public/dish.png";
import RingIcon from "@/svg/ringIcon";
import SaveIcon from "@/svg/bookMarkIcon";
import StarIcon from "@/svg/starIcon";
import styles from "@/styles/mainDish.module.css";
import { truncateTitle } from "@/utils/truncateTitle";

export default function MainDish({ id, title, src, rating, minutes }) {
  const truncate = truncateTitle(title, 28);

  const handleSaveRecipe = () => {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    const newRecipe = {
      id,
      title,
      src,
      rating,
      minutes,
    };
    const recipeExists = savedRecipes.some((recipe) => recipe.id === id);

    if (!recipeExists) {
      savedRecipes.push(newRecipe);
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
      alert("Recipe saved!");
    } else {
      alert("Recipe is already saved.");
    }
  };
  return (
    <div className={styles.card}>
      <div className={styles.space} />

      <div className={styles.dish}>
        {/* <div className={styles.rating}>
          <StarIcon />
          <p>{rating}</p>
        </div> */}
        <div className={styles.image}>
          <RingIcon />
          <Image
            src={`https://img.spoonacular.com/recipes/${src}`}
            alt="Dish"
            width={110}
            height={110}
            priority
            style={{
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>

      <div className={styles.description}>
        <div className={styles.foodTitle}>
          <h6>{truncate}</h6>
        </div>
        <div className={styles.timeSave}>
          <div className={styles.timeContainer}>
            <p className={styles.time}>Time</p>
            <p className={styles.minutes}>{minutes} Mins</p>
          </div>
          <div className={styles.bookmark} onClick={handleSaveRecipe}>
            <SaveIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
