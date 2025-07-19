# 🏆 User Points App

A full-stack web application where users can claim random points, view real-time leaderboard rankings, and track point history. Built with **React**, **Node.js**, and **MongoDB**, deployed on **Netlify** (frontend) and **Render** (backend).

## 🌟 Features

- ✅ Select a user from a dropdown
- ✅ Claim random points (1–10) with a single click
- ✅ Add new users from frontend
- ✅ View live leaderboard sorted by total points
- ✅ All claim events are stored in point history
- ✅ Backend database using MongoDB
- ✅ Full deployment: Render (backend) & Netlify (frontend)

---

## 🛠️ Tech Stack

| Layer        | Tech                  |
|--------------|-----------------------|
| Frontend     | React, Tailwind CSS   |
| Backend      | Node.js, Express.js   |
| Database     | MongoDB (Atlas)       |
| Deployment   | Netlify (FE), Render (BE) |
| State & API  | Axios                 |

---

## 📂 Project Structure

User-points-app/
├── backend/
│ ├── models/
│ ├── controllers/
│ ├── routes/
│ ├── server.js
│ └── .env
└── frontend/
├── src/
│ ├── components/
│ ├── api.js
│ ├── App.js
│ └── index.js
└── public/

---

## 🚀 Live Links

- 🔗 **Frontend (Netlify)**: [https://your-frontend.netlify.app](https://your-frontend.netlify.app)
- 🔗 **Backend (Render)**: [https://user-points-app-9hp6.onrender.com](https://user-points-app-9hp6.onrender.com)

> Replace with your actual deployed URLs

---

## ⚙️ How It Works

1. Select a user from the dropdown
2. Click the **Claim Points** button to generate 1–10 random points
3. Points are updated in the database
4. The leaderboard updates instantly with new rankings
5. Each claim is stored in the `claimHistory` collection

---

## 🧑‍💻 Run Locally (Development)

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/user-points-app.git
cd user-points-app

2. Backend Setup
cd backend
npm install

Create a .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string

Start the server:
npm start

3. Frontend Setup 
cd ../frontend
npm install

Start frontend:
npm start

6️⃣ Deployment Instructions
Backend on Render
Push backend to GitHub

Go to https://render.com

New Web Service → Connect repo

Set environment variables:

PORT=5000

MONGO_URI=your_mongodb_connection

Click Deploy

Frontend on Netlify
Push frontend to GitHub

Go to https://netlify.com

New Site → GitHub

Set build command: npm run build

Publish directory: build

Add env variable:

REACT_APP_API_URL=https://your-backend.onrender.com

7️⃣ API Endpoints
Method	Endpoint	Description
GET	/api/users	Fetch all users
GET	/api/users/leaderboard	Fetch leaderboard
POST	/api/users/add	Add new user
POST	/api/users/claim/:userId	Claim points

8️⃣ License
This project is licensed under the MIT License.

9️⃣ Author
👤 Anuj Bhagat
📧 anuj@example.com
🌐 LinkedIn
