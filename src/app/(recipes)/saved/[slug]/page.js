"use client";

import SearchCard from "@/components/searchCard";
import LeftArrow from "@/svg/leftArrow";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SavedRecipe({ params }) {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("savedRecipes");
    if (saved) {
      setSavedRecipes(JSON.parse(saved));
    }
  }, []);

  console.log(savedRecipes);
  const findRecipe = savedRecipes.find(
    (item) => item.id === parseInt(params.slug)
  );
  console.log(params.slug);

  return (
    <div>
      {findRecipe ? (
        <section
          style={{
            width: "100%",
            height: "100vh",
            margin: "10px 7.5% ",
          }}
        >
          <Link href="/saved">
            <LeftArrow />
          </Link>
          <div>
            <h6>{findRecipe.title}</h6>
            <Image
              src={`https://img.spoonacular.com/recipes/${findRecipe.src}`}
              alt="Recipe"
              width={320}
              height={200}
              style={{
                objectFit: "contain",
              }}
            />

            <p>Time to cook: {findRecipe.minutes} minutes</p>
            <p>Rating: {findRecipe.rating}</p>
          </div>
        </section>
      ) : (
        <h1>Recipe not found</h1>
      )}
    </div>
  );
}
