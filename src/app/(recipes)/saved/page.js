"use client";

import SearchCard from "@/components/searchCard";
import styles from "@/styles/saved.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SavedCard from "@/components/savedCard";

export default function Saved() {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const router = useRouter();

  const handleClick = (id) => {
    console.log(`Clicked recipe with id: ${id}`);
    router.push(`/saved/${id}`);
  };

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
          <SavedCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.src}
            time={item.minutes}
            rating={item.rating}
            widthI={315}
            heightI={150}
            handleClick={() => handleClick(item.id)}
          />
        ))}
      </div>
    </section>
  );
}
