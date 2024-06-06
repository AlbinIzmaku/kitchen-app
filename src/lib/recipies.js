const API_KEY = "d7363d99fd8845a59313933e68b50598";

export const fetchWithNext = async (query) => {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${API_KEY}`
    );
    return res.data.results;
  } catch(error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
