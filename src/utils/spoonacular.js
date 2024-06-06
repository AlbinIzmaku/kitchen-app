import axios from "axios";

const API_KEY = "d7363d99fd8845a59313933e68b50598";

export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
