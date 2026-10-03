import express from 'express';
import { getExperiences, getAchievements } from '../controllers/experienceController.js';

const router = express.Router();

router.get('/timeline', getExperiences);
router.get('/achievements', getAchievements);

export default router;
