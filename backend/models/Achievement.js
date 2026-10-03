import mongoose from 'mongoose';

const achievementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    credentialUrl: { type: String, default: '#' },
    badge: { type: String, default: 'Trophy' }
  },
  { timestamps: true }
);

const Achievement = mongoose.models.Achievement || mongoose.model('Achievement', achievementSchema);
export default Achievement;
