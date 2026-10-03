import ContactMessage from '../models/ContactMessage.js';
import mongoose from 'mongoose';

const mockMessages = [];

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "All fields (name, email, subject, message) are required." 
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: "Please provide a valid email address." 
      });
    }

    const clientIp = req.ip || req.headers['x-forwarded-for'] || '127.0.0.1';

    if (mongoose.connection.readyState === 1) {
      const newMessage = await ContactMessage.create({
        name,
        email,
        subject,
        message,
        ipAddress: clientIp
      });
      return res.status(201).json({
        success: true,
        message: "Thank you! Your message has been received successfully.",
        data: newMessage
      });
    }

    const savedMock = {
      _id: "msg_" + Date.now(),
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
      status: "unread",
      ipAddress: clientIp
    };
    mockMessages.unshift(savedMock);

    return res.status(201).json({
      success: true,
      message: "Thank you! Your message has been sent successfully (REST API response).",
      data: savedMock,
      fallback: true
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getContactMessages = async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const messages = await ContactMessage.find({}).sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: messages.length, data: messages });
    }
    return res.status(200).json({ success: true, count: mockMessages.length, data: mockMessages, fallback: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
