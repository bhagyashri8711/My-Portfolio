import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Terminal, 
  Code2, 
  FolderGit2, 
  Cpu, 
  Briefcase, 
  Award, 
  Mail, 
  Database,
  Sliders
} from 'lucide-react';

const Navbar = ({ theme, toggleTheme, isConnected, onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: Code2 },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Achievements', href: '#achievements', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-opacity-80 backdrop-blur-md border-b border-gray-800/50 shadow-lg' 
        : 'py-5 bg-transparent'
    }`}
    style={{
      background: isScrolled ? 'var(--glass-bg)' : 'transparent',
      borderColor: 'var(--border-color)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="text-xl font-extrabold tracking-tight">
          <span className="text-gray-900 dark:text-white">
            Bhagyashri
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
                style={{ color: 'var(--text-secondary)' }}
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right Action Icons & API Status Indicator */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* REST API Database Indicator Badge */}
          <div 
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border"
            style={{
              background: isConnected ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
              borderColor: isConnected ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)',
              color: isConnected ? '#10b981' : '#f59e0b'
            }}
            title={isConnected ? "REST API & MongoDB Connected" : "Local Standalone Mode (Express REST Ready)"}
          >
            <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
            <Database className="w-3.5 h-3.5" />
            <span>{isConnected ? 'MongoDB REST' : 'Express API'}</span>
          </div>

          {/* Admin Toggle button */}
          <button
            onClick={onOpenAdmin}
            className="p-2.5 rounded-xl border border-gray-800 hover:border-cyan-500/50 text-gray-400 hover:text-cyan-400 transition-all bg-gray-900/50"
            title="Admin Dashboard (Manage REST API Projects)"
          >
            <Sliders className="w-4 h-4" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-gray-800 hover:border-cyan-500/50 text-gray-400 hover:text-cyan-400 transition-all bg-gray-900/50"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-600" />}
          </button>

          <a href="#contact" className="btn-primary py-2 px-4 text-xs font-semibold">
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-gray-800 text-gray-400"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-gray-800 text-gray-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel mx-4 mt-2 p-4 rounded-2xl border border-gray-800 shadow-2xl space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-white/5 transition-all"
                style={{ color: 'var(--text-primary)' }}
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                {link.name}
              </a>
            );
          })}
          <div className="pt-3 border-t border-gray-800 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAdmin(); }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono rounded-lg border border-cyan-500/30 text-cyan-400"
            >
              <Sliders className="w-3.5 h-3.5" /> Open API Admin Panel
            </button>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center justify-center py-2.5"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
