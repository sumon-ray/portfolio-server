import express from "express";
import { ResumeController } from "./resume.controller";
import { fileUploads } from "../../helpers/fileUploader";

const router = express.Router();

// Upload and Save Resume URL
router.post(
  "/upload",
  fileUploads.upload.single("file"),
  async (req, res, next) => {
    try {
      // console.log(req.file, "rouet");
      if (req.file) {
        const cloudinaryRes = await fileUploads.uploadToCloudinary(req.file);
        await ResumeController.saveUrlToDB({
          body: { url: cloudinaryRes.secure_url },
        } as any, res, next);
      } else {
        res.status(400).json({ message: "No file provided" });
      }
    } catch (err) {
      next(err);
    }
  }
);

// Resume Preview Route
router.get("/preview", ResumeController.getResumePreview);

// Resume Download Route
router.get("/download", ResumeController.downloadResume);

export const resumeRouter = router;
