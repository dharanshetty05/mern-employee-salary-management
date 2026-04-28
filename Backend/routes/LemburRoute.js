import express from "express";
import { createDataLembur, viewDataLembur } from "../controllers/TransaksiController.js";

const router = express.Router();

router.get("/lembur", viewDataLembur);
router.post("/lembur", createDataLembur);

export default router;