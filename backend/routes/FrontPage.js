import express from 'express';
import { getFrontPage, createActivity } from '../controllers/FrontPage.js';

const router = express.Router();

router.get("/activityList", getFrontPage);
router.post("/createActivity", createActivity);

export default router;