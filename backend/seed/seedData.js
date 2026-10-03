import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Experience from '../models/Experience.js';
import Achievement from '../models/Achievement.js';
import connectDB from '../config/db.js';

dotenv.config();

const initialProjects = [
  {
    title: "Mental Health Support App",
    description: "A web app for mood tracking, daily journaling, and wellness resources.",
    fullDescription: "A full-stack web application built with React, Node.js, Express, and MongoDB. Allows users to log daily moods, write journal entries, and explore mental health resources.",
    category: "Full Stack",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/bhagyashri8711/Mental-Health.git",
    liveUrl: "https://github.com/bhagyashri8711/Mental-Health.git",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    title: "Smart Retail Checkout System",
    description: "Automated retail checkout and inventory management system.",
    fullDescription: "An intelligent smart checkout application designed to automate item detection, cart management, and streamlined retail transactions.",
    category: "Full Stack",
    technologies: ["Python", "React.js", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/bhagyashri8711/smart_retail_checkout-sysrtem.git",
    liveUrl: "https://github.com/bhagyashri8711/smart_retail_checkout-sysrtem.git",
    imageUrl: "/smart_checkout.jpg",
    featured: true
  },
  {
    title: "Developer Analytics Dashboard",
    description: "A frontend dashboard for visualizing coding metrics and task progress.",
    fullDescription: "Built with React.js and CSS to display project progress, task completions, and commit history graphs in a clear responsive UI.",
    category: "Frontend",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/bhagyashri8711",
    liveUrl: "https://devpulse-demo.vercel.app",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    featured: true
  }
];

const initialSkills = [
  { name: "HTML5 & CSS3", category: "Frontend", proficiency: 95, icon: "Layout", level: "Expert" },
  { name: "JavaScript (ES6+)", category: "Frontend", proficiency: 92, icon: "Code", level: "Expert" },
  { name: "React.js", category: "Frontend", proficiency: 90, icon: "React", level: "Expert" },
  { name: "Node.js & Express", category: "Backend", proficiency: 88, icon: "Server", level: "Advanced" },
  { name: "MongoDB", category: "Database", proficiency: 85, icon: "Database", level: "Advanced" },
  { name: "Git & GitHub", category: "Tools & DevOps", proficiency: 92, icon: "GitBranch", level: "Expert" }
];

const initialExperiences = [
  {
    type: "Work",
    roleOrDegree: "Web Developer Intern",
    organizationOrUniversity: "CodeCrafters Studio",
    period: "2026",
    location: "Remote / Hybrid",
    description: "Assisted in building responsive web components and connecting REST APIs.",
    highlights: [
      "Created reusable React UI components.",
      "Integrated backend REST API routes with React frontend."
    ],
    skillsUsed: ["React.js", "JavaScript", "HTML5", "CSS3", "Git"]
  },
  {
    type: "Education",
    roleOrDegree: "Bachelor of Technology (B.Tech) in Computer Science (3rd Year)",
    organizationOrUniversity: "Jain College of Engineering and Research, Belagavi",
    period: "2024 - 2028",
    location: "Campus",
    description: "Currently a 3rd-year Computer Science Engineering student focused on Web Development, Software Engineering, and Database Systems.",
    highlights: [
      "Currently pursuing 3rd Year B.Tech in Computer Science & Engineering.",
      "Completed key coursework in Web Technologies and Data Structures.",
      "Built web application projects as part of academic curriculum."
    ],
    skillsUsed: ["JavaScript", "DBMS", "Node.js", "React.js"]
  }
];

const initialAchievements = [
  {
    title: "HACKHIVE-2K26 National Hackathon",
    issuer: "AITM Belagavi (Dept. of ECE & IEEE/ACM)",
    date: "May 6 & 7, 2026",
    description: "Active participation in HACKHIVE-2K26, a National Level Hackathon held on 6th & 7th of MAY 2026 by the Department of ECE with IEEE & ACM Student Chapters at Angadi Institute of Technology and Management, Belagavi.",
    credentialUrl: "/hackhive_certificate.png",
    certificateImage: "/hackhive_certificate.png",
    badge: "Trophy"
  },
  {
    title: "Full-Stack Web Development Certification",
    issuer: "Full Stack Training Program",
    date: "2024",
    description: "Completed comprehensive full-stack web development course covering React, Node.js, Express, and MongoDB.",
    credentialUrl: "https://example.com/certificate",
    badge: "Award"
  }
];

const seedData = async () => {
  const isConnected = await connectDB();
  if (!isConnected) {
    console.error('Cannot seed data: MongoDB is not connected.');
    process.exit(1);
  }

  try {
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Experience.deleteMany({});
    await Achievement.deleteMany({});

    await Project.insertMany(initialProjects);
    await Skill.insertMany(initialSkills);
    await Experience.insertMany(initialExperiences);
    await Achievement.insertMany(initialAchievements);

    console.log('✅ Portfolio MongoDB Database Successfully Seeded with Projects, Skills, & Timeline Data!');
    process.exit(0);
  } catch (error) {
    console.error(`Error Seeding Data: ${error.message}`);
    process.exit(1);
  }
};

seedData();
