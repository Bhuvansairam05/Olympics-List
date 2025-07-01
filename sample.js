/* ------------------------------------------------------------------
   Real‑time SPORTS‑ONLY backend
   ------------------------------------------------------------------
   1. npm i express socket.io cors axios
   2. PowerShell:  $env:NEWS_API_KEY="YOUR_KEY_HERE"; node server.js
      cmd.exe   :  set NEWS_API_KEY=YOUR_KEY_HERE && node server.js
   ------------------------------------------------------------------ */

const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const axios = require("axios");
const fs = require("fs");

const PORT = 4000;
const DATA_FILE = "./updates.json";
const NEWS_API_KEY = process.env.NEWS_API_KEY || "PASTE_YOUR_KEY";
const POLL_INTERVAL = 60_000;                // 60 s
const COUNTRY = "in";                  // <- change to us, gb, etc.

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors({ origin: "*" }));              // allow file:// origin
app.use(express.json());

/* ------------ Load existing updates -------------- */
let updates = [];
let nextId = 1;
let seenLinks = new Set();

if (fs.existsSync(DATA_FILE)) {
  try {
    updates = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8")) || [];
    updates.forEach(u => seenLinks.add(u.url));
    nextId = updates.length ? updates[0].id + 1 : 1;
  } catch (e) { console.error("Bad updates.json:", e); }
}

/* ------------ Helpers ---------------------------- */
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

/* ------------ REST endpoints --------------------- */
app.get("/updates", (_, res) => res.json(updates));

app.post("/updates", (req, res) => {
  const { short, full } = req.body;
  if (!short || !full) return res.status(400).json({ error: "short & full required" });
  push({ id: nextId++, short, full, url: "", ts: Date.now() });
  res.status(201).json({ ok: true });
});

/* ------------ Poll NewsAPI every minute ---------- */
async function pollNews() {
  if (!NEWS_API_KEY || NEWS_API_KEY === "PASTE_YOUR_KEY") return;
  const url = "https://newsapi.org/v2/top-headlines";
  try {
    const { data } = await axios.get(url, {
      params: {
        apiKey: NEWS_API_KEY,
        category: "sports",
        country: COUNTRY,
        language: "en",
        q: "olympics", // ← Only Olympics-related news
        pageSize: 30,
      },
    });
    (data.articles || []).forEach(a => {
      if (seenLinks.has(a.url)) return;
      push({
        id: nextId++,
        short: a.title,
        full: `${a.description || ""}<br><a href="${a.url}" target="_blank">Read more</a>`,
        url: a.url,
        ts: Date.parse(a.publishedAt) || Date.now(),
      });
    });
  } catch (err) {
    console.error("NewsAPI error:", err.response?.data || err.message);
  }
}
setInterval(pollNews, POLL_INTERVAL);
pollNews();

/* ------------ WebSocket log ---------------------- */
io.on("connection", s => console.log("Client:", s.id));

/* ------------ Start server ----------------------- */
server.listen(PORT, () => console.log(`API & WS @ http://localhost:${PORT}`));
