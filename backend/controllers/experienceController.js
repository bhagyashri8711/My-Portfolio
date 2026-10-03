import Experience from '../models/Experience.js';
import Achievement from '../models/Achievement.js';
import mongoose from 'mongoose';

const mockExperience = [
  {
    _id: "e1",
    type: "Work",
    roleOrDegree: "Full Stack Software Developer",
    organizationOrUniversity: "TechNova Solutions",
    period: "2024 - Present",
    location: "Remote / Hybrid",
    description: "Architecting microservices and reactive frontend modules for high-traffic SaaS web applications.",
    highlights: [
      "Engineered full-stack features using React.js, Node.js, Express, and MongoDB.",
      "Optimized MongoDB query performance by 40% using compound indexing & aggregation pipelines.",
      "Automated CI/CD deployments to Vercel and AWS Cloud, reducing release cycle times by 50%."
    ],
    skillsUsed: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Vercel"]
  },
  {
    _id: "e2",
    type: "Work",
    roleOrDegree: "Frontend Development Intern",
    organizationOrUniversity: "CodeCrafters Studio",
    period: "2026",
    location: "Remote / Hybrid",
    description: "Developed interactive, mobile-responsive web interfaces with clean JavaScript and modern CSS architectures.",
    highlights: [
      "Built over 15+ reusable React UI components conforming to accessibility (WCAG 2.1) standards.",
      "Collaborated with backend engineers to integrate RESTful endpoints and handle real-time state management."
    ],
    skillsUsed: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "REST API"]
  },
  {
    _id: "e3",
    type: "Education",
    roleOrDegree: "Bachelor of Technology (B.Tech) in Computer Science (3rd Year)",
    organizationOrUniversity: "Jain College of Engineering and Research, Belagavi",
    period: "2024 - 2028",
    location: "Campus",
    description: "Currently a 3rd-year Computer Science student specializing in Full-Stack Web Development, Data Structures & Algorithms, and Database Systems.",
    highlights: [
      "Currently pursuing 3rd Year in Computer Science & Engineering.",
      "Lead Developer & Active Member of University Web Development Club.",
      "Building full-stack web applications alongside academic coursework."
    ],
    skillsUsed: ["Data Structures", "DBMS", "Node.js", "React.js", "System Design"]
  }
];

const mockAchievements = [
  {
    _id: "a1",
    title: "HACKHIVE-2K26 National Hackathon",
    issuer: "AITM Belagavi (Dept. of ECE & IEEE/ACM)",
    date: "May 6 & 7, 2026",
    description: "Active participation in HACKHIVE-2K26, a National Level Hackathon held on 6th & 7th of MAY 2026 by the Department of ECE with IEEE & ACM Student Chapters at Angadi Institute of Technology and Management, Belagavi.",
    credentialUrl: "/hackhive_certificate.png",
    certificateImage: "/hackhive_certificate.png",
    badge: "Trophy"
  },
  {
    _id: "a2",
    title: "Full-Stack Web Development Certification",
    issuer: "Full Stack Training Program",
    date: "2024",
    description: "Completed full-stack web development course covering React, Node.js, Express, and MongoDB.",
    credentialUrl: "https://example.com/certificate/fullstack",
    badge: "Award"
  }
];

export const getExperiences = async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const experiences = await Experience.find({}).sort({ createdAt: -1 });
      if (experiences.length > 0) {
        return res.status(200).json({ success: true, count: experiences.length, data: experiences });
      }
    }
    return res.status(200).json({ success: true, count: mockExperience.length, data: mockExperience, fallback: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAchievements = async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const achievements = await Achievement.find({}).sort({ createdAt: -1 });
      if (achievements.length > 0) {
        return res.status(200).json({ success: true, count: achievements.length, data: achievements });
      }
    }
    return res.status(200).json({ success: true, count: mockAchievements.length, data: mockAchievements, fallback: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
