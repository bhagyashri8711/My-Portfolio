import React from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  CheckCircle2
} from 'lucide-react';

const defaultSkills = [
  { _id: "s1", name: "HTML5 & CSS3", category: "Frontend", description: "Responsive layouts, Flexbox, Grid, clean semantic HTML" },
  { _id: "s2", name: "JavaScript (ES6+)", category: "Frontend", description: "Modern syntax, async/await, DOM, ES modules" },
  { _id: "s3", name: "React.js", category: "Frontend", description: "Component state, hooks, JSX, SPA development" },
  { _id: "s4", name: "Node.js & Express", category: "Backend", description: "REST APIs, middleware, routing, server logic" },
  { _id: "s5", name: "MongoDB", category: "Database", description: "Document databases, CRUD operations, Mongoose" },
  { _id: "s6", name: "Git & GitHub", category: "Tools", description: "Version control, commits, pull requests, repository management" }
];

const Skills = ({ skills = [] }) => {
  const displaySkills = skills && skills.length > 0 ? skills.slice(0, 8) : defaultSkills;

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'Frontend': return Code2;
      case 'Backend': return Server;
      case 'Database': return Database;
      default: return Wrench;
    }
  };

  return (
    <section id="skills" className="section-container relative">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="section-tag">
          <Code2 className="w-3.5 h-3.5" />
          <span>Core Skills</span>
        </div>
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Core technologies I use to build modern, clean web applications.
        </p>
      </div>

      {/* Simple Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {displaySkills.map((skill) => {
          const CategoryIcon = getCategoryIcon(skill.category);
          return (
            <div 
              key={skill._id || skill.name}
              className="glass-panel p-5 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-cyan-500/40 shadow-sm transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <CategoryIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-base">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-cyan-600 dark:text-cyan-400 font-mono font-semibold">{skill.category}</span>
                </div>
              </div>

              {skill.description && (
                <p className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                  {skill.description}
                </p>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Skills;

