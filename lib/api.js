// lib/api.js
export async function fetchMenu(handle = "contoh-handle") {
  const res = await fetch(`${process.env.API_URL}/api/2023-01/graphql.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query getMenu($handle: String!) {
        menu(handle: $handle) {
          items {
            title
            url
          }
        }
      }`,
      variables: { handle },
    }),
  });
  const data = await res.json();
  return data;
}
