import express from 'express';
import { getUser, addUser, deleteUser, loginUser } from '../controllers/User.js';
import { protect } from '../middleware/authenticateUser'


const router = express.Router();

router.get("/", protect, getActivityList);
router.post("/add", protect, addUser);
router.delete("/delete", protect, deleteUser);
router.post("/login", loginUser);

export default router;