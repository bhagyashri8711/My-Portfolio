import express from 'express';
import { getProjects } from '../controllers/projectController.js';
import { getSkills } from '../controllers/skillController.js';
import { getExperiences, getAchievements } from '../controllers/experienceController.js';

const router = express.Router();

router.get('/all', async (req, res) => {
  try {
    const profile = {
      name: "Bhagyashri Hosangadi",
      title: "Computer Science Engineering Student | Aspiring Full-Stack Developer",
      tagline: "Computer Science Engineering student building practical web applications with React, Node.js, Express, and MongoDB.",
      about: "Computer Science Engineering student interested in full-stack web development and software engineering. Building practical web applications and strengthening skills in frontend development, backend services, and databases. Seeking an internship opportunity to learn from real-world projects and contribute to a collaborative team.",
      college: "Jain College of Engineering and Research, Belagavi",
      graduationYear: "2028",
      location: "Belagavi, India",
      availability: "Available for Internships & Full-Stack Roles",
      github: "https://github.com/bhagyashri8711",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
      email: "bhagyashri8711@gmail.com",
      phone: "8088004926",
      resumeUrl: "/Bhagyashri_Hosangadi_Resume.pdf",
      stats: {
        projectsCompleted: 8,
        codeCommits: "250+",
        techStackCount: 8,
        yearsExperience: "3rd Year"
      }
    };

    // Helper fake res to capture controller outputs seamlessly
    const mockRes = () => {
      let data;
      return {
        status: () => ({
          json: (d) => { data = d; return d; }
        }),
        getData: () => data
      };
    };

    const resProj = mockRes();
    await getProjects({ query: {} }, resProj);
    
    const resSkill = mockRes();
    await getSkills({}, resSkill);

    const resExp = mockRes();
    await getExperiences({}, resExp);

    const resAch = mockRes();
    await getAchievements({}, resAch);

    return res.status(200).json({
      success: true,
      data: {
        profile,
        projects: resProj.getData()?.data || [],
        skills: resSkill.getData()?.data || [],
        timeline: resExp.getData()?.data || [],
        achievements: resAch.getData()?.data || []
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
