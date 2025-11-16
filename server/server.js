import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Required for HuggingFace Spaces (they assign a random port)
const PORT = process.env.PORT || 7860;

// Fix "__dirname" in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());

// Your external API
const API_URL = "https://Khubaib01-khubaib-portfolio.hf.space/api/predict/";

// Chat endpoint
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: [message] }),
    });

    const result = await response.json();
    const reply = result?.data?.[0] || "Sorry, I could not answer that.";

    res.json({ reply });
  } catch (err) {
    console.error("Backend Error:", err);
    res.status(500).json({ reply: "Failed to fetch response from API." });
  }
});

// Serve React build (VERY IMPORTANT)
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Start server
app.listen(PORT, () =>
  console.log(`Backend + Frontend running on port ${PORT}`)
);
