# 🚀 Personal Portfolio Website (Full-Stack MERN Application)

A modern, live, responsive, and database-driven personal portfolio web application designed for students and software developers to showcase their technical skills, projects, work experience, education, achievements, and contact information.

Built with **React.js, HTML5, CSS3, JavaScript** on the frontend, **Node.js, Express.js** for the REST API backend, **MongoDB** for database persistence, and prepared for **Vercel** cloud deployment.

---

## 📑 Table of Contents
- [Tech Stack Overview](#-tech-stack-overview)
- [Project Architecture & Directory Structure](#-project-architecture--directory-structure)
- [Key Features](#-key-features)
- [REST API Documentation](#-rest-api-documentation)
- [Local Setup & Development Guide](#-local-setup--development-guide)
- [MongoDB Database Seeding](#-mongodb-database-seeding)
- [Deployment on Vercel](#-deployment-on-vercel)

---

## 🛠 Tech Stack Overview

| Layer | Technologies & Tools |
| :--- | :--- |
| **Frontend** | React.js (Vite), HTML5, CSS3 (Custom Glassmorphism + Tailwind), JavaScript (ES6+), Lucide Icons, Canvas Confetti |
| **Backend** | Node.js, Express.js (REST API, CORS, Dotenv, Body Parser) |
| **Database** | MongoDB, Mongoose ODM (Data modeling & schema validation) |
| **Deployment** | Vercel Serverless Functions (`vercel.json`) |
| **Dev Tools** | VS Code, Git, GitHub, Nodemon, Vite CLI |

---

## 📁 Project Architecture & Directory Structure

```text
Portfolio/
├── frontend/                     # React.js Client Application
│   ├── public/                   # Static assets & favicons
│   ├── src/
│   │   ├── components/           # Reusable React UI Components
│   │   │   ├── Navbar.jsx        # Glassmorphic header & REST API status badge
│   │   │   ├── Hero.jsx          # Interactive hero with typing role animation & stats
│   │   │   ├── About.jsx         # Background, bio, & full-stack architecture tabs
│   │   │   ├── Skills.jsx        # Skill progress bars & category filtering
│   │   │   ├── Projects.jsx      # Project gallery, search bar, & category filters
│   │   │   ├── ProjectModal.jsx # Detailed project case study modal
│   │   │   ├── Experience.jsx   # Timeline for work experience & education (B.Tech)
│   │   │   ├── Achievements.jsx # Honors, hackathons, & certification cards
│   │   │   ├── Contact.jsx       # Contact form submitting to POST /api/contact
│   │   │   ├── AdminPanel.jsx   # Admin modal console to test REST API & DB messages
│   │   │   └── Footer.jsx        # Footer with back-to-top & social links
│   │   ├── services/
│   │   │   └── api.js            # REST API service client with auto fallback
│   │   ├── styles/
│   │   │   └── index.css         # CSS design system, dark mode, & glassmorphism
│   │   ├── App.jsx               # Application root, theme toggle, & API data fetch
│   │   └── main.jsx              # Vite React DOM entry
│   ├── index.html                # HTML5 document template & metadata
│   ├── package.json              # Frontend npm dependencies
│   └── vite.config.js            # Vite build configuration
│
├── backend/                      # Node.js & Express REST API Server
│   ├── config/
│   │   └── db.js                 # MongoDB Mongoose connection handler
│   ├── models/                   # Mongoose Schemas & Data Models
│   │   ├── Project.js            # Project schema (title, description, category, etc.)
│   │   ├── Skill.js              # Skill schema (name, category, proficiency, level)
│   │   ├── Experience.js         # Work/Education timeline schema
│   │   ├── Achievement.js        # Achievement & certification schema
│   │   └── ContactMessage.js     # Contact message submission schema
│   ├── controllers/              # REST Controller Logic
│   │   ├── projectController.js  # GET/POST/PUT/DELETE for projects
│   │   ├── skillController.js    # GET/POST for skills matrix
│   │   ├── experienceController.js # GET for timeline & achievements
│   │   └── contactController.js  # POST contact submission & GET messages
│   ├── routes/                   # Express REST Route Handlers
│   │   ├── projectRoutes.js      # /api/projects
│   │   ├── skillRoutes.js        # /api/skills
│   │   ├── experienceRoutes.js   # /api/experience
│   │   ├── contactRoutes.js      # /api/contact
│   │   └── portfolioRoutes.js    # Combined endpoint GET /api/portfolio/all
│   ├── seed/
│   │   └── seedData.js           # CLI script to populate MongoDB database
│   ├── server.js                 # Express server entry point & middleware
│   ├── .env.example              # Sample environment variables
│   ├── .env                      # Local environment configuration
│   └── package.json              # Backend npm dependencies
│
├── vercel.json                   # Vercel deployment configuration
├── .gitignore                    # Git ignored files & directories
└── README.md                     # Comprehensive documentation
```

---

## ✨ Key Features

1. **Interactive Glassmorphic Design**: Modern dark/light mode UI with floating particles, responsive grid layouts, custom scrollbars, and vibrant gradients.
2. **Dynamic Typing Hero**: Animated typing role switcher highlighting key skills (*Full Stack Developer, React.js Specialist, Node.js Architect, MongoDB Database Engineer*).
3. **Category Filtering & Live Search**: Filter projects by category (*Full Stack, Frontend, Backend, AI & Data*) and real-time live keyword search.
4. **Detailed Case Study Modals**: Modal popups providing in-depth architectural breakdown, technology tags, live demo links, and GitHub repository links for every project.
5. **Interactive Experience Timeline**: Vertical connecting timeline displaying work experience, internship highlights, and computer science degree coursework.
6. **REST API Connected Contact Form**: Interactive contact form submitting directly to Express REST endpoint (`POST /api/contact`) with validation, spinner state, and celebration confetti.
7. **Embedded REST API Admin Panel**: Integrated modal console (`/api/projects` POST and `/api/contact/messages` GET) to test full-stack database operations live.
8. **Graceful Standalone Fallback**: Automatic failover mode ensuring the frontend renders mock data seamlessly even if MongoDB or Express is offline.

---

## 📡 REST API Documentation

### 1. Portfolio Combined Data
- **GET** `/api/portfolio/all`
- **Response**: Fetches profile metadata, projects, skills, timeline, and achievements in one single payload.

### 2. Projects Endpoints
- **GET** `/api/projects` - Retrieve all portfolio projects (Optional Query: `?category=Full+Stack&featured=true`)
- **GET** `/api/projects/:id` - Fetch single project details
- **POST** `/api/projects` - Create a new project record in MongoDB
- **PUT** `/api/projects/:id` - Update an existing project
- **DELETE** `/api/projects/:id` - Remove a project

### 3. Skills Endpoints
- **GET** `/api/skills` - Fetch skill list with proficiency scores
- **POST** `/api/skills` - Add new skill

### 4. Experience & Achievements
- **GET** `/api/experience/timeline` - Retrieve career and education timeline
- **GET** `/api/experience/achievements` - Fetch honors and certification badges

### 5. Contact Form Submissions
- **POST** `/api/contact` - Submit contact message `{ name, email, subject, message }`
- **GET** `/api/contact/messages` - Retrieve submitted messages (Admin view)

### 6. Health Check
- **GET** `/api/health` - Check backend uptime and status

---

## ⚙️ Local Setup & Development Guide

### Prerequisites
- **Node.js** (v18+ recommended)
- **npm** (v9+ recommended)
- **MongoDB** (Local instance or MongoDB Atlas connection string)

### 1. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Start development server with nodemon
npm run dev
```
*The REST API server will run on `http://localhost:5000`.*

### 2. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start Vite React development server
npm run dev
```
*The React application will launch on `http://localhost:5173`.*

---

## 🗄 MongoDB Database Seeding

To populate your MongoDB database with pre-configured projects, skills, timeline events, and achievements:

1. Ensure your `backend/.env` contains your `MONGODB_URI`:
   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/portfolio_db
   ```
2. Run the seed script:
   ```bash
   cd backend
   npm run seed
   ```
3. Terminal output:
   `✅ Portfolio MongoDB Database Successfully Seeded with Projects, Skills, & Timeline Data!`

---

## ☁️ Deployment on Vercel

This repository includes a pre-configured `vercel.json` for unified front-and-backend serverless deployment on Vercel.

### Steps to Deploy:
1. Push your repository to **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Personal Portfolio Website"
   git remote add origin https://github.com/your-username/personal-portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Add Environment Variables in Vercel settings:
   - `MONGODB_URI`: `mongodb+srv://<username>:<password>@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority`
   - `NODE_ENV`: `production`
5. Click **Deploy**. Vercel will automatically build the React frontend and deploy the Node.js Express REST API endpoints!

---

## 🎓 License & Credits
Developed by **Bhagyashri** as a full-stack personal portfolio project demonstrating React.js, HTML5, CSS3, JavaScript, Node.js, Express.js, MongoDB, REST API design, and Vercel deployment practices.
