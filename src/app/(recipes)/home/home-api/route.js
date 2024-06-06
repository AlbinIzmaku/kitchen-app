export async function GET(request) {
  const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  console.log(searchParams)

  const response = await fetch(
    `https://api.spoonacular.com/recipes/search?cuisine=${query}&apiKey=${API_KEY}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  return Response.json({ data: data.results });
}
