import React, { useState, useEffect } from 'react';
import { 
  X, 
  Plus, 
  Database, 
  FolderPlus, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  Server,
  Code
} from 'lucide-react';
import { createNewProject } from '../services/api';

const AdminPanel = ({ isOpen, onClose, onRefreshData, isConnected }) => {
  const [activeTab, setActiveTab] = useState('add-project');
  const [messages, setMessages] = useState([]);
  const [loadingMsg, setLoadingMsg] = useState(false);

  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    fullDescription: '',
    category: 'Full Stack',
    technologies: 'React.js, Node.js, Express.js, MongoDB',
    githubUrl: 'https://github.com/',
    liveUrl: 'https://vercel.com/',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    featured: true,
    starsCount: 12
  });

  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen && activeTab === 'view-messages') {
      fetchMessages();
    }
  }, [isOpen, activeTab]);

  const fetchMessages = async () => {
    setLoadingMsg(true);
    try {
      const res = await fetch('http://localhost:5000/api/contact/messages');
      const data = await res.json();
      if (data.success) {
        setMessages(data.data || []);
      }
    } catch (err) {
      console.log("Using fallback message list");
    } finally {
      setLoadingMsg(false);
    }
  };

  if (!isOpen) return null;

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const formattedPayload = {
      ...projectForm,
      technologies: projectForm.technologies.split(',').map(t => t.trim()),
      starsCount: Number(projectForm.starsCount)
    };

    try {
      const res = await createNewProject(formattedPayload);
      if (res.success) {
        setStatus({ type: 'success', text: 'New Project successfully added via REST API (POST /api/projects)!' });
        setProjectForm({
          title: '',
          description: '',
          fullDescription: '',
          category: 'Full Stack',
          technologies: 'React.js, Node.js, Express.js, MongoDB',
          githubUrl: 'https://github.com/',
          liveUrl: 'https://vercel.com/',
          imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
          featured: true,
          starsCount: 12
        });
        if (onRefreshData) onRefreshData();
      } else {
        setStatus({ type: 'error', text: res.message || 'Error creating project.' });
      }
    } catch (err) {
      setStatus({ type: 'error', text: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      
      <div className="glass-panel w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-800 bg-gray-950 shadow-2xl relative flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-gray-900 border-b border-gray-800 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">REST API Admin Console</h2>
              <p className="text-xs text-gray-400 font-mono">
                {isConnected ? 'MongoDB Cloud Active' : 'Express Memory Server Mode'}
              </p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-xl text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 pt-4 border-b border-gray-800 flex gap-4">
          <button
            onClick={() => setActiveTab('add-project')}
            className={`pb-3 text-xs font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'add-project'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <FolderPlus className="w-4 h-4" />
            <span>Add Project (POST /api/projects)</span>
          </button>

          <button
            onClick={() => setActiveTab('view-messages')}
            className={`pb-3 text-xs font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'view-messages'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>View Submissions (GET /api/contact/messages)</span>
          </button>
        </div>

        {/* Tab 1: Add Project Form */}
        {activeTab === 'add-project' && (
          <div className="p-6 space-y-4">
            
            {status && (
              <div className={`p-3 rounded-xl text-xs flex items-center gap-2 border ${
                status.type === 'success' 
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : 'bg-red-500/10 border-red-500/30 text-red-300'
              }`}>
                {status.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                <span>{status.text}</span>
              </div>
            )}

            <form onSubmit={handleProjectSubmit} className="space-y-4 text-xs">
              <div>
                <label className="text-gray-400 block mb-1 font-mono">Project Title *</label>
                <input
                  type="text"
                  required
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-cyan-500"
                  placeholder="e.g. E-Commerce Microservices Engine"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 block mb-1 font-mono">Category</label>
                  <select
                    value={projectForm.category}
                    onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Full Stack">Full Stack</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="AI & Data">AI & Data</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-400 block mb-1 font-mono">Stars Count</label>
                  <input
                    type="number"
                    value={projectForm.starsCount}
                    onChange={(e) => setProjectForm({ ...projectForm, starsCount: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-400 block mb-1 font-mono">Short Summary *</label>
                <input
                  type="text"
                  required
                  value={projectForm.description}
                  onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white"
                  placeholder="One line project summary"
                />
              </div>

              <div>
                <label className="text-gray-400 block mb-1 font-mono">Detailed Case Study *</label>
                <textarea
                  rows="3"
                  required
                  value={projectForm.fullDescription}
                  onChange={(e) => setProjectForm({ ...projectForm, fullDescription: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white resize-none"
                  placeholder="Complete architectural description"
                />
              </div>

              <div>
                <label className="text-gray-400 block mb-1 font-mono">Technologies (comma separated)</label>
                <input
                  type="text"
                  value={projectForm.technologies}
                  onChange={(e) => setProjectForm({ ...projectForm, technologies: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white font-mono"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center py-2.5 font-bold"
                >
                  {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                  <span>Post Project to REST API</span>
                </button>
              </div>
            </form>

          </div>
        )}

        {/* Tab 2: Messages */}
        {activeTab === 'view-messages' && (
          <div className="p-6 space-y-4">
            {loadingMsg ? (
              <div className="text-center py-8 text-gray-400">
                <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-cyan-400" />
                <span>Fetching messages from MongoDB / Express...</span>
              </div>
            ) : messages.length === 0 ? (
              <div className="text-center py-8 text-gray-400 text-xs">
                No user messages submitted yet. Send one through the Contact Form!
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((m) => (
                  <div key={m._id} className="p-4 rounded-xl bg-gray-900 border border-gray-800 text-xs space-y-1">
                    <div className="flex justify-between font-mono text-cyan-400">
                      <span>{m.name} ({m.email})</span>
                      <span className="text-gray-500">{new Date(m.createdAt).toLocaleString()}</span>
                    </div>
                    <div className="font-bold text-white">{m.subject}</div>
                    <p className="text-gray-300 pt-1">{m.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
};

export default AdminPanel;
