import express from "express";
import { projectController } from "./project.controller";

const router = express.Router();

router.post("/create", projectController.createProject);
router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.getSingleProject);
router.patch("/:id", projectController.updateProject);
router.delete("/:id",projectController.deleteProject);

export const projectRouter = router;
