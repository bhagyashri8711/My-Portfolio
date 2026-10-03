import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    fullDescription: { type: String, required: true },
    category: { 
      type: String, 
      enum: ['Full Stack', 'Frontend', 'Backend', 'AI & Data', 'Mobile'], 
      default: 'Full Stack' 
    },
    technologies: [{ type: String, required: true }],
    githubUrl: { type: String, default: '#' },
    liveUrl: { type: String, default: '#' },
    imageUrl: { type: String, required: true },
    featured: { type: Boolean, default: false },
    starsCount: { type: Number, default: 0 },
    stats: {
      users: { type: String, default: '1k+' },
      accuracy: { type: String, default: '99%' }
    }
  },
  { timestamps: true }
);

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
export default Project;
