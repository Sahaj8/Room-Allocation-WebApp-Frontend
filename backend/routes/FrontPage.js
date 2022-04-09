import express from 'express';
import { getFrontPage } from '../controllers/FrontPage';

const router = express.Router();

router.get("/", getFrontPage);

export default router;