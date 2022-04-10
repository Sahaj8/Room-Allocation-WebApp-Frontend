import express from 'express';
import { getUser, addUser } from '../controllers/User.js';

const router = express.Router();

router.get("/", getUser);
router.get("/add", addUser);

export default router;