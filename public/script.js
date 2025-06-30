const socket = io("http://localhost:4000");
const left = document.querySelector(".live-left");
const right = document.querySelector(".live-right");
const cache = new Map();

function renderDetail(id) {
  const obj = cache.get(id);
  if (!obj) return;
  right.innerHTML = `
    <h2>${obj.short}</h2>
    <p>${obj.full}</p>
    <small>${new Date(obj.ts).toLocaleString()}</small>
  `;
}

function createCard({ id, short }) {
  const div = document.createElement("div");
  div.className = "update";
  div.dataset.id = id;
  div.textContent = short;
  div.onclick = () => renderDetail(id);
  return div;
}

function addUpdate(obj) {
  if (cache.has(obj.id)) return;
  cache.set(obj.id, obj);
  left.prepend(createCard(obj));
}

fetch("./updates")
  .then(res => res.json())
  .then(data => {
    data.forEach(addUpdate);
    if (data.length) renderDetail(data[0].id);
  });

socket.on("update", addUpdate);
