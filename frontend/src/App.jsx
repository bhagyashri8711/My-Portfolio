import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { fetchPortfolioData } from './services/api';
import { CheckCircle2, Loader2, RefreshCw } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('dark');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const loadData = async () => {
    setLoading(true);
    const result = await fetchPortfolioData();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col items-center justify-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-cyan-500/20 border-t-cyan-500 animate-spin" />
          <Loader2 className="w-8 h-8 text-purple-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="text-center font-mono">
          <h2 className="text-lg font-bold gradient-text">Loading Full-Stack Portfolio...</h2>
          <p className="text-xs text-gray-400 mt-1">Fetching REST API endpoints & MongoDB connection</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative selection:bg-cyan-500 selection:text-black">
      
      {/* Toast Alert Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 glass-panel px-5 py-3 rounded-2xl border border-cyan-500/40 text-xs font-semibold text-white shadow-2xl flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-cyan-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        isConnected={data?.isConnected}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Sections */}
      <main>
        <Hero profile={data?.profile} />
        <About profile={data?.profile} />
        <Skills skills={data?.skills} />
        <Projects projects={data?.projects} />
        <Experience timeline={data?.timeline} />
        <Achievements achievements={data?.achievements} />
        <Contact profile={data?.profile} onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer profile={data?.profile} />

      {/* REST API Admin Modal Console */}
      <AdminPanel 
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onRefreshData={loadData}
        isConnected={data?.isConnected}
      />

    </div>
  );
}

export default App;
