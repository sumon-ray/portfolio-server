import express from "express";
import { educationController } from "./education.controller";

const router = express.Router();

router.post("/create", educationController.createEducation);
router.get("/", educationController.getAllEducation);
router.delete("/:id", educationController.deleteEducation);

export const educationRouter = router;
