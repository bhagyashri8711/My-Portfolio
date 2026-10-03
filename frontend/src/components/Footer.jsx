import React from 'react';
import { Terminal, Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

const Footer = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-100/90 dark:bg-gray-950/80 pt-12 pb-8 text-xs text-gray-700 dark:text-gray-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800/60">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              <span>Bhagyashri</span>
            </div>
            <p className="text-xs text-gray-700 dark:text-gray-400 max-w-sm leading-relaxed">
              Full-Stack Personal Portfolio Website built with React.js, HTML5, CSS3, JavaScript, Node.js, Express.js, REST API, and MongoDB database architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-mono text-gray-900 dark:text-white font-bold text-xs uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#about" className="text-gray-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="text-gray-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Tech Stack Skills</a></li>
              <li><a href="#projects" className="text-gray-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Projects Showcase</a></li>
              <li><a href="#experience" className="text-gray-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Experience & Education</a></li>
              <li><a href="#contact" className="text-gray-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact REST API</a></li>
            </ul>
          </div>

          {/* Stack & Social */}
          <div className="space-y-2">
            <h4 className="font-mono text-gray-900 dark:text-white font-bold text-xs uppercase tracking-wider">Connect</h4>
            <div className="flex items-center gap-3">
              <a href={profile?.github || "#"} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href={profile?.linkedin || "#"} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href={profile?.twitter || "#"} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all">
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="flex items-center gap-1 text-gray-700 dark:text-gray-400">
            <span>© {new Date().getFullYear()} Bhagyashri. Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>using React, Node, Express & MongoDB.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-1.5 font-mono text-[11px] cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
