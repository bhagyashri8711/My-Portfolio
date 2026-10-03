import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  User, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  MapPin, 
  Phone, 
  Sparkles,
  UserCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendContactMessage } from '../services/api';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

const Contact = ({ profile, onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatusMessage({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    setLoading(true);
    setStatusMessage(null);

    try {
      const res = await sendContactMessage(formData);

      if (res.success) {
        setStatusMessage({ 
          type: 'success', 
          text: res.message || 'Thank you! Your message has been sent successfully via REST API.' 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Trigger confetti celebration!
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });

        if (onShowToast) {
          onShowToast("Message dispatched to Express REST API & stored in MongoDB!");
        }
      } else {
        setStatusMessage({ type: 'error', text: res.message || 'Error submitting message.' });
      }
    } catch (err) {
      setStatusMessage({ type: 'error', text: err.message || 'Server error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-container relative">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="section-tag">
          <Mail className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>
        <h2 className="section-title">
          Let's Work <span className="gradient-text">Together</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Have a project idea, job opportunity, or technical inquiry? Send a message directly to my Express REST backend.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="glass-panel p-8 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
              <span>Contact Information</span>
            </h3>
            
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              I am actively looking for Full-Stack Developer roles, internship opportunities, and collaborative projects. Feel free to reach out anytime!
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-600 dark:text-gray-400 block">Email Address</span>
                  <a href={`mailto:${profile?.email || 'bhagyashri8711@gmail.com'}`} className="text-sm font-semibold text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    {profile?.email || 'bhagyashri8711@gmail.com'}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-600 dark:text-gray-400 block">Contact Number</span>
                  <a href={`tel:${profile?.phone || '8088004926'}`} className="text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {profile?.phone || '8088004926'}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-600 dark:text-gray-400 block">Location</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{profile?.location || "India"}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-600 dark:text-gray-400 block">Availability</span>
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{profile?.availability || 'Open for Hire'}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800 space-y-3">
              <span className="text-xs font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider block">Connect on Social</span>
              <div className="flex items-center gap-3">
                <a href={profile?.github || "#"} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href={profile?.linkedin || "#"} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href={profile?.twitter || "#"} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
                  <TwitterIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Right REST Contact Form Column */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-gray-200 dark:border-gray-800 relative">
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Send a Direct Message
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6 font-mono">
            ENDPOINT: <span className="text-cyan-600 dark:text-cyan-400">POST /api/contact</span> (Node.js + MongoDB)
          </p>

          {/* Status Toast Alert */}
          {statusMessage && (
            <div className={`p-4 rounded-xl mb-6 text-xs font-medium flex items-center gap-3 border ${
              statusMessage.type === 'success' 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
                : 'bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-300'
            }`}>
              {statusMessage.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-gray-700 dark:text-gray-300 block mb-1">Your Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-gray-100 dark:bg-gray-900/90 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-gray-700 dark:text-gray-300 block mb-1">Your Email *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-gray-100 dark:bg-gray-900/90 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-gray-700 dark:text-gray-300 block mb-1">Subject *</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Full Stack Developer Role / Project Inquiry"
                className="w-full px-4 py-2.5 rounded-xl text-xs bg-gray-100 dark:bg-gray-900/90 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-gray-700 dark:text-gray-300 block mb-1">Message *</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl text-xs bg-gray-100 dark:bg-gray-900/90 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center py-3 text-sm font-semibold disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting to REST API...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;
