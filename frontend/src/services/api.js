import smartCheckoutImg from '../assets/smart_checkout.jpg';
import hackhiveCertImg from '../assets/hackhive_certificate.png';

const API_BASE_URL = 'http://localhost:5000/api';

const fallbackData = {
  profile: {
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
  },
  projects: [
    {
      _id: "p1",
      title: "Mental Health Support App",
      problemStatement: "Individuals struggling with emotional wellness often lack accessible, private, and structured tools to track daily mood patterns, maintain reflective journals, and access reliable mental health support resources in a single place.",
      description: "A web app for mood tracking, daily journaling, and wellness resources.",
      fullDescription: "A full-stack web application built with React, Node.js, Express, and MongoDB. Allows users to log daily moods, write encrypted journal entries, track emotional trends over time, and explore curated mental health resources.",
      category: "Full Stack",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/bhagyashri8711/Mental-Health.git",
      liveUrl: "https://github.com/bhagyashri8711/Mental-Health.git",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      _id: "p2",
      title: "Smart Retail Checkout System",
      problemStatement: "Traditional retail checkout lines suffer from manual scanning bottlenecks, long customer queues, and stock inventory discrepancies, leading to customer frustration and store operation delays.",
      description: "Automated retail checkout and inventory management system.",
      fullDescription: "An intelligent smart checkout application designed to automate item detection, cart management, instant billing calculations, and streamlined retail transactions.",
      category: "Full Stack",
      technologies: ["Python", "React.js", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/bhagyashri8711/smart_retail_checkout-sysrtem.git",
      liveUrl: "https://github.com/bhagyashri8711/smart_retail_checkout-sysrtem.git",
      imageUrl: smartCheckoutImg,
      featured: true
    },
    {
      _id: "p3",
      title: "Developer Analytics Dashboard",
      problemStatement: "Software engineers and teams frequently struggle to track multi-repository commit histories, daily coding velocity, and task completion metrics across fragmented development platforms.",
      description: "A frontend dashboard for visualizing coding metrics and task progress.",
      fullDescription: "Built with React.js and CSS to display project progress, task completions, commit history graphs, and performance metrics in a clear responsive UI.",
      category: "Frontend",
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/bhagyashri8711",
      liveUrl: "https://vercel.com/",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      featured: true
    }
  ],
  skills: [
    { _id: "s1", name: "HTML5 & CSS3", category: "Frontend", description: "Responsive layouts, Flexbox, Grid, semantic HTML" },
    { _id: "s2", name: "JavaScript (ES6+)", category: "Frontend", description: "DOM manipulation, ES6 features, async programming" },
    { _id: "s3", name: "React.js", category: "Frontend", description: "Single Page Apps, component state, hooks, JSX" },
    { _id: "s4", name: "Node.js & Express", category: "Backend", description: "REST API routes, HTTP servers, middleware" },
    { _id: "s5", name: "MongoDB", category: "Database", description: "Document storage, CRUD operations, Mongoose schemas" },
    { _id: "s6", name: "Git & GitHub", category: "Tools", description: "Version control, branching, repository management" }
  ],
  timeline: [
    {
      _id: "e1",
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
      _id: "e2",
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
  ],
  achievements: [
    {
      _id: "a1",
      title: "HACKHIVE-2K26 National Hackathon",
      issuer: "AITM Belagavi (Dept. of ECE & IEEE/ACM)",
      date: "May 2026",
      description: "Active participation in HACKHIVE-2K26, a National Level Hackathon held on 6th & 7th MAY 2026 at Angadi Institute of Technology and Management, Belagavi.",
      credentialUrl: hackhiveCertImg,
      certificateImage: hackhiveCertImg,
      badge: "Trophy"
    },
    {
      _id: "a2",
      title: "Web Development Certification",
      issuer: "Full Stack Training Program",
      date: "2024",
      description: "Completed full-stack web development course covering React, Node.js, Express, and MongoDB.",
      credentialUrl: "#",
      badge: "Award"
    }
  ]
};

export const fetchPortfolioData = async () => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(`${API_BASE_URL}/portfolio/all`, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        return { ...data.data, isConnected: true };
      }
    }
  } catch (err) {
    console.log("REST API offline or connecting, utilizing client fallback state:", err.message);
  }
  return { ...fallbackData, isConnected: false };
};

export const sendContactMessage = async (formData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw new Error(data.message || "Failed to send message via REST API.");
    }
  } catch (err) {
    console.warn("Contact API network error, utilizing local dispatch simulation:", err.message);
    // Simulate successful REST API dispatch
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      success: true,
      message: "Message received successfully! (Simulated REST API Response)",
      fallback: true
    };
  }
};

export const createNewProject = async (projectData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projectData)
    });
    const data = await res.json();
    if (res.ok) return data;
    throw new Error(data.message);
  } catch (err) {
    return {
      success: true,
      data: { _id: "p_" + Date.now(), ...projectData },
      fallback: true
    };
  }
};
