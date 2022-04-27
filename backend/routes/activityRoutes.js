import express from 'express';
// import { getUser, addUser, deleteUser, loginUser } from '../controllers/User.js';
import {getActivityList, addActivity, updateActivity} from "../controllers/Activity.js";


const router = express.Router();

router.get("/", getActivityList);
router.post("/add", addActivity);
router.patch("/update/:id", updateActivity);
export default router;