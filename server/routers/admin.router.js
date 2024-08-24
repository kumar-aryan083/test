import express from "express";
import { adminRegister } from "../controllers/admin.controller.js";

const router = express.Router();

router.get('/register', adminRegister);

export default router;