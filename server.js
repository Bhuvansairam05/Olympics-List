require("dotenv").config();
const express = require("express");
const http    = require("http");
const cors    = require("cors");
const axios   = require("axios");
const fs      = require("fs");
const { Server } = require("socket.io");

const PORT          = process.env.PORT || 4000;
const DATA_FILE     = "./updates.json";
const NEWS_API_KEY  = process.env.NEWS_API_KEY || "";
const POLL_INTERVAL = 30 * 60_000;

function getHostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "unknown";
  }
}

function save() {
  fs.writeFileSync(DATA_FILE, JSON.stringify(updates, null, 2));
}

function push(item) {
  updates.unshift(item);
  seenLinks.add(item.url);
  save();
  io.emit("update", item);
  console.log("🆕", item.short);
}

let updates    = [];
let nextId     = 1;
let seenLinks  = new Set();

if (fs.existsSync(DATA_FILE)) {
  try {
    updates = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8")) || [];
    updates.forEach(u => seenLinks.add(u.url));
    nextId = updates.length ? updates[0].id + 1 : 1;
  } catch (e) {
    console.error("Error loading updates.json:", e);
  }
}

const app    = express();
const server = http.createServer(app);
const io     = new Server(server, { cors: { origin: "*" } });

app.use(cors({ origin: "*" }));
app.use(express.json());

// ✅ Serve frontend from "public" folder
app.use(express.static("public"));

// 🔄 REST API endpoints
app.get("/updates", (_, res) => res.json(updates));

app.post("/updates", (req, res) => {
  const { short, full } = req.body;
  if (!short || !full)
    return res.status(400).json({ error: "short & full required" });

  push({ id: nextId++, short, full, url: "", ts: Date.now() });
  res.status(201).json({ ok: true });
});

// 🔄 Poll news API every 30 minutes
async function pollNews() {
  if (!NEWS_API_KEY) {
    console.warn("NEWS_API_KEY missing – skipping poll");
    return;
  }
  try {
    const { data } = await axios.get(
      "https://newsapi.org/v2/everything",
      {
        params: {
          apiKey: NEWS_API_KEY,
          q: "olympics",
          language: "en",
          sortBy: "publishedAt",
          pageSize: 90,
        },
      },
    );

    (data.articles || []).forEach(a => {
      const title = a.title?.toLowerCase() || "";
      const description = a.description?.toLowerCase() || "";

      if (seenLinks.has(a.url)) return;
      if (!title.includes("olympic") && !description.includes("olympic")) return;

      push({
        id:     nextId++,
        short:  a.title,
        full:   `
          ${a.description || "No description available."}<br><br>
          <strong>Source:</strong> ${getHostname(a.url)}<br>
          <strong>Published:</strong> ${new Date(a.publishedAt).toLocaleString()}<br>
          <a href="${a.url}" target="_blank"> Read full article</a>
        `,
        url:    a.url,
        image:  a.urlToImage || "",
        ts:     Date.parse(a.publishedAt) || Date.now(),
      });
    });

    console.log(`[pollNews] ${new Date().toLocaleTimeString()} – added ${nextId - 1 - updates[0].id} new articles`);
  } catch (err) {
    console.error("[pollNews] Error:", err.response?.data || err.stack || err.message);
  }
}

setInterval(pollNews, POLL_INTERVAL);
pollNews();    

io.on("connection", s => console.log("Client connected:", s.id));

server.listen(PORT, () =>
  console.log(`🏃 Olympic Live Feed running @ https://olympics-backend-pjmj.onrender.com`)
);
