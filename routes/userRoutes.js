import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import { getUser, updateUser, updatePassword } from "../controllers/userController.js";

const router = express.Router();

// GET user
router.post("/get-user", userAuth, getUser);

// UPDATE USER || PUT
router.put("/update-user", userAuth, updateUser);

// UPDATE PASSWORD (hiện đang lỗi)
router.put("/update-password", userAuth, updatePassword);

export default router;
