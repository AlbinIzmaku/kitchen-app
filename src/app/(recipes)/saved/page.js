"use client";

import SearchCard from "@/components/searchCard";
import styles from "@/styles/saved.module.css";
import { useEffect, useState } from "react";

export default function Saved() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("savedRecipes");
    if (saved) {
      setSavedRecipes(JSON.parse(saved));
    }
  }, []);

  return (
    <section className={styles.main}>
      <h4>Saved Page</h4>
      <div className={styles.recipes}>
        {savedRecipes.map((item) => (
          <SearchCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.src}
            time={item.minutes}
            rating={item.rating}
            widthI={315}
            heightI={150}
          />
        ))}
      </div>
    </section>
  );
}
