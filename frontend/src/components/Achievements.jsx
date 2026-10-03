import React, { useState } from 'react';
import { Award, Trophy, ShieldCheck, ExternalLink, Sparkles, X, Eye } from 'lucide-react';
import hackhiveCertImg from '../assets/hackhive_certificate.png';

const Achievements = ({ achievements = [] }) => {
  const [activeCert, setActiveCert] = useState(null);

  const resolveCertImage = (item) => {
    const src = item?.certificateImage || item?.credentialUrl;
    if (!src || src === '#') return hackhiveCertImg;
    if (typeof src === 'string' && (src.includes('hackhive') || src.includes('assets/hackhive'))) {
      return hackhiveCertImg;
    }
    return src;
  };

  const getBadgeIcon = (badge) => {
    switch (badge) {
      case 'Trophy': return Trophy;
      case 'Shield': return ShieldCheck;
      default: return Award;
    }
  };

  const handleVerifyClick = (e, item) => {
    const certSrc = item.certificateImage || item.credentialUrl;
    if (certSrc && certSrc !== '#') {
      if (typeof certSrc === 'string' && (certSrc.startsWith('http://') || certSrc.startsWith('https://'))) {
        window.open(certSrc, '_blank');
      } else {
        e.preventDefault();
        setActiveCert(item);
      }
    }
  };

  return (
    <section id="achievements" className="section-container relative">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="section-tag">
          <Award className="w-3.5 h-3.5" />
          <span>Honors & Credentials</span>
        </div>
        <h2 className="section-title">
          Achievements & <span className="gradient-text">Certifications</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Recognitions, competitive hackathon wins, and professional technical certifications.
        </p>
      </div>

      {/* Achievements Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item) => {
          const BadgeIcon = getBadgeIcon(item.badge);
          const certSrc = item.certificateImage || item.credentialUrl;
          const hasImage = certSrc && certSrc !== '#';

          return (
            <div 
              key={item._id || item.title}
              className="glass-panel p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-500/40 shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 dark:group-hover:bg-purple-500 group-hover:text-white transition-all">
                    <BadgeIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-gray-600 dark:text-gray-400 font-medium">{item.date}</span>
                </div>

                <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold mb-3">{item.issuer}</p>

                <p className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-gray-600 dark:text-gray-400 font-medium">Verified Credential</span>
                <button 
                  onClick={(e) => handleVerifyClick(e, item)}
                  className={`text-xs flex items-center gap-1 font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                    hasImage 
                      ? 'text-cyan-600 dark:text-cyan-300 bg-cyan-500/10 border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 cursor-pointer shadow-sm'
                      : 'text-gray-400 border-transparent cursor-not-allowed'
                  }`}
                >
                  <span>Verify</span>
                  <Eye className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Certificate Viewer Modal */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 bg-gray-900/80 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-tight">{activeCert.title}</h3>
                  <p className="text-xs text-cyan-400 font-mono">{activeCert.issuer} • {activeCert.date}</p>
                </div>
              </div>

              <button 
                onClick={() => setActiveCert(null)}
                className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-all cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-4 overflow-auto flex justify-center items-center bg-gray-900/50 flex-1">
              <img 
                src={resolveCertImage(activeCert)} 
                alt={activeCert.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = hackhiveCertImg;
                }}
                className="max-w-full max-h-[72vh] object-contain rounded-xl border border-gray-800 shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-gray-900/80 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
              <span>{activeCert.description}</span>
              <button
                onClick={() => setActiveCert(null)}
                className="btn-secondary py-1 px-4 text-xs"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Achievements;
