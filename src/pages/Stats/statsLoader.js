export async function statsLoader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!response.ok) {
    throw new Response("Failed to load stats", { status: 500 });
  }
  return response.json();
}
