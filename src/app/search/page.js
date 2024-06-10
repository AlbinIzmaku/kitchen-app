"use client";

import LeftArrow from "@/svg/leftArrow";
import styles from "@/styles/search.module.css";
import TwistButton from "@/components/twistButton";
import Search from "@/components/search";
import SearchCard from "@/components/searchCard";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SearchPage() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`/search/search-api?query=${query}`);
        const result = await response.json();

        const recipesWithRatings = result.data.map((recipe) => ({
          ...recipe,
          rating: Math.floor(Math.random() * 5) + 1,
        }));

        setRecipes(recipesWithRatings);
      } catch (error) {
        console.error("Error fetching recipes", error);
      }
      // finally {

      // }
    };
    if (query.trim() !== "") {
      fetchRecipes();
    }
  }, [query]);

  return (
    <main className={styles.main}>
      <div className={styles.text}>
        <Link href={"/home"}>
          <LeftArrow />
        </Link>

        <h4>Search recipes</h4>
      </div>

      <div className={styles.searchContainer}>
        <Search value={query} onChange={(e) => setQuery(e.target.value)} />
        <TwistButton />
      </div>

      <div className={styles.results}>
        <h5>Recent Search</h5>
        <p>{recipes.length} results</p>
      </div>

      <div className={styles.cardsContainer}>
        {recipes.map((recipe) => (
          <SearchCard
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            time={recipe.readyInMinutes}
            rating={recipe.rating}
            widthI={150}
            heightI={150}
          />
        ))}
      </div>
    </main>
  );
}
