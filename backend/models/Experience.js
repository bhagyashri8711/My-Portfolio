import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ['Work', 'Education'], required: true },
    roleOrDegree: { type: String, required: true },
    organizationOrUniversity: { type: String, required: true },
    period: { type: String, required: true },
    location: { type: String, default: 'Remote' },
    description: { type: String, required: true },
    highlights: [{ type: String }],
    skillsUsed: [{ type: String }]
  },
  { timestamps: true }
);

const Experience = mongoose.models.Experience || mongoose.model('Experience', experienceSchema);
export default Experience;
