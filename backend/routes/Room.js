import express from 'express';
import { getRoom, addRoom } from '../controllers/Room.js';

const router = express.Router();

router.get("/", getRoom);
router.get("/add", addRoom);

export default router;