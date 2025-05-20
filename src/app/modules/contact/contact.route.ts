import express from "express";
import { contactController } from "./contact.controller";

const router = express.Router();

router.post("/", contactController.createMessage);
router.get("/", contactController.getMessages);
router.delete("/:id", contactController.deleteMessage);

export const contactRoutes = router;
