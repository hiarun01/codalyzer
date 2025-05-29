import express from "express";
import {codeReview} from "../controllers/code-review.controller.js";

const router = express.Router();

router.post("/code-review", codeReview);

export default router;
