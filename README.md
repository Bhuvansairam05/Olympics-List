# Olympics List – Live Olympic Scoreboard Web App

## Overview
Olympics List is a full-stack web application that displays live updates of Olympic games and scores. The app allows an admin to add different games and update their scores in real-time, while public users can view the latest updates through a clean and simple interface.

This project was developed as part of a web development learning activity and showcases how data-driven applications can simulate real-world sports dashboards.

---

## Features
- Live Olympic updates are generated using socket and uploaded to updates.json file
- Public-facing sports page to display live updates from `updates.json`.
- Modular frontend with separate pages for home, about, and sports info.
- Backend server handles data persistence and serves static files.

---

## Tech Stack

**Frontend**  
- HTML, CSS  
- JavaScript (Vanilla)  

**Backend**  
- Node.js  
- Express.js  

**Data**  
- Local JSON file (`updates.json`) used to store live updates.

---

## Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/Bhuvansairam05/Olympics-List.git
   cd Olympics-List
