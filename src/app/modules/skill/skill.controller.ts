import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import { skillService } from './skill.services';

const createSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await skillService.createSkill(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Skill created successfully',
    data: result,
  });
});

const getAllSkills = catchAsync(async (req: Request, res: Response) => {
  const result = await skillService.getAllSkills();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Skills fetched successfully',
    data: result,
  });
});

const getSingleSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await skillService.getSingleSkill(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Skill fetched successfully',
    data: result,
  });
});

const updateSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await skillService.updateSkill(req.params.id, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Skill updated successfully',
    data: result,
  });
});

const deleteSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await skillService.deleteSkill(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Skill deleted successfully',
    data: result,
  });
});

export const skillController = {
  createSkill,
  getAllSkills,
  getSingleSkill,
  updateSkill,
  deleteSkill,
};
