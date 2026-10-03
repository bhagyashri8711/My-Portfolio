import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  FileText, 
  ArrowRight, 
  Code2, 
  Server, 
  Database, 
  CheckCircle2,
  MapPin,
  Briefcase
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import profileImg from '../assets/profile.jpg';

const roles = [
  "Web Developer",
  "React Developer",
  "Frontend & Backend Developer",
  "Full Stack Developer"
];

const Hero = ({ profile }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 90);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Intro & CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
              <span>{profile?.availability || "Open for Opportunities"}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">
              Hi, I'm{" "}<span className="gradient-text">{profile?.name || "Bhagyashri"}</span>
              <br />
              <span className="text-xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-2 block">
                I'm a{" "}<span className="text-cyan-600 dark:text-cyan-400 font-mono">{displayText}</span>
                <span className="animate-pulse text-cyan-500 dark:text-cyan-400">|</span>
              </span>
            </h1>

            {/* Subheading - Simple & Down to Earth */}
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
              {profile?.tagline || "Passionate web developer building clean, responsive, and functional web applications using React, JavaScript, Node.js, and MongoDB."}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href={profile?.resumeUrl || "/Bhagyashri_Hosangadi_Resume.pdf"} 
                target="_blank" 
                rel="noreferrer"
                download="Bhagyashri_Hosangadi_Resume.pdf"
                className="btn-secondary flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span>Resume PDF</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Image Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Decorative Subtle Glow Behind Image */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-xl opacity-60" />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-gray-800 p-3 bg-gray-950/90 shadow-2xl">
                
                {/* Profile Photo */}
                <div className="relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800">
                  <img 
                    src={profileImg} 
                    alt="Bhagyashri Profile" 
                    className="w-full h-auto max-h-[440px] object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  
                  {/* Subtle overlay gradient at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent pointer-events-none" />
                </div>

                {/* Profile Card Footer Badge */}
                <div className="mt-3 p-3 rounded-xl bg-gray-900/90 border border-gray-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Bhagyashri</h4>
                      <p className="text-[11px] text-gray-400 font-mono">Web Developer</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Active</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

