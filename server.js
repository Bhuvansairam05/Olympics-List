const express = require("express");
const cors = require("cors");
const http = require("http");
const fs = require("fs");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const DATA_FILE = "./updates.json";
let updates = [];
let nextId = 1;
if (fs.existsSync(DATA_FILE)) {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    updates = JSON.parse(raw);
    nextId = updates.length ? updates[0].id + 1 : 1;
  } catch (err) {
    console.error("Failed to parse updates.json:", err);
  }
}

function saveUpdates() {
  fs.writeFileSync(DATA_FILE, JSON.stringify(updates, null, 2));
}

app.get("/updates", (req, res) => {
  res.json(updates);
});

app.post("/updates", (req, res) => {
  const { short, full } = req.body;
  const update = {
    id: nextId++,
    short,
    full,
    ts: Date.now()
  };
  updates.unshift(update); 
  saveUpdates();
  io.emit("update", update); 
  res.status(201).json({ message: "Update received" });
});


io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
});

server.listen(4000, () => {
  console.log(" Server running at http://localhost:4000");
});
