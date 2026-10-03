import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import projectRoutes from './routes/projectRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import experienceRoutes from './routes/experienceRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Health Check API
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0'
  });
});

// REST API Endpoints
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/portfolio', portfolioRoutes);

// Root route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Portfolio REST API</title></head>
      <body style="font-family: sans-serif; padding: 2rem; background: #0f172a; color: #f8fafc;">
        <h2>⚡ Personal Portfolio REST API Server</h2>
        <p>Status: <span style="color: #4ade80;">Active</span></p>
        <hr style="border-color: #334155;" />
        <h3>Available Endpoints:</h3>
        <ul>
          <li><a style="color: #38bdf8;" href="/api/health">GET /api/health</a> - API Health Check</li>
          <li><a style="color: #38bdf8;" href="/api/portfolio/all">GET /api/portfolio/all</a> - Combined Portfolio Data</li>
          <li><a style="color: #38bdf8;" href="/api/projects">GET /api/projects</a> - All Projects</li>
          <li><a style="color: #38bdf8;" href="/api/skills">GET /api/skills</a> - Skills Matrix</li>
          <li><a style="color: #38bdf8;" href="/api/experience/timeline">GET /api/experience/timeline</a> - Experience & Education</li>
          <li><a style="color: #38bdf8;" href="/api/experience/achievements">GET /api/experience/achievements</a> - Achievements</li>
          <li>POST /api/contact - Send Contact Message</li>
        </ul>
      </body>
    </html>
  `);
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`🚀 Portfolio REST API Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
}

export default app;
