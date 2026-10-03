import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, required: true, trim: true },
    message: { type: String, required: true },
    status: { type: String, enum: ['unread', 'read', 'archived'], default: 'unread' },
    ipAddress: { type: String, default: '127.0.0.1' }
  },
  { timestamps: true }
);

const ContactMessage = mongoose.models.ContactMessage || mongoose.model('ContactMessage', contactMessageSchema);
export default ContactMessage;
