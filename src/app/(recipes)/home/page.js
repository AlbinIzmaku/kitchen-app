"use client";

import TwistButton from "@/components/twistButton";
import MenuButton from "@/components/menuButton";
import menu from "@/data/menu";
import MainDish from "@/components/mainDish";
import NewRecipe from "@/components/newRecipe";
import Search from "@/components/search";
import styles from "@/styles/home.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function HomePage() {
  const [country, setCountry] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [newRecipe, setNewRecipes] = useState([]);

  const { data, status } = useSession();
  const name = data?.user.name;
  const initial = name ? name[0] : "";
  console.log(name);

  const handleCountryClick = (country) => {
    setCountry(country);
  };

  useEffect(() => {
    const fetchRecipesByCountry = async () => {
      try {
        const response = await fetch(`/fetch?query=${country}&type=cuisine`);
        const result = await response.json();
        setSelectedCountry(result.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipesByCountry();
  }, [country]);

  useEffect(() => {
    const fetchNewRecipes = async () => {
      try {
        const response = await fetch(`/fetch?number=10`);
        const result = await response.json();
        setNewRecipes(result.data);
      } catch (error) {
        console.error("Error fetching new recipes:", error);
      }
    };

    fetchNewRecipes();
  }, []);

  return (
    <section className={styles.main}>
      <div className={styles.mainText}>
        <div>
          <h3>Hello, {name}</h3>
          <p>What are you cooking today?</p>
        </div>
        <div className={styles.avatar}>
          <h2>{initial}</h2>
        </div>
      </div>
      <div className={styles.searchContainer}>
        <Link href="/search">
          <Search />
        </Link>

        <TwistButton />
      </div>

      <div className={styles.menuContainer}>
        {menu.map((item, i) => (
          <MenuButton
            key={i}
            item={item}
            onClick={() => handleCountryClick(item)}
          />
        ))}
      </div>

      <div className={styles.mainDishes}>
        {selectedCountry.map((item) => (
          <MainDish
            key={item.id}
            id={item.id}
            title={item.title}
            src={item.image}
            rating={4}
            minutes={item.readyInMinutes}
          />
        ))}
      </div>

      <h5 className={styles.text}>New Recipes</h5>

      <div className={styles.recipes}>
        {newRecipe.map((item) => (
          <NewRecipe
            key={item.id}
            title={item.title}
            src={item.image}
            creator="Albin Izmaku"
            time={item.readyInMinutes}
            healthScore={item.healthScore}
          />
        ))}
      </div>
    </section>
  );
}
