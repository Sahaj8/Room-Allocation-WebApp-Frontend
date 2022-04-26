import express from 'express';
import { getRoom, addRoom, deleteRoom } from '../controllers/Room.js';

const router = express.Router();

router.get("/", getRoom);
router.post("/add", addRoom);
router.delete("/delete", deleteRoom);

export default router;