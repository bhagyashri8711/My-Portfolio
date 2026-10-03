import React from 'react';
import { 
  X, 
  ExternalLink, 
  Star, 
  CheckCircle2, 
  Layers, 
  Server, 
  Database,
  Globe,
  Target
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import smartCheckoutImg from '../assets/smart_checkout.jpg';

const defaultProblemStatements = {
  "Mental Health Support App": "Individuals struggling with emotional wellness often lack accessible, private, and structured tools to track daily mood patterns, maintain reflective journals, and access reliable mental health support resources in a single place.",
  "Smart Retail Checkout System": "Traditional retail checkout lines suffer from manual scanning bottlenecks, long customer queues, and stock inventory discrepancies, leading to customer frustration and store operation delays.",
  "Developer Analytics Dashboard": "Software engineers and teams frequently struggle to track multi-repository commit histories, daily coding velocity, and task completion metrics across fragmented development platforms."
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const problemStatement = project.problemStatement || defaultProblemStatements[project.title] || "Solves real-world workflow and efficiency challenges through modern web technologies.";

  const resolveImage = (p) => {
    if (p?.title?.toLowerCase().includes('smart checkout') || p?.title?.toLowerCase().includes('smart retail') || p?.imageUrl?.includes('smart_checkout')) {
      return smartCheckoutImg;
    }
    return p?.imageUrl || smartCheckoutImg;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      
      <div 
        className="glass-panel w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-white/95 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30">
                ⭐ Featured Case Study
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Hero */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img 
            src={resolveImage(project)} 
            alt={project.title} 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = smartCheckoutImg;
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white drop-shadow-md">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 bg-white dark:bg-gray-950">
          
          {/* Key Quick Stats */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-gray-100 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 font-mono text-center text-xs">
            <div>
              <span className="text-gray-700 dark:text-gray-400 block font-semibold mb-1">Category</span>
              <span className="text-cyan-700 dark:text-cyan-400 font-bold text-xs sm:text-sm">{project.category}</span>
            </div>
            <div>
              <span className="text-gray-700 dark:text-gray-400 block font-semibold mb-1">GitHub Stars</span>
              <span className="text-purple-700 dark:text-purple-400 font-bold text-xs sm:text-sm">⭐ {project.starsCount || 0}</span>
            </div>
            <div>
              <span className="text-gray-700 dark:text-gray-400 block font-semibold mb-1">Architecture</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold text-xs sm:text-sm">REST API + Mongo</span>
            </div>
          </div>

          {/* Problem Statement Card */}
          <div className="p-4 rounded-xl bg-purple-500/10 dark:bg-purple-500/10 border border-purple-500/30 space-y-1.5">
            <h3 className="text-xs font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
              <Target className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Problem Statement</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
              {problemStatement}
            </p>
          </div>

          {/* Full Detailed Description */}
          <div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Project Overview & Architecture</span>
            </h3>
            <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Server className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Technologies & Libraries Used</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Live Action Buttons */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary py-2.5 px-5 text-sm"
              >
                <Globe className="w-4 h-4" />
                <span>Live Demo</span>
              </a>

              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-secondary py-2.5 px-5 text-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Close Window
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProjectModal;
