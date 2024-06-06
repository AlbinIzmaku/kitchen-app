const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

export async function fetchRecipes(endpoint, queryParams) {
  const url = new URL(`https://api.spoonacular.com/recipes/${endpoint}`);
  Object.keys(queryParams).forEach((key) =>
    url.searchParams.append(key, queryParams[key])
  );
  url.searchParams.append("apiKey", API_KEY);

  try {
    const response = await fetch(url.toString(), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}
