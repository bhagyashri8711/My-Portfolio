import Skill from '../models/Skill.js';
import mongoose from 'mongoose';

const mockSkills = [
  // Frontend
  { _id: "s1", name: "React.js", category: "Frontend", proficiency: 92, icon: "React", level: "Expert" },
  { _id: "s2", name: "JavaScript (ES6+)", category: "Frontend", proficiency: 95, icon: "Code", level: "Expert" },
  { _id: "s3", name: "HTML5 & CSS3", category: "Frontend", proficiency: 98, icon: "Layout", level: "Expert" },
  { _id: "s4", name: "TailwindCSS", category: "Frontend", proficiency: 90, icon: "Palette", level: "Advanced" },
  { _id: "s5", name: "Redux / Zustand", category: "Frontend", proficiency: 85, icon: "Cpu", level: "Advanced" },
  
  // Backend
  { _id: "s6", name: "Node.js", category: "Backend", proficiency: 90, icon: "Server", level: "Expert" },
  { _id: "s7", name: "Express.js", category: "Backend", proficiency: 92, icon: "Terminal", level: "Expert" },
  { _id: "s8", name: "REST APIs", category: "Backend", proficiency: 95, icon: "Globe", level: "Expert" },
  { _id: "s9", name: "GraphQL", category: "Backend", proficiency: 75, icon: "Share2", level: "Intermediate" },
  
  // Database
  { _id: "s10", name: "MongoDB", category: "Database", proficiency: 88, icon: "Database", level: "Advanced" },
  { _id: "s11", name: "Mongoose ODM", category: "Database", proficiency: 90, icon: "Layers", level: "Advanced" },
  { _id: "s12", name: "PostgreSQL", category: "Database", proficiency: 80, icon: "HardDrive", level: "Intermediate" },
  
  // Tools & DevOps
  { _id: "s13", name: "Git & GitHub", category: "Tools & DevOps", proficiency: 94, icon: "GitBranch", level: "Expert" },
  { _id: "s14", name: "VS Code", category: "Tools & DevOps", proficiency: 98, icon: "Monitor", level: "Expert" },
  { _id: "s15", name: "Vercel / Netlify", category: "Tools & DevOps", proficiency: 92, icon: "Cloud", level: "Advanced" },
  { _id: "s16", name: "Docker & CI/CD", category: "Tools & DevOps", proficiency: 78, icon: "Box", level: "Intermediate" }
];

export const getSkills = async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const skills = await Skill.find({}).sort({ proficiency: -1 });
      if (skills.length > 0) {
        return res.status(200).json({ success: true, count: skills.length, data: skills });
      }
    }
    return res.status(200).json({ success: true, count: mockSkills.length, data: mockSkills, fallback: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createSkill = async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const skill = await Skill.create(req.body);
      return res.status(201).json({ success: true, data: skill });
    }
    const newMock = { _id: "s_" + Date.now(), ...req.body };
    mockSkills.push(newMock);
    return res.status(201).json({ success: true, data: newMock, fallback: true });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
