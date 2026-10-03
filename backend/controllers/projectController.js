import Project from '../models/Project.js';
import mongoose from 'mongoose';

const mockProjects = [
  {
    _id: "p1",
    title: "AI-Powered Mental Health Platform",
    description: "Full-stack web app providing mood tracking, journal analysis, & peer support network.",
    fullDescription: "A comprehensive digital wellness ecosystem built with React, Node.js, Express, and MongoDB. Features real-time mood logging, NLP journal sentiment scoring, peer support channels, and encrypted user data privacy.",
    category: "Full Stack",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Socket.io"],
    githubUrl: "https://github.com/example/mental-health-support",
    liveUrl: "https://mental-support-demo.vercel.app",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    featured: true,
    starsCount: 42,
    stats: { users: "2.4k", accuracy: "98.5%" }
  },
  {
    _id: "p2",
    title: "DevPulse - Developer Activity Analytics",
    description: "Real-time dashboard for GitHub metrics, commit velocities, and team performance visualization.",
    fullDescription: "Built for software engineering teams to gain granular visibility into code review turnarounds, CI pipeline health, and workflow bottlenecks. Integrates directly with GitHub GraphQL API.",
    category: "Frontend",
    technologies: ["React.js", "Chart.js", "TailwindCSS", "REST API", "Vite"],
    githubUrl: "https://github.com/example/devpulse",
    liveUrl: "https://devpulse-demo.vercel.app",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    featured: true,
    starsCount: 38,
    stats: { users: "1.2k", accuracy: "99.9%" }
  },
  {
    _id: "p3",
    title: "CloudVault - Distributed Microservice Storage",
    description: "High-throughput cloud storage API engine built with Express, Redis caching, and S3 integration.",
    fullDescription: "Secure object-storage backend service implementing JWT authentication, chunked multipart uploads, rate limiting, and automated metadata indexing in MongoDB.",
    category: "Backend",
    technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "AWS S3", "Docker"],
    githubUrl: "https://github.com/example/cloudvault",
    liveUrl: "https://cloudvault-api.vercel.app",
    imageUrl: "https://images.unsplash.com/photo-1618401471353-b98afee042eb?auto=format&fit=crop&w=800&q=80",
    featured: true,
    starsCount: 56,
    stats: { users: "5.0k", accuracy: "100%" }
  },
  {
    _id: "p4",
    title: "Predictive Stock Market Explorer",
    description: "Machine learning analytical dashboard predicting market trends using LSTM & Python microservices.",
    fullDescription: "Interactive financial research platform connecting a React frontend with a Flask ML microservice. Displays real-time candle charts, RSI indicators, and sentiment scoring.",
    category: "AI & Data",
    technologies: ["Python", "React.js", "Node.js", "Express.js", "TensorFlow", "MongoDB"],
    githubUrl: "https://github.com/example/stock-predictor",
    liveUrl: "https://stock-predictor.vercel.app",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    featured: false,
    starsCount: 29,
    stats: { users: "850+", accuracy: "84.2%" }
  }
];

export const getProjects = async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const { category, featured } = req.query;
      let query = {};
      if (category && category !== 'All') query.category = category;
      if (featured === 'true') query.featured = true;

      const projects = await Project.find(query).sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: projects.length, data: projects });
    }
    
    // Memory fallback
    let filtered = [...mockProjects];
    if (req.query.category && req.query.category !== 'All') {
      filtered = filtered.filter(p => p.category === req.query.category);
    }
    if (req.query.featured === 'true') {
      filtered = filtered.filter(p => p.featured);
    }
    return res.status(200).json({ success: true, count: filtered.length, data: filtered, fallback: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    if (mongoose.connection.readyState === 1) {
      const project = await Project.findById(id);
      if (!project) return res.status(404).json({ success: false, message: "Project not found" });
      return res.status(200).json({ success: true, data: project });
    }
    const found = mockProjects.find(p => p._id === id);
    if (!found) return res.status(404).json({ success: false, message: "Project not found" });
    return res.status(200).json({ success: true, data: found, fallback: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createProject = async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const newProject = await Project.create(req.body);
      return res.status(201).json({ success: true, data: newProject });
    }
    const newMock = { _id: "p_" + Date.now(), ...req.body };
    mockProjects.unshift(newMock);
    return res.status(201).json({ success: true, data: newMock, fallback: true });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    if (mongoose.connection.readyState === 1) {
      const updated = await Project.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
      if (!updated) return res.status(404).json({ success: false, message: "Project not found" });
      return res.status(200).json({ success: true, data: updated });
    }
    const idx = mockProjects.findIndex(p => p._id === id);
    if (idx === -1) return res.status(404).json({ success: false, message: "Project not found" });
    mockProjects[idx] = { ...mockProjects[idx], ...req.body };
    return res.status(200).json({ success: true, data: mockProjects[idx], fallback: true });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    if (mongoose.connection.readyState === 1) {
      const deleted = await Project.findByIdAndDelete(id);
      if (!deleted) return res.status(404).json({ success: false, message: "Project not found" });
      return res.status(200).json({ success: true, message: "Project deleted successfully" });
    }
    const idx = mockProjects.findIndex(p => p._id === id);
    if (idx === -1) return res.status(404).json({ success: false, message: "Project not found" });
    mockProjects.splice(idx, 1);
    return res.status(200).json({ success: true, message: "Project deleted (Memory mode)" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
