const updatesContainer = document.querySelector(".live-left");
const detailBox = document.querySelector(".live-right");
let allUpdates = [];

function timeAgo(ts) {
  const diff = Math.floor((Date.now() - ts) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return new Date(ts).toLocaleString();
}

function getHostname(url) {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return "unknown";
  }
}

function flagEmoji(countryCode = "US") {
  return countryCode.toUpperCase().replace(/./g, char => 
    String.fromCodePoint(127397 + char.charCodeAt()));
}

// 👈 LEFT: All headlines
function renderLeft(updates) {
  updatesContainer.innerHTML = "";
  updates.forEach(u => {
    const div = document.createElement("div");
    div.className = "update";
    div.dataset.id = u.id;
    div.innerHTML = `
      <div class="update-content">
        ${u.image ? `<img src="${u.image}" class="update-thumb" />` : ""}
        <div>
          <strong>${u.short}</strong>
          <div class="meta">
            ${timeAgo(u.ts)} • ${getHostname(u.url)} 
            ${u.country ? `<img src="https://flagcdn.com/16x12/${u.country.toLowerCase()}.png" alt="flag" style="margin-left:5px;vertical-align:middle;" />` : ""}
          </div>
        </div>
      </div>
    `;
    div.onclick = () => renderRight(u);
    updatesContainer.appendChild(div);
  });
}


// 👉 RIGHT: Full news
function renderRight(update) {
    detailBox.innerHTML = `
    <div class="news-card-enhanced">
        
        <div class="news-content">
        ${update.image ? `<img src="${update.image}" alt="News Image" class="news-image-enhanced" />` : ""}
            <h2 class="news-title">${update.short}</h2>
            <p class="news-desc">${update.full}</p>
        </div>
    </div>
    `;
}



fetch("http://localhost:4000/updates")
  .then(res => res.json())
  .then(data => {
    // Sort updates by timestamp in descending order (latest first)
    allUpdates = data.sort((a, b) => new Date(b.ts) - new Date(a.ts));
    renderLeft(allUpdates);
    renderRight(allUpdates[0]); // Optional: Show the most recent one by default
  });

const socket = io("http://localhost:4000");
socket.on("update", newUpdate => {
  allUpdates.unshift(newUpdate); // Insert new update at the top
  renderLeft(allUpdates);
  renderRight(newUpdate); // Optional: Automatically show new one on right
});
