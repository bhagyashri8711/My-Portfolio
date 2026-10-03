import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  Award
} from 'lucide-react';

const Experience = ({ timeline = [] }) => {
  return (
    <section id="experience" className="section-container relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="section-tag">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Career Journey</span>
        </div>
        <h2 className="section-title">
          Experience & <span className="gradient-text">Education</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Academic achievements, professional software engineering internships, and full-stack milestones.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* Vertical Connecting Guide Line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent -translate-x-1/2 opacity-30" />

        <div className="space-y-12">
          {timeline.map((item, index) => {
            const isWork = item.type === 'Work';
            const isEven = index % 2 === 0;

            return (
              <div 
                key={item._id || index}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                
                {/* Center Badge Icon */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gray-950 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-lg shadow-cyan-500/20 text-cyan-400">
                  {isWork ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                </div>

                {/* Timeline Card */}
                <div className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                  isEven ? 'sm:text-right sm:pr-8' : 'sm:pl-8'
                }`}>
                  <div className="glass-panel p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-cyan-500/40 transition-all duration-300 shadow-lg group">
                    
                    {/* Period & Type Header */}
                    <div className={`flex items-center gap-2 mb-2 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 ${
                      isEven ? 'sm:justify-end' : 'justify-start'
                    }`}>
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                      <span className="text-gray-400">•</span>
                      <MapPin className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      <span className="text-gray-600 dark:text-gray-400 font-medium">{item.location}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {item.roleOrDegree}
                    </h3>
                    <p className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-3">
                      {item.organizationOrUniversity}
                    </p>

                    <p className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Bullet Highlights */}
                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300 font-medium mb-4 text-left">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Skill Tags */}
                    <div className={`flex flex-wrap gap-1.5 ${
                      isEven ? 'sm:justify-end' : 'justify-start'
                    }`}>
                      {item.skillsUsed?.map((s) => (
                        <span 
                          key={s} 
                          className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-cyan-700 dark:text-cyan-300 font-semibold"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default Experience;
