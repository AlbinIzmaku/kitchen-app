// route.js
export async function GET(request) {
  const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const type = searchParams.get("type") || "query"; // Determine if we should use 'cuisine' or 'query'
  const number = searchParams.get("number") || 10; // Number of new recipes to fetch

  let apiUrl;

  if (type === "cuisine") {
    apiUrl = `https://api.spoonacular.com/recipes/search?cuisine=${query}&apiKey=${API_KEY}`;
  } else if (query) {
    apiUrl = `https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${API_KEY}`;
  } else {
    apiUrl = `https://api.spoonacular.com/recipes/random?number=${number}&apiKey=${API_KEY}`;
  }

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return new Response(JSON.stringify({ data: data.results || data.recipes }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
