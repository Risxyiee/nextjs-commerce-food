// testFetch.mjs

import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const apiUrl = process.env.API_URL || "https://my-api.com";

async function getMenu() {
  const fullUrl = `${apiUrl}/api/2023-01/graphql.json`;

  try {
    const response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `query getMenu($handle: String!) {
          menu(handle: $handle) {
            items {
              title
              url
            }
          }
        }`,
        variables: { handle: "contoh-handle" }
      })
    });
    const data = await response.json();
    console.log("Response Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getMenu();
