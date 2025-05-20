import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";
import { ResumeService } from "./resume.service";

const saveUrlToDB = catchAsync(async (req: Request, res: Response) => {
  const { url } = req.body;
  console.log(req.body, "sumon")
  const result = await ResumeService.saveResumeUrl(url);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Resume URL saved successfully",
    data: result,
  });
});

const getResumePreview = catchAsync(async (req: Request, res: Response) => {
    const resume = await ResumeService.getLatestResume();
    if (!resume) {
      sendResponse(res, {
        statusCode: status.NOT_FOUND,
        success: false,
        message: "No resume found",
        data: null,
      });
      return;
    }
  
    const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(resume.url)}&embedded=true`;
  
    // Just send the viewer URL to the frontend
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Resume preview URL",
      data: viewerUrl,
    });
  });
  

const downloadResume = catchAsync(async (req: Request, res: Response) => {
  const resume = await ResumeService.getLatestResume();
  if (!resume) {
    sendResponse(res, {
      statusCode: status.NOT_FOUND,
      success: false,
      message: "No resume found",
      data: null,
    });
    return;
  }

  // Same URL; front-end should use `download` attribute on <a> tag to trigger download
  res.redirect(resume.url);
});

export const ResumeController = {
  saveUrlToDB,
  getResumePreview,
  downloadResume,
};
