import express from 'express';
import { getUser, addUser, deleteUser, loginUser, userList, editUser, updateUser } from '../controllers/User.js';
import { protect } from '../middleware/authenticateUser.js'


const router = express.Router();

router.get("/", getUser);
router.post("/add", addUser);
router.delete("/delete/:id", deleteUser);
router.post("/login", loginUser);
router.get("/list", userList);
router.get("/getuser/:id", editUser);
router.patch("/updateuser/:id", updateUser);

export default router;