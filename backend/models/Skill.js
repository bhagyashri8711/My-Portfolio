import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { 
      type: String, 
      enum: ['Frontend', 'Backend', 'Database', 'Tools & DevOps', 'Languages'], 
      required: true 
    },
    proficiency: { type: Number, min: 0, max: 100, required: true },
    icon: { type: String, default: 'code' },
    level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'], default: 'Advanced' }
  },
  { timestamps: true }
);

const Skill = mongoose.models.Skill || mongoose.model('Skill', skillSchema);
export default Skill;
