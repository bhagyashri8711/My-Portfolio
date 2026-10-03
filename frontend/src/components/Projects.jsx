import React, { useState } from 'react';
import { 
  FolderGit2, 
  Search, 
  ExternalLink, 
  Star, 
  ArrowUpRight, 
  Filter,
  Sparkles,
  Layers
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectModal from './ProjectModal';
import smartCheckoutImg from '../assets/smart_checkout.jpg';

const Projects = ({ projects = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const resolveProjectImage = (project) => {
    if (project?.title?.toLowerCase().includes('smart checkout') || project?.title?.toLowerCase().includes('smart retail') || project?.imageUrl?.includes('smart_checkout')) {
      return smartCheckoutImg;
    }
    return project?.imageUrl || smartCheckoutImg;
  };

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI & Data'];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section-container relative">
      
      {/* Background Decor */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="section-tag">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Featured Works</span>
        </div>
        <h2 className="section-title">
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Discover web applications and software projects engineered for practical impact.
        </p>

        {/* Controls Bar: Category Filter & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-1.5 glass-panel p-1.5 rounded-2xl border border-gray-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search stack or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-gray-900/80 border border-gray-800 text-white focus:outline-none focus:border-cyan-500 transition-all"
            />
          </div>

        </div>
      </div>

      {/* Projects Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project._id || project.title}
            className="glass-panel rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between shadow-lg"
          >
            <div>
              
              {/* Project Image Box */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-900">
                <img 
                  src={resolveProjectImage(project)} 
                  alt={project.title} 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = smartCheckoutImg;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent" />

                {/* Category Badge Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-gray-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300">
                    {project.category}
                  </span>
                </div>

                {/* Stars badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono bg-gray-950/80 backdrop-blur-md border border-gray-800 text-purple-300">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>{project.starsCount || 0}</span>
                </div>
              </div>

              {/* Project Card Body */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 
                    onClick={() => setActiveModalProject(project)}
                    className="text-xl font-extrabold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-600 dark:text-cyan-400" />
                  </h3>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies?.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Project Card Footer */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/40 border-t border-gray-200 dark:border-gray-800/60 flex items-center justify-between">
              <button
                onClick={() => setActiveModalProject(project)}
                className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors flex items-center gap-1"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-3">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
                  title="Source Code"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="glass-panel p-12 text-center rounded-2xl border border-gray-800 my-8">
          <p className="text-gray-400 text-sm">No projects matching standard filters. Try searching another term!</p>
        </div>
      )}

      {/* Render Detail Modal */}
      {activeModalProject && (
        <ProjectModal 
          project={activeModalProject} 
          onClose={() => setActiveModalProject(null)} 
        />
      )}

    </section>
  );
};

export default Projects;
