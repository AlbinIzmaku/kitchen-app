"use client";

import { useEffect, useState } from "react";
// import Header from "../header";

export default function Test() {
  const [recipes, setRecipes] = useState([]);

  const endpoint = "search";
  const query = "cuisine=Italian";

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `/fetch/recipes?endpoint=${endpoint}&query=${query}`
        );
        const result = await response.json();
        setRecipes(result.data);
      } catch (error) {
        console.error("Error fetching recipes: ", error);
      }
    };

    if (query.trim() !== "") {
      fetchRecipes();
    }
  }, []);

  return (
    <main>
      <h1>Test</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h2>{recipe.title}</h2>
          </li>
        ))}
      </ul>
    </main>
  );
}
