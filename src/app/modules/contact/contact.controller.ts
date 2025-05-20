import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";
import { contactService } from "./contact.service";

const createMessage = catchAsync(async (req: Request, res: Response) => {
  const result = await contactService.createContactMessage(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Message sent successfully",
    data: result,
  });
});

const getMessages = catchAsync(async (req: Request, res: Response) => {
  const result = await contactService.getAllMessages();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Messages retrieved successfully",
    data: result,
  });
});

const deleteMessage = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await contactService.deleteMessage(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Message deleted successfully",
    data: result,
  });
});

export const contactController = {
  createMessage,
  getMessages,
  deleteMessage,
};
