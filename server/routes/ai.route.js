import express from "express";
import {userPrompt} from "../controllers/prompt.controller.js";

const router = express.Router();

router.get("/get-response", userPrompt);

export default router;
