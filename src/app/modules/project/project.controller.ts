import { Request, Response } from "express";
import status from "http-status";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { projectServices } from "./project.service";
import { IRequestWithUser } from "../../types/user";

const createProject = catchAsync(async (req: IRequestWithUser, res: Response) => {
  const result = await projectServices.createProject(req.body);
  console.log(result, "ddsasd")
  
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Project created successfully",
    data: result,
  });
});

const getAllProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await projectServices.getAllProjects();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "All projects fetched",
    data: result,
  });
});

const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const result = await projectServices.getSingleProject(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project fetched successfully",
    data: result,
  });
});

const updateProject = catchAsync(async (req: Request, res: Response) => {
  const result = await projectServices.updateProject(req.params.id, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project updated",
    data: result,
  });
});

const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const result = await projectServices.deleteProject(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project deleted",
    data: result,
  });
});

export const projectController = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
