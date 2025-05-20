import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";
import { educationService } from "./education.service";

const createEducation = catchAsync(async (req: Request, res: Response) => {
  const result = await educationService.createEducation(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Education created successfully",
    data: result,
  });
});

const getAllEducation = catchAsync(async (req: Request, res: Response) => {
  const result = await educationService.getAllEducation();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Educations retrieved successfully",
    data: result,
  });
});

const deleteEducation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await educationService.deleteEducation(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Education deleted successfully",
    data: result,
  });
});

export const educationController = {
  createEducation,
  getAllEducation,
  deleteEducation,
};
