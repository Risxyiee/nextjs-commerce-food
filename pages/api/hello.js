export default function handler(req, res) {
  console.log("API_URL:", process.env.API_URL);
  res.status(200).json({ message: "Hello World" });
}

