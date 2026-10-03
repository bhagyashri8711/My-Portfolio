import express from 'express';
import { submitContactForm, getContactMessages } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', submitContactForm);
router.get('/messages', getContactMessages);

export default router;
