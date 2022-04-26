import express from 'express';
import { getUser, addUser, deleteUser, loginUser } from '../controllers/User.js';
import { protect } from '../middleware/authenticateUser.js'


const router = express.Router();

router.get("/", getUser);
router.post("/add", addUser);
router.delete("/delete", deleteUser);
router.post("/login", loginUser);

export default router;