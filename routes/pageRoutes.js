import express from "express";
const router = express.Router();

import { createPage, getPageBySlug } from "../controllers/pagecontroller.js";

router.post("/pages", createPage);
router.get("/pages/*", getPageBySlug);

export default router;
