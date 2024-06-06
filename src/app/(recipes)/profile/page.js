"use client";

import ThreeDots from "@/svg/threeDots";
import Link from "next/link";
import styles from "@/styles/profile.module.css";
import search from "@/data/search";
import SearchCard from "@/components/searchCard";
import savedImage from "/public/savedImage.png";
import Nav from "@/components/nav";
import { auth } from "@/auth";
import { useEffect, useState } from "react";
import NewRecipe from "@/components/newRecipe";
import { useSession } from "next-auth/react";

export default function Profile() {
  const [profileRecipe, setProfileRecipe] = useState([]);
  const { data, status } = useSession();

  const name = data?.user.name;
  const initial = name ? name[0] : "";

  useEffect(() => {
    const fetchNewRecipes = async () => {
      try {
        const response = await fetch(`/fetch?number=10`);
        const result = await response.json();
        setProfileRecipe(result.data);
      } catch (error) {
        console.error("Error fetching new recipes:", error);
      }
    };

    fetchNewRecipes();
  }, []);

  return (
    <section className={styles.main}>
      <h4 className={styles.text}>Profile</h4>
      <div className={styles.icon}>
        <ThreeDots />
      </div>

      <article className={styles.profile}>
        <div className={styles.profileImage}>
          <h1>{initial}</h1>
        </div>
        <div className={styles.recipe}>
          <p>Recipe</p>
          <h3>4</h3>
        </div>
        <div className={styles.recipe}>
          <p>Followers</p>
          <h3>2.5M</h3>
        </div>
        <div className={styles.recipe}>
          <p>Following</p>
          <h3>259</h3>
        </div>
      </article>
      <article className={styles.bio}>
        <h5>{name}</h5>
        <p>Chef</p>
        <p>Private Chef Passionate about food and life.</p>
      </article>
      <div className={styles.link}>
        <Link href="">Recipe</Link>
        <Link href="">Videos</Link>
        <Link href="">Tag</Link>
      </div>

      <article className={styles.recipes}>
        {profileRecipe.map((item) => (
          <NewRecipe
            key={item.id}
            id={item.id}
            title={item.title}
            // creator={item.creator}
            // rating={item.rating}
            src={item.image}
            time={item.readyInMinutes}
            healthScore={item.healthScore}
            widthI={315}
            heightI={150}
          />
        ))}
      </article>
    </section>
  );
}
