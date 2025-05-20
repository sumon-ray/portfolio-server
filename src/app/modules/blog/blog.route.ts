import express from "express";

import { blogController } from "./blog.controller";

const router = express.Router();

router.post("/create", blogController.createBlog);

router.get("/", blogController.getAllBlogs);
router.get("/:id", blogController.getBlogById);
router.patch("/:id", blogController.updateBlog);
router.delete("/:id", blogController.deleteBlog);

export const blogRouter = router;
