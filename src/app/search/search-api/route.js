export async function GET(request) {
  const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  const {searchParams} = new URL(request.url)
  const query = searchParams.get('query')

  console.log(searchParams)

  const res = await fetch(
    `https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${API_KEY}`,
    {
      headers: {
        "Content-Type": "application/json",
        "API-Key": API_KEY,
      },
    }
  );
  const data = await res.json();

  return Response.json({ data: data.results });
}
