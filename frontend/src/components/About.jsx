import React, { useState } from 'react';
import { 
  User, 
  Code, 
  Database, 
  Server, 
  Layers, 
  GraduationCap,
  FileText,
  Download,
  Eye,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  X,
  Phone,
  Mail,
  MapPin,
  Terminal,
  Wrench
} from 'lucide-react';

const About = ({ profile }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showResumeModal, setShowResumeModal] = useState(false);

  const resumePdfPath = profile?.resumeUrl || "/Bhagyashri_Hosangadi_Resume.pdf";

  return (
    <section id="about" className="section-container relative">
      
      {/* Background Decor Glow */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="section-tag">
          <User className="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>
        <h2 className="section-title">
          Getting to Know <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Computer Science Engineering student passionate about full-stack web development, frontend interfaces, backend APIs, and database engineering.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Core Focus & Resume Card */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="glass-panel p-6 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span>Career Objective</span>
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 uppercase">
                BE CSE • 2028
              </span>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
              {profile?.about || "Computer Science Engineering student interested in full-stack web development and software engineering. Building practical web applications and strengthening skills in frontend development, backend services, and databases. Seeking an internship opportunity to learn from real-world projects and contribute to a collaborative team."}
            </p>

            {/* Resume Quick Action Card */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent border border-cyan-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white">Bhagyashri Hosangadi Resume</h4>
                    <p className="text-[11px] text-gray-600 dark:text-gray-400 font-mono">PDF • Full-Stack Developer</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={resumePdfPath}
                  target="_blank"
                  rel="noreferrer"
                  download="Bhagyashri_Hosangadi_Resume.pdf"
                  className="flex-1 py-2 px-3 rounded-xl bg-cyan-500 text-gray-950 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-cyan-400 transition-all shadow-md cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume</span>
                </a>
                <button
                  onClick={() => setShowResumeModal(true)}
                  className="py-2 px-3 rounded-xl bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white hover:border-cyan-500/50 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                  <span>View</span>
                </button>
              </div>
            </div>

            {/* Core Competencies Pills */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-100/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-white">Frontend Engineering</h4>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400">React.js, JavaScript, HTML5, CSS3</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-100/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-white">Backend Services</h4>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400">Node.js, Express.js, REST APIs</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-100/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-white">Databases & Cloud</h4>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400">MongoDB, SQL, Supabase</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Tabbed Detailed Views */}
        <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col justify-between">
          <div>
            
            {/* Nav Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 dark:border-gray-800 pb-4 mb-6">
              {[
                { id: 'overview', label: 'Background & Bio', icon: User },
                { id: 'stack', label: 'Technical Skills', icon: Layers },
                { id: 'education', label: 'Education', icon: GraduationCap },
                { id: 'resume', label: 'Resume & PDF', icon: FileText }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content 1: Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 space-y-2">
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">Bhagyashri Hosangadi</h4>
                  <p className="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-semibold">
                    Computer Science Engineering Student | Aspiring Full-Stack Developer
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed pt-1">
                    Passionate Computer Science student at Jain College of Engineering and Research, Belagavi. Focused on building intuitive frontend interfaces, scalable Node.js/Express backend APIs, and modern database architectures.
                  </p>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800">
                    <span className="text-gray-500 dark:text-gray-400 block text-[10px]">COLLEGE</span>
                    <span className="text-gray-900 dark:text-white font-semibold text-[11px] block truncate" title="Jain College of Engineering and Research, Belagavi">
                      Jain College of Engg. & Research
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800">
                    <span className="text-gray-500 dark:text-gray-400 block text-[10px]">DEGREE</span>
                    <span className="text-purple-600 dark:text-purple-300 font-semibold text-[11px] block">
                      B.E. Computer Science (2028)
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800">
                    <span className="text-gray-500 dark:text-gray-400 block text-[10px]">EMAIL</span>
                    <a href="mailto:bhagyashri8711@gmail.com" className="text-cyan-600 dark:text-cyan-300 font-semibold text-[11px] hover:underline block truncate">
                      bhagyashri8711@gmail.com
                    </a>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800">
                    <span className="text-gray-500 dark:text-gray-400 block text-[10px]">PHONE</span>
                    <a href="tel:8088004926" className="text-emerald-600 dark:text-emerald-300 font-semibold text-[11px] hover:underline block">
                      8088004926
                    </a>
                  </div>
                </div>

                {/* Core Strengths */}
                <div className="pt-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-xs mb-2">Core Strengths (from Resume):</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Problem Solving',
                      'Team Collaboration',
                      'Adaptability',
                      'Willingness to Learn',
                      'Software Solutions'
                    ].map((strength) => (
                      <span
                        key={strength}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300 font-semibold flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-purple-500" />
                        <span>{strength}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* Tab Content 2: Technical Skills */}
            {activeTab === 'stack' && (
              <div className="space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <h4 className="font-semibold text-gray-900 dark:text-white">Technical Skills Summary:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 space-y-1">
                    <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 font-mono block">Programming</span>
                    <p className="text-xs text-gray-900 dark:text-white font-semibold">C, C++, Python</p>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 space-y-1">
                    <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 font-mono block">Frontend</span>
                    <p className="text-xs text-gray-900 dark:text-white font-semibold">HTML, CSS, JavaScript, React.js</p>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 space-y-1">
                    <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 font-mono block">Backend</span>
                    <p className="text-xs text-gray-900 dark:text-white font-semibold">Node.js, Express.js</p>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 space-y-1">
                    <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 font-mono block">Databases & Services</span>
                    <p className="text-xs text-gray-900 dark:text-white font-semibold">MongoDB, SQL, Supabase</p>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 sm:col-span-2 space-y-1">
                    <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 font-mono block">Tools & Environments</span>
                    <p className="text-xs text-gray-900 dark:text-white font-semibold">Git, GitHub, Visual Studio Code</p>
                  </div>

                </div>
              </div>
            )}

            {/* Tab Content 3: Education */}
            {activeTab === 'education' && (
              <div className="space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono text-cyan-600 dark:text-cyan-400">
                    <span>Expected Graduation: 2028</span>
                    <span>Pursuing B.E.</span>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base">
                    Bachelor of Engineering (B.E.) — Computer Science and Engineering
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 text-xs font-bold">
                    Jain College of Engineering and Research, Belagavi
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs pt-1">
                    Coursework Focus: Web Development, Data Structures, Software Engineering, Database Management Systems (DBMS), Operating Systems, Object-Oriented Programming.
                  </p>
                </div>
              </div>
            )}

            {/* Tab Content 4: Resume & PDF */}
            {activeTab === 'resume' && (
              <div className="space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <div className="p-5 rounded-2xl bg-gray-100 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">Bhagyashri Hosangadi Resume</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Official Computer Science & Engineering Resume</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={resumePdfPath}
                        target="_blank"
                        rel="noreferrer"
                        download="Bhagyashri_Hosangadi_Resume.pdf"
                        className="py-1.5 px-3 rounded-lg bg-cyan-500 text-gray-950 font-bold text-xs flex items-center gap-1 hover:bg-cyan-400 transition-all cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </a>
                      <button
                        onClick={() => setShowResumeModal(true)}
                        className="py-1.5 px-3 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-300 text-xs font-semibold flex items-center gap-1 hover:bg-purple-500/20 transition-all cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview PDF</span>
                      </button>
                    </div>
                  </div>

                  <div className="text-xs space-y-2 pt-2 border-t border-gray-200 dark:border-gray-800">
                    <p className="font-semibold text-gray-900 dark:text-white">Included Sections in Resume:</p>
                    <ul className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-300 font-mono text-[11px]">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-cyan-500" />
                        <span>Career Objective</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-cyan-500" />
                        <span>Education (B.E. CSE 2028)</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-cyan-500" />
                        <span>Technical Skills</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-cyan-500" />
                        <span>Selected Projects</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-cyan-500" />
                        <span>Core Strengths</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-cyan-500" />
                        <span>Contact Info</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Quick Footer CTA */}
          <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-gray-600 dark:text-gray-400">Bhagyashri Hosangadi • Resume PDF Available</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowResumeModal(true)}
                className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </button>
              <a 
                href={resumePdfPath} 
                target="_blank" 
                rel="noreferrer" 
                download="Bhagyashri_Hosangadi_Resume.pdf"
                className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Resume Preview Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[85vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 bg-gray-900/90 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-tight">Bhagyashri Hosangadi — Resume PDF</h3>
                  <p className="text-xs text-cyan-400 font-mono">bhagyashri8711@gmail.com • 8088004926</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a 
                  href={resumePdfPath}
                  target="_blank"
                  rel="noreferrer"
                  download="Bhagyashri_Hosangadi_Resume.pdf"
                  className="py-1.5 px-3 rounded-xl bg-cyan-500 text-gray-950 font-bold text-xs flex items-center gap-1.5 hover:bg-cyan-400 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
                <button 
                  onClick={() => setShowResumeModal(false)}
                  className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-all cursor-pointer"
                  title="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF View */}
            <div className="flex-1 bg-gray-900 p-2 overflow-hidden">
              <iframe
                src={resumePdfPath}
                title="Bhagyashri Hosangadi Resume PDF"
                className="w-full h-full rounded-xl border border-gray-800"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-gray-900/90 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
              <span>Jain College of Engineering and Research, Belagavi • Expected Graduation: 2028</span>
              <button
                onClick={() => setShowResumeModal(false)}
                className="btn-secondary py-1 px-4 text-xs"
              >
                Close Viewer
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default About;
