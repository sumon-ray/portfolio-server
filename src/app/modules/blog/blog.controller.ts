import { Request, Response } from "express";
import status from "http-status";
import { IRequestWithUser } from "../../types/user";
import sendResponse from "../../utils/sendResponse";
import { blogServices } from "./blog.services";

const createBlog = async (req: IRequestWithUser, res: Response) => {
  // const authorId = req.user?.id;
  const blogData = req.body;

  // if (!authorId) {
  //   throw new AppError(status.UNAUTHORIZED, "Unauthorized user.");
  // }

  const result = await blogServices.createBlog(blogData);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blog created successfully",
    data: result,
  });
};

// getAllBlogs
const getAllBlogs = async (req: IRequestWithUser, res: Response) => {
  const result = await blogServices.getAllBlogs();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "fetch all blogs successfully",
    data: result,
  });
};

const getBlogById = async (req: Request, res: Response) => {
  const result = await blogServices.getBlogById(req.params.id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "fetch all blogs successfully",
    data: result,
  });
};

// update
const updateBlog = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body
  const result = await blogServices.updateBlog(id,data);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "update blogs successfully",
    data: result,
  });
};
// delete
const deleteBlog = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await blogServices.deleteBlog(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "delete blog successfully",
    data: result,
  });
};

export const blogController = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
};
