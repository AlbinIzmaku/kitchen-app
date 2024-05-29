
import TwistButton from "@/components/twistButton";
import MenuButton from "@/components/menuButton";
import menu from "@/data/menu";
import dishes from "@/data/mainDishes";
import MainDish from "@/components/mainDish";
import recipes from "@/data/newRecipes";
import NewRecipe from "@/components/newRecipe";
import Search from "@/components/search";
import styles from "@/styles/home.module.css";
import Nav from "@/components/nav";


export default function HomePage({ session }) {
  return (
    <section className={styles.main}>
      <div className={styles.mainText}>
        <div>
          <h3>Hello, {session.user.email}</h3>
          <p>What are you cooking today?</p>
        </div>
        <div className={styles.avatar}>
          <h2>J</h2>
        </div>
      </div>
      <div className={styles.searchContainer}>
        <Search />
        <TwistButton />
      </div>

      <div className={styles.menuContainer}>
        {menu.map((item, i) => (
          <MenuButton key={i} item={item} />
        ))}
      </div>
      <div className={styles.mainDishes}>
        {dishes.map((item) => (
          <MainDish
            key={item.id}
            title={item.title}
            src={item.src}
            rating={item.rating}
            minutes={item.minutes}
          />
        ))}
      </div>
      <h5 className={styles.text}>New Recipes</h5>
      <div className={styles.recipes}>
        {recipes.map((item) => (
          <NewRecipe
            key={item.id}
            title={item.title}
            src={item.src}
            creator={item.creator}
            time={item.time}
          />
        ))}
      </div>
    </section>
  );
}
