import fetch from "node-fetch";

const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

async function getData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("Data dari API:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getData();
